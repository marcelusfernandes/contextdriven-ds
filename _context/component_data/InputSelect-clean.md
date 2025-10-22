# InputSelect - Especificação Técnica

**Componente:** Input Select  
**Figma Node ID:** 4946:45056  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4946-45056  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4946:45056
- **Nome:** Input Select 🟠
- **Posição:** (20747, -11925)
- **Dimensões:** 993 × 811

### Variantes Identificadas (24 variantes)

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4946:45057 | Size=Medium, State=Normal, Focus=False, Feedback=Normal | (20, 20) | 294 × 48 |
| 4946:45064 | Size=Small, State=Normal, Focus=False, Feedback=Normal | (20, 114) | 294 × 36 |
| 4946:45071 | Size=Medium, State=Filled, Focus=False, Feedback=Normal | (344, 20) | 294 × 48 |
| 4946:45079 | Size=Small, State=Filled, Focus=False, Feedback=Normal | (344, 114) | 294 × 36 |
| 4946:45087 | Size=Medium, State=Disabled, Focus=False, Feedback=Normal | (668, 20) | 294 × 48 |
| 4946:45094 | Size=Small, State=Disabled, Focus=False, Feedback=Normal | (668, 114) | 294 × 36 |
| 4946:45101 | Size=Medium, State=Normal, Focus=False, Feedback=Error | (20, 216) | 294 × 48 |
| 4946:45108 | Size=Small, State=Normal, Focus=False, Feedback=Error | (20, 310) | 294 × 36 |
| 4946:45115 | Size=Medium, State=Filled, Focus=False, Feedback=Error | (344, 216) | 294 × 48 |
| 4946:45123 | Size=Small, State=Filled, Focus=False, Feedback=Error | (344, 310) | 294 × 36 |
| 4946:45131 | Size=Medium, State=Disabled, Focus=False, Feedback=Error | (668, 216) | 294 × 48 |
| 4946:45138 | Size=Small, State=Disabled, Focus=False, Feedback=Error | (668, 310) | 294 × 36 |
| 4946:45145 | Size=Medium, State=Normal, Focus=True, Feedback=Normal | (20, 452) | 294 × 48 |
| 4946:45152 | Size=Small, State=Normal, Focus=True, Feedback=Normal | (20, 546) | 294 × 36 |
| 4946:45159 | Size=Medium, State=Filled, Focus=True, Feedback=Normal | (344, 452) | 294 × 48 |
| 4946:45167 | Size=Small, State=Filled, Focus=True, Feedback=Normal | (344, 546) | 294 × 36 |
| 4946:45175 | Size=Medium, State=Disabled, Focus=True, Feedback=Normal | (668, 452) | 294 × 48 |
| 4946:45182 | Size=Small, State=Disabled, Focus=True, Feedback=Normal | (668, 546) | 294 × 36 |
| 4946:45189 | Size=Medium, State=Normal, Focus=True, Feedback=Error | (20, 648) | 294 × 48 |
| 4946:45196 | Size=Small, State=Normal, Focus=True, Feedback=Error | (20, 742) | 294 × 36 |
| 4946:45203 | Size=Medium, State=Filled, Focus=True, Feedback=Error | (344, 648) | 294 × 48 |
| 4946:45211 | Size=Small, State=Filled, Focus=True, Feedback=Error | (344, 742) | 294 × 36 |
| 4946:45219 | Size=Medium, State=Disabled, Focus=True, Feedback=Error | (668, 648) | 294 × 48 |
| 4946:45226 | Size=Small, State=Disabled, Focus=True, Feedback=Error | (668, 742) | 294 × 36 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (sizes)

#### Medium
```
padding: { left: 16, top: 12, right: 16, bottom: 12 }
border.radii: { topLeft: 16, topRight: 16, bottomLeft: 16, bottomRight: 16 }
gap: 8
trailing.gap: 8
content.gap: 8
content.padding: { left: 0, top: 0, right: 0, bottom: 0 }
```

#### Small
```
padding: { left: 12, top: 8, right: 12, bottom: 8 }
border.radii: { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 }
gap: 8
trailing.gap: 8
icon.width: 20
content.gap: 8
content.padding: { left: 0, top: 0, right: 0, bottom: 0 }
```

### Tipografia

#### Medium (body-large)
```
family: "Roboto Flex"
style: Regular
size: 16
weight: 400
lineHeight: 24
letterSpacing: 0
```

#### Small (body)
```
family: "Roboto Flex"
style: Regular
size: 14
weight: 400
lineHeight: 20
letterSpacing: 0
```

### Estados (styles)

#### Normal / Blurred

**Normal (vazio):**
```
label.color: gray500
icon.trailing.color: gray800
border.width: 1
bg.color: white
border.color: gray300
```

**Filled (preenchido):**
```
label.color: gray700
icon.trailing.color: gray800
border.width: 1
bg.color: white
border.color: gray300
```

**Disabled:**
```
label.color: gray500
icon.trailing.color: gray500
border.width: 1
bg.color: gray150
border.color: gray150
```

#### Normal / Focused

**Normal (vazio):**
```
label.color: gray500
icon.trailing.color: gray800
border.width: 2
bg.color: white
border.color: gray700
```

**Filled (preenchido):**
```
label.color: gray700
icon.trailing.color: gray800
border.width: 2
bg.color: white
border.color: gray700
```

