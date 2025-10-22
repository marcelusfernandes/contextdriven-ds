# InputField - Quick Start

## 🚀 Uso Básico

```tsx
import { InputField } from '@/components/InputField'

function MyForm() {
  const [name, setName] = useState('')
  
  return (
    <InputField
      label="Nome completo"
      value={name}
      onChangeText={setName}
      placeholder="Digite seu nome"
    />
  )
}
```

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Label do campo (obrigatório) |
| `value` | `string` | `''` | Valor do input |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder do input |
| `type` | `'single' \| 'textarea'` | `'single'` | Tipo de input |
| `optional` | `boolean` | `false` | Se o campo é opcional |
| `notification` | `string` | - | Mensagem de ajuda/erro |
| `showCounter` | `boolean` | `false` | Mostrar contador |
| `maxLength` | `number` | - | Limite de caracteres |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

## 💡 Exemplos Rápidos

### Campo Obrigatório

```tsx
<InputField
  label="Email"
  value={email}
  onChangeText={setEmail}
  placeholder="seu@email.com"
  notification="Digite um email válido"
/>
```

### Campo Opcional

```tsx
<InputField
  label="Telefone"
  optional
  value={phone}
  onChangeText={setPhone}
  placeholder="(00) 00000-0000"
/>
```

### Campo com Erro

```tsx
<InputField
  label="Email"
  value={email}
  onChangeText={setEmail}
  error
  notification="Email inválido"
/>
```

### Campo Desabilitado

```tsx
<InputField
  label="CPF"
  value={cpf}
  disabled
  notification="Campo não editável"
/>
```

### Textarea

```tsx
<InputField
  label="Mensagem"
  type="textarea"
  value={message}
  onChangeText={setMessage}
  placeholder="Digite sua mensagem"
/>
```

### Com Contador

```tsx
<InputField
  label="Nome"
  value={name}
  onChangeText={setName}
  showCounter
  maxLength={50}
/>
```

### Textarea com Contador e Limite

```tsx
<InputField
  label="Descrição"
  type="textarea"
  value={description}
  onChangeText={setDescription}
  showCounter
  maxLength={150}
  notification="Máximo 150 caracteres"
/>
```

## 🎯 Casos de Uso Comuns

### Formulário de Cadastro

```tsx
function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  
  const [errors, setErrors] = useState({})
  
  return (
    <YStack gap="$4">
      <InputField
        label="Nome completo"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
        error={!!errors.name}
        notification={errors.name}
      />
      
      <InputField
        label="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
        error={!!errors.email}
        notification={errors.email || "Enviaremos um email de confirmação"}
      />
      
      <InputField
        label="Telefone"
        optional
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />
      
      <InputField
        label="Observações"
        type="textarea"
        optional
        value={form.notes}
        onChangeText={(text) => setForm({ ...form, notes: text })}
        showCounter
        maxLength={150}
      />
    </YStack>
  )
}
```

### Validação em Tempo Real

```tsx
function ValidatedInput() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  
  const validateEmail = (text: string) => {
    setEmail(text)
    
    if (text && !text.includes('@')) {
      setError('Email inválido')
    } else {
      setError('')
    }
  }
  
  return (
    <InputField
      label="Email"
      value={email}
      onChangeText={validateEmail}
      error={!!error}
      notification={error || "Digite seu melhor email"}
    />
  )
}
```

### Campo com Limite de Caracteres

```tsx
function LimitedInput() {
  const [text, setText] = useState('')
  const isNearLimit = text.length > 80
  
  return (
    <InputField
      label="Bio"
      type="textarea"
      value={text}
      onChangeText={setText}
      showCounter
      maxLength={100}
      error={isNearLimit}
      notification={
        isNearLimit 
          ? "Você está próximo do limite!" 
          : "Conte um pouco sobre você"
      }
    />
  )
}
```

## ⚠️ Notas Importantes

1. **Label é obrigatório** - Sempre forneça um label descritivo
2. **Acessibilidade** - O label é automaticamente associado ao input
3. **Validação** - Use a prop `error` para indicar estado de erro
4. **Contador** - Só aparece se `showCounter` e `maxLength` estiverem definidos
5. **MaxLength** - Limita automaticamente o número de caracteres
6. **Optional tag** - Aparece apenas se `optional={true}`

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./InputField.stories.tsx)
- [Documentação de tokens](../../tokens.ts)

