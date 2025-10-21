#!/usr/bin/env python3
"""
Script para gerar componentes React a partir de arquivos SVG normalizados

Uso:
    python generate_icon_components.py [pasta_svgs] [pasta_saida]
    
Exemplo:
    python generate_icon_components.py assets/icons components/icons
"""

import os
import re
import sys
import argparse
from pathlib import Path
from typing import List, Dict
import logging


class IconComponentGenerator:
    def __init__(self, svg_dir: str, output_dir: str):
        self.svg_dir = Path(svg_dir)
        self.output_dir = Path(output_dir)
        
        self.stats = {
            'total_svgs': 0,
            'generated_components': 0,
            'errors': []
        }
        
        # Configurar logging
        log_dir = Path('logs')
        log_dir.mkdir(exist_ok=True)
        
        logging.basicConfig(
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s',
            handlers=[
                logging.FileHandler(log_dir / 'svg_cleanup.log', encoding='utf-8'),
                logging.StreamHandler()
            ]
        )
        self.logger = logging.getLogger(__name__)

    def svg_name_to_component_name(self, svg_filename: str) -> str:
        """
        Converte nome do arquivo SVG para nome de componente React
        Ex: arrow-left.svg -> ArrowLeft
            user_profile.svg -> UserProfile
        """
        # Remove a extensão
        name = svg_filename.replace('.svg', '')
        
        # Remove caracteres especiais e substitui por espaço
        name = re.sub(r'[_\-\s]+', ' ', name)
        
        # Capitaliza cada palavra
        name = ''.join(word.capitalize() for word in name.split())
        
        return name

    def get_relative_svg_path(self, svg_path: Path) -> str:
        """
        Calcula o caminho relativo do SVG a partir da pasta de componentes
        Ex: de components/icons para assets/icons
        """
        # Número de níveis para subir (de components/icons até raiz do projeto)
        levels_up = 2
        
        # Caminho relativo
        relative_path = '../' * levels_up
        
        # Caminho do SVG relativo à raiz
        try:
            svg_relative = svg_path.relative_to(Path.cwd())
        except ValueError:
            # Se não conseguir calcular relativo ao cwd, usa caminho absoluto
            svg_relative = svg_path
        
        return f"{relative_path}{svg_relative}"

    def generate_component(self, svg_path: Path) -> bool:
        """Gera um componente React para um arquivo SVG"""
        try:
            component_name = self.svg_name_to_component_name(svg_path.name)
            
            # Define o caminho do arquivo de saída
            output_file = self.output_dir / f"{component_name}.tsx"
            
            # Calcula o caminho relativo do SVG
            svg_relative_path = self.get_relative_svg_path(svg_path)
            
            # Template do componente
            component_code = f"""import {{ styled }} from 'tamagui'
import {{ default as Svg }} from '{svg_relative_path}'

/**
 * {component_name} Icon Component
 * 
 * @example
 * ```tsx
 * <{component_name} />
 * <{component_name} width="$6" height="$6" />
 * <{component_name} color="$color.primary" />
 * ```
 */
export const {component_name} = styled(Svg, {{
  name: '{component_name}',
  width: '$4',
  height: '$4',
  color: '$color.text',
  
  variants: {{
    size: {{
      xs: {{
        width: '$3',
        height: '$3',
      }},
      sm: {{
        width: '$4',
        height: '$4',
      }},
      md: {{
        width: '$5',
        height: '$5',
      }},
      lg: {{
        width: '$6',
        height: '$6',
      }},
      xl: {{
        width: '$8',
        height: '$8',
      }},
    }},
  }},
  
  defaultVariants: {{
    size: 'md',
  }},
}})

export type {component_name}Props = React.ComponentProps<typeof {component_name}>
"""
            
            # Escreve o arquivo
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(component_code)
            
            self.logger.info(f"✅ Gerado: {component_name}.tsx")
            return True
            
        except Exception as e:
            self.stats['errors'].append({
                'file': str(svg_path),
                'error': str(e)
            })
            self.logger.error(f"❌ Erro ao gerar {svg_path.name}: {e}")
            return False

    def generate_index_file(self, component_names: List[str]):
        """Gera arquivo index.ts exportando todos os componentes"""
        index_path = self.output_dir / 'index.ts'
        
        # Ordena os nomes alfabeticamente
        component_names.sort()
        
        # Gera as exportações
        exports = []
        exports.append("/**")
        exports.append(" * Auto-generated Icon Components")
        exports.append(f" * Total: {len(component_names)} icons")
        exports.append(" */")
        exports.append("")
        
        for name in component_names:
            exports.append(f"export * from './{name}'")
        
        # Adiciona uma linha em branco no final
        exports.append("")
        
        # Escreve o arquivo
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(exports))
        
        self.logger.info(f"📄 Gerado index.ts com {len(component_names)} exportações")

    def generate_icon_list_file(self, component_names: List[str]):
        """Gera arquivo com lista de todos os ícones disponíveis"""
        list_path = self.output_dir / 'ICONS_LIST.md'
        
        # Ordena os nomes alfabeticamente
        component_names.sort()
        
        # Gera o conteúdo
        content = []
        content.append("# Lista de Ícones Disponíveis")
        content.append("")
        content.append(f"Total de ícones: **{len(component_names)}**")
        content.append("")
        content.append("## Como usar")
        content.append("")
        content.append("```tsx")
        content.append("import { IconName } from '@/components/icons'")
        content.append("")
        content.append("<IconName size='md' color='$color.primary' />")
        content.append("```")
        content.append("")
        content.append("## Tamanhos disponíveis")
        content.append("")
        content.append("- `xs`: $3 (12px)")
        content.append("- `sm`: $4 (16px)")
        content.append("- `md`: $5 (20px) - padrão")
        content.append("- `lg`: $6 (24px)")
        content.append("- `xl`: $8 (32px)")
        content.append("")
        content.append("## Lista de ícones")
        content.append("")
        
        for name in component_names:
            content.append(f"- `{name}`")
        
        content.append("")
        
        # Escreve o arquivo
        with open(list_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(content))
        
        self.logger.info(f"📋 Gerado ICONS_LIST.md com {len(component_names)} ícones")

    def generate_types_file(self, component_names: List[str]):
        """Gera arquivo com tipos TypeScript"""
        types_path = self.output_dir / 'types.ts'
        
        # Ordena os nomes alfabeticamente
        component_names.sort()
        
        # Gera o conteúdo
        content = []
        content.append("/**")
        content.append(" * Icon Names Type")
        content.append(" * Auto-generated from SVG files")
        content.append(" */")
        content.append("")
        
        # Cria um union type com todos os nomes
        icon_names = ' |\n  '.join([f"'{name}'" for name in component_names])
        content.append("export type IconName =")
        content.append(f"  {icon_names}")
        content.append("")
        
        # Adiciona interface para props comuns
        content.append("/**")
        content.append(" * Common Icon Props")
        content.append(" */")
        content.append("export interface IconProps {")
        content.append("  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'")
        content.append("  color?: string")
        content.append("  width?: string | number")
        content.append("  height?: string | number")
        content.append("  className?: string")
        content.append("}")
        content.append("")
        
        # Escreve o arquivo
        with open(types_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(content))
        
        self.logger.info(f"📝 Gerado types.ts")

    def process_directory(self):
        """Processa todos os arquivos SVG e gera componentes"""
        self.logger.info(f"🔍 Procurando arquivos SVG em: {self.svg_dir}")
        
        # Cria a pasta de saída
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
        # Encontra todos os arquivos SVG
        svg_files = list(self.svg_dir.rglob('*.svg'))
        self.stats['total_svgs'] = len(svg_files)
        
        if self.stats['total_svgs'] == 0:
            self.logger.warning(f"⚠️  Nenhum arquivo SVG encontrado em {self.svg_dir}")
            return
        
        self.logger.info(f"📁 Encontrados {self.stats['total_svgs']} arquivos SVG")
        self.logger.info(f"📂 Gerando componentes em: {self.output_dir}\n")
        
        # Lista para armazenar nomes de componentes gerados
        component_names = []
        
        # Processa cada arquivo
        for svg_path in svg_files:
            component_name = self.svg_name_to_component_name(svg_path.name)
            
            if self.generate_component(svg_path):
                self.stats['generated_components'] += 1
                component_names.append(component_name)
        
        # Gera arquivos auxiliares
        if component_names:
            self.logger.info("\n📦 Gerando arquivos auxiliares...")
            self.generate_index_file(component_names)
            self.generate_icon_list_file(component_names)
            self.generate_types_file(component_names)
        
        self.logger.info("\n" + "="*80)
        self.print_report()

    def print_report(self):
        """Imprime relatório no console"""
        self.logger.info("📊 RELATÓRIO DE GERAÇÃO DE COMPONENTES")
        self.logger.info("="*80)
        self.logger.info(f"Total de SVGs encontrados: {self.stats['total_svgs']}")
        self.logger.info(f"Componentes gerados: {self.stats['generated_components']}")
        self.logger.info(f"Erros: {len(self.stats['errors'])}")
        
        if self.stats['errors']:
            self.logger.error("\n❌ ERROS:")
            for error in self.stats['errors']:
                self.logger.error(f"  - {error['file']}: {error['error']}")
        
        if self.stats['generated_components'] > 0:
            self.logger.info("\n✅ Componentes prontos para uso!")
            self.logger.info(f"   Pasta: {self.output_dir}")
            self.logger.info("\n💡 Exemplo de uso:")
            self.logger.info("   import { AlertIcon, CheckIcon } from '@/components/icons'")
            self.logger.info("   <AlertIcon size='lg' color='$color.error' />")


def main():
    parser = argparse.ArgumentParser(
        description='Gera componentes React a partir de arquivos SVG normalizados'
    )
    parser.add_argument(
        'svg_dir',
        nargs='?',
        default='assets/icons',
        help='Pasta contendo os arquivos SVG (padrão: assets/icons)'
    )
    parser.add_argument(
        'output_dir',
        nargs='?',
        default='components/icons',
        help='Pasta de saída para os componentes (padrão: components/icons)'
    )
    
    args = parser.parse_args()
    
    # Verifica se a pasta de entrada existe
    svg_path = Path(args.svg_dir)
    if not svg_path.exists():
        print(f"❌ Erro: A pasta '{args.svg_dir}' não existe!")
        sys.exit(1)
    
    if not svg_path.is_dir():
        print(f"❌ Erro: '{args.svg_dir}' não é uma pasta!")
        sys.exit(1)
    
    # Cria o gerador e processa
    generator = IconComponentGenerator(
        svg_dir=args.svg_dir,
        output_dir=args.output_dir
    )
    
    generator.process_directory()
    
    print("\n✨ Geração de componentes concluída!")


if __name__ == '__main__':
    main()

