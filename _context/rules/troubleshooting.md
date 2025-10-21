# Troubleshooting & FAQ

## 🔧 Problemas Comuns e Soluções

### 1. Tokens não funcionam com $ prefix

**Problema:**
```typescript
<Stack backgroundColor="$yellowBase" />  // Não funciona
```

**Causa:** Tokens não estão registrados no Tamagui config

**Solução:**
```typescript
// tamagui.config.ts
import { tokens } from './tokens'

export default createTamagui({
  tokens: {
    color: tokens.colors,
    space: tokens.spacing,
    size: tokens.sizes,
    radius: tokens.radii,
  },
})
```

---

### 2. Variants não aplicam estilos

**Problema:**
```typescript
const Button = styled(Stack, {
  variants: {
    size: {
      small: { height: 36 },
      large: { height: 56 },
    },
  },
})

<Button size="large" />  // Não muda tamanho
```

**Causa:** Falta type assertion `as const` nas variants

**Solução:**
```typescript
const Button = styled(Stack, {
  variants: {
    size: {
      small: { height: 36 },
      large: { height: 56 },
    },
  } as const,  // ← IMPORTANTE!
})
```

---

### 3. Hover não funciona no mobile

**Problema:**
```typescript
<Button hoverStyle={{ opacity: 0.8 }} />  // Não funciona em mobile
```

**Causa:** Mobile não tem hover, use press

**Solução:**
```typescript
<Button
  hoverStyle={{ opacity: 0.8 }}      // Web
  pressStyle={{ opacity: 0.8 }}      // Mobile + Web
/>
```

---

### 4. Ícones SVG não aparecem

**Problema:**
```typescript
import Icon from './icon.svg'
<Icon />  // Não renderiza
```

**Causa:** Falta configuração do Metro ou tipos

**Solução:**

1. Verifique `svg.d.ts`:
```typescript
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
```

2. Verifique `metro.config.js`:
```javascript
const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer')

config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg')
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg']

module.exports = config
```

3. Use corretamente:
```typescript
import CheckIcon from './icons/check.svg'

<CheckIcon width={24} height={24} fill="black" />
```

---

### 5. Estados disabled não desabilitam interações

**Problema:**
```typescript
<Button 
  disabled={true}
  disabledStyle={{ opacity: 0.5 }}
  onPress={handlePress}  // Ainda chama!
/>
```

**Causa:** `disabled` prop só aplica estilos, não previne eventos

**Solução:**
```typescript
const Button = ({ disabled, onPress, ...props }) => {
  const handlePress = () => {
    if (disabled) return  // ← Guard clause
    onPress?.()
  }
  
  return (
    <StyledButton 
      disabled={disabled}
      onPress={handlePress}
      {...props}
    />
  )
}
```

---

### 6. Text overflow não funciona

**Problema:**
```typescript
<Text numberOfLines={1} ellipsizeMode="tail">
  Texto muito longo que deveria truncar
</Text>
```

**Causa:** Falta configuração de width no container

**Solução:**
```typescript
<Stack width="100%" maxWidth={200}>
  <Text 
    numberOfLines={1} 
    ellipsizeMode="tail"
    width="100%"  // ← Importante!
  >
    Texto muito longo
  </Text>
</Stack>
```

---

### 7. Focus style não aparece

**Problema:**
```typescript
<Button focusStyle={{ borderColor: 'red' }} />
// Foco não mostra
```

**Causa:** Elemento não é focusable ou outline padrão sobrescreve

**Solução:**
```typescript
<Button
  focusable  // ← Torne focusable
  focusStyle={{
    borderColor: 'red',
    borderWidth: 2,
    outlineWidth: 0,  // ← Remove outline padrão
  }}
/>
```

---

### 8. Compound variants não aplicam

**Problema:**
```typescript
compoundVariants: [
  {
    size: 'small',
    variant: 'primary',
    style: { padding: 8 },
  },
]
```

**Causa:** Sintaxe incorreta (é `css` não `style`)

**Solução:**
```typescript
compoundVariants: [
  {
    size: 'small',
    variant: 'primary',
    css: { padding: 8 },  // ← Use 'css'
  },
]
```

