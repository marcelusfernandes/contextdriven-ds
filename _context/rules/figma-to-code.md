# Figma to Code - Guia de Implementação

## 🎨 Entendendo Specs do Figma

### Estrutura das Especificações

Cada componente tem um arquivo `.md` em `_context/component_data/` que contém:

#### 1. Metadata
```markdown
**Componente:** [Nome do componente]
**Figma Node ID:** [ID único no Figma]
**Figma URL:** [Link direto]
**Data de Extração:** [Quando foi extraído]
```

**Como usar:**
- Node ID identifica o componente no Figma
- URL permite verificar o design original
- Data ajuda a rastrear versões

#### 2. Estrutura (Frame Principal)
```markdown
- **ID:** 22:612
- **Nome:** ComponentName 🔵
- **Posição:** (-4856, 551)
- **Dimensões:** 2963 × 718
```

**Como usar:**
- Dimensões indicam o tamanho base do frame
- Use para entender proporções gerais

#### 3. Variantes Identificadas

Exemplo do Checkbox:
```markdown
- **2 Functions:** Input, Single
- **3 Types:** Unchecked, Checked, Indeterminate
- **2 Sizes:** Small, Medium
- **5 States:** Enabled, Hover, Focus, Active, Disabled
- **2 Error:** False, True

Total: 2 × 3 × 2 × 5 × 2 = 120 combinações possíveis
```

**Como usar:**
- Cada eixo de variação vira uma prop ou variant
- `Functions` → prop `function` ou `variant`
- `Sizes` → prop `size`
- `States` → estados interativos (hover, press, etc)
- `Error` → prop `error`

#### 4. Dimensões por Variante

```markdown
**Function=Input, Size=Medium:**
- Width: 123px
- Height: 48px
- Padding: 12px
- Gap: 8px
- Border radius: 12px

**Function=Single, Size=Small:**
- Width: 20px
- Height: 20px
- Border radius: 4px
```

**Como usar:**
- Cada combinação vira um conjunto de tokens
- Organize em estrutura hierárquica:
```typescript
component.size.medium.input.height = 48
component.size.small.single.width = 20
```

## 📊 Extraindo Tokens

### 1. Tamanhos (Spacing & Dimensions)

**O que procurar na spec:**
- Width / Height
- Padding (top, right, bottom, left)
- Gap (espaçamento entre elementos)
- Border radius
- Icon size

**Como mapear:**
```typescript
// Da spec:
// padding: { left: 12, top: 12, right: 12, bottom: 12 }
// gap: 8
// border.radii: 12

// Para tokens:
{
  paddingVertical: 12,
  paddingHorizontal: 12,
  gap: 8,
  borderRadius: 12,
}
```

### 2. Tipografia

**O que procurar na spec:**
```markdown
family: "Roboto Flex"
style: Regular
size: 16
weight: 400
lineHeight: 24
letterSpacing: 0
```

**Como mapear:**
```typescript
{
  fontFamily: 'Roboto Flex',
  fontSize: 16,
  fontWeight: '400',
  lineHeight: 24,
  letterSpacing: 0,
}
```

### 3. Cores

**Padrão na spec:**
```markdown
text.color: gray800
bg.color: yellowBase
border.color: gray300
icon.color: gray850
```

**Como mapear:**
- Use SEMPRE referência ao token, não o valor hex
- Mantenha nomes semânticos do design

```typescript
{
  color: tokens.colors.gray800,
  backgroundColor: tokens.colors.yellowBase,
  borderColor: tokens.colors.gray300,
}
```

### 4. Estados

**Estrutura na spec:**
```markdown
#### Enabled (estado padrão)
iconPlate.border.color: transparent
text.color: gray800
bg.color: transparent

#### Hover
iconPlate.border.color: gray300
text.color: gray850
bg.color: gray100
```

**Como mapear:**
```typescript
state: {
  enabled: {
    borderColor: 'transparent',
    textColor: 'gray800',
    bgColor: 'transparent',
  },
  hover: {
    borderColor: 'gray300',
    textColor: 'gray850',
    bgColor: 'gray100',
  },
}
```

## 🔧 Processo de Implementação

### Passo 1: Análise da Spec

```markdown
✅ Leia a spec completamente
✅ Identifique TODOS os eixos de variação
✅ Liste todas as combinações possíveis
✅ Identifique tokens necessários
✅ Verifique se há sub-componentes
✅ Note casos especiais e edge cases
```

### Passo 2: Auditoria de Tokens

