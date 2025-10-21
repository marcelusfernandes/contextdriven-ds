# Checkbox - Especificação Técnica

**Componente:** Checkboxes  
**Figma Node ID:** 22:612  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=22-612  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 22:612
- **Nome:** Checkboxes 🔵
- **Posição:** (-4856, 551)
- **Dimensões:** 2963 × 718

### Variantes Identificadas (108 variantes!)

**Componente mais complexo do Design System!**

#### Estrutura das Variantes
- **2 Functions:** Input (checkbox com label), Single (checkbox apenas)
- **3 Types:** Unchecked (desmarcado), Checked (marcado), Indeterminate (parcialmente marcado)
- **2 Sizes:** Small (36px height), Medium (48px height)
- **6 States:** Enabled, Hover, Focus, Active/Pressed, Disabled
- **2 Error:** False (normal), True (erro)

#### Dimensões por Function e Size

**Function=Input (com label):**
- Medium: 123 × 48px
- Small: 103 × 36px

**Function=Single (apenas checkbox):**
- Medium: 24 × 24px (icon plate)
- Small: 20 × 20px (icon plate)

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (sizes)

#### Input + Medium
```
iconPlate.icon.width: 24
iconPlate.border.radii: 8 (todos os cantos)
gap: 8
padding: { left: 12, top: 12, right: 12, bottom: 12 }
border.radii: 12 (todos os cantos) - container
```

#### Input + Small
```
iconPlate.icon.width: 20
iconPlate.border.radii: 4 (todos os cantos)
gap: 8
padding: { left: 8, top: 8, right: 8, bottom: 8 }
border.radii: 8 (todos os cantos) - container
```

#### Single + Medium
```
iconPlate.icon.width: 24
iconPlate.border.radii: 8 (todos os cantos)
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 12 (todos os cantos)
```

#### Single + Small
```
iconPlate.icon.width: 20
iconPlate.border.radii: 4 (todos os cantos)
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 8 (todos os cantos)
```

### Tipografia

#### Medium (Input function)
```
family: "Roboto Flex"
style: Regular
size: 16
weight: 400
lineHeight: 24
letterSpacing: 0
```

#### Small (Input function)
```
family: "Roboto Flex"
style: Regular
size: 14
weight: 400
lineHeight: 20
letterSpacing: 0
```

### Estados (styles) - Normal (sem erro)

#### Enabled (estado padrão)
```
iconPlate.border.color: transparent
iconPlate.icon.color: gray800
iconPlate.border.width: 0
text.color: gray800
bg.color: transparent
border.color: transparent
border.width: 0
```

#### Hover (mouse sobre)
```
iconPlate.border.color: gray300
iconPlate.icon.color: gray850
iconPlate.border.width: 2
text.color: gray850
bg.color: gray100
border.color: transparent
border.width: 0
```

#### Focus (com foco)
```
iconPlate.border.color: gray650
iconPlate.icon.color: gray850
iconPlate.border.width: 2
text.color: gray850
bg.color: gray200
border.color: gray650
border.width: 2
```

#### Active/Pressed (clicado)
```
iconPlate.border.color: gray500
iconPlate.icon.color: gray850
iconPlate.border.width: 2
text.color: gray850
bg.color: gray200
border.color: transparent
border.width: 0
```

#### Disabled (desabilitado)
```
iconPlate.border.color: transparent
iconPlate.icon.color: gray500
iconPlate.border.width: 0
text.color: gray500
bg.color: transparent
border.color: transparent
border.width: 0
```

### Estados (styles) - Error (com erro)

#### Enabled (estado padrão com erro)
```
iconPlate.border.color: transparent
iconPlate.icon.color: redDark
iconPlate.border.width: 0
text.color: redDark
bg.color: transparent
border.color: transparent
border.width: 0
```

#### Hover (mouse sobre com erro)
```
iconPlate.border.color: redLightest
iconPlate.icon.color: black
iconPlate.border.width: 2
text.color: black
bg.color: redLightest
border.color: transparent
border.width: 0
```

#### Focus (com foco e erro)
```
iconPlate.border.color: redDarkest
iconPlate.icon.color: black
iconPlate.border.width: 2
text.color: black
bg.color: redLightest
border.color: redDarkest
border.width: 2
```

#### Active/Pressed (clicado com erro)
```
iconPlate.border.color: redLight
iconPlate.icon.color: black
iconPlate.border.width: 2
text.color: black
bg.color: redLightest
border.color: transparent
border.width: 0
```

#### Disabled (desabilitado com erro)
```
iconPlate.border.color: transparent
iconPlate.icon.color: gray500
iconPlate.border.width: 0
text.color: gray500
bg.color: transparent
border.color: transparent
border.width: 0
```

---

## 🔗 Mapeamento para tokens.ts

### Tokens Necessários

✅ **Quase todos já existem!** Novos tokens necessários:
- `gray850` → quase preto, mais escuro que gray800
- `gray100` → cinza muito claro, mais claro que gray150
- `redLightest` → rosa claro para estado de erro
- `redDarkest` → vermelho muito escuro para foco com erro

### Estrutura para tokens.ts

