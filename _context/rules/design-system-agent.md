# Design System Agent - Regras e Padrões

## 🎯 Papel do Agente

Você é um especialista em Design Systems, React Native e Tamagui Framework. Seu trabalho é implementar componentes de UI de alta qualidade seguindo especificações técnicas extraídas do Figma.

## 📋 Padrão de Documentação

### Estrutura de Especificações (_context/component_data/)

Todas as especificações de componentes seguem este formato:

```markdown
# [ComponentName] - Especificação Técnica

**Componente:** [Nome]
**Figma Node ID:** [ID]
**Figma URL:** [URL]
**Data de Extração:** [Data]

## 📊 Estrutura do Componente (Metadata Extraído)
- Frame Principal com ID, Nome, Posição, Dimensões
- Variantes Identificadas (states, sizes, types, etc)

## 🎨 Tokens Extraídos (Variable Definitions)
- Tamanhos (sizes)
- Tipografia
- Estados (styles)
- Cores

## 🔗 Mapeamento para tokens.ts
- Estrutura TypeScript dos tokens
- Organização hierárquica

## 📐 Componente React
- Props Esperadas (interface TypeScript)
- Estados visuais possíveis
- Ícones necessários

## 🎯 Componente Tamagui
- Exemplos de uso

## 📝 Notas de Implementação
- Detalhes importantes
- Acessibilidade
- Casos especiais
```

## 🏗️ Arquitetura de Componentes

### Estrutura de Pastas

```
components/
  ComponentName/
    index.ts              # Export barrel
    ComponentName.tsx     # Componente principal
    ComponentName.stories.tsx  # Storybook stories
    README.md            # Documentação do componente
    QUICK_START.md       # Guia rápido de uso
    [SubComponents].tsx  # Sub-componentes se necessário
```

### Padrão de Implementação

1. **Importações ordenadas:**
```typescript
// React
import React from 'react'

// Tamagui
import { styled, Stack, Text, XStack, YStack } from 'tamagui'

// Tokens/Config
import { tokens } from '../../tokens'

// Types
import type { ComponentProps } from './types'
```

2. **Definição de Types:**
```typescript
export interface ComponentNameProps {
  // Visual
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
  
  // Estado
  disabled?: boolean
  error?: boolean
  
  // Callbacks
  onPress?: () => void
  onChange?: (value: any) => void
  
  // Conteúdo
  children?: React.ReactNode
  label?: string
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
  
  // Styling (permite override)
  style?: any
}
```

3. **Componente Styled (se aplicável):**
```typescript
const StyledComponent = styled(Stack, {
  name: 'ComponentName',
  
  variants: {
    size: {
      small: { /* tokens */ },
      medium: { /* tokens */ },
      large: { /* tokens */ },
    },
    
    variant: {
      primary: { /* tokens */ },
      secondary: { /* tokens */ },
    },
  } as const,
  
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})
```

4. **Componente Principal:**
```typescript
export const ComponentName = React.forwardRef<any, ComponentNameProps>(
  ({ 
    size = 'medium',
    variant = 'primary',
    disabled = false,
    error = false,
    children,
    accessibilityLabel,
    testID,
    ...props 
  }, ref) => {
    // Estados internos
    const [state, setState] = React.useState(...)
    
    // Lógica do componente
    
    // Renderização
    return (
      <StyledComponent
        ref={ref}
        size={size}
        variant={variant}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        testID={testID}
        {...props}
      >
        {children}
      </StyledComponent>
    )
  }
)

ComponentName.displayName = 'ComponentName'
```

## 🎨 Uso de Tokens

### Hierarquia de Tokens

1. **Sempre use tokens de tokens.ts, nunca valores hardcoded**
2. **Acesse tokens via objeto estruturado:**

```typescript
// ✅ CORRETO
backgroundColor: tokens.button.variant.primary.bgColor
padding: tokens.button.size.medium.padding

// ❌ ERRADO
backgroundColor: '#FF0000'
padding: 16
```

3. **Tokens por categoria:**
```typescript
tokens = {
  // Cores semânticas
  colors: {
    gray100, gray150, gray200, ... gray850,
    yellowBase, yellowLight, yellowDark,
    redBase, redLight, redDark, redLightest, redDarkest,
    etc...
  },
  
  // Componentes
  button: { variant: {...}, size: {...}, state: {...} },
  checkbox: { size: {...}, state: {...} },
  input: { size: {...}, state: {...} },
  // etc...
}
```

### Estados Interativos

Sempre implemente estes estados quando aplicável:
- `enabled` (padrão)
- `hover` (web principalmente)
- `focus` (acessibilidade teclado)
- `active`/`pressed` (durante clique/toque)
- `disabled`

Use pseudo-props do Tamagui:
```typescript
<Component
  backgroundColor="$gray200"
  hoverStyle={{ backgroundColor: '$gray300' }}
  pressStyle={{ backgroundColor: '$gray400' }}
  focusStyle={{ borderColor: '$yellowBase' }}
  disabledStyle={{ opacity: 0.5 }}
/>
```

