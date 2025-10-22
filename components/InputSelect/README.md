# InputSelect

Campo de seleção dropdown - baseado no InputSingle com trailing icon obrigatório.

## 📋 Visão Geral

**InputSelect** é o componente de seleção dropdown do design system. Baseado em 95% do InputSingle, reutiliza todos os seus tokens de cores e estados, adicionando apenas um trailing icon (ChevronDown) obrigatório.

### Características Principais

- ✨ **95% Baseado no InputSingle:** Reutiliza cores e estados
- ✨ **Trailing Icon:** ChevronDown sempre presente
- ✨ **Não Editável:** Campo de seleção, não input de texto
- ✨ **Dropdown:** Abre menu de opções ao clicar
- ✨ **Estados Automáticos:** Detecta seleção e gerencia foco
- ✨ **Borda Dinâmica:** Aumenta de 1px para 2px quando focado
- ✨ **Acessível:** Labels, hints e estados para screen readers
- ✨ **Type-safe:** TypeScript com tipos completos

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de seleção de opção única em formulários
- Precisar de dropdown de categorias, países, estados
- Qualquer campo que precise escolher entre opções pré-definidas
- Base para InputField com type="select"

❌ **Não use quando:**
- Precisar de input de texto livre (use InputSingle)
- Precisar de múltiplas seleções (use Checkbox group)
- Precisar de input com label e metadados (use InputField)

## 📦 Instalação

```tsx
import { InputSelect } from '@/components/InputSelect'
```

## 🚀 Uso Básico

```tsx
import { InputSelect } from '@/components/InputSelect'
import { useState } from 'react'

function MyComponent() {
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

## 🎨 Estados e Variantes

### Dimensões de Estados

O InputSelect combina **4 dimensões de estados** (mesmas do InputSingle):

#### 1. Tamanho (2 opções)
- **Small:** 36px de altura
- **Medium:** 48px de altura (padrão)

#### 2. Preenchimento (3 opções)
- **Normal:** Sem seleção (vazio)
- **Filled:** Com seleção (preenchido)
- **Disabled:** Desabilitado (não editável)

#### 3. Foco (2 opções)
- **Blurred:** Sem foco (borda 1px)
- **Focused:** Com foco (borda 2px)

#### 4. Feedback (2 opções)
- **Normal:** Sem erro
- **Error:** Com erro (borda vermelha)

**Total:** 2 × 3 × 2 × 2 = **24 combinações possíveis**

### Diferenças do InputSingle

| Característica | InputSingle | InputSelect |
|----------------|-------------|-------------|
| **Editável** | Sim (digitação) | Não (seleção) |
| **Ícones** | Leading/Trailing opcionais | Trailing (ChevronDown) obrigatório |
| **Comportamento** | Input de texto | Abre dropdown |
| **Cores** | Tokens próprios | Reutiliza InputSingle 95% |
| **Estados** | 24 variantes | 24 variantes |
| **Trailing Icon Color** | - | Específico por estado |

### Tamanhos

#### Medium (48px altura)
```tsx
<InputSelect
  size="medium"  // padrão
  value={category}
  onChange={setCategory}
  options={categoryOptions}
  placeholder="Categoria"
/>
```

#### Small (36px altura)
```tsx
<InputSelect
  size="small"
  value={type}
  onChange={setType}
  options={typeOptions}
  placeholder="Tipo"
/>
```

### Estados de Preenchimento

Os estados são **detectados automaticamente**:

#### Normal (sem seleção)
```tsx
<InputSelect
  value={undefined}  // ou value=""
  options={options}
  placeholder="Selecione uma opção"
/>
```

#### Filled (com seleção)
```tsx
<InputSelect
  value="br"  // valor selecionado
  options={countryOptions}
  placeholder="País"
/>
```

#### Disabled (desabilitado)
```tsx
<InputSelect
  value="fixed"
  options={options}
  disabled  // explícito
  placeholder="Não editável"
/>
```

### Estados de Foco

O foco é **gerenciado automaticamente**:

#### Blurred (sem foco)
- Estado padrão
- Borda de 1px
- Cores normais

#### Focused (com foco)
- Ao clicar no select
- Borda de 2px (exceto disabled)
- Cores intensificadas

### Feedback

#### Normal (sem erro)
```tsx
<InputSelect
  value={value}
  onChange={setValue}
  options={options}
  error={false}  // padrão
/>
```

#### Error (com erro)
```tsx
<InputSelect
  value={value}
  onChange={setValue}
  options={options}
  error  // borda vermelha + ícone vermelho
/>
```

## 🎨 Trailing Icon

O InputSelect **sempre** exibe um trailing icon (ChevronDown):

### Cores do Ícone

| Estado | Feedback Normal | Feedback Error |
|--------|----------------|----------------|
| Normal/Filled | gray800 | redDark |
| Disabled | gray500 | gray500 |

```tsx
// Normal - ícone gray800
<InputSelect value={value} options={options} />

