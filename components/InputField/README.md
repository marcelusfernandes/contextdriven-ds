# InputField

Campo de formulário completo que combina label, input, notificação e contador de caracteres.

## 📋 Visão Geral

**InputField** é um componente de composição que adiciona metadados visuais aos inputs. Ele não reimplementa lógica de input, apenas envolve inputs básicos (linha única ou textarea) com elementos informativos.

### Estrutura Visual

```
┌─────────────────────────────────────────┐
│ Label               Optional            │ ← Heading
├─────────────────────────────────────────┤
│                                         │
│  [Input Single ou Textarea]             │ ← Input
│                                         │
├─────────────────────────────────────────┤
│ Notification        Counter (0/150)     │ ← Footer
└─────────────────────────────────────────┘
```

### Componentes

1. **Heading** (topo)
   - Label (esquerda) - texto do campo
   - Optional tag (direita) - tag "Opcional" se aplicável

2. **Input** (meio)
   - Input de linha única (type="single")
   - Textarea de múltiplas linhas (type="textarea")

3. **Footer** (base)
   - Notification (esquerda) - mensagem de ajuda/erro
   - Counter (direita) - contador "X/Y"

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de um campo de formulário com label
- Precisar mostrar mensagens de ajuda ou erro
- Precisar limitar e mostrar contagem de caracteres
- Tiver campos opcionais que precisam indicar isso

❌ **Não use quando:**
- Precisar apenas de um input sem contexto (use Input diretamente)
- Precisar de campos customizados complexos
- O layout não seguir a estrutura padrão

## 📦 Instalação

```tsx
import { InputField } from '@/components/InputField'
```

## 🚀 Uso Básico

```tsx
import { InputField } from '@/components/InputField'
import { useState } from 'react'

function MyForm() {
  const [name, setName] = useState('')
  
  return (
    <InputField
      label="Nome completo"
      value={name}
      onChangeText={setName}
      placeholder="Digite seu nome"
      notification="Digite seu nome como aparece no documento"
    />
  )
}
```

## 🎨 Variantes e Estados

### Tipos

O InputField suporta dois tipos de input:

#### Single (linha única)
```tsx
<InputField
  label="Email"
  type="single"  // padrão
  value={email}
  onChangeText={setEmail}
/>
```

#### Textarea (múltiplas linhas)
```tsx
<InputField
  label="Mensagem"
  type="textarea"
  value={message}
  onChangeText={setMessage}
/>
```

### Estados

#### Normal
Estado padrão do campo.

```tsx
<InputField
  label="Nome"
  value={name}
  onChangeText={setName}
/>
```

#### Error
Indica erro de validação.

```tsx
<InputField
  label="Email"
  value={email}
  onChangeText={setEmail}
  error
  notification="Email inválido"
/>
```

#### Disabled
Campo não editável.

```tsx
<InputField
  label="CPF"
  value={cpf}
  disabled
  notification="Campo não editável"
/>
```

### Funcionalidades

#### Campo Opcional
```tsx
<InputField
  label="Telefone"
  optional
  optionalText="Não obrigatório"  // customizar texto
  value={phone}
  onChangeText={setPhone}
/>
```

#### Contador de Caracteres
```tsx
<InputField
  label="Nome"
  value={name}
  onChangeText={setName}
  showCounter
  maxLength={50}
/>
```

#### Notificações
```tsx
<InputField
  label="Password"
  value={password}
  onChangeText={setPassword}
  notification="Mínimo 8 caracteres"
/>
```

## 📐 Props

### Obrigatórias

| Prop | Tipo | Descrição |
|------|------|-----------|
| `label` | `string` | Label do campo |

### Opcionais - Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | `''` | Valor do input |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder do input |
| `type` | `'single' \| 'textarea'` | `'single'` | Tipo de input |

### Opcionais - Metadados

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `optional` | `boolean` | `false` | Se o campo é opcional |
| `optionalText` | `string` | `'Opcional'` | Texto da tag opcional |
| `notification` | `string` | - | Mensagem de ajuda/erro |

### Opcionais - Contador

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `showCounter` | `boolean` | `false` | Mostrar contador |
| `maxLength` | `number` | - | Limite de caracteres |