```typescript
// Verifique tokens.ts para:
// 1. Cores necessárias existem?
const neededColors = ['gray100', 'gray850', 'redLightest', 'redDarkest']
const missingColors = neededColors.filter(c => !tokens.colors[c])

// 2. Estrutura do componente existe?
if (!tokens.checkbox) {
  // Precisa criar seção inteira
}

// 3. Tokens estão organizados corretamente?
// Hierarquia: component > category > variant > property
```

### Passo 3: Adicionar Tokens Faltantes

**Se faltarem cores:**
```typescript
// tokens.ts
colors: {
  // ... existentes
  gray100: '#F5F5F5',    // Novo
  gray850: '#1A1A1A',    // Novo
  redLightest: '#FFE5E5', // Novo
  redDarkest: '#8B0000',  // Novo
}
```

**Adicionar estrutura do componente:**
```typescript
// tokens.ts
export const tokens = {
  colors: { /* ... */ },
  
  // Novo componente
  checkbox: {
    size: {
      small: {
        input: { /* dimensões */ },
        single: { /* dimensões */ },
      },
      medium: {
        input: { /* dimensões */ },
        single: { /* dimensões */ },
      },
    },
    state: {
      normal: {
        enabled: { /* cores */ },
        hover: { /* cores */ },
        focus: { /* cores */ },
        active: { /* cores */ },
        disabled: { /* cores */ },
      },
      error: {
        enabled: { /* cores */ },
        hover: { /* cores */ },
        focus: { /* cores */ },
        active: { /* cores */ },
        disabled: { /* cores */ },
      },
    },
  },
}
```

### Passo 4: Interface TypeScript

**Baseado na spec, defina props:**

```typescript
// Da spec: 2 Functions, 3 Types, 2 Sizes, 5 States, 2 Error

export interface CheckboxProps {
  // Eixos de variação viram props
  size?: 'small' | 'medium'              // 2 sizes
  function?: 'input' | 'single'          // 2 functions
  
  // Types viram estado controlado
  checked?: boolean                       // checked vs unchecked
  indeterminate?: boolean                 // 3º tipo
  
  // States viram props + estados internos
  disabled?: boolean                      // disabled state
  error?: boolean                         // 2 error options
  
  // Conteúdo condicional
  label?: string                          // só para function='input'
  
  // Callbacks
  onChange?: (checked: boolean) => void
  onFocus?: () => void
  onBlur?: () => void
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### Passo 5: Implementação Tamagui

**Use variants para eixos de variação:**

```typescript
const StyledCheckbox = styled(Stack, {
  name: 'Checkbox',
  
  variants: {
    size: {
      small: {
        // tokens.checkbox.size.small
      },
      medium: {
        // tokens.checkbox.size.medium
      },
    },
    
    function: {
      input: {
        // Layout com label
      },
      single: {
        // Só checkbox
      },
    },
  } as const,
  
  defaultVariants: {
    size: 'medium',
    function: 'input',
  },
})
```

**Use estados interativos:**

```typescript
<CheckboxIconPlate
  // Enabled (padrão)
  borderColor={error ? '$redBase' : '$gray300'}
  
  // Hover
  hoverStyle={{
    borderColor: error ? '$redLightest' : '$gray300',
    backgroundColor: error ? '$redLightest' : '$gray100',
  }}
  
  // Focus
  focusStyle={{
    borderColor: error ? '$redDarkest' : '$gray650',
    backgroundColor: error ? '$redLightest' : '$gray200',
  }}
  
  // Press
  pressStyle={{
    borderColor: error ? '$redLight' : '$gray500',
    backgroundColor: error ? '$redLightest' : '$gray200',
  }}
  
  // Disabled
  disabled={disabled}
  disabledStyle={{
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  }}
/>
```

### Passo 6: Sub-componentes

**Identifique na spec partes separadas:**

Checkbox tem:
- Container externo (função input)
- Icon Plate (quadrado do checkbox)
- Icon (checkmark/minus/empty)
- Label (texto, só em input)

```typescript
// Quebre em sub-componentes
const CheckboxContainer = styled(Stack, { /* */ })
const CheckboxIconPlate = styled(Stack, { /* */ })
const CheckboxLabel = styled(Text, { /* */ })

