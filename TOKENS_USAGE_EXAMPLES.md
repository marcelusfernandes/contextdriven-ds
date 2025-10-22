# 🎯 Guia Prático de Uso dos Tokens - DSZé

## 📖 Índice

1. [Importação](#importação)
2. [Uso em Componentes](#uso-em-componentes)
3. [Boas Práticas](#boas-práticas)
4. [Exemplos por Categoria](#exemplos-por-categoria)
5. [Erros Comuns](#erros-comuns)

---

## 🔗 Importação

### Importar Tokens de Componente (Recomendado)

```typescript
import { tokens } from './tokens'

// Usar em componente
const Button = () => (
  <View
    style={{
      backgroundColor: tokens.button.variant.primary.normal.bg,
      borderRadius: tokens.button.size.medium.borderRadius,
      padding: tokens.button.size.medium.paddingHorizontal,
    }}
  >
    {/* ... */}
  </View>
)
```

### Importar Semantic Tokens (Para Uso Customizado)

```typescript
import { tokens, semantic } from './tokens'

// Usar semantic diretamente
const CustomCard = () => (
  <View
    style={{
      backgroundColor: semantic.color.surface.secondary,
      borderColor: semantic.color.border.default,
      padding: semantic.spacing.component.paddingLarge,
    }}
  >
    {/* ... */}
  </View>
)
```

### Importar Primitive Tokens (Raro - Apenas Casos Especiais)

```typescript
import { tokens, semantic, primitive } from './tokens'

// ⚠️ Evite usar primitive diretamente!
// Use apenas quando semantic não tem o que você precisa
const SpecialCase = () => (
  <View style={{ color: primitive.color.zeYellow }}>
    {/* ... */}
  </View>
)
```

---

## 🧩 Uso em Componentes

### Exemplo Completo: Button Component

```typescript
import React from 'react'
import { Pressable, Text } from 'react-native'
import { tokens } from './tokens'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive'
  size?: 'small' | 'medium'
  disabled?: boolean
  onPress?: () => void
  children: React.ReactNode
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  onPress,
  children,
}: ButtonProps) => {
  // Acessar tokens do componente
  const sizeTokens = tokens.button.size[size]
  const variantTokens = tokens.button.variant[variant]
  
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        // States: normal, hover, focus, active, disabled
        backgroundColor: disabled
          ? variantTokens.disabled.bg
          : pressed
          ? variantTokens.active.bg
          : variantTokens.normal.bg,
        
        borderColor: disabled
          ? variantTokens.disabled.borderColor
          : pressed
          ? variantTokens.active.borderColor
          : variantTokens.normal.borderColor,
        
        borderWidth: variantTokens.normal.borderWidth,
        borderRadius: sizeTokens.borderRadius,
        paddingVertical: sizeTokens.paddingVertical,
        paddingHorizontal: sizeTokens.paddingHorizontal,
        minWidth: sizeTokens.minWidth,
        height: sizeTokens.height,
        gap: sizeTokens.gap,
      })}
    >
      <Text
        style={{
          color: disabled
            ? variantTokens.disabled.color
            : variantTokens.normal.color,
          fontSize: sizeTokens.fontSize,
          lineHeight: sizeTokens.lineHeight,
        }}
      >
        {children}
      </Text>
    </Pressable>
  )
}
```

### Exemplo: Checkbox Component

```typescript
import React from 'react'
import { Pressable, View, Text } from 'react-native'
import { tokens } from './tokens'
import { Icon } from './Icon'

interface CheckboxProps {
  checked: boolean
  error?: boolean
  disabled?: boolean
  size?: 'small' | 'medium'
  label?: string
  onChange?: (checked: boolean) => void
}

export const Checkbox = ({
  checked,
  error = false,
  disabled = false,
  size = 'medium',
  label,
  onChange,
}: CheckboxProps) => {
  const sizeTokens = tokens.checkbox.size[size].input
  const stateTokens = tokens.checkbox.state[error ? 'error' : 'normal']
  
  const currentState = disabled ? 'disabled' : 'enabled'
  const colorTokens = stateTokens[currentState]
  
  return (
    <Pressable
      onPress={() => !disabled && onChange?.(!checked)}
      disabled={disabled}
      style={({ pressed }) => ({
        backgroundColor: pressed
          ? stateTokens.active?.bgColor
          : colorTokens.bgColor,
        borderColor: pressed
          ? stateTokens.active?.borderColor
          : colorTokens.borderColor,
        borderWidth: colorTokens.borderWidth,
        borderRadius: sizeTokens.borderRadius,
        paddingVertical: sizeTokens.paddingVertical,
        paddingHorizontal: sizeTokens.paddingHorizontal,
        height: sizeTokens.height,
        gap: sizeTokens.gap,
        flexDirection: 'row',
        alignItems: 'center',
      })}
    >
      {/* Icon Plate */}
      <View
        style={{
          width: sizeTokens.iconPlateSize,
          height: sizeTokens.iconPlateSize,
          borderRadius: sizeTokens.iconPlateBorderRadius,
          borderColor: colorTokens.iconPlateBorderColor,
          borderWidth: colorTokens.iconPlateBorderWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {checked && (
          <Icon
            name="check"
            size={sizeTokens.iconPlateSize}
            color={colorTokens.iconPlateIconColor}
          />
        )}
      </View>
      
      {/* Label */}
      {label && (
        <Text
          style={{
            color: colorTokens.textColor,
            fontSize: sizeTokens.fontSize,
            lineHeight: sizeTokens.lineHeight,
            fontWeight: sizeTokens.fontWeight,
          }}
        >
          {label}
        </Text>
      )}
    </Pressable>
  )
}
```

---

## ✅ Boas Práticas

### DO ✅

```typescript
// ✅ Use component tokens para componentes do DS
const button = {
  backgroundColor: tokens.button.variant.primary.normal.bg
}

// ✅ Use semantic tokens para componentes customizados
const card = {
  backgroundColor: semantic.color.surface.secondary,
  borderColor: semantic.color.border.default,
}

// ✅ Use semantic para textos genéricos
const text = {
  color: semantic.color.text.primary
}

// ✅ Use semantic para feedbacks
const error = {
  color: semantic.color.feedback.error
}
```

### DON'T ❌

```typescript
// ❌ Não use primitive diretamente em componentes
const button = {
  backgroundColor: primitive.color.zeYellow // ERRADO!
}

// ❌ Não hardcode valores
const card = {
  backgroundColor: '#f7f7f7', // ERRADO! Use semantic.color.surface.secondary
  padding: 16, // ERRADO! Use semantic.spacing.component.paddingLarge
}

// ❌ Não misture camadas
const button = {
  backgroundColor: primitive.color.zeYellow, // Primitive
  color: semantic.color.text.primary, // Semantic
  // ERRADO! Use a mesma camada (semantic ou component)
}

// ❌ Não crie decisões de cor fora do tokens.ts
const myCustomColor = primitive.color.gray800 // ERRADO!
// Se precisar, adicione no semantic tokens
```

---

## 🎨 Exemplos por Categoria

### Cores

```typescript
// Background
<View style={{ backgroundColor: semantic.color.surface.primary }} />
<View style={{ backgroundColor: semantic.color.surface.secondary }} />

// Texto
<Text style={{ color: semantic.color.text.primary }} />
<Text style={{ color: semantic.color.text.secondary }} />
<Text style={{ color: semantic.color.text.disabled }} />

// Borders
<View style={{ borderColor: semantic.color.border.default }} />
<View style={{ borderColor: semantic.color.border.strong }} />

// Feedback
<Text style={{ color: semantic.color.feedback.error }} />
<Text style={{ color: semantic.color.feedback.success }} />
<Text style={{ color: semantic.color.feedback.warning }} />
<Text style={{ color: semantic.color.feedback.info }} />

// Brand
<View style={{ backgroundColor: semantic.color.brand.primary }} />
<View style={{ backgroundColor: semantic.color.brand.secondary }} />
```

### Espaçamentos

```typescript
// Padding de componente
<View style={{ padding: semantic.spacing.component.paddingSmall }} />
<View style={{ padding: semantic.spacing.component.paddingMedium }} />
<View style={{ padding: semantic.spacing.component.paddingLarge }} />

// Gap entre elementos
<View style={{ gap: semantic.spacing.component.gapSmall }} />
<View style={{ gap: semantic.spacing.component.gapMedium }} />

// Padding de layout
<View style={{ padding: semantic.spacing.layout.containerPadding }} />
<View style={{ gap: semantic.spacing.layout.sectionGap }} />
```

### Tamanhos

```typescript
// Ícones
<Icon size={semantic.sizing.icon.small} />
<Icon size={semantic.sizing.icon.medium} />
<Icon size={semantic.sizing.icon.large} />

// Elementos interativos (acessibilidade)
<Pressable
  style={{
    minWidth: semantic.sizing.interactive.minWidth,
    minHeight: semantic.sizing.interactive.minHeight,
  }}
/>
```

### Border Radius

```typescript
// Componentes
<View style={{ borderRadius: semantic.radius.component.small }} />
<View style={{ borderRadius: semantic.radius.component.medium }} />
<View style={{ borderRadius: semantic.radius.component.circular }} />

// Ícones/Icon Plates
<View style={{ borderRadius: semantic.radius.icon.small }} />
<View style={{ borderRadius: semantic.radius.icon.medium }} />
```

---

## 🚨 Erros Comuns

### Erro 1: Usar Primitive em Componente

```typescript
// ❌ ERRADO
const MyComponent = () => (
  <View style={{ backgroundColor: primitive.color.gray100 }}>
    <Text style={{ color: primitive.color.gray800 }}>
      Hello World
    </Text>
  </View>
)

// ✅ CORRETO
const MyComponent = () => (
  <View style={{ backgroundColor: semantic.color.surface.secondary }}>
    <Text style={{ color: semantic.color.text.primary }}>
      Hello World
    </Text>
  </View>
)
```

### Erro 2: Hardcoded Values

```typescript
// ❌ ERRADO
const Card = () => (
  <View
    style={{
      padding: 16,
      borderRadius: 12,
      backgroundColor: '#f7f7f7',
    }}
  />
)

// ✅ CORRETO
const Card = () => (
  <View
    style={{
      padding: semantic.spacing.component.paddingLarge,
      borderRadius: semantic.radius.component.smallMedium,
      backgroundColor: semantic.color.surface.secondary,
    }}
  />
)
```

### Erro 3: Não Usar Component Tokens Quando Disponível

```typescript
// ❌ ERRADO (Reimplementar lógica do Button)
const CustomButton = () => (
  <Pressable
    style={{
      backgroundColor: semantic.color.brand.primary,
      padding: semantic.spacing.component.paddingMedium,
      // ... todos os outros estilos
    }}
  />
)

// ✅ CORRETO (Usar component tokens)
const CustomButton = () => {
  const buttonTokens = tokens.button.variant.primary
  const sizeTokens = tokens.button.size.medium
  
  return (
    <Pressable
      style={{
        backgroundColor: buttonTokens.normal.bg,
        padding: sizeTokens.paddingVertical,
        borderRadius: sizeTokens.borderRadius,
        // Todos os tokens já definidos!
      }}
    />
  )
}
```

### Erro 4: Misturar Camadas Sem Necessidade

```typescript
// ❌ ERRADO (mistura primitive e semantic sem motivo)
const Card = () => (
  <View
    style={{
      backgroundColor: primitive.color.white, // Primitive
      borderColor: semantic.color.border.default, // Semantic
    }}
  />
)

// ✅ CORRETO (use apenas semantic)
const Card = () => (
  <View
    style={{
      backgroundColor: semantic.color.surface.primary, // Semantic
      borderColor: semantic.color.border.default, // Semantic
    }}
  />
)
```

---

## 🎯 Hierarquia de Uso

```
Prioridade de uso:

1. tokens.component.*           ← Para componentes do DS
2. tokens.semantic.*            ← Para componentes customizados
3. tokens.color/space/size.*    ← Acesso direto a primitives (raro)
4. primitive.*                  ← Apenas casos muito especiais
```

---

## 🚀 Resumo

| Caso de Uso | Use | Exemplo |
|-------------|-----|---------|
| Componente do DS | `tokens.component.*` | `tokens.button.variant.primary` |
| Componente customizado | `tokens.semantic.*` | `semantic.color.surface.secondary` |
| Texto genérico | `tokens.semantic.color.text.*` | `semantic.color.text.primary` |
| Feedback/Status | `tokens.semantic.color.feedback.*` | `semantic.color.feedback.error` |
| Espaçamentos | `tokens.semantic.spacing.*` | `semantic.spacing.component.paddingLarge` |
| Ícones | `tokens.semantic.sizing.icon.*` | `semantic.sizing.icon.medium` |

---

**Dúvidas?** Consulte `TOKENS_3_CAMADAS.md` para entender a arquitetura!




