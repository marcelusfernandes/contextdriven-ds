# InputField - Especificação Técnica

**Componente:** Input Field  
**Figma Node ID:** 4991:4676  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4991-4676  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4991:4676
- **Nome:** Input Field 🟢
- **Posição:** (25917, -11917)
- **Dimensões:** 1240 × 374

### Variantes Identificadas (6 variantes)

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4991:4675 | States=Normal, Type=Vertical Auto | (20, 30) | 363 × 120 |
| 4991:4674 | States=Error, Type=Vertical Auto | (430, 30) | 363 × 120 |
| 4991:4806 | States=Disabled, Type=Vertical Auto | (840, 30) | 363 × 120 |
| 4991:5055 | States=Normal, Type=Textarea Fluid | (20, 200) | 363 × 144 |
| 4991:5064 | States=Error, Type=Textarea Fluid | (430, 200) | 363 × 144 |
| 4991:5073 | States=Disabled, Type=Textarea Fluid | (840, 200) | 363 × 144 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Componente Composto

O **Input Field** é um **wrapper** que combina múltiplos elementos:

1. **Heading** (cabeçalho)
   - Label (obrigatório)
   - Optional tag (se campo opcional)

2. **Input** (corpo)
   - InputSingle (Type=Vertical Auto)
   - InputTextarea (Type=Textarea Fluid)

3. **Footer** (rodapé)
   - Notification (mensagem de ajuda/erro)
   - Counter (contador de caracteres: "0/150")

### Tamanhos (sizes)

#### Medium
```typescript
heading.gap: primitive.space[8]        // Gap entre label e optional
gap: primitive.space[8]                // Gap entre heading, input, footer
footer.gap: primitive.space[16]        // Gap entre notification e counter
```

### Tipografia

#### Label (heading)
```typescript
family: primitive.typography.fontFamily.body
size: primitive.typography.fontSize.small         // 14
weight: primitive.typography.fontWeight.regular   // 400
lineHeight: primitive.typography.lineHeight.tight.small  // 16
letterSpacing: primitive.typography.letterSpacing.regular
```

#### Notification / Counter (footer)
```typescript
family: primitive.typography.fontFamily.body
size: primitive.typography.fontSize.small         // 14
weight: primitive.typography.fontWeight.regular   // 400
lineHeight: primitive.typography.lineHeight.regular.small  // 20
letterSpacing: primitive.typography.letterSpacing.regular
```

#### Optional tag (meta)
```typescript
family: primitive.typography.fontFamily.body
size: primitive.typography.fontSize.extraSmall    // 12
weight: primitive.typography.fontWeight.regular   // 400
lineHeight: primitive.typography.lineHeight.close.extraSmall  // 16
letterSpacing: primitive.typography.letterSpacing.regular
```

### Estados (styles)

#### Estado Normal

**Label:**
```typescript
color: primitive.color.gray800
```

**Optional:**
```typescript
color: primitive.color.gray800
```

**Notification:**
```typescript
color: primitive.color.gray650
```

**Counter:**
```typescript
color: primitive.color.gray650
```

#### Estado Error

**Label:**
```typescript
color: primitive.color.redDark
```

**Optional:**
```typescript
color: primitive.color.redDark
```

**Notification:**
```typescript
color: primitive.color.redDark
```

**Counter:**
```typescript
color: primitive.color.redDark
```

#### Estado Disabled

**Label:**
```typescript
color: primitive.color.gray500
```

**Optional:**
```typescript
color: primitive.color.gray500
```

**Notification:**
```typescript
color: primitive.color.gray500
```

**Counter:**
```typescript
color: primitive.color.gray500
```

---

## 📐 Estrutura Visual

```
┌─────────────────────────────────────────┐
│ Label               Optional            │ ← Heading
├─────────────────────────────────────────┤
│                                         │
│  [InputSingle ou InputTextarea]         │ ← Input
│                                         │
├─────────────────────────────────────────┤
│ Notification        Counter (0/150)     │ ← Footer
└─────────────────────────────────────────┘
```

### Elementos:

1. **Heading** (topo)
   - `Label` (esquerda) - texto do campo
   - `Optional` (direita) - tag "Opcional" (se aplicável)
   - Gap entre eles: `primitive.space[8]`
   - Tipografia: `content/label` (fontSize.small/lineHeight.tight.small)

2. **Input** (meio)
   - `InputSingle` (Type=Vertical Auto) - linha única
   - `InputTextarea` (Type=Textarea Fluid) - múltiplas linhas
   - Reutiliza 100% dos componentes existentes

3. **Footer** (base)
   - `Notification` (esquerda) - mensagem de ajuda/erro
   - `Counter` (direita) - contador "0/150"
   - Gap entre eles: `primitive.space[16]`
   - Tipografia: `content/informative` (fontSize.small/lineHeight.regular.small)

4. **Gap Vertical:** `primitive.space[8]` entre heading, input e footer

---

## 🔗 Mapeamento para tokens.ts

### Tokens Utilizados

✅ **Todos os tokens necessários já existem em `primitive`:**

**Colors:**
- `gray800` (label, optional - normal)
- `gray650` (notification, counter - normal)
- `redDark` (todos os elementos - error)
- `gray500` (todos os elementos - disabled)

**Spacing:**
- `primitive.space[8]` (gaps vertical e heading)
- `primitive.space[16]` (gap footer)

**Typography:**
- `primitive.typography.fontSize.small` (14px)
- `primitive.typography.fontSize.extraSmall` (12px)
- `primitive.typography.lineHeight.tight.small` (16px)
- `primitive.typography.lineHeight.regular.small` (20px)
- `primitive.typography.lineHeight.close.extraSmall` (16px)

### Estrutura para tokens.ts

