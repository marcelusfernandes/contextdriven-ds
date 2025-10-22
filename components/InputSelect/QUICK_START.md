# InputSelect - Quick Start

## 🚀 Uso Básico

```tsx
import { InputSelect } from '@/components/InputSelect'
import { useState } from 'react'

function MyForm() {
  const [country, setCountry] = useState('')
  
  const countries = [
    { label: 'Brasil', value: 'br' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Argentina', value: 'ar' },
  ]
  
  return (
    <InputSelect
      value={country}
      onChange={setCountry}
      options={countries}
      placeholder="Selecione o país"
    />
  )
}
```

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | - | Valor selecionado |
| `onChange` | `(value: string) => void` | - | Callback quando seleção muda |
| `options` | `InputSelectOption[]` | - | Array de opções |
| `placeholder` | `string` | `'Selecione...'` | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do select |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Tipo InputSelectOption

```tsx
interface InputSelectOption {
  label: string  // Texto exibido
  value: string  // Valor da opção
}
```

## 💡 Exemplos Rápidos

### Select Simples

```tsx
const options = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' },
  { label: 'Opção 3', value: '3' },
]

<InputSelect
  value={selected}
  onChange={setSelected}
  options={options}
  placeholder="Selecione"
/>
```

### Tamanho Small

```tsx
<InputSelect
  size="small"
  value={category}
  onChange={setCategory}
  options={categories}
  placeholder="Categoria"
/>
```

### Com Erro

```tsx
<InputSelect
  value={state}
  onChange={setState}
  options={states}
  placeholder="Estado (obrigatório)"
  error
/>
```

### Desabilitado

```tsx
<InputSelect
  value={fixedValue}
  options={options}
  disabled
  placeholder="Não editável"
/>
```

## 🎯 Estados Automáticos

O InputSelect gerencia automaticamente seus estados visuais, **reutilizando 95% dos tokens do InputSingle**:

### Estado de Preenchimento
```tsx
// Normal (sem seleção) - detectado automaticamente
<InputSelect value={undefined} options={options} placeholder="Vazio" />

// Filled (com seleção) - detectado automaticamente
<InputSelect value="1" options={options} placeholder="Selecionado" />
```

### Estado de Foco
```tsx
// Blurred (sem foco) - padrão
// Focused (com foco) - gerenciado automaticamente ao clicar

// Borda aumenta de 1px para 2px quando focado
<InputSelect value={value} onChange={setValue} options={options} />
```

### Feedback
```tsx
// Normal - sem erro
<InputSelect value={value} onChange={setValue} options={options} />

// Error - com erro
<InputSelect value={value} onChange={setValue} options={options} error />
```

## 📐 Tamanhos

### Medium (48px altura)
```tsx
<InputSelect size="medium" {...props} />
```

### Small (36px altura)
```tsx
<InputSelect size="small" {...props} />
```

## 🔄 Casos de Uso Comuns

### Seleção de País

```tsx
function CountrySelector() {
  const [country, setCountry] = useState('')
  
  const countries = [
    { label: 'Brasil', value: 'br' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Argentina', value: 'ar' },
    { label: 'Chile', value: 'cl' },
  ]
  
  return (
    <InputSelect
      value={country}
      onChange={setCountry}
      options={countries}
      placeholder="Selecione o país"
    />
  )
}
```

### Com Validação

```tsx
function StateSelector() {
  const [state, setState] = useState('')
  const [error, setError] = useState(false)
  
  const validate = (value: string) => {
    setState(value)
    setError(!value) // Obrigatório
  }
  
  return (
    <InputSelect
      value={state}
      onChange={validate}
      options={stateOptions}
      placeholder="Estado (obrigatório)"
      error={error}
    />
  )
}
```

### Formulário Completo

```tsx
function AddressForm() {
  const [form, setForm] = useState({
    country: '',
    state: '',
    city: ''
  })
  
  return (
    <YStack gap="$3">
      <InputSelect
        value={form.country}
        onChange={(val) => setForm({ ...form, country: val })}
        options={countryOptions}
        placeholder="País"
      />
      
      <InputSelect
        value={form.state}
        onChange={(val) => setForm({ ...form, state: val })}
        options={stateOptions}
        placeholder="Estado"
      />
      
      <InputSelect
        size="small"
        value={form.city}
        onChange={(val) => setForm({ ...form, city: val })}
        options={cityOptions}
        placeholder="Cidade"
      />
    </YStack>
  )
}
```

### Seleção Dinâmica

```tsx
function DynamicSelect() {
  const [category, setCategory] = useState('')
  const [subcategory, setSubcategory] = useState('')
  
  const categories = [
    { label: 'Eletrônicos', value: 'electronics' },
    { label: 'Roupas', value: 'clothes' },
  ]
  
  // Subcategorias mudam baseadas na categoria
  const subcategories = category === 'electronics'
    ? [
        { label: 'Celulares', value: 'phones' },
        { label: 'Notebooks', value: 'laptops' },
      ]
    : [
        { label: 'Camisetas', value: 'shirts' },
        { label: 'Calças', value: 'pants' },
      ]
  
  return (
    <YStack gap="$3">
      <InputSelect
        value={category}
        onChange={(val) => {
          setCategory(val)
          setSubcategory('') // Reset subcategoria
        }}
        options={categories}
        placeholder="Categoria"
      />
      
      <InputSelect
        value={subcategory}
        onChange={setSubcategory}
        options={subcategories}
        placeholder="Subcategoria"
        disabled={!category}
      />
    </YStack>
  )
}
```

## ⚠️ Notas Importantes

1. **Baseado no InputSingle** - Reutiliza 95% dos tokens de cores
2. **Trailing Icon** - ChevronDown sempre presente
3. **Estado Preenchido** - Detectado automaticamente pelo valor
4. **Foco** - Gerenciado automaticamente, borda aumenta 1px → 2px
5. **Disabled** - Não responde a foco ou clique, borda permanece 1px
6. **Error** - Muda cores de borda, placeholder e ícone
7. **Dropdown Menu** - Implementação do menu de opções pode usar biblioteca externa

## 🆚 Diferenças do InputSingle

| Característica | InputSingle | InputSelect |
|----------------|-------------|-------------|
| Editável | Sim (digitação) | Não (seleção) |
| Ícones | Leading/Trailing opcionais | Trailing (ChevronDown) obrigatório |
| Comportamento | Input de texto | Abre dropdown |
| Cores | Tokens próprios | Reutiliza InputSingle 95% |
| Estados | 24 variantes | 24 variantes |

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./InputSelect.stories.tsx)
- [Especificação Figma](../../_context/component_data/InputSelect-clean.md)
- [InputSingle](../InputSingle/README.md) - Componente base
- [Documentação de tokens](../../tokens.ts)

