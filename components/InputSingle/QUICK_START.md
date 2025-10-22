# InputSingle - Quick Start

## 🚀 Uso Básico

```tsx
import { InputSingle } from '@/components/InputSingle'
import { useState } from 'react'

function MyForm() {
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

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | `''` | Valor do input |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do input |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `leadingIcon` | `React.ReactNode` | - | Ícone à esquerda |
| `trailingIcon` | `React.ReactNode` | - | Ícone à direita |

## 💡 Exemplos Rápidos

### Input Simples

```tsx
<InputSingle
  value={name}
  onChangeText={setName}
  placeholder="Nome"
/>
```

### Tamanho Small

```tsx
<InputSingle
  size="small"
  value={code}
  onChangeText={setCode}
  placeholder="Código"
/>
```

### Com Erro

```tsx
<InputSingle
  value={email}
  onChangeText={setEmail}
  placeholder="Email"
  error
/>
```

### Desabilitado

```tsx
<InputSingle
  value={cpf}
  disabled
  placeholder="CPF"
/>
```

### Com Ícones

```tsx
<InputSingle
  value={search}
  onChangeText={setSearch}
  placeholder="Buscar"
  leadingIcon={<SearchIcon />}
  trailingIcon={<ClearIcon />}
/>
```

## 🎯 Estados Automáticos

O InputSingle gerencia automaticamente seus estados visuais:

### Estado de Preenchimento
```tsx
// Normal (vazio) - detectado automaticamente
<InputSingle value="" placeholder="Vazio" />

// Filled (preenchido) - detectado automaticamente
<InputSingle value="Texto" placeholder="Preenchido" />
```

### Estado de Foco
```tsx
// Blurred (sem foco) - padrão
// Focused (com foco) - gerenciado automaticamente ao clicar

// Borda aumenta de 1px para 2px quando focado
<InputSingle value={text} onChangeText={setText} />
```

### Feedback
```tsx
// Normal - sem erro
<InputSingle value={text} onChangeText={setText} />

// Error - com erro
<InputSingle value={text} onChangeText={setText} error />
```

## 📐 Tamanhos

### Medium (48px altura)
```tsx
<InputSingle size="medium" {...props} />
```

### Small (36px altura)
```tsx
<InputSingle size="small" {...props} />
```

## 🎨 Combinações de Estados

O InputSingle combina 4 dimensões de estados:
- **2 Tamanhos:** Small, Medium
- **3 Preenchimentos:** Normal, Filled, Disabled
- **2 Focos:** Blurred, Focused
- **2 Feedbacks:** Normal, Error

Total: **24 combinações possíveis**

```tsx
// Exemplo: Medium + Filled + Focused + Error
<InputSingle
  size="medium"
  value="texto com erro"
  error
  // Clique para focar
/>
```

## 🔄 Casos de Uso Comuns

### Campo de Busca

```tsx
function SearchBar() {
  const [query, setQuery] = useState('')
  
  return (
    <InputSingle
      value={query}
      onChangeText={setQuery}
      placeholder="Buscar..."
      leadingIcon={<SearchIcon />}
    />
  )
}
```

### Campo com Validação

```tsx
function EmailInput() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  
  const validate = (text: string) => {
    setEmail(text)
    setError(!text.includes('@'))
  }
  
  return (
    <InputSingle
      value={email}
      onChangeText={validate}
      placeholder="seu@email.com"
      error={error}
    />
  )
}
```

### Campo Disabled

```tsx
<InputSingle
  value="Valor não editável"
  disabled
  placeholder="Somente leitura"
/>
```

### Formulário Completo

```tsx
function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })
  
  return (
    <YStack gap="$3">
      <InputSingle
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        placeholder="Nome completo"
      />
      
      <InputSingle
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        placeholder="Email"
      />
      
      <InputSingle
        size="small"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
        placeholder="Telefone"
      />
    </YStack>
  )
}
```

## ⚠️ Notas Importantes

1. **Estado Preenchido** - Detectado automaticamente baseado no valor
2. **Foco** - Gerenciado automaticamente, borda aumenta de 1px → 2px
3. **Disabled** - Não responde a foco, borda permanece 1px
4. **Error** - Muda cores de borda, placeholder e label
5. **Ícones** - Tamanho ajustado automaticamente ao tamanho do input

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./InputSingle.stories.tsx)
- [Especificação Figma](../../_context/component_data/InputSingle-clean.md)
- [Documentação de tokens](../../tokens.ts)

