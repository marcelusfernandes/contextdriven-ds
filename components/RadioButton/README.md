# RadioButton - DSZé

Componente de radio button (seleção única) com suporte completo a estados interativos, validação de erro, e todas as variantes do Design System Zé Delivery.

## 📊 Visão Geral

O RadioButton é um componente de seleção única que permite ao usuário escolher uma opção de um conjunto de opções mutuamente exclusivas. Implementa 82 variantes possíveis conforme especificação do Figma.

### Características Principais

- ✅ **82 variantes** (2 Functions × 2 Types × 2 Sizes × 5 States × 2 Error modes)
- ✅ **Border Radius Circular** - Sempre circular (ref(primitive.radius[16]))
- ✅ **Sem Indeterminate** - Apenas 2 estados (unchecked, checked)
- ✅ **Seleção Única** - Radios com mesmo `name` funcionam como grupo
- ✅ **Estados interativos** - Hover, Focus, Active, Disabled
- ✅ **Validação de erro** - Estado de erro visual
- ✅ **Acessibilidade** - ARIA completo e navegação por teclado
- ✅ **Type-safe** - TypeScript com inferência de tipos
- ✅ **Design System** - Tokens do DSZé

## 🎯 Figma

- **Node ID:** 5555:39003
- **Frame:** Radio Buttons 🔵
- **URL:** [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5555-39003)

## 📦 Instalação

```bash
# O componente já está incluído no projeto
import { RadioButton } from '@/components/RadioButton'
```

## 🚀 Uso Básico

```tsx
import { useState } from 'react'
import { RadioButton } from '@/components/RadioButton'

function MyForm() {
  const [selected, setSelected] = useState('option1')
  
  return (
    <>
      <RadioButton
        size="medium"
        function="input"
        label="Opção 1"
        value="option1"
        name="myGroup"
        checked={selected === 'option1'}
        onChange={setSelected}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Opção 2"
        value="option2"
        name="myGroup"
        checked={selected === 'option2'}
        onChange={setSelected}
      />
    </>
  )
}
```

## 🎨 Variantes

### 1. Size (Tamanho)

```tsx
// Small (36px de altura)
<RadioButton 
  size="small" 
  function="input"
  label="Small Radio" 
/>

// Medium (48px de altura) - Padrão
<RadioButton 
  size="medium" 
  function="input"
  label="Medium Radio" 
/>
```

**Especificações:**

| Size | Height | Icon Plate | Border Radius | Typography |
|------|--------|------------|---------------|------------|
| `small` | 36px | 20px | 16px (circular) | fontSize.small (14px) |
| `medium` | 48px | 24px | 16px (circular) | fontSize.medium (16px) |

### 2. Function (Tipo)

```tsx
// Input: Radio com label (área clicável maior)
<RadioButton 
  function="input" 
  label="Com Label"
  value="with-label"
  checked={selected === 'with-label'}
  onChange={setSelected}
/>

// Single: Apenas radio (tamanho mínimo)
<RadioButton 
  function="single"
  value="single"
  checked={selected === 'single'}
  onChange={setSelected}
/>
```

**Diferenças:**

| Function | Label | Padding | Use Case |
|----------|-------|---------|----------|
| `input` | ✅ Sim | 8px/12px | Formulários, opções com texto |
| `single` | ❌ Não | 0px | Listas compactas, tabelas |

### 3. Types (Estados de Seleção)

```tsx
// Unchecked (desmarcado)
<RadioButton 
  checked={false}
  value="unchecked"
/>

// Checked (marcado)
<RadioButton 
  checked={true}
  value="checked"
/>
```

**Diferenças em relação ao Checkbox:**
- ❌ **Sem Indeterminate** - RadioButton não suporta estado intermediário
- ✅ **Apenas 2 estados** - unchecked ou checked
- ✅ **Seleção única** - Apenas um radio pode estar checked por grupo

### 4. States (Estados Interativos)

```tsx
// Enabled (padrão)
<RadioButton label="Enabled" />

// Hover (automático ao passar mouse)
<RadioButton label="Hover" />

// Focus (automático ao focar)
<RadioButton label="Focus" />

// Active (automático ao clicar)
<RadioButton label="Active" />

// Disabled
<RadioButton label="Disabled" disabled={true} />
```

**Comportamentos:**

| State | Trigger | Visual |
|-------|---------|--------|
| `enabled` | Estado padrão | Cores normais |
| `hover` | Mouse sobre | Background gray100 |
| `focus` | Tab / Click | Border 2px + Background gray200 |
| `active` | Mouse down | Border cinza mais escuro |
| `disabled` | Prop disabled | Cores acinzentadas + cursor not-allowed |

### 5. Error State

```tsx
// Normal (sem erro)
<RadioButton 
  label="Opção Normal"
  error={false}
/>

// Error (com erro)
<RadioButton 
  label="Opção Inválida"
  error={true}
/>
```

**Mudanças visuais no estado Error:**

| Element | Normal | Error |
|---------|--------|-------|
| Icon color | gray800 | redDark |
| Text color | gray800 | redDark |
| Hover bg | gray100 | redLightest |
| Focus border | gray650 | redDarkest |

