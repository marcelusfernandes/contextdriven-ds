# InputSingle

Campo de entrada de texto de linha única - componente base do sistema de inputs.

## 📋 Visão Geral

**InputSingle** é o componente fundamental para todos os inputs do design system. Ele gerencia automaticamente 4 dimensões de estados, combinando tamanho, preenchimento, foco e feedback para criar 24 variantes visuais distintas.

### Características Principais

- ✨ **Estados Automáticos:** Detecta preenchimento e gerencia foco automaticamente
- ✨ **Borda Dinâmica:** Aumenta de 1px para 2px quando focado (exceto disabled)
- ✨ **Cores Contextuais:** Muda cores baseadas em feedback e estado
- ✨ **Suporte a Ícones:** Leading e trailing icons
- ✨ **Acessível:** Labels, hints e estados para screen readers
- ✨ **Type-safe:** TypeScript com tipos completos

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de input de linha única para formulários
- Precisar de campo de busca
- Precisar de validação visual (erro)
- For base para componentes mais complexos (InputField, InputSelect)

❌ **Não use quando:**
- Precisar de múltiplas linhas (use InputTextarea)
- Precisar de seleção de opções (use InputSelect)
- Precisar de input com label e metadados (use InputField)

## 📦 Instalação

```tsx
import { InputSingle } from '@/components/InputSingle'
```

## 🚀 Uso Básico

```tsx
import { InputSingle } from '@/components/InputSingle'
import { useState } from 'react'

function MyComponent() {
  const [text, setText] = useState('')
  
  return (
    <InputSingle
      value={text}
      onChangeText={setText}
      placeholder="Digite algo"
    />
  )
}
```

## 🎨 Estados e Variantes

### Dimensões de Estados

O InputSingle combina **4 dimensões de estados**:

#### 1. Tamanho (2 opções)
- **Small:** 36px de altura
- **Medium:** 48px de altura (padrão)

#### 2. Preenchimento (3 opções)
- **Normal:** Vazio (sem texto)
- **Filled:** Preenchido (com texto)
- **Disabled:** Desabilitado (não editável)

#### 3. Foco (2 opções)
- **Blurred:** Sem foco (borda 1px)
- **Focused:** Com foco (borda 2px)

#### 4. Feedback (2 opções)
- **Normal:** Sem erro
- **Error:** Com erro (borda vermelha)

**Total:** 2 × 3 × 2 × 2 = **24 combinações possíveis**

### Tamanhos

#### Medium (48px)
```tsx
<InputSingle
  size="medium"  // padrão
  value={text}
  onChangeText={setText}
  placeholder="Input médio"
/>
```

#### Small (36px)
```tsx
<InputSingle
  size="small"
  value={code}
  onChangeText={setCode}
  placeholder="Input pequeno"
/>
```

### Estados de Preenchimento

Os estados de preenchimento são **detectados automaticamente**:

#### Normal (vazio)
```tsx
<InputSingle
  value=""  // vazio = normal
  placeholder="Digite algo"
/>
```

#### Filled (preenchido)
```tsx
<InputSingle
  value="Texto"  // com valor = filled
  placeholder="Digite algo"
/>
```

#### Disabled (desabilitado)
```tsx
<InputSingle
  value="Não editável"
  disabled  // explícito
  placeholder="Desabilitado"
/>
```

### Estados de Foco

O foco é **gerenciado automaticamente**:

#### Blurred (sem foco)
- Estado padrão
- Borda de 1px
- Cores normais

#### Focused (com foco)
- Ao clicar no input
- Borda de 2px (exceto disabled)
- Cores intensificadas

```tsx
<InputSingle
  value={text}
  onChangeText={setText}
  // Foco gerenciado automaticamente ao clicar
/>
```

### Feedback

#### Normal (sem erro)
```tsx
<InputSingle
  value={text}
  onChangeText={setText}
  error={false}  // padrão
/>
```

#### Error (com erro)
```tsx
<InputSingle
  value={text}
  onChangeText={setText}
  error  // borda vermelha
/>
```

## 🎨 Funcionalidades Avançadas

### Ícones

#### Leading Icon (esquerda)
```tsx
<InputSingle
  value={search}
  onChangeText={setSearch}
  placeholder="Buscar"
  leadingIcon={<SearchIcon />}
/>
```

#### Trailing Icon (direita)
```tsx
<InputSingle
  value={password}
  onChangeText={setPassword}
  placeholder="Senha"
  trailingIcon={<EyeIcon />}
/>
```

#### Ambos
```tsx
<InputSingle
  value={search}
  onChangeText={setSearch}
  placeholder="Buscar"
  leadingIcon={<SearchIcon />}
  trailingIcon={<ClearIcon />}
/>
```

### Callbacks

#### onFocus / onBlur
```tsx
<InputSingle
  value={text}
  onChangeText={setText}
  onFocus={() => console.log('Focado')}
  onBlur={() => console.log('Desfocado')}
/>
```

## 📐 Props

### Obrigatórias

Nenhuma prop é obrigatória, mas recomendamos pelo menos `value` e `onChangeText`.

### Opcionais - Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | `''` | Valor do input |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do input |

### Opcionais - Estados

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Opcionais - Ícones

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `leadingIcon` | `React.ReactNode` | - | Ícone à esquerda |
| `trailingIcon` | `React.ReactNode` | - | Ícone à direita |

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

## 💡 Exemplos Avançados

### Campo de Busca

```tsx
function SearchBar() {
  const [query, setQuery] = useState('')
  
  const handleClear = () => {
    setQuery('')
  }
  
  return (
    <InputSingle
      value={query}
      onChangeText={setQuery}
      placeholder="Buscar produtos..."
      leadingIcon={<SearchIcon />}
      trailingIcon={query ? <ClearIcon onPress={handleClear} /> : null}
    />
  )
}
```

### Campo com Validação em Tempo Real

```tsx
function EmailInput() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  
  const isValid = email.includes('@') && email.includes('.')
  const showError = touched && !isValid && email.length > 0
  
  return (
    <InputSingle
      value={email}
      onChangeText={setEmail}
      placeholder="seu@email.com"
      error={showError}
      onBlur={() => setTouched(true)}
      leadingIcon={<EmailIcon />}
      trailingIcon={isValid ? <CheckIcon color="green" /> : null}
    />
  )
}
```

### Campo de Senha com Visibilidade

```tsx
function PasswordInput() {
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  
  return (
    <InputSingle
      value={password}
      onChangeText={setPassword}
      placeholder="Senha"
      leadingIcon={<LockIcon />}
      trailingIcon={
        <EyeIcon
          onPress={() => setVisible(!visible)}
          variant={visible ? 'open' : 'closed'}
        />
      }
    />
  )
}
```

### Formulário com Múltiplos Inputs

```tsx
function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const updateField = (field: string) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // Validar campo...
  }
  
  return (
    <YStack gap="$3">
      <InputSingle
        size="medium"
        value={form.name}
        onChangeText={updateField('name')}
        placeholder="Nome completo"
        error={!!errors.name}
      />
      
      <InputSingle
        size="medium"
        value={form.email}
        onChangeText={updateField('email')}
        placeholder="Email"
        error={!!errors.email}
        leadingIcon={<EmailIcon />}
      />
      
      <InputSingle
        size="small"
        value={form.phone}
        onChangeText={updateField('phone')}
        placeholder="Telefone"
        leadingIcon={<PhoneIcon />}
      />
      
      <InputSingle
        size="small"
        value={form.cpf}
        disabled
        placeholder="CPF (preenchido automaticamente)"
      />
    </YStack>
  )
}
```

### Campo com Máscara

```tsx
function PhoneInput() {
  const [phone, setPhone] = useState('')
  
  const applyMask = (text: string) => {
    // Remove não-números
    const numbers = text.replace(/\D/g, '')
    
    // Aplica máscara (00) 00000-0000
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }
  
  return (
    <InputSingle
      value={phone}
      onChangeText={(text) => setPhone(applyMask(text))}
      placeholder="(00) 00000-0000"
      leadingIcon={<PhoneIcon />}
    />
  )
}
```

## ♿ Acessibilidade

O InputSingle implementa práticas de acessibilidade:

### Labels e Hints
```tsx
<InputSingle
  value={email}
  onChangeText={setEmail}
  placeholder="Email"
  accessibilityLabel="Email para login"
  accessibilityHint="Digite seu melhor email"
/>
```

### Estados Comunicados
- Estados error/disabled são comunicados a screen readers
- Mudanças de foco são anunciadas
- Ícones recebem labels apropriados

## 🎨 Tokens Utilizados

O InputSingle usa tokens do design system:

### Spacing
- `inputSingle.size.{size}.paddingVertical/Horizontal`
- `inputSingle.size.{size}.gap`

### Typography
- `inputSingle.size.{size}.fontSize`
- `inputSingle.size.{size}.lineHeight`

### Colors
Estados determinam as cores:
- `inputSingle.state.{feedback}.{focus}.{fill}.textColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.placeholderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.labelColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.bg`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderWidth`

### Border
- `inputSingle.size.{size}.borderRadius`
- Border width: 1px (blurred) ou 2px (focused), exceto disabled

## 🔧 Notas Técnicas

### Estados Automáticos

#### Detecção de Preenchimento
```tsx
// Normal: value === ''
// Filled: value !== ''
// Disabled: disabled === true (sobrepõe)
```

#### Gerenciamento de Foco
```tsx
// Blurred: onBlur chamado
// Focused: onFocus chamado
// Disabled: não responde a foco
```

### Borda Dinâmica

A borda aumenta quando focado, **exceto** quando disabled:

```tsx
// Normal/Filled + Focused: borderWidth = 2
// Normal/Filled + Blurred: borderWidth = 1
// Disabled + (any focus): borderWidth = 1
```

### Cores Contextuais

As cores mudam baseadas em múltiplos estados:

```tsx
const tokens = getStateTokens(
  error ? 'error' : 'normal',  // feedback
  isFocused,                    // foco
  getFillState(value, disabled) // preenchimento
)
```

## 🚀 Performance

- Componentes styled memoizados
- Atualizações apenas quando props relevantes mudam
- Detecção de estados otimizada
- Sem cálculos pesados em render

## 🔗 Componentes Relacionados

- **[InputField](../InputField/README.md)** - Wrapper com label, notification e counter
- **InputTextarea** (futuro) - Input de múltiplas linhas
- **InputSelect** (futuro) - Seleção de opções

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./InputSingle.stories.tsx) - 24 variantes no Storybook
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/InputSingle-clean.md) - Design original

## 🐛 Troubleshooting

### Borda não muda ao focar
Certifique-se de que o input não está disabled:
```tsx
<InputSingle
  disabled={false}  // ✅
  {...props}
/>
```

### Cores não mudam com erro
Certifique-se de passar a prop `error`:
```tsx
<InputSingle
  error={true}  // ✅
  {...props}
/>
```

### Input não atualiza
Certifique-se de usar `onChangeText`, não `onChange`:
```tsx
<InputSingle
  value={text}
  onChangeText={setText}  // ✅ correto
  onChange={...}          // ❌ errado
/>
```

### Ícones não aparecem
Certifique-se de passar componentes React:
```tsx
<InputSingle
  leadingIcon={<SearchIcon />}  // ✅ correto
  leadingIcon="search"          // ❌ errado
/>
```

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé

