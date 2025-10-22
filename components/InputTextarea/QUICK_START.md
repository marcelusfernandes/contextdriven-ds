# InputTextarea - Quick Start

## 🚀 Uso Básico

```tsx
import { InputTextarea } from '@/components/InputTextarea'
import { useState } from 'react'

function MyForm() {
  const [message, setMessage] = useState('')
  
  return (
    <InputTextarea
      value={message}
      onChangeText={setMessage}
      placeholder="Digite sua mensagem"
      numberOfLines={4}
    />
  )
}
```

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | `''` | Valor do textarea |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do textarea |
| `numberOfLines` | `number` | `3` | Linhas visíveis |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `showResizeIcon` | `boolean` | `true` | Mostrar ícone de resize |

## 💡 Exemplos Rápidos

### Textarea Simples

```tsx
<InputTextarea
  value={description}
  onChangeText={setDescription}
  placeholder="Descrição"
  numberOfLines={4}
/>
```

### Tamanho Small

```tsx
<InputTextarea
  size="small"
  value={notes}
  onChangeText={setNotes}
  placeholder="Observações"
  numberOfLines={3}
/>
```

### Com Erro

```tsx
<InputTextarea
  value={feedback}
  onChangeText={setFeedback}
  placeholder="Seu feedback"
  error
  numberOfLines={4}
/>
```

### Desabilitado

```tsx
<InputTextarea
  value={terms}
  disabled
  placeholder="Termos de uso"
  numberOfLines={5}
/>
```

### Sem Ícone de Resize

```tsx
<InputTextarea
  value={comment}
  onChangeText={setComment}
  placeholder="Comentário"
  showResizeIcon={false}
  numberOfLines={3}
/>
```

## 🎯 Estados Automáticos

O InputTextarea gerencia automaticamente seus estados visuais, **reutilizando 100% dos tokens do InputSingle**:

### Estado de Preenchimento
```tsx
// Normal (vazio) - detectado automaticamente
<InputTextarea value="" placeholder="Vazio" />

// Filled (preenchido) - detectado automaticamente
<InputTextarea value="Texto longo..." placeholder="Preenchido" />
```

### Estado de Foco
```tsx
// Blurred (sem foco) - padrão
// Focused (com foco) - gerenciado automaticamente ao clicar

// Borda aumenta de 1px para 2px quando focado
<InputTextarea value={text} onChangeText={setText} />
```

### Feedback
```tsx
// Normal - sem erro
<InputTextarea value={text} onChangeText={setText} />

// Error - com erro
<InputTextarea value={text} onChangeText={setText} error />
```

## 📐 Tamanhos

### Medium (72px altura mínima)
```tsx
<InputTextarea size="medium" {...props} />
```

### Small (56px altura mínima)
```tsx
<InputTextarea size="small" {...props} />
```

**Nota:** A altura é **mínima**, o textarea cresce conforme o conteúdo.

## 🔄 Casos de Uso Comuns

### Campo de Mensagem

```tsx
function MessageBox() {
  const [message, setMessage] = useState('')
  
  return (
    <InputTextarea
      value={message}
      onChangeText={setMessage}
      placeholder="Digite sua mensagem..."
      numberOfLines={4}
    />
  )
}
```

### Campo com Validação

```tsx
function FeedbackInput() {
  const [feedback, setFeedback] = useState('')
  const [error, setError] = useState(false)
  
  const validate = (text: string) => {
    setFeedback(text)
    // Mínimo 20 caracteres
    setError(text.length > 0 && text.length < 20)
  }
  
  return (
    <InputTextarea
      value={feedback}
      onChangeText={validate}
      placeholder="Seu feedback (mínimo 20 caracteres)"
      error={error}
      numberOfLines={5}
    />
  )
}
```

### Campo Disabled

```tsx
<InputTextarea
  value="Termos e condições que não podem ser editados..."
  disabled
  placeholder="Somente leitura"
  numberOfLines={6}
/>
```

### Formulário Completo

```tsx
function ContactForm() {
  const [form, setForm] = useState({
    subject: '',
    message: ''
  })
  
  return (
    <YStack gap="$3">
      <InputSingle
        value={form.subject}
        onChangeText={(text) => setForm({ ...form, subject: text })}
        placeholder="Assunto"
      />
      
      <InputTextarea
        value={form.message}
        onChangeText={(text) => setForm({ ...form, message: text })}
        placeholder="Sua mensagem"
        numberOfLines={5}
      />
    </YStack>
  )
}
```

### Controle de Altura

```tsx
function CustomHeightTextarea() {
  const [text, setText] = useState('')
  
  return (
    <YStack gap="$3">
      {/* Pequeno - 2 linhas */}
      <InputTextarea
        value={text}
        onChangeText={setText}
        numberOfLines={2}
        placeholder="2 linhas"
      />
      
      {/* Médio - 4 linhas */}
      <InputTextarea
        value={text}
        onChangeText={setText}
        numberOfLines={4}
        placeholder="4 linhas"
      />
      
      {/* Grande - 8 linhas */}
      <InputTextarea
        value={text}
        onChangeText={setText}
        numberOfLines={8}
        placeholder="8 linhas"
      />
    </YStack>
  )
}
```

## ⚠️ Notas Importantes

1. **Baseado no InputSingle** - Reutiliza TODOS os tokens de cores
2. **Altura Mínima** - Não fixa, cresce com o conteúdo
3. **Estado Preenchido** - Detectado automaticamente pelo valor
4. **Foco** - Gerenciado automaticamente, borda aumenta 1px → 2px
5. **Disabled** - Não responde a foco, borda permanece 1px
6. **Error** - Muda cores de borda, placeholder e ícone de resize
7. **Ícone de Resize** - Sempre no canto inferior direito (pode ser ocultado)

## 🆚 Diferenças do InputSingle

| Característica | InputSingle | InputTextarea |
|----------------|-------------|---------------|
| Altura | Fixa (36px/48px) | Mínima (56px/72px), cresce |
| Linhas | Única | Múltiplas |
| Ícone especial | - | Resize icon |
| Cores | Próprios tokens | Reutiliza InputSingle |
| Estados | 24 variantes | 24 variantes |

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./InputTextarea.stories.tsx)
- [Especificação Figma](../../_context/component_data/InputTextarea-clean.md)
- [InputSingle](../InputSingle/README.md) - Componente base
- [Documentação de tokens](../../tokens.ts)