### Opcionais - Estados

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Opcionais - Acessibilidade

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibilityLabel` | `string` | `label` | Label para screen readers |
| `accessibilityHint` | `string` | `notification` | Hint para screen readers |
| `testID` | `string` | - | ID para testes |

## 💡 Exemplos Avançados

### Formulário Completo

```tsx
function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpar erro ao editar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }
  
  return (
    <YStack gap="$4">
      <InputField
        label="Nome completo"
        value={formData.name}
        onChangeText={updateField('name')}
        error={!!errors.name}
        notification={errors.name}
      />
      
      <InputField
        label="Email"
        value={formData.email}
        onChangeText={updateField('email')}
        error={!!errors.email}
        notification={errors.email || "Enviaremos confirmação"}
      />
      
      <InputField
        label="Telefone"
        optional
        value={formData.phone}
        onChangeText={updateField('phone')}
      />
      
      <InputField
        label="Mensagem"
        type="textarea"
        value={formData.message}
        onChangeText={updateField('message')}
        showCounter
        maxLength={150}
        error={!!errors.message}
        notification={errors.message}
      />
    </YStack>
  )
}
```

### Validação Customizada

```tsx
function EmailField() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  
  const isValid = email.includes('@') && email.includes('.')
  const showError = touched && !isValid && email.length > 0
  
  return (
    <InputField
      label="Email"
      value={email}
      onChangeText={(text) => {
        setEmail(text)
        setTouched(true)
      }}
      error={showError}
      notification={
        showError 
          ? "Digite um email válido"
          : "Enviaremos um código de verificação"
      }
    />
  )
}
```

### Limite de Caracteres com Feedback

```tsx
function BioField() {
  const [bio, setBio] = useState('')
  
  const remaining = 150 - bio.length
  const isWarning = remaining < 20
  const isCritical = remaining < 10
  
  return (
    <InputField
      label="Biografia"
      type="textarea"
      value={bio}
      onChangeText={setBio}
      showCounter
      maxLength={150}
      error={isCritical}
      notification={
        isCritical
          ? "Você está atingindo o limite!"
          : isWarning
          ? "Você está perto do limite"
          : "Conte um pouco sobre você"
      }
    />
  )
}
```

## ♿ Acessibilidade

O InputField implementa práticas de acessibilidade:

- **Label associado:** O label é automaticamente associado ao input via `accessibilityLabel`
- **Hints:** A notification é usada como `accessibilityHint`
- **Estados:** Estados error/disabled são comunicados a screen readers
- **Contador:** Contador é anunciado como informação adicional

```tsx
<InputField
  label="Email"
  accessibilityLabel="Email para login"
  accessibilityHint="Digite seu melhor email"
  value={email}
  onChangeText={setEmail}
/>
```

## 🎨 Tokens Utilizados

O InputField usa tokens do design system para garantir consistência:

### Spacing
- `inputField.size.medium.gap` - Gap vertical entre seções
- `inputField.size.medium.headingGap` - Gap entre label e optional
- `inputField.size.medium.footerGap` - Gap entre notification e counter

### Typography
- `inputField.size.medium.labelFontSize/LineHeight` - Tipografia do label
- `inputField.size.medium.optionalFontSize/LineHeight` - Tipografia do optional
- `inputField.size.medium.notificationFontSize/LineHeight` - Tipografia da notification

### Colors
Estados determinam as cores:
- `inputField.state.normal.*Color` - Estado normal
- `inputField.state.error.*Color` - Estado de erro
- `inputField.state.disabled.*Color` - Estado desabilitado

## 🔧 Notas Técnicas

### Componente de Composição

O InputField é um **wrapper** que não reimplementa lógica de input. Ele:
- ✅ Adiciona label, optional tag, notification e counter
- ✅ Gerencia layout vertical
- ✅ Aplica cores baseadas em estado
- ❌ Não reimplementa lógica de input
- ❌ Não gerencia focus/blur

### Input Interno

Atualmente usa Input/TextArea do Tamagui. No futuro, usará:
- `InputSingle` para type="single"
- `InputTextarea` para type="textarea"

### Contador Automático

O contador:
- Só aparece se `showCounter={true}` e `maxLength` está definido
- Atualiza automaticamente conforme usuário digita
- Muda de cor baseado no estado (error/disabled)
- Respeita o limite ao digitar (trunca se exceder)

## 🚀 Performance

- Componentes styled memoizados
- Atualizações apenas quando props mudam
- Nenhum cálculo pesado em render

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./InputField.stories.tsx) - Exemplos no Storybook
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/InputField-clean.md) - Design original

## 🐛 Troubleshooting

### Contador não aparece
Certifique-se de passar tanto `showCounter` quanto `maxLength`:
```tsx
<InputField
  showCounter  // ✅
  maxLength={50}  // ✅
  {...props}
/>
```

### Cores não mudam com error
Certifique-se de passar a prop `error`:
```tsx
<InputField
  error={true}  // ✅
  notification="Erro!"
  {...props}
/>
```

### Optional tag não aparece
Certifique-se de passar a prop `optional`:
```tsx
<InputField
  optional={true}  // ✅
  {...props}
/>
```

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé

