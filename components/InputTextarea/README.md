# InputTextarea

Campo de texto multilinhas - baseado no InputSingle com altura variável.

## 📋 Visão Geral

**InputTextarea** é o componente de texto multilinhas do design system. Baseado completamente no InputSingle, reutiliza 100% dos seus tokens de cores e gerencia automaticamente 4 dimensões de estados para criar 24 variantes visuais.

### Características Principais

- ✨ **Baseado no InputSingle:** Reutiliza todos os tokens de cores
- ✨ **Altura Variável:** Altura mínima que cresce com o conteúdo
- ✨ **Múltiplas Linhas:** Suporta texto em múltiplas linhas
- ✨ **Ícone de Resize:** Indicador visual de redimensionamento
- ✨ **Estados Automáticos:** Detecta preenchimento e gerencia foco
- ✨ **Borda Dinâmica:** Aumenta de 1px para 2px quando focado
- ✨ **Acessível:** Labels, hints e estados para screen readers
- ✨ **Type-safe:** TypeScript com tipos completos

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de input de múltiplas linhas para formulários
- Precisar de campo de descrição ou comentários
- Precisar de mensagens longas
- For base para InputField com type="textarea"

❌ **Não use quando:**
- Precisar de linha única (use InputSingle)
- Precisar de seleção de opções (use InputSelect)
- Precisar de input com label e metadados (use InputField)

## 📦 Instalação

```tsx
import { InputTextarea } from '@/components/InputTextarea'
```

## 🚀 Uso Básico

```tsx
import { InputTextarea } from '@/components/InputTextarea'
import { useState } from 'react'

function MyComponent() {
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

## 🎨 Estados e Variantes

### Dimensões de Estados

O InputTextarea combina **4 dimensões de estados** (mesmas do InputSingle):

#### 1. Tamanho (2 opções)
- **Small:** 56px de altura mínima
- **Medium:** 72px de altura mínima (padrão)

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

### Diferenças do InputSingle

| Característica | InputSingle | InputTextarea |
|----------------|-------------|---------------|
| **Altura** | Fixa (36px/48px) | Mínima (56px/72px), cresce |
| **Linhas** | Linha única | Múltiplas linhas |
| **Ícone** | Leading/Trailing | Resize icon (canto inferior direito) |
| **Cores** | Tokens próprios | Reutiliza InputSingle 100% |
| **Estados** | 24 variantes | 24 variantes |
| **Redimensionável** | Não | Sim (vertical) |

### Tamanhos

#### Medium (72px altura mínima)
```tsx
<InputTextarea
  size="medium"  // padrão
  value={description}
  onChangeText={setDescription}
  placeholder="Descrição detalhada"
  numberOfLines={4}
/>
```

#### Small (56px altura mínima)
```tsx
<InputTextarea
  size="small"
  value={notes}
  onChangeText={setNotes}
  placeholder="Observações"
  numberOfLines={3}
/>
```

### Estados de Preenchimento

Os estados são **detectados automaticamente**:

#### Normal (vazio)
```tsx
<InputTextarea
  value=""  // vazio = normal
  placeholder="Digite algo"
  numberOfLines={4}
/>
```

#### Filled (preenchido)
```tsx
<InputTextarea
  value="Texto longo em múltiplas linhas..."
  placeholder="Digite algo"
  numberOfLines={4}
/>
```

#### Disabled (desabilitado)
```tsx
<InputTextarea
  value="Não editável"
  disabled  // explícito
  placeholder="Desabilitado"
  numberOfLines={4}
/>
```

### Estados de Foco

O foco é **gerenciado automaticamente**:

#### Blurred (sem foco)
- Estado padrão
- Borda de 1px
- Cores normais

#### Focused (com foco)
- Ao clicar no textarea
- Borda de 2px (exceto disabled)
- Cores intensificadas

### Feedback

#### Normal (sem erro)
```tsx
<InputTextarea
  value={text}
  onChangeText={setText}
  error={false}  // padrão
  numberOfLines={4}
/>
```

#### Error (com erro)
```tsx
<InputTextarea
  value={text}
  onChangeText={setText}
  error  // borda vermelha
  numberOfLines={4}