```typescript
  /**
   * INPUT FIELD
   * Componente de composição que envolve InputSingle/InputTextarea
   * Adiciona label, optional tag, notification e counter
   */
  inputField: {
    size: {
      medium: {
        headingGap: ref(primitive.space[8]),       // Gap entre label e optional
        gap: ref(primitive.space[8]),              // Gap vertical (heading → input → footer)
        footerGap: ref(primitive.space[16]),       // Gap entre notification e counter
        
        // Tipografia
        labelFontSize: ref(primitive.typography.fontSize.small),
        labelLineHeight: ref(primitive.typography.lineHeight.tight.small),
        optionalFontSize: ref(primitive.typography.fontSize.extraSmall),
        optionalLineHeight: ref(primitive.typography.lineHeight.close.extraSmall),
        notificationFontSize: ref(primitive.typography.fontSize.small),
        notificationLineHeight: ref(primitive.typography.lineHeight.regular.small),
        counterFontSize: ref(primitive.typography.fontSize.small),
        counterLineHeight: ref(primitive.typography.lineHeight.regular.small),
      },
    },
    
    // Estados (apenas cores dos metadados, input reutiliza InputSingle/Textarea)
    state: {
      normal: {
        labelColor: ref(primitive.color.gray800),
        optionalColor: ref(primitive.color.gray800),
        notificationColor: ref(primitive.color.gray650),
        counterColor: ref(primitive.color.gray650),
      },
      error: {
        labelColor: ref(primitive.color.redDark),
        optionalColor: ref(primitive.color.redDark),
        notificationColor: ref(primitive.color.redDark),
        counterColor: ref(primitive.color.redDark),
      },
      disabled: {
        labelColor: ref(primitive.color.gray500),
        optionalColor: ref(primitive.color.gray500),
        notificationColor: ref(primitive.color.gray500),
        counterColor: ref(primitive.color.gray500),
      },
    },
  },
```

---

## 🔄 Relação com Outros Componentes

### 100% Composição

O **Input Field** não reimplementa nada. Ele simplesmente **compõe**:

```typescript
<InputField
  label="Nome"
  optional
  notification="Digite seu nome completo"
  maxLength={150}
>
  <InputSingle ... />  {/* ou <InputTextarea ... /> */}
</InputField>
```

### Reutilização Completa

- ✅ **InputSingle** → Type=Vertical Auto
- ✅ **InputTextarea** → Type=Textarea Fluid
- ✅ Todos os estados (focus, filled, error, disabled) vêm dos inputs base

### Adiciona

- 🆕 **Label** (cabeçalho do campo)
- 🆕 **Optional tag** (indicador de campo opcional)
- 🆕 **Notification** (mensagem de ajuda/erro)
- 🆕 **Counter** (contador de caracteres)
- 🆕 **Layout vertical** (heading → input → footer)

---

## 🎯 Componente React

### Props Esperadas
```typescript
interface InputFieldProps {
  // Metadados
  label: string
  optional?: boolean
  notification?: string
  
  // Input interno
  type?: 'single' | 'textarea'
  inputProps: InputSingleProps | InputTextareaProps
  
  // Counter
  showCounter?: boolean
  maxLength?: number
  
  // Estados (propagados para o input)
  error?: boolean
  disabled?: boolean
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### Variantes

Não há variantes de tamanho no InputField. O tamanho vem do input interno.

```typescript
<InputField
  label="Nome"
  optional
  notification="Digite seu nome completo"
  maxLength={150}
  showCounter
  type="single"
  inputProps={{
    size: 'medium',
    value: name,
    onChange: setName,
  }}
/>
```

### Estados Dinâmicos

Os estados (error, disabled, focus, filled) são gerenciados pelo input interno (InputSingle ou InputTextarea). O InputField apenas aplica cores nos metadados.

```typescript
const stateTokens = error 
  ? tokens.inputField.state.error 
  : disabled 
  ? tokens.inputField.state.disabled 
  : tokens.inputField.state.normal
```

---

## 📝 Notas de Implementação

1. **Componente de Composição:**
   - InputField é um wrapper/container
   - Não reimplementa lógica de input
   - Apenas adiciona metadados visuais

2. **Dois Tipos:**
   - `type="single"` → usa `InputSingle`
   - `type="textarea"` → usa `InputTextarea`

3. **Counter Dinâmico:**
   - Mostra `currentLength/maxLength`
   - Atualiza conforme usuário digita
   - Muda de cor quando error=true

4. **Optional Tag:**
   - Aparece apenas se `optional={true}`
   - Texto: "Opcional" ou customizável
   - Alinhado à direita do label

5. **Notification:**
   - Mensagem de ajuda (estado normal)
   - Mensagem de erro (estado error)
   - Cor dinâmica baseada em `error`

6. **Acessibilidade:**
   - Label associado ao input via `accessibilityLabel`
   - Notification como `accessibilityHint`
   - Counter informativo para screen readers

---

## 📊 Dimensões Observadas

### Vertical Auto (InputSingle)
- **Altura total:** ~120px
  - Heading: ~16px (labelLineHeight)
  - Gap: `primitive.space[8]`
  - Input: ~48px (inputSingle.size.medium.height)
  - Gap: `primitive.space[8]`
  - Footer: ~20px (notificationLineHeight)

### Textarea Fluid (InputTextarea)
- **Altura total:** ~144px
  - Heading: ~16px (labelLineHeight)
  - Gap: `primitive.space[8]`
  - Input: ~72px (inputTextarea.size.medium.minHeight)
  - Gap: `primitive.space[8]`
  - Footer: ~20px (notificationLineHeight)

---

**Este é um componente de alto nível que unifica a experiência de formulários!** 🎯

