# Tamagui - Padrões e Best Practices

## 🎨 Estilização no Tamagui

### 1. Componentes Styled

#### Sintaxe Básica
```typescript
import { styled, Stack, Text } from 'tamagui'

const MyComponent = styled(Stack, {
  name: 'MyComponent',  // Para debug e dev tools
  
  // Estilos base
  backgroundColor: '$gray100',
  padding: '$4',
  borderRadius: '$3',
  
  // Pseudo-states
  hoverStyle: {
    backgroundColor: '$gray200',
  },
  
  pressStyle: {
    backgroundColor: '$gray300',
  },
  
  focusStyle: {
    borderColor: '$yellowBase',
    borderWidth: 2,
  },
})
```

#### Com Variants
```typescript
const Button = styled(Stack, {
  name: 'Button',
  
  // Estilos base (aplicados sempre)
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  
  // Variants
  variants: {
    size: {
      small: {
        height: 36,
        paddingHorizontal: 16,
        fontSize: 14,
      },
      medium: {
        height: 48,
        paddingHorizontal: 24,
        fontSize: 16,
      },
      large: {
        height: 56,
        paddingHorizontal: 32,
        fontSize: 18,
      },
    },
    
    variant: {
      primary: {
        backgroundColor: '$yellowBase',
        color: '$black',
      },
      secondary: {
        backgroundColor: '$gray200',
        color: '$gray800',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$gray800',
      },
    },
    
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  } as const,
  
  // Valores padrão
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

// Uso
<Button size="large" variant="secondary" />
```

#### Compound Variants (interações entre variants)
```typescript
const Button = styled(Stack, {
  variants: {
    size: {
      small: { height: 36 },
      large: { height: 56 },
    },
    variant: {
      primary: { backgroundColor: '$yellowBase' },
      ghost: { backgroundColor: 'transparent' },
    },
  },
  
  // Estilos específicos para combinações
  compoundVariants: [
    {
      size: 'small',
      variant: 'ghost',
      style: {
        // Ghost pequeno tem padding diferente
        paddingHorizontal: 8,
      },
    },
    {
      size: 'large',
      variant: 'primary',
      style: {
        // Primary grande tem sombra
        shadowColor: '$yellowDark',
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
    },
  ],
})
```

### 2. Componentes Base do Tamagui

#### Stack (flex container)
```typescript
import { Stack } from 'tamagui'

// Vertical stack (padrão)
<Stack gap="$4">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>

// Com estilos
<Stack
  backgroundColor="$gray100"
  padding="$4"
  borderRadius="$3"
  gap="$2"
>
  {children}
</Stack>
```

#### XStack (horizontal)
```typescript
import { XStack } from 'tamagui'

<XStack 
  gap="$3" 
  alignItems="center"
  justifyContent="space-between"
>
  <Text>Left</Text>
  <Text>Right</Text>
</XStack>
```

#### YStack (vertical explícito)
```typescript
import { YStack } from 'tamagui'

<YStack gap="$4" padding="$4">
  <Text>Top</Text>
  <Text>Middle</Text>
  <Text>Bottom</Text>
</YStack>
```

#### Text
```typescript
import { Text } from 'tamagui'

<Text
  fontSize={16}
  fontWeight="400"
  lineHeight={24}
  color="$gray800"
>
  Conteúdo
</Text>

// Ou com styled
const Label = styled(Text, {
  fontSize: 14,
  fontWeight: '500',
  color: '$gray700',
})
```

### 3. Tokens no Tamagui

#### Referenciando Tokens
```typescript
// Com $ prefix (recommended)
<Stack backgroundColor="$yellowBase" padding="$4" />

// Ou importando diretamente
import { tokens } from '../../tokens'
const bgColor = tokens.colors.yellowBase
```

#### Tokens de Espaçamento
```typescript
// Se você tem tokens de spacing
space: {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
}

// Use como
<Stack padding="$4" gap="$3" />  // padding: 16, gap: 12
```

#### Tokens de Cores
```typescript
// Cores semânticas
<Stack backgroundColor="$yellowBase" />
<Text color="$gray800" />
<Stack borderColor="$redDark" />

// Estados
<Stack
  backgroundColor="$gray200"
  hoverStyle={{ backgroundColor: '$gray300' }}
/>
```

### 4. Estados Interativos

#### Hover (principalmente web)
```typescript
<Stack
  backgroundColor="$gray100"
  hoverStyle={{
    backgroundColor: '$gray200',
    cursor: 'pointer',
  }}
/>
```