## 📋 API / Props

```typescript
interface RadioButtonProps {
  // Visual
  size?: 'small' | 'medium'                  // Tamanho (default: 'medium')
  function?: 'input' | 'single'              // Tipo (default: 'input')
  label?: string                             // Label (apenas para function='input')
  
  // Estado do radio (seleção única)
  checked?: boolean                          // Estado de seleção (default: false)
  value?: string                             // Valor do radio no grupo
  name?: string                              // Nome do grupo (para agrupar radios)
  
  // Callbacks
  onChange?: (value: string) => void         // Callback quando valor muda
  onFocus?: () => void                       // Callback quando recebe foco
  onBlur?: () => void                        // Callback quando perde foco
  
  // Estados
  error?: boolean                            // Estado de erro (default: false)
  disabled?: boolean                         // Estado desabilitado (default: false)
  
  // Acessibilidade
  accessibilityLabel?: string                // Label para screen readers
  testID?: string                            // ID para testes
  
  // Props adicionais
  id?: string                                // ID HTML
}
```

## 🎯 Casos de Uso

### 1. Grupo de Radio Buttons (Básico)

```tsx
function PaymentOptions() {
  const [payment, setPayment] = useState('credit')
  
  return (
    <YStack gap="$3">
      <Text fontSize={16} fontWeight="600">Forma de Pagamento</Text>
      
      <RadioButton
        size="medium"
        function="input"
        label="Cartão de Crédito"
        value="credit"
        name="payment"
        checked={payment === 'credit'}
        onChange={setPayment}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="PIX"
        value="pix"
        name="payment"
        checked={payment === 'pix'}
        onChange={setPayment}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Dinheiro"
        value="cash"
        name="payment"
        checked={payment === 'cash'}
        onChange={setPayment}
      />
    </YStack>
  )
}
```

### 2. Com Validação de Erro

```tsx
function ValidatedForm() {
  const [selected, setSelected] = useState('')
  const [hasError, setHasError] = useState(false)
  
  const handleSubmit = () => {
    if (!selected) {
      setHasError(true)
      return
    }
    // Submeter...
  }
  
  return (
    <YStack gap="$3">
      <RadioButton
        size="medium"
        function="input"
        label="Opção 1"
        value="opt1"
        name="options"
        checked={selected === 'opt1'}
        onChange={(value) => {
          setSelected(value)
          setHasError(false)
        }}
        error={hasError && !selected}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Opção 2"
        value="opt2"
        name="options"
        checked={selected === 'opt2'}
        onChange={(value) => {
          setSelected(value)
          setHasError(false)
        }}
        error={hasError && !selected}
      />
      
      {hasError && !selected && (
        <Text color="$red10" fontSize={14}>
          Por favor, selecione uma opção
        </Text>
      )}
    </YStack>
  )
}
```

### 3. Com Opções Desabilitadas

```tsx
function DeliveryOptions() {
  const [delivery, setDelivery] = useState('standard')
  
  return (
    <YStack gap="$3">
      <RadioButton
        size="medium"
        function="input"
        label="Entrega Padrão (Grátis)"
        value="standard"
        checked={delivery === 'standard'}
        onChange={setDelivery}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Entrega Express (+R$ 10,00)"
        value="express"
        checked={delivery === 'express'}
        onChange={setDelivery}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Retirar na Loja (Indisponível)"
        value="pickup"
        checked={delivery === 'pickup'}
        onChange={setDelivery}
        disabled={true}
      />
    </YStack>
  )
}
```

### 4. Radio Single (Compacto)

```tsx
function CompactList() {
  const [selected, setSelected] = useState('item1')
  
  return (
    <YStack gap="$2">
      {['item1', 'item2', 'item3'].map((item) => (
        <XStack key={item} gap="$3" alignItems="center">
          <RadioButton
            size="small"
            function="single"
            value={item}
            checked={selected === item}
            onChange={setSelected}
          />
          <Text>{`Item ${item.slice(-1)}`}</Text>
        </XStack>
      ))}
    </YStack>
  )
}
```

## 🔄 Diferenças em Relação ao Checkbox

| Aspecto | RadioButton | Checkbox |
|---------|-------------|----------|
| **Seleção** | Única (apenas um por grupo) | Múltipla (vários podem estar checked) |
| **Border Radius** | Circular (16px) | Quadrado (4px/8px) |
| **Estados** | 2 (unchecked, checked) | 3 (unchecked, checked, indeterminate) |
| **Ícones** | Círculos | Checkboxes quadrados |
| **Grouping** | Por `name` (único valor por grupo) | Independente (cada um mantém seu estado) |

## ♿ Acessibilidade

O componente segue as melhores práticas de acessibilidade:

### ARIA Attributes

```tsx
<RadioButton
  // role="radio" (automático)
  // aria-checked="true" | "false" (baseado em checked)
  // aria-disabled="true" (quando disabled)
  // aria-invalid="true" (quando error)
  // aria-label={accessibilityLabel || label}
/>
```

### Navegação por Teclado

