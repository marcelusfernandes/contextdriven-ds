#!/usr/bin/env python3
"""
Script para normalizar arquivos SVG para compatibilidade com React + Vite + SVGR + Tamagui

Uso:
    python normalize_svgs.py [pasta_entrada] [--output pasta_saida]
    
Exemplo:
    python normalize_svgs.py assets/icons
    python normalize_svgs.py assets/icons --output assets/icons/cleaned
"""

import os
import re
import sys
import argparse
from pathlib import Path
from typing import List, Dict, Set, Tuple
import xml.etree.ElementTree as ET


class SVGNormalizer:
    def __init__(self, input_dir: str, output_dir: str = None, preserve_originals: bool = False):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir) if output_dir else None
        self.preserve_originals = preserve_originals
        
        self.stats = {
            'total_files': 0,
            'modified_files': 0,
            'skipped_files': 0,
            'missing_viewbox': [],
            'errors': [],
            'modifications': []
        }
        
        # Mapeamento de atributos kebab-case para camelCase
        self.kebab_to_camel = {
            'fill-rule': 'fillRule',
            'clip-rule': 'clipRule',
            'clip-path': 'clipPath',
            'stroke-width': 'strokeWidth',
            'stroke-linecap': 'strokeLinecap',
            'stroke-linejoin': 'strokeLinejoin',
            'stroke-dasharray': 'strokeDasharray',
            'stroke-dashoffset': 'strokeDashoffset',
            'stroke-miterlimit': 'strokeMiterlimit',
            'stroke-opacity': 'strokeOpacity',
            'fill-opacity': 'fillOpacity',
            'vector-effect': 'vectorEffect',
            'stop-color': 'stopColor',
            'stop-opacity': 'stopOpacity',
            'font-family': 'fontFamily',
            'font-size': 'fontSize',
            'font-weight': 'fontWeight',
            'text-anchor': 'textAnchor',
            'writing-mode': 'writingMode',
            'baseline-shift': 'baselineShift',
            'dominant-baseline': 'dominantBaseline',
            'alignment-baseline': 'alignmentBaseline',
        }
        
        # Valores de cor que devem ser substituídos por currentColor
        self.color_patterns = [
            r'^#000(000)?$',  # preto
            r'^#fff(fff)?$',  # branco
            r'^black$',
            r'^white$',
            r'^rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)$',
            r'^rgb\s*\(\s*255\s*,\s*255\s*,\s*255\s*\)$',
        ]

    def should_replace_color(self, value: str) -> bool:
        """Verifica se o valor de cor deve ser substituído por currentColor"""
        if not value or value in ['none', 'inherit', 'transparent', 'currentColor']:
            return False
        
        if value.startswith('url('):
            return False
        
        for pattern in self.color_patterns:
            if re.match(pattern, value.strip(), re.IGNORECASE):
                return True
        
        return False

    def extract_style_attributes(self, style_value: str) -> Tuple[Dict[str, str], str]:
        """Extrai fill e stroke do atributo style e retorna dict + style limpo"""
        extracted = {}
        remaining_styles = []
        
        for item in style_value.split(';'):
            item = item.strip()
            if not item:
                continue
            
            if ':' in item:
                prop, val = item.split(':', 1)
                prop = prop.strip()
                val = val.strip()
                
                if prop in ['fill', 'stroke']:
                    extracted[prop] = val
                else:
                    remaining_styles.append(item)
        
        return extracted, ';'.join(remaining_styles)

    def find_all_ids(self, element: ET.Element) -> Set[str]:
        """Encontra todos os IDs no elemento e seus filhos"""
        ids = set()
        if 'id' in element.attrib:
            ids.add(element.attrib['id'])
        for child in element:
            ids.update(self.find_all_ids(child))
        return ids

    def find_id_references(self, element: ET.Element) -> Set[str]:
        """Encontra todas as referências a IDs no elemento e seus filhos"""
        refs = set()
        
        # Verifica todos os atributos
        for attr_name, attr_value in element.attrib.items():
            # Procura por url(#id)
            matches = re.findall(r'url\(#([^)]+)\)', attr_value)
            refs.update(matches)
            
            # Procura por referências diretas (xlink:href="#id" ou href="#id")
            if attr_value.startswith('#'):
                refs.add(attr_value[1:])
        
        # Verifica filhos recursivamente
        for child in element:
            refs.update(self.find_id_references(child))
        
        return refs

    def convert_attributes(self, element: ET.Element, referenced_ids: Set[str]):
        """Converte atributos de um elemento"""
        attrs_to_remove = []
        attrs_to_add = {}
        
        for attr_name, attr_value in list(element.attrib.items()):
            # Remove namespace do nome do atributo se houver
            clean_attr_name = attr_name.split('}')[-1]
            
            # Processa atributo style
            if clean_attr_name == 'style':
                extracted, remaining = self.extract_style_attributes(attr_value)
                
                # Adiciona fill e stroke extraídos
                for prop, val in extracted.items():
                    if prop not in element.attrib:  # Só adiciona se não existir
                        attrs_to_add[prop] = val
                
                # Remove ou atualiza style
                if remaining:
                    attrs_to_add['style'] = remaining
                else:
                    attrs_to_remove.append(attr_name)
                continue
            
            # Substitui fill e stroke por currentColor
            if clean_attr_name in ['fill', 'stroke']:
                if self.should_replace_color(attr_value):
                    attrs_to_add[clean_attr_name] = 'currentColor'
                    continue
            
            # Converte kebab-case para camelCase
            if clean_attr_name in self.kebab_to_camel:
                attrs_to_remove.append(attr_name)
                attrs_to_add[self.kebab_to_camel[clean_attr_name]] = attr_value
                continue
            
            # Substitui class por className
            if clean_attr_name == 'class':
                attrs_to_remove.append(attr_name)
                attrs_to_add['className'] = attr_value
                continue
            
            # Substitui xlink:href por xlinkHref
            if 'xlink' in attr_name.lower() and 'href' in attr_name.lower():
                attrs_to_remove.append(attr_name)
                attrs_to_add['xlinkHref'] = attr_value
                continue
            
            # Remove IDs não referenciados
            if clean_attr_name == 'id' and attr_value not in referenced_ids:
                attrs_to_remove.append(attr_name)
                continue
        
        # Aplica mudanças
        for attr in attrs_to_remove:
            del element.attrib[attr]
        
        for attr, value in attrs_to_add.items():
            element.attrib[attr] = value

    def process_element(self, element: ET.Element, referenced_ids: Set[str]):
        """Processa um elemento e todos os seus filhos recursivamente"""
        self.convert_attributes(element, referenced_ids)
        
        for child in element:
            self.process_element(child, referenced_ids)

    def normalize_svg(self, svg_path: Path) -> bool:
        """Normaliza um arquivo SVG"""
        try:
            # Lê o conteúdo original
            with open(svg_path, 'r', encoding='utf-8') as f:
                original_content = f.read()
            
            # Parse XML
            # Registra namespaces comuns
            namespaces = {
                'svg': 'http://www.w3.org/2000/svg',
                'xlink': 'http://www.w3.org/1999/xlink',
            }
            
            for prefix, uri in namespaces.items():
                ET.register_namespace(prefix, uri)
            
            tree = ET.parse(svg_path)
            root = tree.getroot()
            
            # Remove namespace do tag se houver
            if '}' in root.tag:
                root.tag = root.tag.split('}')[1]
            
            modifications = []
            
            # Verifica se tem viewBox
            has_viewbox = 'viewBox' in root.attrib
            if not has_viewbox:
                self.stats['missing_viewbox'].append(str(svg_path))
                modifications.append('⚠️  Sem viewBox - mantendo width/height')
            
            # Remove width e height se tiver viewBox
            if has_viewbox:
                width_removed = False
                height_removed = False
                
                if 'width' in root.attrib:
                    del root.attrib['width']
                    width_removed = True
                    
                if 'height' in root.attrib:
                    del root.attrib['height']
                    height_removed = True
                
                if width_removed or height_removed:
                    removed = []
                    if width_removed:
                        removed.append('width')
                    if height_removed:
                        removed.append('height')
                    modifications.append(f"Removido {', '.join(removed)}")
            
            # Encontra todos os IDs e referências
            all_ids = self.find_all_ids(root)
            referenced_ids = self.find_id_references(root)
            
            # Processa todos os elementos
            self.process_element(root, referenced_ids)
            
            # Garante que pelo menos um path tenha fill="currentColor"
            paths = root.findall('.//path')
            if paths:
                has_fill = any('fill' in path.attrib for path in paths)
                if not has_fill:
                    paths[0].attrib['fill'] = 'currentColor'
                    modifications.append('Adicionado fill="currentColor" ao primeiro path')
            
            # Converte de volta para string
            xml_str = ET.tostring(root, encoding='unicode', method='xml')
            
            # Adiciona declaração XML e formatação
            svg_content = '<?xml version="1.0" encoding="UTF-8"?>\n' + xml_str
            
            # Garante nova linha no final
            if not svg_content.endswith('\n'):
                svg_content += '\n'
            
            # Verifica se houve mudanças
            if svg_content.strip() == original_content.strip():
                return False
            
            # Define pasta de saída
            if self.output_dir:
                output_path = self.output_dir / svg_path.relative_to(self.input_dir)
                output_path.parent.mkdir(parents=True, exist_ok=True)
            else:
                output_path = svg_path
            
            # Salva o arquivo
            with open(output_path, 'w', encoding='utf-8') as f:
                f.write(svg_content)
            
            # Registra modificações
            if modifications:
                self.stats['modifications'].append({
                    'file': str(svg_path.name),
                    'changes': modifications
                })
            
            return True
            
        except Exception as e:
            self.stats['errors'].append({
                'file': str(svg_path),
                'error': str(e)
            })
            return False

    def process_directory(self):
        """Processa todos os arquivos SVG no diretório"""
        print(f"🔍 Procurando arquivos SVG em: {self.input_dir}")
        
        # Encontra todos os arquivos SVG
        svg_files = list(self.input_dir.rglob('*.svg'))
        self.stats['total_files'] = len(svg_files)
        
        print(f"📁 Encontrados {self.stats['total_files']} arquivos SVG\n")
        
        # Processa cada arquivo
        for svg_path in svg_files:
            print(f"⚙️  Processando: {svg_path.name}")
            
            if self.normalize_svg(svg_path):
                self.stats['modified_files'] += 1
                print(f"   ✅ Modificado")
            else:
                self.stats['skipped_files'] += 1
                print(f"   ⏭️  Sem alterações")
        
        print("\n" + "="*60)
        self.print_report()
        self.save_report()

    def print_report(self):
        """Imprime relatório no console"""
        print("📊 RELATÓRIO DE NORMALIZAÇÃO")
        print("="*60)
        print(f"Total de arquivos: {self.stats['total_files']}")
        print(f"Arquivos modificados: {self.stats['modified_files']}")
        print(f"Arquivos sem alterações: {self.stats['skipped_files']}")
        print(f"Arquivos com erros: {len(self.stats['errors'])}")
        print(f"Arquivos sem viewBox: {len(self.stats['missing_viewbox'])}")
        
        if self.stats['errors']:
            print("\n❌ ERROS:")
            for error in self.stats['errors']:
                print(f"  - {error['file']}: {error['error']}")

    def save_report(self):
        """Salva relatório detalhado em arquivo"""
        report_path = Path('svg_clean_report.txt')
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("="*80 + "\n")
            f.write("RELATÓRIO DE NORMALIZAÇÃO DE SVG\n")
            f.write("="*80 + "\n\n")
            
            f.write(f"📊 RESUMO\n")
            f.write(f"  Total de arquivos processados: {self.stats['total_files']}\n")
            f.write(f"  Arquivos modificados: {self.stats['modified_files']}\n")
            f.write(f"  Arquivos sem alterações: {self.stats['skipped_files']}\n")
            f.write(f"  Arquivos com erros: {len(self.stats['errors'])}\n")
            f.write(f"  Arquivos sem viewBox: {len(self.stats['missing_viewbox'])}\n\n")
            
            if self.stats['modifications']:
                f.write("="*80 + "\n")
                f.write("📝 MODIFICAÇÕES REALIZADAS\n")
                f.write("="*80 + "\n\n")
                for mod in self.stats['modifications']:
                    f.write(f"📄 {mod['file']}\n")
                    for change in mod['changes']:
                        f.write(f"   • {change}\n")
                    f.write("\n")
            
            if self.stats['missing_viewbox']:
                f.write("="*80 + "\n")
                f.write("⚠️  ARQUIVOS SEM VIEWBOX\n")
                f.write("="*80 + "\n\n")
                for file in self.stats['missing_viewbox']:
                    f.write(f"  - {file}\n")
                f.write("\n")
            
            if self.stats['errors']:
                f.write("="*80 + "\n")
                f.write("❌ ERROS\n")
                f.write("="*80 + "\n\n")
                for error in self.stats['errors']:
                    f.write(f"📄 {error['file']}\n")
                    f.write(f"   Erro: {error['error']}\n\n")
        
        print(f"\n📄 Relatório detalhado salvo em: {report_path.absolute()}")


def main():
    parser = argparse.ArgumentParser(
        description='Normaliza arquivos SVG para compatibilidade com React + Vite + SVGR + Tamagui'
    )
    parser.add_argument(
        'input_dir',
        help='Pasta de entrada contendo os arquivos SVG'
    )
    parser.add_argument(
        '--output',
        '-o',
        help='Pasta de saída (opcional, por padrão substitui os originais)'
    )
    parser.add_argument(
        '--preserve',
        '-p',
        action='store_true',
        help='Preserva os arquivos originais'
    )
    
    args = parser.parse_args()
    
    # Verifica se a pasta de entrada existe
    input_path = Path(args.input_dir)
    if not input_path.exists():
        print(f"❌ Erro: A pasta '{args.input_dir}' não existe!")
        sys.exit(1)
    
    if not input_path.is_dir():
        print(f"❌ Erro: '{args.input_dir}' não é uma pasta!")
        sys.exit(1)
    
    # Cria o normalizador e processa
    normalizer = SVGNormalizer(
        input_dir=args.input_dir,
        output_dir=args.output,
        preserve_originals=args.preserve
    )
    
    normalizer.process_directory()
    
    print("\n✨ Normalização concluída!")


if __name__ == '__main__':
    main()