/>
```

## 🎨 Funcionalidades

### Número de Linhas

Controle a altura inicial do textarea:

```tsx
// Pequeno - 2 linhas
<InputTextarea numberOfLines={2} {...props} />

// Médio - 4 linhas
<InputTextarea numberOfLines={4} {...props} />

// Grande - 8 linhas
<InputTextarea numberOfLines={8} {...props} />
```

### Ícone de Redimensionamento

Por padrão, o ícone de resize é mostrado no canto inferior direito:

```tsx
// Com ícone (padrão)
<InputTextarea showResizeIcon={true} {...props} />

// Sem ícone
<InputTextarea showResizeIcon={false} {...props} />
```

### Callbacks

```tsx
<InputTextarea
  value={text}
  onChangeText={setText}
  onFocus={() => console.log('Focado')}
  onBlur={() => console.log('Desfocado')}
  numberOfLines={4}
/>
```

## 📐 Props

### Obrigatórias

Nenhuma prop é obrigatória, mas recomendamos pelo menos `value` e `onChangeText`.

### Opcionais - Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | `''` | Valor do textarea |
| `onChangeText` | `(text: string) => void` | - | Callback quando valor muda |
| `placeholder` | `string` | - | Placeholder |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do textarea |
| `numberOfLines` | `number` | `3` | Número de linhas visíveis |

### Opcionais - Estados

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Opcionais - Visual

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `showResizeIcon` | `boolean` | `true` | Mostrar ícone de resize |

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

### Campo de Mensagem

```tsx
function MessageBox() {
  const [message, setMessage] = useState('')
  
  return (
    <InputTextarea
      value={message}
      onChangeText={setMessage}
      placeholder="Digite sua mensagem..."
      numberOfLines={5}
    />
  )
}
```

### Campo com Validação em Tempo Real

```tsx
function FeedbackInput() {
  const [feedback, setFeedback] = useState('')
  const [touched, setTouched] = useState(false)
  
  const minLength = 20
  const isValid = feedback.length >= minLength
  const showError = touched && !isValid && feedback.length > 0
  
  return (
    <YStack gap="$2">
      <InputTextarea
        value={feedback}
        onChangeText={setFeedback}
        placeholder={`Seu feedback (mínimo ${minLength} caracteres)`}
        error={showError}
        onBlur={() => setTouched(true)}
        numberOfLines={5}
      />
      {showError && (
        <Text color="$red">
          Faltam {minLength - feedback.length} caracteres
        </Text>
      )}
    </YStack>
  )
}
```

### Campo com Contador de Caracteres

```tsx
function LimitedTextarea() {
  const [text, setText] = useState('')
  const maxLength = 500
  const remaining = maxLength - text.length
  const isNearLimit = remaining < 50
  
  return (
    <YStack gap="$2">
      <InputTextarea
        value={text}
        onChangeText={setText}
        placeholder="Digite até 500 caracteres"
        numberOfLines={6}
        error={isNearLimit}
      />
      <XStack justifyContent="space-between">
        <Text color={isNearLimit ? '$red' : '$gray'}>
          {remaining} caracteres restantes
        </Text>
        <Text color="$gray">
          {text.length}/{maxLength}
        </Text>
      </XStack>
    </YStack>
  )
}
```

### Formulário Completo de Contato

```tsx
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const updateField = (field: string) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    // Validação...
  }
  
  return (
    <YStack gap="$4">
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
      />
      
      <InputSingle
        size="medium"
        value={form.subject}
        onChangeText={updateField('subject')}
        placeholder="Assunto"
        error={!!errors.subject}
      />
      
      <InputTextarea
        size="medium"
        value={form.message}
        onChangeText={updateField('message')}
        placeholder="Sua mensagem"
        numberOfLines={6}
        error={!!errors.message}
      />
    </YStack>
  )
}
```

### Campo de Termos (Read-only)

```tsx
function TermsField() {
  const terms = `Termos e condições do serviço...
  
Ao usar este serviço, você concorda com...

Lorem ipsum dolor sit amet...`
  
  return (
    <InputTextarea
      value={terms}
      disabled
      numberOfLines={10}
      showResizeIcon={false}
    />
  )
}
```

### Textarea Responsivo

```tsx
function ResponsiveTextarea() {
  const media = useMedia()
  
  return (
    <InputTextarea
      size={media.gtSm ? 'medium' : 'small'}
      numberOfLines={media.gtSm ? 6 : 4}
      placeholder="Mensagem responsiva"
      value={message}
      onChangeText={setMessage}
    />
  )
}
```

## ♿ Acessibilidade

O InputTextarea implementa práticas de acessibilidade:

### Labels e Hints
```tsx
<InputTextarea
  value={feedback}
  onChangeText={setFeedback}
  placeholder="Seu feedback"
  accessibilityLabel="Campo de feedback"
  accessibilityHint="Digite seu feedback sobre o serviço"
  numberOfLines={5}
