# 🎨 Guia de Uso dos Ícones SVG

## 📋 Resumo da Configuração

Todos os ícones SVG customizados do Design System estão configurados e prontos para uso! 

### ✅ O que foi feito:

1. **Instaladas dependências:**
   - `react-native-svg` - Suporte a SVG no React Native
   - `react-native-svg-transformer` - Transforma SVG em componentes React (Native)
   - `vite-plugin-svgr` - Suporte a SVG no Storybook/Web

2. **Configurado Metro (React Native):**
   - `metro.config.js` configurado para transformar SVG em componentes

3. **Configurado Vite (Storybook/Web):**
   - `.storybook/main.js` configurado com `vite-plugin-svgr`

4. **Tipos TypeScript:**
   - `svg.d.ts` criado para tipagem de arquivos `.svg`

5. **Ícones copiados:**
   - Todos os 585 ícones SVG estão em `assets/icons/`

---

## 🚀 Como Usar os Ícones

### 1. **Importar e usar diretamente:**

```tsx
import AddCircleIcon from '../assets/icons/AddCircleFilled.svg'
import ArrowDownIcon from '../assets/icons/ArrowDownloadFilled.svg'

function MyComponent() {
  return (
    <>
      <AddCircleIcon width={24} height={24} fill="#000" />
      <ArrowDownIcon width={32} height={32} fill="#ffcc00" />
    </>
  )
}
```

### 2. **Props disponíveis (react-native-svg):**

Todos os ícones SVG aceitam props de `SvgProps`:

```tsx
<AddCircleIcon
  width={24}           // Largura
  height={24}          // Altura
  fill="#000"          // Cor de preenchimento
  stroke="#fff"        // Cor da borda
  opacity={0.8}        // Opacidade
  style={{ ... }}      // Estilos customizados
/>
```

### 3. **Usar com Tamagui/Tokens:**

```tsx
import { tokens } from '../tokens'
import AddIcon from '../assets/icons/AddFilled.svg'

function MyButton() {
  return (
    <Button
      iconLeft={
        <AddIcon 
          width={20} 
          height={20} 
          fill={tokens.color.zeYellow} 
        />
      }
    >
      Adicionar
    </Button>
  )
}
```

### 4. **Criar um componente Icon wrapper (Recomendado):**

```tsx
// components/Icon/Icon.tsx
import React from 'react'
import { SvgProps } from 'react-native-svg'

// Mapear todos os ícones
const icons = {
  'add-circle-filled': require('../../assets/icons/AddCircleFilled.svg').default,
  'add-circle-outlined': require('../../assets/icons/AddCircleOutlined.svg').default,
  'arrow-download': require('../../assets/icons/ArrowDownloadFilled.svg').default,
  // ... adicionar mais conforme necessário
}

export type IconName = keyof typeof icons

export interface IconProps extends SvgProps {
  name: IconName
  size?: number
  color?: string
}

export const Icon = ({ name, size = 24, color = '#000', ...props }: IconProps) => {
  const IconComponent = icons[name]
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
  
  return <IconComponent width={size} height={size} fill={color} {...props} />
}
```

**Uso do wrapper:**

```tsx
import { Icon } from '../Icon'

<Icon name="add-circle-filled" size={24} color="#ffcc00" />
<Icon name="arrow-download" size={32} color="#000" />
```

---

## 📂 Estrutura dos Ícones

Todos os ícones seguem o padrão:

- **Filled**: Preenchido (ex: `AddCircleFilled.svg`)
- **Outlined**: Contorno (ex: `AddCircleOutlined.svg`)

### Ícones disponíveis (exemplos):

- `AccessibilityCircleFilled.svg` / `AccessibilityCircleOutlined.svg`
- `AddCircleFilled.svg` / `AddCircleOutlined.svg`
- `AddFilled.svg` / `AddOutlined.svg`
- `AppleFilled.svg` / `AppleOutlined.svg`
- `AppStoreFilled.svg` / `AppStoreOutlined.svg`
- `ArrowDownloadFilled.svg` / `ArrowDownloadOutlined.svg`
- ... (585 ícones no total)

---

## 🔄 Diferenças entre Native e Web

### React Native (Expo):
- Usa `react-native-svg`
- SVGs são transformados em componentes pelo Metro
- Funciona tanto em iOS quanto Android

### Web (Storybook):
- Usa `vite-plugin-svgr`
- SVGs são transformados em componentes pelo Vite
- Funciona em qualquer navegador

**Ambas as plataformas usam a mesma API!** 🎉

---

## ⚠️ Importante

1. **Sempre use `width`, `height` e `fill`** para controlar o ícone
2. **Não use `color`** - use `fill` para SVG
3. **Cache:** Se adicionar novos ícones, pode precisar limpar o cache:
   ```bash
   yarn start --clear
   ```

---

## 🎯 Próximos Passos

1. Criar o componente `Icon` wrapper (recomendado)
2. Mapear todos os ícones no wrapper
3. Adicionar testes para os ícones
4. Documentar ícones no Storybook

---

## 📚 Referências

- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)

