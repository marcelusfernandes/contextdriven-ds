#!/usr/bin/env python3
"""
Script de teste para validar os scripts de normalização e geração

Uso:
    python test_scripts.py
"""

import sys
from pathlib import Path
import tempfile
import shutil


def create_test_svg():
    """Cria um SVG de teste com vários problemas para normalizar"""
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <g id="unused-group">
    <path 
      d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" 
      fill="black" 
      stroke="#000" 
      fill-rule="evenodd"
      clip-path="url(#clip)"
      class="my-class"
      style="fill: #000000; stroke-width: 2"
      id="test-path"
    />
    <path 
      d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
      fill="white"
    />
  </g>
  <defs>
    <clipPath id="clip">
      <rect width="24" height="24"/>
    </clipPath>
  </defs>
</svg>'''


def test_normalization():
    """Testa a normalização de SVG"""
    print("🧪 Testando normalização de SVG...")
    
    try:
        from normalize_svgs import SVGNormalizer
    except ImportError:
        print("❌ Erro: Não foi possível importar normalize_svgs.py")
        return False
    
    # Cria diretório temporário
    with tempfile.TemporaryDirectory() as tmpdir:
        tmppath = Path(tmpdir)
        
        # Cria SVG de teste
        test_svg_path = tmppath / "test.svg"
        with open(test_svg_path, 'w') as f:
            f.write(create_test_svg())
        
        print(f"   ✓ SVG de teste criado em: {test_svg_path}")
        
        # Normaliza
        normalizer = SVGNormalizer(
            input_dir=str(tmppath),
            output_dir=None
        )
        
        success = normalizer.normalize_svg(test_svg_path)
        
        if not success:
            print("   ⚠️  Normalização não alterou o arquivo (pode ser normal)")
        else:
            print("   ✓ SVG normalizado com sucesso")
        
        # Lê o resultado
        with open(test_svg_path, 'r') as f:
            result = f.read()
        
        # Valida algumas transformações
        checks = {
            'Remove width/height': 'width=' not in result and 'height=' not in result,
            'Mantém viewBox': 'viewBox="0 0 24 24"' in result,
            'Converte fill-rule': 'fillRule' in result,
            'Converte clip-path': 'clipPath' in result or 'clip-path' not in result,
            'Converte class para className': 'className' in result if 'class=' in create_test_svg() else True,
            'Usa currentColor': 'currentColor' in result,
        }
        
        print("\n   📋 Validações:")
        all_passed = True
        for check_name, passed in checks.items():
            status = "✓" if passed else "✗"
            print(f"      {status} {check_name}")
            if not passed:
                all_passed = False
        
        return all_passed


def test_component_generation():
    """Testa a geração de componentes"""
    print("\n🧪 Testando geração de componentes...")
    
    try:
        from generate_icon_components import IconComponentGenerator
    except ImportError:
        print("❌ Erro: Não foi possível importar generate_icon_components.py")
        return False
    
    # Cria diretórios temporários
    with tempfile.TemporaryDirectory() as tmpdir:
        tmppath = Path(tmpdir)
        svg_dir = tmppath / "svgs"
        output_dir = tmppath / "components"
        svg_dir.mkdir()
        
        # Cria alguns SVGs de teste
        test_svgs = [
            ("alert.svg", '<svg viewBox="0 0 24 24"><path d="M12 2L2 7" fill="currentColor"/></svg>'),
            ("check-circle.svg", '<svg viewBox="0 0 24 24"><path d="M12 2L2 7" fill="currentColor"/></svg>'),
            ("user_profile.svg", '<svg viewBox="0 0 24 24"><path d="M12 2L2 7" fill="currentColor"/></svg>'),
        ]
        
        for filename, content in test_svgs:
            with open(svg_dir / filename, 'w') as f:
                f.write(content)
        
        print(f"   ✓ {len(test_svgs)} SVGs de teste criados")
        
        # Gera componentes
        generator = IconComponentGenerator(
            svg_dir=str(svg_dir),
            output_dir=str(output_dir)
        )
        
        generator.process_directory()
        
        # Valida saídas
        checks = {
            'Alert.tsx existe': (output_dir / "Alert.tsx").exists(),
            'CheckCircle.tsx existe': (output_dir / "CheckCircle.tsx").exists(),
            'UserProfile.tsx existe': (output_dir / "UserProfile.tsx").exists(),
            'index.ts existe': (output_dir / "index.ts").exists(),
            'types.ts existe': (output_dir / "types.ts").exists(),
            'ICONS_LIST.md existe': (output_dir / "ICONS_LIST.md").exists(),
        }
        
        print("\n   📋 Validações:")
        all_passed = True
        for check_name, passed in checks.items():
            status = "✓" if passed else "✗"
            print(f"      {status} {check_name}")
            if not passed:
                all_passed = False
        
        # Verifica conteúdo de um componente
        if (output_dir / "Alert.tsx").exists():
            with open(output_dir / "Alert.tsx", 'r') as f:
                content = f.read()
            
            content_checks = {
                'Importa styled': 'import { styled }' in content,
                'Importa SVG': 'import { default as Svg }' in content,
                'Exporta componente': 'export const Alert' in content,
                'Tem variantes de size': "'size'" in content or '"size"' in content,
                'Tem width/height': "'width'" in content or '"width"' in content,
            }
            
            print("\n   📋 Validações de conteúdo:")
            for check_name, passed in content_checks.items():
                status = "✓" if passed else "✗"
                print(f"      {status} {check_name}")
                if not passed:
                    all_passed = False
        
        return all_passed


def test_full_pipeline():
    """Testa o pipeline completo"""
    print("\n🧪 Testando pipeline completo...")
    
    try:
        from normalize_svgs import SVGNormalizer
        from generate_icon_components import IconComponentGenerator
    except ImportError as e:
        print(f"❌ Erro ao importar: {e}")
        return False
    
    with tempfile.TemporaryDirectory() as tmpdir:
        tmppath = Path(tmpdir)
        svg_dir = tmppath / "svgs"
        output_dir = tmppath / "components"
        svg_dir.mkdir()
        
        # Cria SVG com problemas
        test_svg = svg_dir / "test-icon.svg"
        with open(test_svg, 'w') as f:
            f.write(create_test_svg())
        
        # Etapa 1: Normalizar
        print("   → Normalizando SVG...")
        normalizer = SVGNormalizer(
            input_dir=str(svg_dir),
            output_dir=None
        )
        normalizer.normalize_svg(test_svg)
        
        # Etapa 2: Gerar componente
        print("   → Gerando componente...")
        generator = IconComponentGenerator(
            svg_dir=str(svg_dir),
            output_dir=str(output_dir)
        )
        generator.process_directory()
        
        # Valida resultado final
        component_file = output_dir / "TestIcon.tsx"
        
        if component_file.exists():
            print("   ✓ Pipeline completo executado com sucesso")
            return True
        else:
            print("   ✗ Falha no pipeline: componente não foi gerado")
            return False


def main():
    print("="*80)
    print("🚀 TESTE DOS SCRIPTS DE NORMALIZAÇÃO E GERAÇÃO DE ÍCONES")
    print("="*80)
    print()
    
    results = {}
    
    # Teste 1: Normalização
    results['normalization'] = test_normalization()
    
    # Teste 2: Geração de componentes
    results['generation'] = test_component_generation()
    
    # Teste 3: Pipeline completo
    results['pipeline'] = test_full_pipeline()
    
    # Resumo
    print("\n" + "="*80)
    print("📊 RESUMO DOS TESTES")
    print("="*80)
    
    for test_name, passed in results.items():
        status = "✅ PASSOU" if passed else "❌ FALHOU"
        print(f"{status} - {test_name.replace('_', ' ').title()}")
    
    all_passed = all(results.values())
    
    print("\n" + "="*80)
    if all_passed:
        print("✅ TODOS OS TESTES PASSARAM!")
        print("\nVocê pode usar os scripts com segurança:")
        print("  python scripts/clean_and_generate_icons.py")
    else:
        print("❌ ALGUNS TESTES FALHARAM")
        print("\nRevise os erros acima antes de usar os scripts.")
    print("="*80)
    
    return 0 if all_passed else 1


if __name__ == '__main__':
    sys.exit(main())

