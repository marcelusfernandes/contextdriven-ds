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
```
heading.gap: 8        // Gap entre label e optional
gap: 8                // Gap entre heading, input, footer
footer.gap: 16        // Gap entre notification e counter
```

### Tipografia

#### Label (heading)
```
family: "Roboto Flex"
style: Regular
size: 14
weight: 400
lineHeight: 16
letterSpacing: 0
```

#### Notification / Counter (footer)
```
family: "Roboto Flex"
style: Regular
size: 14
weight: 400
lineHeight: 20
letterSpacing: 0
```

#### Optional tag (meta)
```
family: "Roboto Flex"
style: Regular
size: 12
weight: 400
lineHeight: 16
letterSpacing: 0
```

### Estados (styles)

#### Estado Normal

**Label:**
```
color: #333333 (gray800)
```

**Optional:**
```
color: #333333 (gray800)
```

**Notification:**
```
color: #555555 (gray650)
```

**Counter:**
```
color: #555555 (gray650)
```

#### Estado Error

**Label:**
```
color: #bc1229 (redDark)
```

**Optional:**
```
color: #bc1229 (redDark)
```

**Notification:**
```
color: #bc1229 (redDark)
```

**Counter:**
```
color: #bc1229 (redDark)
```

#### Estado Disabled

**Label:**
```
color: #888888 (gray500)
```

**Optional:**
```
color: #888888 (gray500)
```

**Notification:**
```
color: #888888 (gray500)
```

**Counter:**
```
color: #888888 (gray500)
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
   - Gap entre eles: 8px
   - Tipografia: `content/label` (14px/16px)

2. **Input** (meio)
   - `InputSingle` (Type=Vertical Auto) - linha única
   - `InputTextarea` (Type=Textarea Fluid) - múltiplas linhas
   - Reutiliza 100% dos componentes existentes

3. **Footer** (base)
   - `Notification` (esquerda) - mensagem de ajuda/erro
   - `Counter` (direita) - contador "0/150"
   - Gap entre eles: 16px
   - Tipografia: `content/informative` (14px/20px)

4. **Gap Vertical:** 8px entre heading, input e footer

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
Todas as cores já existem no `tokens.ts`! ✅
- `#333333` → `gray800` (label, optional - normal)
- `#555555` → `gray650` (notification, counter - normal)
- `#bc1229` → `redDark` (todos os elementos - error)
- `#888888` → `gray500` (todos os elementos - disabled)

### Estrutura para tokens.ts

```typescript
inputField: {
  // Tamanhos
  size: {
    medium: {
      headingGap: 8,       // Gap entre label e optional
      gap: 8,              // Gap vertical (heading → input → footer)
      footerGap: 16,       // Gap entre notification e counter
      
      // Tipografia
      labelFontSize: 14,
      labelLineHeight: 16,
      optionalFontSize: 12,
      optionalLineHeight: 16,
      notificationFontSize: 14,
      notificationLineHeight: 20,
      counterFontSize: 14,
      counterLineHeight: 20,
    },
  },
  
  // Estados (apenas cores dos metadados, input reutiliza InputSingle/Textarea)
  state: {
    normal: {
      labelColor: '#333333',        // gray800
      optionalColor: '#333333',     // gray800
      notificationColor: '#555555', // gray650
      counterColor: '#555555',      // gray650
    },
    error: {
      labelColor: '#bc1229',        // redDark
      optionalColor: '#bc1229',     // redDark
      notificationColor: '#bc1229', // redDark
      counterColor: '#bc1229',      // redDark
    },
    disabled: {
      labelColor: '#888888',        // gray500
      optionalColor: '#888888',     // gray500
      notificationColor: '#888888', // gray500
      counterColor: '#888888',      // gray500
    },
  },
}
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
  - Heading: ~16px (label)
  - Gap: 8px
  - Input: ~48px (medium)
  - Gap: 8px
  - Footer: ~20px (notification/counter)

### Textarea Fluid (InputTextarea)
- **Altura total:** ~144px
  - Heading: ~16px (label)
  - Gap: 8px
  - Input: ~72px (textarea medium)
  - Gap: 8px
  - Footer: ~20px (notification/counter)

---

**Este é um componente de alto nível que unifica a experiência de formulários!** 🎯

