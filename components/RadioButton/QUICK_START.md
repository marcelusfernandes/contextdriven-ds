# RadioButton - Guia Rápido

## 🚀 Uso Básico

```tsx
import { RadioButton } from '@/components/RadioButton'

// Radio button simples
<RadioButton
  size="medium"
  function="input"
  label="Aceito os termos"
  value="terms"
  checked={selected === 'terms'}
  onChange={setSelected}
/>
```

## 📋 Grupo de Radio Buttons

```tsx
import { useState } from 'react'
import { RadioButton } from '@/components/RadioButton'

function RadioGroup() {
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
      
      <RadioButton
        size="medium"
        function="input"
        label="Opção 3"
        value="option3"
        name="myGroup"
        checked={selected === 'option3'}
        onChange={setSelected}
      />
    </>
  )
}
```

## 🎨 Variantes

### Tamanhos

```tsx
// Small (36px)
<RadioButton size="small" label="Small" />

// Medium (48px) - Padrão
<RadioButton size="medium" label="Medium" />
```

### Functions

```tsx
// Input: Radio com label (clickable area maior)
<RadioButton 
  function="input" 
  label="Com label" 
/>

// Single: Apenas radio (tamanho mínimo)
<RadioButton function="single" />
```

## 🎯 Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do radio |
| `function` | `'input' \| 'single'` | `'input'` | Tipo (com/sem label) |
| `label` | `string` | - | Label (apenas para `input`) |
| `checked` | `boolean` | `false` | Estado de seleção |
| `value` | `string` | - | Valor do radio no grupo |
| `name` | `string` | - | Nome do grupo |
| `onChange` | `(value: string) => void` | - | Callback de mudança |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

## ⚠️ Estados Especiais

### Error State

```tsx
<RadioButton
  label="Opção inválida"
  value="invalid"
  error={true}
  checked={selected === 'invalid'}
  onChange={setSelected}
/>
```

### Disabled State

```tsx
<RadioButton
  label="Opção desabilitada"
  disabled={true}
/>
```

## 🔄 Diferenças em relação ao Checkbox

1. **Seleção Única:** Apenas um radio pode ser selecionado por grupo (mesmo `name`)
2. **Border Radius Circular:** Sempre circular, não quadrado
3. **Sem Indeterminate:** Apenas 2 estados (checked/unchecked)
4. **Ícones Diferentes:** Círculos ao invés de checkboxes

## ✅ Boas Práticas

1. **Use `name` para agrupar:** Radios com mesmo `name` funcionam como grupo
2. **Use `value` único:** Cada radio deve ter um `value` diferente
3. **Labels descritivos:** Use labels claros para melhor UX
4. **Error handling:** Use `error` para validação de formulários
5. **Disabled state:** Desabilite opções indisponíveis

## 📱 Acessibilidade

- ✅ `role="radio"` automático
- ✅ `aria-checked` baseado no estado
- ✅ `aria-disabled` quando disabled
- ✅ `aria-invalid` quando error
- ✅ Navegação por teclado (Space/Enter)
- ✅ Focus visible

## 📦 Exemplo Completo

```tsx
import { useState } from 'react'
import { RadioButton } from '@/components/RadioButton'
import { YStack, Text } from 'tamagui'

function DeliveryForm() {
  const [delivery, setDelivery] = useState('standard')
  const [hasError, setHasError] = useState(false)
  
  const handleSubmit = () => {
    if (!delivery) {
      setHasError(true)
      return
    }
    // Submeter formulário
  }
  
  return (
    <YStack gap="$3">
      <Text fontSize={16} fontWeight="600">
        Tipo de Entrega
      </Text>
      
      <RadioButton
        size="medium"
        function="input"
        label="Entrega Padrão (Grátis)"
        value="standard"
        name="delivery"
        checked={delivery === 'standard'}
        onChange={setDelivery}
        error={hasError && !delivery}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Entrega Express (+R$ 10,00)"
        value="express"
        name="delivery"
        checked={delivery === 'express'}
        onChange={setDelivery}
        error={hasError && !delivery}
      />
      
      <RadioButton
        size="medium"
        function="input"
        label="Retirar na Loja"
        value="pickup"
        name="delivery"
        checked={delivery === 'pickup'}
        onChange={setDelivery}
        error={hasError && !delivery}
        disabled={true}
      />
      
      {hasError && !delivery && (
        <Text color="$red10" fontSize={14}>
          Por favor, selecione um tipo de entrega
        </Text>
      )}
    </YStack>
  )
}
```

## 🎨 Personalizações Avançadas

### Com Container Customizado

```tsx
<YStack 
  gap="$4" 
  padding="$4" 
  backgroundColor="$gray2" 
  borderRadius="$4"
>
  <RadioButton
    size="medium"
    function="input"
    label="Opção 1"
    value="opt1"
    checked={selected === 'opt1'}
    onChange={setSelected}
  />
  
  <RadioButton
    size="medium"
    function="input"
    label="Opção 2"
    value="opt2"
    checked={selected === 'opt2'}
    onChange={setSelected}
  />
</YStack>
```

## 🔍 Ver mais

- [README.md](./README.md) - Documentação completa
- [RadioButton.stories.tsx](./RadioButton.stories.tsx) - Todas as variantes
- [Storybook](http://localhost:6006/?path=/docs/components-radiobutton--docs) - Documentação interativa