// Error - ícone redDark
<InputSelect value={value} options={options} error />

// Disabled - ícone gray500
<InputSelect value={value} options={options} disabled />
```

## 📐 Props

### Obrigatórias

| Prop | Tipo | Descrição |
|------|------|-----------|
| `options` | `InputSelectOption[]` | Array de opções |

### Opcionais - Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | - | Valor selecionado |
| `onChange` | `(value: string) => void` | - | Callback quando seleção muda |
| `placeholder` | `string` | `'Selecione...'` | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do select |

### Opcionais - Estados

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Opcionais - Label

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Label flutuante (experimental) |

### Opcionais - Acessibilidade

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibilityLabel` | `string` | `placeholder` | Label para screen readers |
| `accessibilityHint` | `string` | - | Hint para screen readers |
| `testID` | `string` | - | ID para testes |

### Opcionais - Callbacks

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `onFocus` | `() => void` | - | Callback ao focar |
| `onBlur` | `() => void` | - | Callback ao desfocar |

### Tipo InputSelectOption

```tsx
interface InputSelectOption {
  label: string  // Texto exibido no select
  value: string  // Valor interno da opção
}
```

## 💡 Exemplos Avançados

### Seleção de País

```tsx
function CountrySelector() {
  const [country, setCountry] = useState('')
  
  const countries = [
    { label: 'Brasil', value: 'br' },
    { label: 'Estados Unidos', value: 'us' },
    { label: 'Argentina', value: 'ar' },
    { label: 'Chile', value: 'cl' },
    { label: 'Colômbia', value: 'co' },
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

### Com Validação em Tempo Real

```tsx
function ValidatedSelect() {
  const [state, setState] = useState('')
  const [touched, setTouched] = useState(false)
  
  const isValid = state !== ''
  const showError = touched && !isValid
  
  return (
    <YStack gap="$2">
      <InputSelect
        value={state}
        onChange={setState}
        options={stateOptions}
        placeholder="Estado (obrigatório)"
        error={showError}
        onBlur={() => setTouched(true)}
      />
      {showError && (
        <Text color="$red">Este campo é obrigatório</Text>
      )}
    </YStack>
  )
}
```

### Seleção Dinâmica (Cascata)

```tsx
function CascadingSelect() {
  const [category, setCategory] = useState('')
  const [subcategory, setSubcategory] = useState('')
  
  const categories = [
    { label: 'Eletrônicos', value: 'electronics' },
    { label: 'Roupas', value: 'clothes' },
    { label: 'Alimentos', value: 'food' },
  ]
  
  // Subcategorias mudam baseadas na categoria selecionada
  const getSubcategories = () => {
    switch (category) {
      case 'electronics':
        return [
          { label: 'Celulares', value: 'phones' },
          { label: 'Notebooks', value: 'laptops' },
          { label: 'TVs', value: 'tvs' },
        ]
      case 'clothes':
        return [
          { label: 'Camisetas', value: 'shirts' },
          { label: 'Calças', value: 'pants' },
          { label: 'Sapatos', value: 'shoes' },
        ]
      case 'food':
        return [
          { label: 'Frutas', value: 'fruits' },
          { label: 'Vegetais', value: 'vegetables' },
          { label: 'Carnes', value: 'meats' },
        ]
      default:
        return []
    }
  }
  
  return (
    <YStack gap="$3">
      <InputSelect
        value={category}
        onChange={(val) => {
          setCategory(val)
          setSubcategory('') // Reset subcategoria ao mudar categoria
        }}
        options={categories}
        placeholder="Categoria"
      />
      
      <InputSelect
        value={subcategory}
        onChange={setSubcategory}
        options={getSubcategories()}
        placeholder="Subcategoria"
        disabled={!category} // Desabilitado até selecionar categoria
      />
    </YStack>
  )
}
```

### Formulário Completo de Endereço

```tsx
function AddressForm() {
  const [form, setForm] = useState({
    country: '',
    state: '',
    city: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const updateField = (field: string) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // Validação...
  }
  
  return (
    <YStack gap="$4">
      <InputSelect
        size="medium"
        value={form.country}
        onChange={updateField('country')}
        options={countryOptions}
        placeholder="País"
        error={!!errors.country}
      />
      
      <InputSelect
        size="medium"
        value={form.state}
        onChange={updateField('state')}
        options={stateOptions}
        placeholder="Estado"
        error={!!errors.state}
        disabled={!form.country}
      />
      
      <InputSelect
        size="small"
        value={form.city}
        onChange={updateField('city')}
        options={cityOptions}
        placeholder="Cidade"
        error={!!errors.city}
        disabled={!form.state}
      />
    </YStack>
  )
}
```

### Select com Valor Pré-selecionado

```tsx
function PreselectedSelect() {
  const [language, setLanguage] = useState('pt-BR') // Pré-selecionado
  
  const languages = [
    { label: 'Português (Brasil)', value: 'pt-BR' },
    { label: 'English (US)', value: 'en-US' },
    { label: 'Español', value: 'es' },
  ]
  
  return (
    <InputSelect
      value={language}
      onChange={setLanguage}
      options={languages}
      placeholder="Idioma"
    />
  )
}
```

## ♿ Acessibilidade

O InputSelect implementa práticas de acessibilidade:

### Role e States
```tsx
<InputSelect
  value={value}
  onChange={setValue}
  options={options}
  // accessibilityRole="combobox" - automático
  // accessibilityState={{ expanded: isOpen, disabled }} - automático
/>
```

### Labels e Hints
```tsx
<InputSelect
  value={country}
  onChange={setCountry}
  options={countryOptions}
  placeholder="País"
  accessibilityLabel="Seleção de país"
  accessibilityHint="Selecione o país de residência"
/>
```

### Estados Comunicados
- Estados error/disabled são comunicados a screen readers
- Estado expanded indica se o dropdown está aberto
- Mudanças de seleção são anunciadas

## 🎨 Tokens Utilizados

O InputSelect usa tokens do design system:

### Spacing (reutilizados do InputSingle)
- `inputSelect.size.{size}.paddingVertical/Horizontal`
- `inputSelect.size.{size}.height`
- `inputSelect.size.{size}.gap`

### Typography (reutilizados do InputSingle)
- `inputSelect.size.{size}.fontSize`
- `inputSelect.size.{size}.lineHeight`

### Colors (reutilizados do InputSingle)
- `inputSingle.state.{feedback}.{focus}.{fill}.textColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.placeholderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.bg`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderWidth`

### Trailing Icon (próprio)
- `inputSelect.size.{size}.iconSize` - Tamanho do ícone (20px)
- `inputSelect.trailingIcon.{feedback}.{focus}.{fill}` - Cor do ícone

### Border (reutilizado)
- `inputSelect.size.{size}.borderRadius`
- Border width: 1px (blurred) ou 2px (focused), exceto disabled

## 🔧 Notas Técnicas

### Reutilização de Tokens

O InputSelect **reutiliza 95% dos tokens do InputSingle**:

```tsx
// Cores de bg, border, text são as mesmas
const stateTokens = tokens.inputSingle.state[feedback][focusState][fillState]

// Apenas trailing icon tem tokens específicos
const iconColor = tokens.inputSelect.trailingIcon[feedback][focusState][fillState]
```

### Trailing Icon Obrigatório

Diferente do InputSingle (ícones opcionais), o InputSelect **sempre** exibe o ChevronDown:
- Indica visualmente que é um campo de seleção
- Cor muda baseada em estados (normal/error/disabled)
- Sempre no lado direito (trailing)

### Implementação do Dropdown

A implementação básica fornecida não inclui o menu dropdown completo. Considere:

**Opção 1: Biblioteca Externa**
```tsx
import { Select } from '@radix-ui/react-select'
// Ou outra biblioteca de select
```

**Opção 2: Implementação Customizada**
- Portal para renderizar menu fora do container
- Gerenciamento de abertura/fechamento
- Navegação por teclado (arrow keys)
- Rolagem de opções longas

## 🚀 Performance

- Componentes styled memoizados
- Atualizações apenas quando props relevantes mudam
- Reutilização máxima de tokens (menos sobrecarga)
- Detecção de estados otimizada

## 🔗 Componentes Relacionados

- **[InputSingle](../InputSingle/README.md)** - Componente base (reutiliza 95% dos tokens)
- **[InputField](../InputField/README.md)** - Wrapper com label, notification e counter
- **[InputTextarea](../InputTextarea/README.md)** - Input multilinhas

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./InputSelect.stories.tsx) - 24 variantes no Storybook
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/InputSelect-clean.md) - Design original
- [InputSingle](../InputSingle/README.md) - Componente base

## 🐛 Troubleshooting

### Opções não aparecem ao clicar
A implementação básica não inclui o dropdown menu. Você precisa:
1. Adicionar biblioteca como @radix-ui/react-select
2. Ou implementar dropdown customizado

### Ícone não muda de cor
Certifique-se de que `error` ou `disabled` estão corretos:
```tsx
<InputSelect
  error={true}  // ✅ ícone fica vermelho
  disabled={true}  // ✅ ícone fica cinza
/>
```

### Borda não muda ao focar
Certifique-se de que não está disabled:
```tsx
<InputSelect
  disabled={false}  // ✅
  {...props}
/>
```

### Valor não aparece selecionado
Certifique-se de que o `value` corresponde a um `value` nas opções:
```tsx
const options = [
  { label: 'Brasil', value: 'br' },  // value deve ser 'br'
]

<InputSelect
  value="br"  // ✅ correto
  value="Brasil"  // ❌ errado (deve ser value, não label)
  options={options}
/>
```

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé  
**Baseado em:** [InputSingle](../InputSingle/README.md) (95% de reutilização)