```typescript
checkbox: {
  // Tamanhos
  size: {
    small: {
      // Function=Input (com label)
      input: {
        height: 36,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        gap: 8,
        fontSize: 14,
        lineHeight: 20,
        iconPlateSize: 20,
        iconPlateBorderRadius: 4,
      },
      // Function=Single (apenas checkbox)
      single: {
        size: 20,
        borderRadius: 4,
      },
    },
    medium: {
      // Function=Input (com label)
      input: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        gap: 8,
        fontSize: 16,
        lineHeight: 24,
        iconPlateSize: 24,
        iconPlateBorderRadius: 8,
      },
      // Function=Single (apenas checkbox)
      single: {
        size: 24,
        borderRadius: 8,
      },
    },
  },
  
  // Estados (normal vs error × estados interativos)
  state: {
    normal: {
      enabled: {
        iconPlateBorderColor: 'transparent',
        iconPlateIconColor: 'gray800',
        iconPlateBorderWidth: 0,
        textColor: 'gray800',
        bgColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      hover: {
        iconPlateBorderColor: 'gray300',
        iconPlateIconColor: 'gray850',
        iconPlateBorderWidth: 2,
        textColor: 'gray850',
        bgColor: 'gray100',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      focus: {
        iconPlateBorderColor: 'gray650',
        iconPlateIconColor: 'gray850',
        iconPlateBorderWidth: 2,
        textColor: 'gray850',
        bgColor: 'gray200',
        borderColor: 'gray650',
        borderWidth: 2,
      },
      active: {
        iconPlateBorderColor: 'gray500',
        iconPlateIconColor: 'gray850',
        iconPlateBorderWidth: 2,
        textColor: 'gray850',
        bgColor: 'gray200',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      disabled: {
        iconPlateBorderColor: 'transparent',
        iconPlateIconColor: 'gray500',
        iconPlateBorderWidth: 0,
        textColor: 'gray500',
        bgColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
    },
    error: {
      enabled: {
        iconPlateBorderColor: 'transparent',
        iconPlateIconColor: 'redDark',
        iconPlateBorderWidth: 0,
        textColor: 'redDark',
        bgColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      hover: {
        iconPlateBorderColor: 'redLightest',
        iconPlateIconColor: 'black',
        iconPlateBorderWidth: 2,
        textColor: 'black',
        bgColor: 'redLightest',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      focus: {
        iconPlateBorderColor: 'redDarkest',
        iconPlateIconColor: 'black',
        iconPlateBorderWidth: 2,
        textColor: 'black',
        bgColor: 'redLightest',
        borderColor: 'redDarkest',
        borderWidth: 2,
      },
      active: {
        iconPlateBorderColor: 'redLight',
        iconPlateIconColor: 'black',
        iconPlateBorderWidth: 2,
        textColor: 'black',
        bgColor: 'redLightest',
        borderColor: 'transparent',
        borderWidth: 0,
      },
      disabled: {
        iconPlateBorderColor: 'transparent',
        iconPlateIconColor: 'gray500',
        iconPlateBorderWidth: 0,
        textColor: 'gray500',
        bgColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
      },
    },
  },
}
```

---

## 📐 Componente React

### Props Esperadas
```typescript
interface CheckboxProps {
  // Visual
  size?: 'small' | 'medium'
  
  // Função (com ou sem label)
  function?: 'input' | 'single'
  label?: string  // Apenas se function='input'
  
  // Estado do checkbox
  checked?: boolean
  indeterminate?: boolean  // Estado parcialmente selecionado
  
  // Callbacks
  onChange?: (checked: boolean) => void
  onFocus?: () => void
  onBlur?: () => void
  
  // Estados
  error?: boolean
  disabled?: boolean
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### 3 Estados Visuais Possíveis

1. **Unchecked** (`checked=false, indeterminate=false`)
   - Ícone: Quadrado vazio

2. **Checked** (`checked=true, indeterminate=false`)
   - Ícone: Checkmark (✓)

3. **Indeterminate** (`indeterminate=true`)
   - Ícone: Traço/menos (−)
   - Usado quando um grupo de checkboxes está parcialmente selecionado
   - Tem prioridade sobre `checked`

### Ícones Necessários

- **Unchecked:** Sem ícone (apenas borda)
- **Checked:** `CheckmarkFilled` ou `CheckOutlined`
- **Indeterminate:** `MinusOutlined` ou linha horizontal

---

## 🎯 Componente Tamagui

```typescript
<Checkbox
  size="medium"
  function="input"
  label="Aceito os termos"
  checked={accepted}
  onChange={setAccepted}
/>

<Checkbox
  size="small"
  function="single"
  checked={selected}
  onChange={setSelected}
/>

<Checkbox
  size="medium"
  function="input"
  label="Selecionar todos"
  indeterminate={someSelected}
  onChange={toggleAll}
/>
```

---

## 📝 Notas de Implementação

1. **Function Input vs Single:**
   - `input`: Checkbox com label (clickable area maior)
   - `single`: Apenas checkbox (tamanho mínimo)

2. **Indeterminate State:**
   - Estado especial para seleção parcial
   - Usado em hierarquias (ex: "Selecionar todos")
   - Tem prioridade sobre `checked`

3. **Icon Plate:**
   - Container visual do ícone
   - Pode ter borda (states hover, focus, active)
   - Border radius menor que o container

4. **Estados Interativos:**
   - `enabled`: Padrão
   - `hover`: Mouse sobre
   - `focus`: Focado (teclado)
   - `active`: Clicado/pressionado
   - `disabled`: Desabilitado (sem interação)

5. **Error State:**
   - Muda cores do ícone, texto e backgrounds
   - Mantém mesmos estados interativos

6. **Acessibilidade:**
   - `role="checkbox"`
   - `aria-checked="true" | "false" | "mixed"` (mixed = indeterminate)
   - `aria-disabled` quando disabled
   - `aria-invalid` quando error

---

**108 variantes! O componente mais complexo do DSZé até agora! 🎯**

