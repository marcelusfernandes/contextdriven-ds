#!/usr/bin/env python3
"""
Script principal para normalizar SVGs e gerar componentes React

Este script executa em sequência:
1. Normalização de arquivos SVG (Parte 1)
2. Geração de componentes React (Parte 2)

Uso:
    python clean_and_generate_icons.py
    python clean_and_generate_icons.py --svg-dir assets/icons --output-dir components/icons
    python clean_and_generate_icons.py --preserve-originals
"""

import sys
import argparse
from pathlib import Path

# Importa os módulos das outras partes
try:
    from normalize_svgs import SVGNormalizer
    from generate_icon_components import IconComponentGenerator
except ImportError:
    print("❌ Erro: Não foi possível importar os módulos necessários.")
    print("   Certifique-se de que normalize_svgs.py e generate_icon_components.py")
    print("   estão na mesma pasta que este script.")
    sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description='Normaliza SVGs e gera componentes React automaticamente',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemplos de uso:
  # Usar pastas padrão (assets/icons -> components/icons)
  python clean_and_generate_icons.py
  
  # Especificar pastas personalizadas
  python clean_and_generate_icons.py --svg-dir src/assets/icons --output-dir src/components/icons
  
  # Preservar SVGs originais em pasta separada
  python clean_and_generate_icons.py --preserve-originals
  
  # Apenas normalizar (sem gerar componentes)
  python clean_and_generate_icons.py --normalize-only
  
  # Apenas gerar componentes (assumindo que SVGs já estão normalizados)
  python clean_and_generate_icons.py --generate-only
        """
    )
    
    parser.add_argument(
        '--svg-dir',
        default='assets/icons',
        help='Pasta contendo os arquivos SVG (padrão: assets/icons)'
    )
    
    parser.add_argument(
        '--output-dir',
        default='components/icons',
        help='Pasta de saída para os componentes React (padrão: components/icons)'
    )
    
    parser.add_argument(
        '--cleaned-svg-dir',
        help='Pasta para salvar SVGs normalizados (se --preserve-originals for usado)'
    )
    
    parser.add_argument(
        '--preserve-originals',
        action='store_true',
        help='Preserva os SVGs originais, salvando versões limpas em pasta separada'
    )
    
    parser.add_argument(
        '--normalize-only',
        action='store_true',
        help='Apenas normaliza os SVGs sem gerar componentes'
    )
    
    parser.add_argument(
        '--generate-only',
        action='store_true',
        help='Apenas gera componentes sem normalizar SVGs'
    )
    
    args = parser.parse_args()
    
    # Verifica conflitos
    if args.normalize_only and args.generate_only:
        print("❌ Erro: Não é possível usar --normalize-only e --generate-only ao mesmo tempo")
        sys.exit(1)
    
    # Verifica se a pasta de entrada existe
    svg_path = Path(args.svg_dir)
    if not svg_path.exists():
        print(f"❌ Erro: A pasta '{args.svg_dir}' não existe!")
        sys.exit(1)
    
    if not svg_path.is_dir():
        print(f"❌ Erro: '{args.svg_dir}' não é uma pasta!")
        sys.exit(1)
    
    # Define pasta de SVGs limpos
    if args.preserve_originals and not args.cleaned_svg_dir:
        cleaned_dir = str(Path(args.svg_dir) / 'cleaned')
    elif args.cleaned_svg_dir:
        cleaned_dir = args.cleaned_svg_dir
    else:
        cleaned_dir = None
    
    print("="*80)
    print("🚀 PROCESSAMENTO DE ÍCONES SVG")
    print("="*80)
    print(f"📂 Pasta de entrada: {args.svg_dir}")
    if cleaned_dir:
        print(f"📂 Pasta de SVGs limpos: {cleaned_dir}")
    print(f"📂 Pasta de componentes: {args.output_dir}")
    print("="*80)
    print()
    
    # ====== PARTE 1: NORMALIZAÇÃO ======
    if not args.generate_only:
        print("🧩 PARTE 1: NORMALIZAÇÃO DE SVG")
        print("="*80)
        
        normalizer = SVGNormalizer(
            input_dir=args.svg_dir,
            output_dir=cleaned_dir,
            preserve_originals=args.preserve_originals
        )
        
        normalizer.process_directory()
        
        print()
    
    # Determina qual pasta usar para geração de componentes
    if cleaned_dir and not args.generate_only:
        component_source_dir = cleaned_dir
    else:
        component_source_dir = args.svg_dir
    
    # ====== PARTE 2: GERAÇÃO DE COMPONENTES ======
    if not args.normalize_only:
        print("\n" + "="*80)
        print("🧱 PARTE 2: GERAÇÃO DE COMPONENTES REACT")
        print("="*80)
        
        generator = IconComponentGenerator(
            svg_dir=component_source_dir,
            output_dir=args.output_dir
        )
        
        generator.process_directory()
        
        print()
    
    # ====== RESUMO FINAL ======
    print("\n" + "="*80)
    print("✅ PROCESSO CONCLUÍDO COM SUCESSO!")
    print("="*80)
    
    if not args.generate_only:
        print(f"✓ SVGs normalizados")
        print(f"  • Relatório: svg_clean_report.txt")
        print(f"  • Localização: {component_source_dir}")
    
    if not args.normalize_only:
        print(f"✓ Componentes React gerados")
        print(f"  • Localização: {args.output_dir}")
        print(f"  • Lista de ícones: {args.output_dir}/ICONS_LIST.md")
    
    print()
    print("📚 Próximos passos:")
    print("  1. Revise o relatório svg_clean_report.txt")
    print("  2. Teste os componentes no Storybook")
    print("  3. Importe e use os ícones no seu projeto:")
    print()
    print("     import { AlertIcon, CheckIcon } from '@/components/icons'")
    print("     <AlertIcon size='lg' color='$color.primary' />")
    print()
    print("="*80)


if __name__ == '__main__':
    main()

