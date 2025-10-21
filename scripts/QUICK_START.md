# 🚀 Guia Rápido - Normalização e Geração de Ícones

Este guia fornece instruções rápidas para começar a usar os scripts.

## ⚡ Início Rápido (3 passos)

### 1. Verificar Python

```bash
python3 --version
# Deve mostrar 3.10 ou superior
```

### 2. Executar o script

```bash
# Opção A: Usando o script auxiliar (Recomendado)
./scripts/run.sh full

# Opção B: Usando Python diretamente
python3 scripts/clean_and_generate_icons.py
```

### 3. Usar os componentes

```tsx
import { AlertIcon, CheckIcon } from '@/components/icons'

<AlertIcon size="lg" color="$color.primary" />
```

## 📦 Estrutura de Pastas Esperada

```
seu-projeto/
├── assets/
│   └── icons/           ← SVGs aqui
│       ├── Alert.svg
│       ├── Check.svg
│       └── ...
└── components/
    └── icons/           ← Componentes gerados aqui (criado automaticamente)
```

## 🎯 Comandos Principais

### Script Shell (Recomendado)

```bash
# Testar os scripts
./scripts/run.sh test

# Processo completo (normalizar + gerar)
./scripts/run.sh full

# Preservar SVGs originais
./scripts/run.sh full-preserve

# Apenas normalizar
./scripts/run.sh normalize

# Apenas gerar componentes
./scripts/run.sh generate

# Limpar arquivos gerados
./scripts/run.sh clean

# Ver ajuda
./scripts/run.sh help
```

### Python Direto

```bash
# Processo completo
python3 scripts/clean_and_generate_icons.py

# Com pastas personalizadas
python3 scripts/clean_and_generate_icons.py \
  --svg-dir src/assets/icons \
  --output-dir src/components/icons

# Preservar originais
python3 scripts/clean_and_generate_icons.py --preserve-originals

# Apenas normalizar
python3 scripts/clean_and_generate_icons.py --normalize-only

# Apenas gerar
python3 scripts/clean_and_generate_icons.py --generate-only
```

## 📋 Checklist Pré-Execução

Antes de executar, certifique-se de que:

- [ ] Python 3.10+ está instalado
- [ ] A pasta `assets/icons/` existe e contém arquivos `.svg`
- [ ] Os SVGs têm atributo `viewBox` (recomendado)
- [ ] Você está na raiz do projeto ao executar os comandos

## 📊 O Que Esperar

### Saídas Criadas

Após a execução, você terá:

```
✓ components/icons/          # Pasta criada
  ├── AlertIcon.tsx          # Componente individual
  ├── CheckIcon.tsx
  ├── ...
  ├── index.ts               # Exporta todos
  ├── types.ts               # Tipos TypeScript
  └── ICONS_LIST.md          # Lista de ícones

✓ svg_clean_report.txt       # Relatório de normalização
✓ logs/svg_cleanup.log       # Log detalhado
```

### Modificações nos SVGs

Se você **não** usar `--preserve-originals`, os SVGs em `assets/icons/` serão modificados:

- ✓ Atributos `width` e `height` removidos
- ✓ Cores fixas substituídas por `currentColor`
- ✓ Atributos convertidos para `camelCase`
- ✓ `class` convertido para `className`
- ✓ IDs não utilizados removidos

Se você usar `--preserve-originals`, os originais ficam em `assets/icons/` e as versões limpas em `assets/icons/cleaned/`.

## 🧪 Testar Antes de Usar

Execute os testes para garantir que tudo funciona:

```bash
# Usando script auxiliar
./scripts/run.sh test

# Ou diretamente
python3 scripts/test_scripts.py
```

## 🎨 Exemplo de Uso no Código

### Importação

```tsx
// Importar ícones específicos
import { AlertIcon, CheckIcon, CloseIcon } from '@/components/icons'

// Ou importar todos (não recomendado para produção)
import * as Icons from '@/components/icons'
```

### Uso Básico

```tsx
function MyComponent() {
  return (
    <div>
      {/* Tamanho padrão (md = 20px) */}
      <AlertIcon />
      
      {/* Com variante de tamanho */}
      <CheckIcon size="lg" />
      
      {/* Com cor do token Tamagui */}
      <CloseIcon color="$color.error" />
      
      {/* Com tamanho customizado */}
      <AlertIcon width={48} height={48} />
    </div>
  )
}
```

### Tamanhos Disponíveis

| Variante | Token | Tamanho |
|----------|-------|---------|
| `xs`     | `$3`  | 12px    |
| `sm`     | `$4`  | 16px    |
| `md`     | `$5`  | 20px ⭐  |
| `lg`     | `$6`  | 24px    |
| `xl`     | `$8`  | 32px    |

⭐ = Tamanho padrão

### Props Disponíveis

Cada ícone aceita todas as props do Tamagui + SVG:

```tsx
interface IconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  color?: string  // Tokens Tamagui ou valores CSS
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
  // ... e todas as outras props de SVG
}
```

## 🔧 Configuração do Vite (se necessário)

Se os SVGs não importarem corretamente, configure o Vite:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
})
```

E o arquivo de tipos:

```ts
// svg.d.ts
declare module '*.svg' {
  import React from 'react'
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>
  export default SVG
}
```

## 🐛 Solução de Problemas Comuns

### Erro: "Pasta não existe"

```bash
# Certifique-se de estar na raiz do projeto
cd /caminho/para/seu-projeto
./scripts/run.sh full
```

### Erro: "Python não encontrado"

```bash
# Instale Python 3.10+
# macOS:
brew install python3

# Ubuntu/Debian:
sudo apt install python3

# Windows:
# Baixe de python.org
```

### SVGs não renderizam corretamente

1. Verifique o relatório: `svg_clean_report.txt`
2. Veja se há erros em: `logs/svg_cleanup.log`
3. Confirme que o Vite está configurado para processar SVGs

### Componentes com erro de import

Verifique se o caminho relativo está correto. Por padrão, assume:
- SVGs em: `assets/icons/`
- Componentes em: `components/icons/`
- Importação relativa: `../../assets/icons/`

## 📚 Documentação Completa

Para informações detalhadas, consulte:
- [README completo](README.md) - Documentação detalhada
- `components/icons/ICONS_LIST.md` - Lista de todos os ícones gerados
- `svg_clean_report.txt` - Relatório de normalização

## 💡 Dicas

1. **Sempre execute os testes primeiro:**
   ```bash
   ./scripts/run.sh test
   ```

2. **Use `--preserve-originals` na primeira vez:**
   ```bash
   ./scripts/run.sh full-preserve
   ```
   Assim você pode comparar antes/depois.

3. **Revise o relatório após a execução:**
   ```bash
   cat svg_clean_report.txt
   ```

4. **Verifique ícones sem viewBox:**
   ```bash
   cat svg_clean_report.txt | grep "viewBox"
   ```

5. **Teste no Storybook antes de usar em produção:**
   ```bash
   npm run storybook
   ```

## ✅ Pronto!

Agora você pode executar:

```bash
./scripts/run.sh full
```

E começar a usar seus ícones:

```tsx
import { MyIcon } from '@/components/icons'
<MyIcon size="lg" color="$color.brand" />
```

---

**Precisa de ajuda?** Consulte o [README completo](README.md) ou revise os logs em `logs/svg_cleanup.log`.

