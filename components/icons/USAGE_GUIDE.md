# Guia de Uso dos Ícones

Este guia mostra como usar os ícones do design system corretamente em seus componentes.

## 🚀 Como Importar

### Importação Básica

```tsx
// Importar ícone específico
import { Checkboxesfilledchecked } from '@icons'

// Usar no componente
<Checkboxesfilledchecked />
```

### Importação de Múltiplos Ícones

```tsx
import { 
  Checkboxesfilledunchecked,
  Checkboxesfilledchecked,
  Checkboxesfilledindeterminate
} from '@icons'
```

### Importação com Alias

```tsx
import { 
  Checkboxesfilledunchecked as IconUnchecked,
  Checkboxesfilledchecked as IconChecked,
  Checkboxesfilledindeterminate as IconIndeterminate
} from '@icons'

// Usar com o novo nome
<IconChecked />
```

## 🎨 Propriedades Disponíveis

Todos os ícones são componentes Tamagui styled e aceitam as seguintes propriedades:

### Tamanho

```tsx
// Usando tokens Tamagui
<Checkboxesfilledchecked width="$4" height="$4" />

// Usando valores numéricos
<Checkboxesfilledchecked width={24} height={24} />

// Usando variante size
<Checkboxesfilledchecked size="md" />
```

### Cores

```tsx
// Usando tokens de cor
<Checkboxesfilledchecked color="$color.primary" />

// Usando cores CSS
<Checkboxesfilledchecked color="#FF0000" />

// Usando tokens customizados
<Checkboxesfilledchecked color="$color.text" />
```

### Variantes de Tamanho Pré-definidas

Todos os ícones possuem as seguintes variantes:

- `xs` - Extra Small
- `sm` - Small
- `md` - Medium (padrão)
- `lg` - Large
- `xl` - Extra Large

```tsx
<Checkboxesfilledchecked size="xs" />
<Checkboxesfilledchecked size="sm" />
<Checkboxesfilledchecked size="md" />
<Checkboxesfilledchecked size="lg" />
<Checkboxesfilledchecked size="xl" />
```

## 📝 Exemplos Práticos

### Exemplo 1: Ícone Simples

```tsx
import { Heartfilled } from '@icons'

function MyComponent() {
  return (
    <Heartfilled 
      size="md" 
      color="$color.primary" 
    />
  )
}
```

### Exemplo 2: Ícone com Estado

```tsx
import { Heartfilled, Heartoutlined } from '@icons'
import { useState } from 'react'

function LikeButton() {
  const [liked, setLiked] = useState(false)
  const Icon = liked ? Heartfilled : Heartoutlined
  
  return (
    <Icon 
      size="lg"
      color={liked ? '$color.primary' : '$color.text'}
      onPress={() => setLiked(!liked)}
    />
  )
}
```

### Exemplo 3: Ícones Dinâmicos

```tsx
import { 
  Checkboxesfilledunchecked as IconUnchecked,
  Checkboxesfilledchecked as IconChecked,
  Checkboxesfilledindeterminate as IconIndeterminate
} from '@icons'

function getCheckboxIcon(checked: boolean, indeterminate: boolean) {
  if (indeterminate) return IconIndeterminate
  if (checked) return IconChecked
  return IconUnchecked
}

function Checkbox({ checked, indeterminate }) {
  const Icon = getCheckboxIcon(checked, indeterminate)
  
  return (
    <Icon 
      width={24} 
      height={24} 
      color="$color.primary" 
    />
  )
}
```

### Exemplo 4: Ícone em Button

```tsx
import { Addfilled } from '@icons'
import { Button } from '../Button'

function AddButton() {
  return (
    <Button
      icon={<Addfilled size="sm" color="$color.onPrimary" />}
      label="Adicionar"
    />
  )
}
```

## 🔍 Encontrando Ícones

### Lista Completa

Veja o arquivo `ICONS_LIST.md` para uma lista completa de todos os ícones disponíveis.

### Nomenclatura

Os ícones seguem o padrão:
- **Nome do ícone** em CamelCase
- **Variante** no final (filled/outlined)

Exemplos:
- `Heartfilled` - Coração preenchido
- `Heartoutlined` - Coração apenas contorno
- `Checkboxesfilledchecked` - Checkbox preenchido marcado

## ⚠️ Importante

### NÃO Fazer ❌

```tsx
// NÃO importar SVGs diretamente
import Icon from '../../assets/icons/Heart.svg' // ❌

// NÃO usar ReactComponent
import { ReactComponent as Icon } from '../../assets/icons/Heart.svg' // ❌
```

### FAZER ✅

```tsx
// SEMPRE usar o atalho @icons
import { Heartfilled } from '@icons' // ✅
```

## 🔧 TypeScript

Todos os ícones são totalmente tipados:

```tsx
import type { HeartfilledProps } from '@icons'

const iconProps: HeartfilledProps = {
  size: 'md',
  color: '$color.primary',
  width: 24,
  height: 24,
}
```

## 📦 Importações de Tipo

```tsx
import type { IconProps } from '@icons/types'

// Use para tipar props genéricas de ícones
function IconWrapper(props: IconProps) {
  // ...
}
```

## 🎯 Boas Práticas

1. **Use o atalho `@icons`** - Sempre importe via `@icons` para garantir consistência
2. **Prefira variantes de tamanho** - Use `size="md"` em vez de `width` e `height` quando possível
3. **Use tokens de cor** - Prefira `color="$color.primary"` em vez de cores hardcoded
4. **Nomeie com alias quando necessário** - Use alias descritivos para melhorar legibilidade
5. **Mantenha consistência** - Use o mesmo padrão de importação em todo o projeto

## 🚨 Troubleshooting

### Ícone não encontrado

Se você receber um erro de que o ícone não foi encontrado:

1. Verifique o nome no arquivo `ICONS_LIST.md`
2. Certifique-se de usar o nome correto (CamelCase)
3. Reinicie o bundler: `yarn start --reset-cache`

### Ícone não renderiza

Se o ícone não aparecer:

1. Verifique se está usando `color` (não `fill`)
2. Certifique-se de que tem `width` e `height` ou `size` definidos
3. Verifique se a cor não está transparente ou igual ao fundo

### Erro de TypeScript

Se houver erros de tipo:

1. Certifique-se de que o arquivo `tsconfig.json` está configurado corretamente
2. Reinicie o servidor TypeScript no seu editor
3. Verifique se os types estão sendo importados corretamente