/>
```

### Estados Comunicados
- Estados error/disabled são comunicados a screen readers
- Mudanças de foco são anunciadas
- Ícone de resize tem indicação apropriada

## 🎨 Tokens Utilizados

O InputTextarea usa tokens do design system:

### Spacing (próprios)
- `inputTextarea.size.{size}.paddingVertical/Horizontal`
- `inputTextarea.size.{size}.minHeight`

### Typography (próprios)
- `inputTextarea.size.{size}.fontSize`
- `inputTextarea.size.{size}.lineHeight`

### Colors (reutilizados do InputSingle)
- `inputSingle.state.{feedback}.{focus}.{fill}.textColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.placeholderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.labelColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.bg`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderColor`
- `inputSingle.state.{feedback}.{focus}.{fill}.borderWidth`

### Resize Icon (próprio)
- `inputTextarea.resizingIcon.size`
- `inputTextarea.resizingIcon.{feedback}.{focus}.{fill}` (cor)

### Border (próprio)
- `inputTextarea.size.{size}.borderRadius`
- Border width: 1px (blurred) ou 2px (focused), exceto disabled

## 🔧 Notas Técnicas

### Reutilização de Tokens

O InputTextarea **reutiliza 100% dos tokens de cores do InputSingle**:

```tsx
// Cores são as mesmas
const stateTokens = tokens.inputSingle.state[feedback][focusState][fillState]

// Apenas dimensões são diferentes
const heightTokens = tokens.inputTextarea.size[size]
```

### Altura Variável

Diferente do InputSingle (altura fixa), o InputTextarea:
- Define altura **mínima** (56px ou 72px)
- Cresce verticalmente com o conteúdo
- Suporta redimensionamento manual pelo usuário

### Ícone de Resize

O ícone de resize:
- Sempre no canto inferior direito
- Cor muda baseada em estados (normal/error)
- Pode ser ocultado com `showResizeIcon={false}`
- Não interfere com o conteúdo (position: absolute)

## 🚀 Performance

- Componentes styled memoizados
- Atualizações apenas quando props relevantes mudam
- Reutilização máxima de tokens (menos sobrecarga)
- Detecção de estados otimizada

## 🔗 Componentes Relacionados

- **[InputSingle](../InputSingle/README.md)** - Componente base (reutiliza tokens)
- **[InputField](../InputField/README.md)** - Wrapper com label, notification e counter
- **InputSelect** (futuro) - Seleção de opções

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./InputTextarea.stories.tsx) - 24 variantes no Storybook
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/InputTextarea-clean.md) - Design original
- [InputSingle](../InputSingle/README.md) - Componente base

## 🐛 Troubleshooting

### Altura não cresce
Certifique-se de que `numberOfLines` está definido e que há conteúdo suficiente:
```tsx
<InputTextarea
  numberOfLines={3}  // ✅ altura mínima
  value={longText}
/>
```

### Ícone de resize não aparece
Verifique se `showResizeIcon` não está como false:
```tsx
<InputTextarea
  showResizeIcon={true}  // ✅ padrão
/>
```

### Borda não muda ao focar
Certifique-se de que não está disabled:
```tsx
<InputTextarea
  disabled={false}  // ✅
  {...props}
/>
```

### Cores diferentes do InputSingle
Não deve acontecer! O InputTextarea reutiliza 100% dos tokens de cores do InputSingle. Se as cores estão diferentes, verifique se ambos componentes estão usando os mesmos tokens.

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé  
**Baseado em:** [InputSingle](../InputSingle/README.md)