**Disabled:**
```
label.color: gray500
icon.trailing.color: gray500
border.width: 1
bg.color: gray150
border.color: gray150
```

#### Error / Blurred

**Normal (vazio):**
```
label.color: gray300
icon.trailing.color: redDark
border.width: 1
bg.color: white
border.color: redDark
```

**Filled (preenchido):**
```
label.color: redDark
icon.trailing.color: redDark
border.width: 1
bg.color: white
border.color: redDark
```

**Disabled:**
```
label.color: gray500
icon.leading.color: gray500 ← Nota: leading aqui é trailing
border.width: 1
bg.color: gray150
border.color: gray150
```

#### Error / Focused

**Normal (vazio):**
```
label.color: gray300
icon.trailing.color: redDark
border.width: 2
bg.color: white
border.color: redDark
```

**Filled (preenchido):**
```
label.color: redDark
icon.trailing.color: redDark
border.width: 2
bg.color: white
border.color: redDark
```

**Disabled:**
```
label.color: gray500
icon.trailing.color: gray500
border.width: 1
bg.color: gray150
border.color: gray150
```

---

## 📐 Dimensões Extraídas das Variantes

### Altura dos Componentes
- **Small:** 36px
- **Medium:** 48px

### Largura Padrão
- Todos: 294px (referência do Figma)

### Ícone Trailing (Chevron Down)
- Sempre presente em todas as variantes
- Cor varia por estado (normal, error, disabled)

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
Todas as cores já existem no `tokens.ts`! ✅
- `white`
- `gray150`
- `gray300`
- `gray500`
- `gray700`
- `gray800`
- `redDark`

### Estrutura para tokens.ts

```typescript
inputSelect: {
  // Tamanhos
  size: {
    small: {
      height: 36,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 12,
      fontSize: 14,
      lineHeight: 20,
      gap: 8,
      iconSize: 20,
    },
    medium: {
      height: 48,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 16,
      fontSize: 16,
      lineHeight: 24,
      gap: 8,
      iconSize: 20,
    },
  },
  
  // Estados (reutiliza InputSingle com adição do trailing icon)
  state: {
    normal: {
      blurred: {
        normal: { /* ... */ trailingIconColor: 'gray800' },
        filled: { /* ... */ trailingIconColor: 'gray800' },
        disabled: { /* ... */ trailingIconColor: 'gray500' },
      },
      focused: {
        normal: { /* ... */ trailingIconColor: 'gray800' },
        filled: { /* ... */ trailingIconColor: 'gray800' },
        disabled: { /* ... */ trailingIconColor: 'gray500' },
      },
    },
    error: {
      blurred: {
        normal: { /* ... */ trailingIconColor: 'redDark' },
        filled: { /* ... */ trailingIconColor: 'redDark' },
        disabled: { /* ... */ trailingIconColor: 'gray500' },
      },
      focused: {
        normal: { /* ... */ trailingIconColor: 'redDark' },
        filled: { /* ... */ trailingIconColor: 'redDark' },
        disabled: { /* ... */ trailingIconColor: 'gray500' },
      },
    },
  },
}
```

---

## 🔄 Diferenças em Relação ao InputSingle

### Semelhanças (Reutilização 95%)
- ✅ Mesma estrutura de estados (normal/error × blurred/focused × normal/filled/disabled)
- ✅ Mesmas cores de background, borda, label
- ✅ Mesmos tamanhos (small: 36px, medium: 48px)
- ✅ Mesmos espaçamentos e border radius

### Diferenças (5%)
- 🆕 **Trailing Icon obrigatório:** Sempre presente (ChevronDown)
- 🆕 **Não editável:** Campo de seleção, não input de texto
- 🆕 **Comportamento:** Abre menu dropdown ao clicar
- 🆕 **Ícone trailing color:** Tem cores específicas por estado

---

## 🎯 Componente React

### Props Esperadas
```typescript
interface InputSelectProps {
  size?: 'small' | 'medium'
  label?: string
  value?: string
  options: Array<{ label: string; value: string }>
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  error?: boolean
  errorMessage?: string
  disabled?: boolean
  accessibilityLabel?: string
  testID?: string
}
```

### Variantes do Tamagui
```typescript
variants: {
  size: {
    small: { /* tokens.inputSelect.size.small */ },
    medium: { /* tokens.inputSelect.size.medium */ },
  },
}
```

### Estados Dinâmicos (via JS)
```typescript
const feedback = error ? 'error' : 'normal'
const focus = isFocused ? 'focused' : 'blurred'
const fillState = disabled ? 'disabled' : (value ? 'filled' : 'normal')
```

---

## 📝 Notas de Implementação

1. **Reutilização do InputSingle:**
   - Aproveitar 95% dos tokens e estrutura do InputSingle
   - Adicionar apenas tokens específicos do trailing icon

2. **Ícone Trailing:**
   - Sempre `ChevronOutlinedDown`
   - Cor dinâmica baseada em feedback e estado

3. **Dropdown Behavior:**
   - Implementar menu de opções (não coberto nesta spec de visual)
   - Considerar usar biblioteca como `@radix-ui/react-select` ou nativo

4. **Acessibilidade:**
   - `accessibilityRole="combobox"`
   - `accessibilityState={{ expanded: isOpen, disabled }}`

---

**Componente reutiliza 95% do InputSingle com adição do trailing icon!** 🎯