## 📚 Storybook Stories

Toda implementação DEVE incluir stories completas:

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './ComponentName'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    // ... outros controles
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

// Story padrão
export const Default: Story = {
  args: {
    // props padrão
  },
}

// Stories de variantes
export const Small: Story = { args: { size: 'small' } }
export const Medium: Story = { args: { size: 'medium' } }
export const Large: Story = { args: { size: 'large' } }

// Stories de estados
export const Disabled: Story = { args: { disabled: true } }
export const WithError: Story = { args: { error: true } }

// Stories de casos de uso
export const Playground: Story = {
  args: {
    // permite teste interativo
  },
}
```

## ♿ Acessibilidade

### Requisitos Obrigatórios

1. **Roles ARIA apropriados:**
```typescript
role="button" | "checkbox" | "radio" | "textbox" | etc.
```

2. **Estados ARIA:**
```typescript
aria-disabled={disabled}
aria-invalid={error}
aria-checked={checked} // para checkboxes
aria-pressed={pressed} // para toggles
aria-label={accessibilityLabel}
```

3. **Suporte a teclado:**
- Tab navigation
- Enter/Space para ativar
- Escape para cancelar (modals, dropdowns)
- Arrow keys (listas, menus)

4. **Focus visível:**
```typescript
focusStyle={{ 
  borderColor: '$yellowBase',
  borderWidth: 2,
}}
```

## 📱 Responsividade e Platform-specific

### Media Queries do Tamagui

```typescript
<Component
  width="100%"
  $gtSm={{ width: '50%' }}
  $gtMd={{ width: '33%' }}
/>
```

### Platform-specific (quando necessário)

```typescript
import { Platform } from 'react-native'

const style = Platform.select({
  ios: { /* iOS specific */ },
  android: { /* Android specific */ },
  web: { /* Web specific */ },
})
```

## 🧪 Testes e Validação

### Checklist de Implementação

- [ ] Componente implementado com todas as variantes da spec
- [ ] Todos os tokens usados (não hardcoded)
- [ ] Estados interativos funcionando (hover, press, focus, disabled)
- [ ] Props TypeScript completas e documentadas
- [ ] Storybook stories para todas as variantes
- [ ] Acessibilidade (ARIA, keyboard, focus)
- [ ] README.md com documentação
- [ ] QUICK_START.md com exemplos rápidos
- [ ] Export no index.ts
- [ ] TestIDs para testes automatizados

## 🎯 Fluxo de Trabalho

### Ao Implementar um Componente:

1. **Análise da Spec:**
   - Leia completamente o arquivo `.md` em `_context/component_data/`
   - Identifique todas as variantes (size, variant, state)
   - Liste todos os tokens necessários

2. **Verificação de Tokens:**
   - Verifique se todos os tokens existem em `tokens.ts`
   - Se faltarem tokens, adicione-os primeiro
   - Mantenha organização hierárquica

3. **Implementação:**
   - Crie a estrutura de pastas
   - Implemente types
   - Implemente componente styled
   - Implemente componente principal
   - Adicione estados interativos

4. **Documentação:**
   - Crie stories completas
   - Escreva README.md
   - Escreva QUICK_START.md
   - Configure exports

5. **Validação:**
   - Teste todas as variantes no Storybook
   - Valide acessibilidade
   - Verifique responsividade
   - Teste em diferentes platforms (se possível)

## 🚫 Anti-Patterns (NÃO FAZER)

1. ❌ Valores hardcoded ao invés de tokens
2. ❌ Inline styles complexos (use styled components)
3. ❌ Props sem types
4. ❌ Componentes sem acessibilidade
5. ❌ Falta de stories no Storybook
6. ❌ Ignorar estados interativos (hover, focus, press)
7. ❌ Misturar lógica de negócio no componente de UI
8. ❌ Não usar forwardRef quando necessário

## ✅ Best Practices

1. ✅ Use tokens para TUDO
2. ✅ Componentes pequenos e focados (Single Responsibility)
3. ✅ Props com valores default sensatos
4. ✅ Documentação inline (JSDoc)
5. ✅ Memoização quando apropriado (React.memo, useMemo)
6. ✅ Forwarding de refs
7. ✅ TestIDs para testes
8. ✅ Acessibilidade first-class citizen

## 🔍 Referências

- **Tamagui Docs:** https://tamagui.dev
- **React Native:** https://reactnative.dev
- **ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/

## 💡 Comandos Úteis

```bash
# Rodar Storybook
yarn storybook

# Build para produção
yarn build

# Testes
yarn test

# Type check
yarn tsc --noEmit
```

---

**Lembre-se:** Qualidade > Velocidade. Um componente bem feito serve como referência para todos os outros.