#### Press (mobile e web)
```typescript
<Stack
  backgroundColor="$yellowBase"
  pressStyle={{
    backgroundColor: '$yellowDark',
    scale: 0.98,  // Efeito de "aperto"
  }}
/>
```

#### Focus (acessibilidade)
```typescript
<Stack
  borderWidth={0}
  borderColor="transparent"
  focusStyle={{
    borderWidth: 2,
    borderColor: '$yellowBase',
    outlineWidth: 0,  // Remove outline padrão do navegador
  }}
/>
```

#### Disabled
```typescript
<Stack
  disabled={isDisabled}
  disabledStyle={{
    opacity: 0.5,
    cursor: 'not-allowed',
  }}
/>
```

#### Combinando Estados
```typescript
const Button = styled(Stack, {
  backgroundColor: '$yellowBase',
  
  hoverStyle: {
    backgroundColor: '$yellowDark',
  },
  
  pressStyle: {
    backgroundColor: '$yellowDarkest',
    scale: 0.98,
  },
  
  focusStyle: {
    borderColor: '$gray800',
    borderWidth: 2,
  },
  
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
        // Sobrescreve outros estilos quando disabled
        hoverStyle: {
          backgroundColor: '$yellowBase',
        },
      },
    },
  },
})
```

### 5. Responsividade

#### Media Queries
```typescript
<Stack
  width="100%"
  padding="$4"
  
  // Greater than small
  $gtSm={{
    width: '50%',
    padding: '$6',
  }}
  
  // Greater than medium
  $gtMd={{
    width: '33%',
    padding: '$8',
  }}
/>
```

#### Configuração de Breakpoints (tamagui.config.ts)
```typescript
export default createTamagui({
  media: {
    sm: { maxWidth: 600 },
    md: { maxWidth: 960 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1920 },
  },
})
```

#### Platform-Specific
```typescript
import { Platform } from 'react-native'

<Stack
  padding="$4"
  {...(Platform.OS === 'web' && {
    cursor: 'pointer',
  })}
/>
```

### 6. Animações

#### Animações Simples
```typescript
import { Stack, AnimatePresence } from 'tamagui'

<Stack
  animation="quick"
  backgroundColor="$yellowBase"
  hoverStyle={{
    backgroundColor: '$yellowDark',
  }}
/>
```

#### AnimatePresence (enter/exit)
```typescript
<AnimatePresence>
  {isVisible && (
    <Stack
      animation="quick"
      enterStyle={{ opacity: 0, y: -10 }}
      exitStyle={{ opacity: 0, y: 10 }}
    >
      Conteúdo
    </Stack>
  )}
</AnimatePresence>
```

## 🎯 Padrões Específicos do Projeto

### 1. Estrutura de Componente Típica

```typescript
import React from 'react'
import { styled, Stack, Text, XStack } from 'tamagui'
import { tokens } from '../../tokens'

// Types
export interface ComponentProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children?: React.ReactNode
  onPress?: () => void
  testID?: string
}

// Styled Components
const Container = styled(Stack, {
  name: 'ComponentContainer',
  
  variants: {
    size: {
      small: {
        height: tokens.component.size.small.height,
        padding: tokens.component.size.small.padding,
      },
      medium: {
        height: tokens.component.size.medium.height,
        padding: tokens.component.size.medium.padding,
      },
    },
    
    variant: {
      primary: {
        backgroundColor: tokens.component.variant.primary.bgColor,
      },
      secondary: {
        backgroundColor: tokens.component.variant.secondary.bgColor,
      },
    },
  } as const,
  
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

// Main Component
export const Component = React.forwardRef<any, ComponentProps>(
  ({ 
    size = 'medium',
    variant = 'primary',
    disabled = false,
    children,
    onPress,
    testID,
  }, ref) => {
    return (
      <Container
        ref={ref}
        size={size}
        variant={variant}
        disabled={disabled}
        onPress={onPress}
        testID={testID}
        
        // Estados interativos
        hoverStyle={{
          opacity: 0.8,
        }}
        
        pressStyle={{
          scale: 0.98,
        }}
        
        focusStyle={{
          borderColor: '$yellowBase',
          borderWidth: 2,
        }}
        
        disabledStyle={{
          opacity: 0.5,
        }}
      >
        {children}
      </Container>
    )
  }
)

Component.displayName = 'Component'
```

### 2. Componente com Sub-componentes

