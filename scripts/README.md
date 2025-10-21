# Scripts de Normalização e Geração de Ícones SVG

Este diretório contém scripts Python para automatizar a normalização de arquivos SVG e geração de componentes React para uso com Tamagui + Vite + SVGR.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Exemplos](#exemplos)
- [Saídas Geradas](#saídas-geradas)

## 🎯 Visão Geral

O processo completo consiste em duas partes:

### 🧩 Parte 1: Normalização de SVG
- Remove atributos `style` com `fill` e `stroke`
- Substitui cores fixas por `currentColor`
- Remove `width` e `height` (mantém `viewBox`)
- Converte atributos de `kebab-case` para `camelCase`
- Substitui atributos incompatíveis com JSX (`class` → `className`)
- Remove IDs não referenciados
- Garante `fill="currentColor"` em pelo menos um path

### 🧱 Parte 2: Geração de Componentes React
- Cria componentes React individuais para cada SVG
- Usa `styled()` do Tamagui
- Adiciona variantes de tamanho (xs, sm, md, lg, xl)
- Gera arquivo `index.ts` com todas as exportações
- Cria documentação automática

## 📦 Requisitos

- Python 3.10+
- Dependências padrão (incluídas no Python):
  - `pathlib`
  - `xml.etree.ElementTree`
  - `re`
  - `os`
  - `sys`
  - `argparse`
  - `logging`

## 🚀 Instalação

Não é necessário instalar dependências externas. Os scripts usam apenas bibliotecas padrão do Python.

### Verificar versão do Python:

```bash
python3 --version
# Deve ser 3.10 ou superior
```

### Tornar scripts executáveis (opcional):

```bash
chmod +x scripts/*.py
```

## 💻 Uso

### Opção 1: Script Completo (Recomendado)

Executa normalização + geração de componentes em uma única execução:

```bash
# Uso básico (usa pastas padrão)
python scripts/clean_and_generate_icons.py

# Com pastas personalizadas
python scripts/clean_and_generate_icons.py \
  --svg-dir assets/icons \
  --output-dir components/icons

# Preservando SVGs originais
python scripts/clean_and_generate_icons.py --preserve-originals
```

### Opção 2: Scripts Individuais

Execute cada parte separadamente se necessário:

#### Parte 1: Normalizar SVGs

```bash
# Substitui os arquivos originais
python scripts/normalize_svgs.py assets/icons

# Preserva originais (salva em assets/icons/cleaned)
python scripts/normalize_svgs.py assets/icons --output assets/icons/cleaned
```

#### Parte 2: Gerar Componentes

```bash
# Usa pastas padrão
python scripts/generate_icon_components.py

# Com pastas personalizadas
python scripts/generate_icon_components.py assets/icons components/icons
```

## 📚 Scripts Disponíveis

### 1. `clean_and_generate_icons.py` ⭐

**Script principal que executa todo o processo.**

```bash
python scripts/clean_and_generate_icons.py [opções]
```

**Opções:**
- `--svg-dir PATH` - Pasta com arquivos SVG (padrão: `assets/icons`)
- `--output-dir PATH` - Pasta de saída dos componentes (padrão: `components/icons`)
- `--preserve-originals` - Preserva SVGs originais
- `--cleaned-svg-dir PATH` - Pasta para SVGs limpos
- `--normalize-only` - Apenas normaliza SVGs
- `--generate-only` - Apenas gera componentes

### 2. `normalize_svgs.py`

**Normaliza arquivos SVG para compatibilidade React.**

```bash
python scripts/normalize_svgs.py <pasta_entrada> [opções]
```

**Opções:**
- `--output PATH` ou `-o PATH` - Pasta de saída
- `--preserve` ou `-p` - Preserva originais

**Saídas:**
- SVGs normalizados
- `svg_clean_report.txt` - Relatório detalhado
- `missing_viewbox.txt` - Lista de SVGs sem viewBox (se houver)

### 3. `generate_icon_components.py`

**Gera componentes React a partir de SVGs.**

```bash
python scripts/generate_icon_components.py [pasta_svgs] [pasta_saida]
```

**Argumentos:**
- `pasta_svgs` - Pasta com SVGs (padrão: `assets/icons`)
- `pasta_saida` - Pasta de saída (padrão: `components/icons`)

**Saídas:**
- Componentes `.tsx` individuais
- `index.ts` - Exportações de todos os componentes
- `types.ts` - Tipos TypeScript
- `ICONS_LIST.md` - Documentação dos ícones
- `logs/svg_cleanup.log` - Log detalhado

## 📝 Exemplos

### Exemplo 1: Processo Completo

```bash
# Normalizar e gerar componentes em um único comando
python scripts/clean_and_generate_icons.py
```

**Resultado:**
- SVGs normalizados em `assets/icons/`
- Componentes React em `components/icons/`
- Relatório em `svg_clean_report.txt`

### Exemplo 2: Preservar Originais

```bash
python scripts/clean_and_generate_icons.py --preserve-originals
```

**Resultado:**
- SVGs originais mantidos em `assets/icons/`
- SVGs limpos em `assets/icons/cleaned/`
- Componentes gerados de `assets/icons/cleaned/`

### Exemplo 3: Pastas Personalizadas

```bash
python scripts/clean_and_generate_icons.py \
  --svg-dir src/assets/icons \
  --output-dir src/components/icons
```

### Exemplo 4: Apenas Normalizar

```bash
python scripts/clean_and_generate_icons.py --normalize-only
```

Útil se você quiser revisar os SVGs antes de gerar componentes.

### Exemplo 5: Apenas Gerar Componentes

```bash
python scripts/clean_and_generate_icons.py --generate-only
```

Útil se os SVGs já estiverem normalizados.

## 📂 Saídas Geradas

### Estrutura de Pastas

```
project/
├── assets/
│   └── icons/
│       ├── Alert.svg          # SVG normalizado
│       ├── Check.svg
│       └── ...
│
├── components/
│   └── icons/
│       ├── AlertIcon.tsx      # Componente React
│       ├── CheckIcon.tsx
│       ├── index.ts           # Exportações
│       ├── types.ts           # Tipos TypeScript
│       └── ICONS_LIST.md      # Documentação
│
├── logs/
│   └── svg_cleanup.log        # Log detalhado
│
└── svg_clean_report.txt       # Relatório de normalização
```

### Exemplo de Componente Gerado

```tsx
import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Alert.svg'

/**
 * Alert Icon Component
 * 
 * @example
 * ```tsx
 * <Alert />
 * <Alert width="$6" height="$6" />
 * <Alert color="$color.primary" />
 * ```
 */
export const Alert = styled(Svg, {
  name: 'Alert',
  width: '$4',
  height: '$4',
  color: '$color.text',
  
  variants: {
    size: {
      xs: { width: '$3', height: '$3' },
      sm: { width: '$4', height: '$4' },
      md: { width: '$5', height: '$5' },
      lg: { width: '$6', height: '$6' },
      xl: { width: '$8', height: '$8' },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})

export type AlertProps = React.ComponentProps<typeof Alert>
```

### Uso dos Componentes Gerados

```tsx
import { AlertIcon, CheckIcon, CloseIcon } from '@/components/icons'

function MyComponent() {
  return (
    <>
      {/* Tamanho padrão (md) */}
      <AlertIcon />
      
      {/* Com variante de tamanho */}
      <CheckIcon size="lg" />
      
      {/* Com cor customizada */}
      <CloseIcon color="$color.error" />
      
      {/* Com dimensões exatas */}
      <AlertIcon width={32} height={32} />
      
      {/* Combinando props */}
      <CheckIcon size="xl" color="$color.success" />
    </>
  )
}
```

## 🔍 Relatórios e Logs

### `svg_clean_report.txt`

Relatório detalhado da normalização:
- Resumo estatístico
- Lista de modificações por arquivo
- Arquivos sem `viewBox`
- Erros encontrados

### `logs/svg_cleanup.log`

Log completo com timestamps de toda a execução.

### `components/icons/ICONS_LIST.md`

Documentação automática com:
- Lista de todos os ícones disponíveis
- Exemplos de uso
- Tamanhos disponíveis

## 🛠️ Solução de Problemas

### Erro: "Pasta não existe"

Certifique-se de executar o script a partir da raiz do projeto ou forneça caminhos absolutos.

### SVGs sem `viewBox`

Esses arquivos são listados em `missing_viewbox.txt`. Você precisará adicionar o atributo `viewBox` manualmente ou os SVGs manterão `width` e `height`.

### Componentes não importam corretamente

Verifique:
1. O caminho relativo dos SVGs está correto
2. O Vite está configurado para processar SVGs com SVGR
3. O arquivo `svg.d.ts` existe com as declarações de tipos

### Erros de encoding

Todos os scripts usam UTF-8. Se tiver problemas, verifique o encoding dos seus arquivos SVG.

## 📋 Checklist de Validação

Após executar os scripts, verifique:

- [ ] Arquivo `svg_clean_report.txt` gerado sem erros críticos
- [ ] Pasta `components/icons/` criada com componentes `.tsx`
- [ ] Arquivo `components/icons/index.ts` existe
- [ ] Arquivo `components/icons/ICONS_LIST.md` lista todos os ícones
- [ ] SVGs mantêm `viewBox` (ou estão listados em `missing_viewbox.txt`)
- [ ] Componentes importam sem erros no TypeScript
- [ ] Ícones renderizam corretamente no Storybook
- [ ] Cores respondem à prop `color`
- [ ] Tamanhos respondem à prop `size`

## 🎨 Próximos Passos

1. **Teste no Storybook:**
   ```bash
   npm run storybook
   ```

2. **Crie stories para os ícones:**
   ```tsx
   // components/icons/Icons.stories.tsx
   import { AlertIcon, CheckIcon } from './index'
   
   export default {
     title: 'Components/Icons',
   }
   
   export const AllIcons = () => (
     <div style={{ display: 'flex', gap: 16 }}>
       <AlertIcon size="lg" />
       <CheckIcon size="lg" />
     </div>
   )
   ```

3. **Configure aliases no TypeScript (opcional):**
   ```json
   {
     "compilerOptions": {
       "paths": {
         "@/components/*": ["./components/*"]
       }
     }
   }
   ```

## 📞 Suporte

Se encontrar problemas:
1. Revise o arquivo `logs/svg_cleanup.log`
2. Verifique `svg_clean_report.txt` para erros de normalização
3. Consulte a documentação do Tamagui e SVGR

## 📄 Licença

Scripts desenvolvidos para uso interno no projeto.