---

### 9. Tipos TypeScript reclamando de props

**Problema:**
```typescript
type ButtonProps = {
  size: 'small' | 'medium'
}

const Button = styled(Stack, {
  variants: { size: { small: {}, medium: {} } }
})

<Button size="small" />  // Type error
```

**Causa:** Types não conectados ao styled component

**Solução:**

Opção 1 - Infer types:
```typescript
const StyledButton = styled(Stack, {
  variants: { size: { small: {}, medium: {} } } as const
})

type ButtonProps = React.ComponentProps<typeof StyledButton>
```

Opção 2 - Wrapper explícito:
```typescript
const StyledButton = styled(Stack, { /* */ })

export interface ButtonProps {
  size?: 'small' | 'medium'
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = (props) => (
  <StyledButton {...props} />
)
```

---

### 10. Animation não funciona

**Problema:**
```typescript
<Stack animation="quick" x={position} />
// Não anima
```

**Causa:** Falta configuração de animation no tamagui.config

**Solução:**
```typescript
// tamagui.config.ts
export default createTamagui({
  animations: {
    quick: {
      type: 'spring',
      damping: 20,
      mass: 1.2,
      stiffness: 250,
    },
  },
})
```

---

## 🤔 FAQ - Perguntas Frequentes

### Q: Como saber quais tokens usar?

**A:** Sempre consulte a spec do Figma em `_context/component_data/`. Ela lista exatamente quais cores, tamanhos e espaçamentos usar.

---

### Q: Posso usar valores hardcoded "só dessa vez"?

**A:** ❌ **NÃO**. Isso quebra a consistência do Design System. Se o token não existe, crie-o em `tokens.ts` primeiro.

---

### Q: Como decidir entre usar props ou variants?

**A:** 
- **Variants:** Mudanças visuais pré-definidas (size, variant, type)
- **Props:** Controle de comportamento e estado (disabled, error, loading)
- **Combo:** Estado pode afetar variant (error modifica cores)

```typescript
// ✅ Bom design
<Button 
  size="large"        // variant
  variant="primary"   // variant
  disabled={loading}  // prop
/>
```

---

### Q: Preciso implementar TODAS as variantes da spec?

**A:** Sim. Se a spec lista 108 variantes (como Checkbox), todas devem funcionar. Use variants e estados para cobrir todas as combinações.

---

### Q: Como testar estados hover/focus sem precisar interagir manualmente?

**A:** No Storybook, crie stories específicas:

```typescript
export const HoverState: Story = {
  args: { /* props normais */ },
  parameters: {
    pseudo: { hover: true }
  }
}
```

---

### Q: Posso modificar `tokens.ts` livremente?

**A:** Com cuidado:
- ✅ **Adicionar** novos tokens necessários para specs
- ✅ **Organizar** hierarquicamente
- ⚠️ **Modificar** existentes (pode quebrar outros componentes)
- ❌ **Remover** tokens (pode quebrar tudo)

---

### Q: Como lidar com componentes muito complexos?

**A:** Decomponha em sub-componentes:

```typescript
// ❌ Um componente gigante
const ComplexForm = () => { /* 500 linhas */ }

// ✅ Componentes pequenos e focados
const FormContainer = () => { /* layout */ }
const FormField = () => { /* campo */ }
const FormLabel = () => { /* label */ }
const FormError = () => { /* erro */ }
const ComplexForm = () => (
  <FormContainer>
    <FormField>
      <FormLabel />
      <FormInput />
      <FormError />
    </FormField>
  </FormContainer>
)
```

---

### Q: Preciso dar suporte a temas (light/dark)?

**A:** Se a spec do Figma incluir, sim. Configure no tamagui.config:

```typescript
export default createTamagui({
  themes: {
    light: {
      background: '#FFFFFF',
      color: '#000000',
    },
    dark: {
      background: '#000000',
      color: '#FFFFFF',
    },
  },
})
```

---

### Q: Como priorizar acessibilidade?

