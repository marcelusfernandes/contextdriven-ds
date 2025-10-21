# 🚀 Referência Rápida - Ícones

## Importar e Usar

```tsx
// 1. Importar
import { Heartfilled } from '@icons'

// 2. Usar
<Heartfilled size="md" color="$color.primary" />
```

## Tamanhos

```tsx
<Icon size="xs" />  // Extra Small
<Icon size="sm" />  // Small
<Icon size="md" />  // Medium (padrão)
<Icon size="lg" />  // Large
<Icon size="xl" />  // Extra Large
```

## Cores

```tsx
<Icon color="$color.primary" />
<Icon color="$color.text" />
<Icon color="$color.error" />
<Icon color="#FF0000" />
```

## Tamanhos Customizados

```tsx
<Icon width={24} height={24} />
<Icon width="$4" height="$4" />
```

## Com Alias

```tsx
import { Heartfilled as IconHeart } from '@icons'
<IconHeart size="md" />
```

## Dinâmico

```tsx
const Icon = liked ? Heartfilled : Heartoutlined
<Icon size="md" />
```

## Eventos

```tsx
<Icon 
  size="md" 
  onPress={() => console.log('pressed')}
  cursor="pointer"
/>
```

## ❌ NÃO Fazer

```tsx
// NÃO importar SVGs diretamente
import Icon from '../../assets/icons/Heart.svg'
import { ReactComponent as Icon } from '../../assets/icons/Heart.svg'
```

## ✅ FAZER

```tsx
// SEMPRE usar @icons
import { Heartfilled } from '@icons'
```

## 📚 Mais Recursos

- **Lista completa:** `ICONS_LIST.md`
- **Guia detalhado:** `USAGE_GUIDE.md`
- **Exemplos:** `../../ICONS_USAGE_EXAMPLE.tsx`