// Componente principal compõe tudo
export const Checkbox = ({ size, function, label, ... }) => (
  <CheckboxContainer size={size} function={function}>
    <CheckboxIconPlate size={size}>
      <CheckboxIcon type={getIconType()} />
    </CheckboxIconPlate>
    
    {function === 'input' && label && (
      <CheckboxLabel size={size}>{label}</CheckboxLabel>
    )}
  </CheckboxContainer>
)
```

### Passo 7: Lógica de Estados

**Implemente state machine quando necessário:**

```typescript
export const Checkbox = ({ 
  checked: controlledChecked,
  indeterminate,
  onChange,
  ...props 
}) => {
  // Controlled vs Uncontrolled
  const [internalChecked, setInternalChecked] = useState(false)
  const checked = controlledChecked ?? internalChecked
  
  // Indeterminate tem prioridade
  const visualState = indeterminate 
    ? 'indeterminate' 
    : checked 
      ? 'checked' 
      : 'unchecked'
  
  const handlePress = () => {
    if (disabled) return
    
    const newValue = !checked
    setInternalChecked(newValue)
    onChange?.(newValue)
  }
  
  return (
    <CheckboxContainer onPress={handlePress}>
      <Icon type={visualState} />
    </CheckboxContainer>
  )
}
```

## 🎯 Checklist de Implementação

### Análise
- [ ] Spec lida completamente
- [ ] Variantes mapeadas (size, variant, state, etc)
- [ ] Dimensões extraídas para cada combinação
- [ ] Cores mapeadas para tokens
- [ ] Tipografia mapeada

### Tokens
- [ ] Cores necessárias existem em tokens.ts
- [ ] Estrutura do componente criada em tokens.ts
- [ ] Todos os valores usam tokens (não hardcoded)
- [ ] Hierarquia organizada logicamente

### Implementação
- [ ] Interface TypeScript completa
- [ ] Componente principal implementado
- [ ] Sub-componentes (se necessário)
- [ ] Variants do Tamagui configuradas
- [ ] Estados interativos (hover, focus, press, disabled)
- [ ] Lógica de estado (controlled/uncontrolled)
- [ ] ForwardRef configurado

### Qualidade
- [ ] Acessibilidade (ARIA, keyboard)
- [ ] Stories completas no Storybook
- [ ] Documentação (README + QUICK_START)
- [ ] Export configurado (index.ts)
- [ ] Nenhum valor hardcoded
- [ ] Type-safe (sem any desnecessários)

## 💡 Dicas Importantes

### 1. Priorize Tokens
**Sempre use tokens. Se não existe, crie. Nunca hardcode.**

### 2. Entenda o Sistema de Variantes
```typescript
// Cada eixo independente = variant separada
variants: {
  size: { small: {}, medium: {}, large: {} },
  variant: { primary: {}, secondary: {} },
}

// Interações entre variantes = compound variants
compoundVariants: [
  {
    size: 'small',
    variant: 'primary',
    // estilos específicos desta combinação
  },
]
```

### 3. Estados vs Props
- **Props:** Controle explícito pelo usuário (`disabled`, `error`)
- **Estados:** Reação a interação (`hover`, `focus`, `press`)
- **Use ambos em combinação**

### 4. Composição > Complexidade
- Prefira múltiplos componentes simples
- Cada componente com responsabilidade única
- Facilita manutenção e testes

### 5. Mobile-First
- Pense em touch targets (mínimo 44x44px)
- Gestos nativos (swipe, long-press)
- Performance em dispositivos mais fracos

## 🚨 Erros Comuns

### ❌ Não Seguir a Spec
```typescript
// Spec diz: border radius = 12 no medium
borderRadius: 10  // ❌ Valor diferente
```

### ❌ Hardcoding
```typescript
backgroundColor: '#FFD500'  // ❌ Hardcoded
backgroundColor: '$yellowBase'  // ✅ Token
```

### ❌ Misturar Responsabilidades
```typescript
// ❌ Componente de UI com lógica de negócio
const Button = () => {
  const user = useAuth()  // ❌
  const data = fetchData()  // ❌
  
  return <ButtonUI />
}

// ✅ Componente de UI puro
const Button = ({ onPress, children }) => (
  <ButtonUI onPress={onPress}>{children}</ButtonUI>
)
```

### ❌ Ignorar Estados
```typescript
// ❌ Só implementou estado padrão
<Button />

// ✅ Implementou todos os estados
<Button
  hoverStyle={{ /* */ }}
  pressStyle={{ /* */ }}
  focusStyle={{ /* */ }}
  disabledStyle={{ /* */ }}
/>
```

---

**Lembre-se:** A spec é a fonte da verdade. Qualquer decisão deve ser baseada nela ou validada com o time de Design.