**A:** Checklist mínimo:
- [ ] Role ARIA correto
- [ ] Labels descritivas
- [ ] Estados ARIA (disabled, invalid, checked)
- [ ] Navegação por teclado (Tab, Enter, Esc)
- [ ] Focus visível
- [ ] Contraste de cores adequado (WCAG AA)
- [ ] Touch targets ≥ 44x44px

---

### Q: Storybook é obrigatório?

**A:** ✅ **SIM**. Stories documentam e testam componentes. Sem stories, o componente não está "pronto".

---

### Q: Como organizar imports?

**A:**
```typescript
// 1. React
import React, { useState, useEffect } from 'react'

// 2. React Native
import { Platform } from 'react-native'

// 3. Tamagui
import { styled, Stack, Text } from 'tamagui'

// 4. Internos - tokens/config
import { tokens } from '../../tokens'

// 5. Internos - componentes
import { Icon } from '../Icon'

// 6. Types
import type { ButtonProps } from './types'
```

---

### Q: Como nomear componentes?

**A:**
- **PascalCase** para componentes: `Button`, `InputField`, `CheckboxGroup`
- **camelCase** para props: `isDisabled`, `onChange`, `backgroundColor`
- **kebab-case** para arquivos: `button.tsx`, `input-field.tsx` (ou PascalCase também aceito)
- **SCREAMING_SNAKE_CASE** para constantes: `DEFAULT_SIZE`, `MAX_LENGTH`

---

### Q: Como lidar com plataforma-specific code?

**A:** Use com parcimônia:

```typescript
import { Platform } from 'react-native'

// ✅ Quando realmente necessário
const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  android: {
    elevation: 5,
  },
  web: {
    boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
  },
})

// ❌ Evite para coisas que Tamagui já resolve
Platform.OS === 'web' ? <div /> : <View />  // Use Stack
```

---

### Q: Quando usar forwardRef?

**A:** Quando o componente:
- Precisa expor ref para o parent
- É usado com focus programático
- É usado em animações
- É um input/campo de formulário

```typescript
export const Input = React.forwardRef<TextInput, InputProps>(
  (props, ref) => (
    <StyledInput ref={ref} {...props} />
  )
)
```

---

### Q: Como fazer componentes genéricos/reutilizáveis?

**A:** Use generics TypeScript quando necessário:

```typescript
interface SelectProps<T> {
  options: T[]
  value?: T
  onChange?: (value: T) => void
  renderOption?: (option: T) => React.ReactNode
}

export const Select = <T extends any>({
  options,
  value,
  onChange,
  renderOption,
}: SelectProps<T>) => {
  // Implementação
}

// Uso type-safe
<Select<User>
  options={users}
  value={selectedUser}
  onChange={setSelectedUser}
  renderOption={(user) => user.name}
/>
```

---

## 🐛 Debug Tips

### 1. Verificar estilos aplicados

```typescript
// Adicione temporariamente
<Stack
  debug="verbose"  // Mostra todos os estilos aplicados
  {...props}
/>
```

### 2. Verificar tokens

```typescript
// Console log tokens
import { tokens } from './tokens'
console.log('Available colors:', Object.keys(tokens.colors))
```

### 3. Verificar hierarquia de componentes

Use React DevTools e procure por componentes Tamagui. Nomes via `name: 'ComponentName'` facilitam debug.

### 4. Storybook como playground

Teste variações rapidamente no Storybook antes de usar em produção:

```typescript
export const Playground: Story = {
  args: {},
  argTypes: {
    // Todos os controles para teste rápido
  },
}
```

---

## 📞 Quando Pedir Ajuda

### Tente primeiro:
1. ✅ Consulte estas regras
2. ✅ Leia a spec do Figma novamente
3. ✅ Verifique exemplos em componentes existentes
4. ✅ Busque na documentação do Tamagui

### Peça ajuda quando:
- ❓ Spec ambígua ou contraditória
- ❓ Comportamento esperado não claro
- ❓ Bug que parece ser do Tamagui
- ❓ Decisão de design não especificada

---

**Lembre-se:** A maioria dos problemas já foi resolvida antes. Consulte componentes existentes como referência! 🚀