```typescript
// Container principal
const CheckboxContainer = styled(XStack, {
  name: 'CheckboxContainer',
  alignItems: 'center',
  gap: '$2',
})

// Icon plate (quadrado do checkbox)
const IconPlate = styled(Stack, {
  name: 'CheckboxIconPlate',
  alignItems: 'center',
  justifyContent: 'center',
  
  variants: {
    size: {
      small: {
        width: 20,
        height: 20,
        borderRadius: 4,
      },
      medium: {
        width: 24,
        height: 24,
        borderRadius: 8,
      },
    },
  },
})

// Label
const Label = styled(Text, {
  name: 'CheckboxLabel',
  
  variants: {
    size: {
      small: {
        fontSize: 14,
        lineHeight: 20,
      },
      medium: {
        fontSize: 16,
        lineHeight: 24,
      },
    },
  },
})

// Componente principal compõe tudo
export const Checkbox = ({ size, label, checked, onChange }) => (
  <CheckboxContainer>
    <IconPlate size={size} onPress={onChange}>
      {checked && <Icon name="checkmark" />}
    </IconPlate>
    
    {label && (
      <Label size={size} onPress={onChange}>
        {label}
      </Label>
    )}
  </CheckboxContainer>
)
```

### 3. Usando Ícones

```typescript
import { Svg, Path } from 'react-native-svg'
import CheckmarkIcon from '../../assets/icons/checkmark.svg'

// Importação direta
<CheckmarkIcon width={24} height={24} fill="$gray800" />

// Ou wrapper
const Icon = ({ name, size, color }) => {
  const IconComponent = icons[name]
  return <IconComponent width={size} height={size} fill={color} />
}

// Uso
<Icon name="checkmark" size={24} color="$gray800" />
```

### 4. Composição de Estados

```typescript
const getStateStyles = (state: 'normal' | 'error', interactive: 'enabled' | 'hover' | 'focus') => {
  const styles = tokens.component.state[state][interactive]
  
  return {
    backgroundColor: styles.bgColor,
    borderColor: styles.borderColor,
    color: styles.textColor,
  }
}

// Uso no componente
const Button = ({ error, ...props }) => {
  const enabledStyles = getStateStyles(error ? 'error' : 'normal', 'enabled')
  const hoverStyles = getStateStyles(error ? 'error' : 'normal', 'hover')
  
  return (
    <Stack
      {...enabledStyles}
      hoverStyle={hoverStyles}
      {...props}
    />
  )
}
```

## 🚀 Performance

### 1. Memoização
```typescript
import { memo, useMemo } from 'react'

// Componente pesado? Memoize
export const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(
    () => heavyProcessing(data),
    [data]
  )
  
  return <Stack>{processedData}</Stack>
})
```

### 2. Lazy Loading
```typescript
import { lazy, Suspense } from 'react'

const HeavyComponent = lazy(() => import('./HeavyComponent'))

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

### 3. Lista Otimizada
```typescript
import { FlatList } from 'react-native'

<FlatList
  data={items}
  renderItem={({ item }) => <Item {...item} />}
  keyExtractor={(item) => item.id}
  
  // Performance
  removeClippedSubviews={true}
  maxToRenderPerBatch={10}
  updateCellsBatchingPeriod={50}
  initialNumToRender={10}
  windowSize={21}
/>
```

## 🧪 Testing

### 1. TestID
```typescript
<Button testID="submit-button">
  Submit
</Button>

// No teste
const button = getByTestId('submit-button')
fireEvent.press(button)
```

### 2. Acessibilidade
```typescript
<Button
  accessibilityLabel="Enviar formulário"
  accessibilityRole="button"
  accessibilityState={{ disabled: isDisabled }}
>
  Enviar
</Button>
```

## 📚 Referências Rápidas

### Props Comuns do Tamagui

```typescript
// Layout
width, height, minWidth, maxWidth, minHeight, maxHeight
flex, flexGrow, flexShrink, flexBasis
alignItems, alignSelf, justifyContent
position, top, right, bottom, left, zIndex

// Spacing
padding, paddingVertical, paddingHorizontal, paddingTop, paddingRight, paddingBottom, paddingLeft
margin, marginVertical, marginHorizontal, marginTop, marginRight, marginBottom, marginLeft
gap

// Border
borderWidth, borderRadius, borderColor
borderTopWidth, borderRightWidth, borderBottomWidth, borderLeftWidth
borderTopLeftRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius

// Background
backgroundColor, backgroundImage

// Text
color, fontSize, fontWeight, fontFamily, lineHeight, letterSpacing, textAlign

// Shadow
shadowColor, shadowOpacity, shadowRadius, shadowOffset

// Transform
scale, rotate, translateX, translateY

// Interaction
cursor, pointerEvents, disabled

// Pseudo-states
hoverStyle, pressStyle, focusStyle, disabledStyle
```

---

**Dica:** Mantenha componentes simples e compostos. A complexidade deve estar na composição, não dentro de cada componente.