| Tecla | Ação |
|-------|------|
| `Tab` | Navega para o próximo radio |
| `Shift + Tab` | Navega para o radio anterior |
| `Space` | Seleciona o radio focado |
| `Enter` | Seleciona o radio focado |
| `Arrow Up/Down` | Navega entre radios do mesmo grupo |

### Screen Readers

- ✅ Anuncia o estado do radio (selecionado/não selecionado)
- ✅ Anuncia o label
- ✅ Anuncia se está desabilitado
- ✅ Anuncia se tem erro

## 🎨 Customização

### Tokens Utilizados

O componente usa tokens do Design System:

```typescript
// Tamanhos
tokens.radioButton.size.small.input.*
tokens.radioButton.size.medium.input.*
tokens.radioButton.size.small.single.*
tokens.radioButton.size.medium.single.*

// Estados (100% idênticos ao Checkbox)
tokens.radioButton.state.normal.enabled.*
tokens.radioButton.state.normal.hover.*
tokens.radioButton.state.normal.focus.*
tokens.radioButton.state.normal.active.*
tokens.radioButton.state.normal.disabled.*
tokens.radioButton.state.error.enabled.*
tokens.radioButton.state.error.hover.*
tokens.radioButton.state.error.focus.*
tokens.radioButton.state.error.active.*
tokens.radioButton.state.error.disabled.*
```

### Cores Utilizadas

```typescript
// Normal states
primitive.color.gray800      // Icon + Text (enabled)
primitive.color.gray850      // Icon + Text (hover/focus)
primitive.color.gray500      // Icon + Text (disabled)
primitive.color.gray100      // Background (hover)
primitive.color.gray200      // Background (focus/active)
primitive.color.gray300      // Border (hover)
primitive.color.gray650      // Border (focus)

// Error states
primitive.color.redDark      // Icon + Text (enabled)
primitive.color.black        // Icon + Text (hover/focus/active)
primitive.color.redLightest  // Background (hover/focus/active)
primitive.color.redDarkest   // Border (focus)
primitive.color.redLight     // Border (active)
```

## 📐 Especificações Técnicas

### Size Small + Input

```
Height: 36px
Padding: 8px (vertical e horizontal)
Border Radius: 8px (container), 16px (icon plate - circular)
Gap: 8px
Icon Plate: 20px × 20px
Typography: fontSize.small (14px), lineHeight.regular.small (20px)
```

### Size Medium + Input

```
Height: 48px
Padding: 12px (vertical e horizontal)
Border Radius: 12px (container), 16px (icon plate - circular)
Gap: 8px
Icon Plate: 24px × 24px
Typography: fontSize.medium (16px), lineHeight.regular.medium (24px)
```

### Size Small + Single

```
Size: 20px × 20px
Border Radius: 16px (circular)
Padding: 0px
```

### Size Medium + Single

```
Size: 24px × 24px
Border Radius: 16px (circular)
Padding: 0px
```

## 🧪 Testes

### Test IDs

```tsx
<RadioButton 
  testID="payment-credit"
  data-state="enabled"      // enabled | hover | focus | active | disabled
  data-checked={true}       // true | false
  data-error={false}        // true | false
/>
```

### Exemplo de Teste

```tsx
import { render, fireEvent } from '@testing-library/react'
import { RadioButton } from './RadioButton'

test('should select radio on click', () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(
    <RadioButton
      testID="my-radio"
      value="option1"
      onChange={handleChange}
    />
  )
  
  const radio = getByTestId('my-radio')
  fireEvent.click(radio)
  
  expect(handleChange).toHaveBeenCalledWith('option1')
})
```

## 🔍 Ver Também

- [QUICK_START.md](./QUICK_START.md) - Guia rápido de uso
- [RadioButton.stories.tsx](./RadioButton.stories.tsx) - Todas as variantes no Storybook
- [Checkbox](../Checkbox/README.md) - Componente relacionado (seleção múltipla)
- [Toggle](../Toggle/README.md) - Componente relacionado (switch on/off)

## 📝 Notas

### Comportamento de Grupo

Radios com o mesmo `name` funcionam como um grupo de seleção única:

```tsx
// Apenas um destes pode estar checked por vez
<RadioButton name="group1" value="opt1" checked={selected === 'opt1'} onChange={setSelected} />
<RadioButton name="group1" value="opt2" checked={selected === 'opt2'} onChange={setSelected} />
<RadioButton name="group1" value="opt3" checked={selected === 'opt3'} onChange={setSelected} />

// Este é um grupo diferente
<RadioButton name="group2" value="opt1" checked={otherSelected === 'opt1'} onChange={setOtherSelected} />
```

### Performance

- ✅ Componente leve e otimizado
- ✅ Estados internos gerenciados com `useState`
- ✅ Re-renders mínimos
- ✅ Sem dependências externas pesadas

### Limitações

- ❌ Não suporta estado `indeterminate` (diferente do Checkbox)
- ❌ Não suporta seleção múltipla (use Checkbox para isso)
- ❌ Border radius sempre circular (não customizável)

---

**82 variantes! Seleção única com border radius circular! 🎯**

