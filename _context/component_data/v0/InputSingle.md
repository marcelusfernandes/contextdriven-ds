# InputSingle - Especificação Técnica

**Componente:** Input Single (Campo de entrada de texto de linha única)  
**Figma Node ID:** 4921:43563  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4921-43563&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4921:43563
- **Nome:** Input Single 🟢
- **Posição:** x=14827, y=-11925
- **Dimensões:** 993 × 811

### Variantes Identificadas

Total de **24 variantes** estruturadas por:
- **2 Tamanhos:** Small (36px), Medium (48px)
- **3 Estados de Preenchimento:** Normal (vazio), Filled (preenchido), Disabled (desabilitado)
- **2 Estados de Foco:** Focus=True, Focus=False (Blurred)
- **2 Feedbacks:** Normal, Error

#### Tamanho Medium (48px) - Focus=False (Blurred), Feedback=Normal

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43550 | Size=Medium, State=Normal, Focus=False, Feedback=Normal | 20, 20 | 294 × 48 |
| 4921:43555 | Size=Medium, State=Filled, Focus=False, Feedback=Normal | 344, 20 | 294 × 48 |
| 4921:43560 | Size=Medium, State=Disabled, Focus=False, Feedback=Normal | 668, 20 | 294 × 48 |

#### Tamanho Small (36px) - Focus=False (Blurred), Feedback=Normal

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43535 | Size=Small, State=Normal, Focus=False, Feedback=Normal | 20, 114 | 294 × 36 |
| 4921:43545 | Size=Small, State=Filled, Focus=False, Feedback=Normal | 344, 114 | 294 × 36 |
| 4921:43541 | Size=Small, State=Disabled, Focus=False, Feedback=Normal | 668, 114 | 294 × 36 |

#### Tamanho Medium (48px) - Focus=False (Blurred), Feedback=Error

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43552 | Size=Medium, State=Normal, Focus=False, Feedback=Error | 20, 216 | 294 × 48 |
| 4921:43562 | Size=Medium, State=Filled, Focus=False, Feedback=Error | 344, 216 | 294 × 48 |
| 4921:43546 | Size=Medium, State=Disabled, Focus=False, Feedback=Error | 668, 216 | 294 × 48 |

#### Tamanho Small (36px) - Focus=False (Blurred), Feedback=Error

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43548 | Size=Small, State=Normal, Focus=False, Feedback=Error | 20, 310 | 294 × 36 |
| 4921:43556 | Size=Small, State=Filled, Focus=False, Feedback=Error | 344, 310 | 294 × 36 |
| 4921:43543 | Size=Small, State=Disabled, Focus=False, Feedback=Error | 668, 310 | 294 × 36 |

#### Tamanho Medium (48px) - Focus=True, Feedback=Normal

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43538 | Size=Medium, State=Normal, Focus=True, Feedback=Normal | 20, 452 | 294 × 48 |
| 4921:43536 | Size=Medium, State=Filled, Focus=True, Feedback=Normal | 344, 452 | 294 × 48 |
| 4921:43549 | Size=Medium, State=Disabled, Focus=True, Feedback=Normal | 668, 452 | 294 × 48 |

#### Tamanho Small (36px) - Focus=True, Feedback=Normal

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43558 | Size=Small, State=Normal, Focus=True, Feedback=Normal | 20, 546 | 294 × 36 |
| 4921:43539 | Size=Small, State=Filled, Focus=True, Feedback=Normal | 344, 546 | 294 × 36 |
| 4921:43534 | Size=Small, State=Disabled, Focus=True, Feedback=Normal | 668, 546 | 294 × 36 |

#### Tamanho Medium (48px) - Focus=True, Feedback=Error

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43533 | Size=Medium, State=Normal, Focus=True, Feedback=Error | 20, 648 | 294 × 48 |
| 4921:43531 | Size=Medium, State=Filled, Focus=True, Feedback=Error | 344, 648 | 294 × 48 |
| 4921:43529 | Size=Medium, State=Disabled, Focus=True, Feedback=Error | 668, 648 | 294 × 48 |

#### Tamanho Small (36px) - Focus=True, Feedback=Error

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4921:43532 | Size=Small, State=Normal, Focus=True, Feedback=Error | 20, 742 | 294 × 36 |
| 4921:43530 | Size=Small, State=Filled, Focus=True, Feedback=Error | 344, 742 | 294 × 36 |
| 4921:43559 | Size=Small, State=Disabled, Focus=True, Feedback=Error | 668, 742 | 294 × 36 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### 1. Tamanhos e Espaçamentos

#### Medium (48px)
```typescript
tokens.inputSingle.sizes.padding.left.medium = 16
tokens.inputSingle.sizes.padding.top.medium = 12
tokens.inputSingle.sizes.padding.right.medium = 16
tokens.inputSingle.sizes.padding.bottom.medium = 12

tokens.inputSingle.sizes.gap.medium = 8

tokens.inputSingle.sizes.border.radii.topLeft.medium = 16
tokens.inputSingle.sizes.border.radii.topRight.medium = 16
tokens.inputSingle.sizes.border.radii.bottomLeft.medium = 16
tokens.inputSingle.sizes.border.radii.bottomRight.medium = 16

// Content (área interna do input)
tokens.inputSingle.sizes.content.gap.medium = 8
tokens.inputSingle.sizes.content.padding.left.medium = 0
tokens.inputSingle.sizes.content.padding.top.medium = 0
tokens.inputSingle.sizes.content.padding.right.medium = 0
tokens.inputSingle.sizes.content.padding.bottom.medium = 0
```

#### Small (36px)
```typescript
tokens.inputSingle.sizes.padding.left.small = 12
tokens.inputSingle.sizes.padding.top.small = 8
tokens.inputSingle.sizes.padding.right.small = 12
tokens.inputSingle.sizes.padding.bottom.small = 8

tokens.inputSingle.sizes.gap.small = 8

tokens.inputSingle.sizes.border.radii.topLeft.small = 12
tokens.inputSingle.sizes.border.radii.topRight.small = 12
tokens.inputSingle.sizes.border.radii.bottomLeft.small = 12
tokens.inputSingle.sizes.border.radii.bottomRight.small = 12

// Content (área interna do input)
tokens.inputSingle.sizes.content.gap.small = 8
tokens.inputSingle.sizes.content.padding.top.small = 0
tokens.inputSingle.sizes.content.padding.bottom.small = 0
```

### 2. Tipografia

#### Medium
```typescript
// Font: Roboto Flex, Regular, 16px, lineHeight: 24px
content/body-large = Font(family: "Roboto Flex", style: Regular, size: 16, weight: 400, lineHeight: 24)
semantic/typography/lineHeights/regular/medium = 24
semantic/typography/letterSpacings/regular = 0
```

#### Small
```typescript
// Font: Roboto Flex, Regular, 14px, lineHeight: 20px
content/body = Font(family: "Roboto Flex", style: Regular, size: 14, weight: 400, lineHeight: 20)
semantic/typography/lineHeights/regular/small = 20
semantic/typography/letterSpacings/regular = 0
```

### 3. Cores - Feedback Normal, Focus False (Blurred)

#### Estado Normal (vazio)
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.normal = "#888888"
tokens.inputSingle.styles.normal.blurred.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.normal.blurred.border.color.normal = "#bbbbbb"
tokens.inputSingle.styles.normal.blurred.border.width.normal = 1
```

#### Estado Filled (preenchido)
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.filled = "#555555"
tokens.inputSingle.styles.normal.blurred.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.normal.blurred.border.color.filled = "#bbbbbb"
// border.width mantém 1
```

#### Estado Disabled
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.disabled = "#888888"
tokens.inputSingle.styles.normal.blurred.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.normal.blurred.border.color.disabled = "#eeeeee"
// border.width mantém 1
```

### 4. Cores - Feedback Normal, Focus True

#### Estado Normal (vazio com foco)
```typescript
tokens.inputSingle.styles.normal.focused.label.color.normal = "#888888"
tokens.inputSingle.styles.normal.focused.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.normal.focused.border.color.normal = "#555555"
tokens.inputSingle.styles.normal.focused.border.width.normal = 2
```

#### Estado Filled (preenchido com foco)
```typescript
tokens.inputSingle.styles.normal.focused.label.color.filled = "#555555"
tokens.inputSingle.styles.normal.focused.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.normal.focused.border.color.filled = "#555555"
tokens.inputSingle.styles.normal.focused.border.width.filled = 2
```

#### Estado Disabled (com foco - borda não muda)
```typescript
tokens.inputSingle.styles.normal.focused.label.color.disabled = "#888888"
tokens.inputSingle.styles.normal.focused.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.normal.focused.border.color.disabled = "#eeeeee"
tokens.inputSingle.styles.normal.focused.border.width.disabled = 1
```

### 5. Cores - Feedback Error, Focus False (Blurred)

#### Estado Normal (vazio com erro)
```typescript
tokens.inputSingle.styles.error.blurred.label.color.normal = "#bbbbbb"
tokens.inputSingle.styles.error.blurred.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.error.blurred.border.color.normal = "#bc1229"
tokens.inputSingle.styles.error.blurred.border.width.normal = 1
```

#### Estado Filled (preenchido com erro)
```typescript
tokens.inputSingle.styles.error.blurred.label.color.filled = "#bc1229"
tokens.inputSingle.styles.error.blurred.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.error.blurred.border.color.filled = "#bc1229"
tokens.inputSingle.styles.error.blurred.border.width.filled = 1
```

#### Estado Disabled (com erro)
```typescript
tokens.inputSingle.styles.error.blurred.label.color.disabled = "#888888"
tokens.inputSingle.styles.error.blurred.bg.color.disabled = "#eeeeee"
semantic/color/interface/function/disabled/normal/border = "#eeeeee"
```

### 6. Cores - Feedback Error, Focus True

#### Estado Normal (vazio com erro e foco)
```typescript
tokens.inputSingle.styles.error.focused.label.color.normal = "#bbbbbb"
tokens.inputSingle.styles.error.focused.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.error.focused.border.color.normal = "#bc1229"
tokens.inputSingle.styles.error.focused.border.width.normal = 2
```

#### Estado Filled (preenchido com erro e foco)
```typescript
tokens.inputSingle.styles.error.focused.label.color.filled = "#bc1229"
tokens.inputSingle.styles.error.focused.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.error.focused.border.color.filled = "#bc1229"
tokens.inputSingle.styles.error.focused.border.width.filled = 2
```

#### Estado Disabled (com erro e foco)
```typescript
tokens.inputSingle.styles.error.focused.label.color.disabled = "#888888"
tokens.inputSingle.styles.error.focused.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.error.focused.border.color.disabled = "#eeeeee"
tokens.inputSingle.styles.error.focused.border.width.disabled = 1
```

---

## 📐 Dimensões Extraídas das Variantes

### Tamanhos do Container
- **Medium:** 294 × 48 px (altura fixa 48px)
- **Small:** 294 × 36 px (altura fixa 36px)

### Padding
- **Medium:** 16px horizontal, 12px vertical
- **Small:** 12px horizontal, 8px vertical

### Border Radius
- **Medium:** 16px
- **Small:** 12px

### Border Width
- **Blurred (sem foco):** 1px
- **Focused (com foco):** 2px
- **Disabled:** 1px (não muda com foco)

### Tipografia
- **Medium:** 16px / 24px line-height
- **Small:** 14px / 20px line-height
- **Font Family:** Roboto Flex
- **Font Weight:** 400 (Regular)
- **Letter Spacing:** 0

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

Verificar se já existem:
- `#888888` → `gray500` ✅ já existe
- `#555555` → **NOVA** - gray600 (precisa adicionar)
- `#bbbbbb` → **NOVA** - gray400 (precisa adicionar)
- `#ffffff` → `white` ✅ já existe
- `#eeeeee` → `gray200` ✅ já existe
- `#bc1229` → `redDark` ✅ já existe

**Cores novas a adicionar:**
- `gray600: '#555555'` - Cor de texto preenchido e borda com foco
- `gray400: '#bbbbbb'` - Cor de borda padrão e label em erro

### Estrutura a Ser Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  // 🆕 Input Single
  inputSingle: {
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
      },
      medium: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        gap: 8,
      },
    },
    
    // Estados visuais
    state: {
      // Feedback Normal
      normal: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: '#888888',
            bg: '#ffffff',
            borderColor: '#bbbbbb',
            borderWidth: 1,
          },
          filled: {
            labelColor: '#555555',
            bg: '#ffffff',
            borderColor: '#bbbbbb',
            borderWidth: 1,
          },
          disabled: {
            labelColor: '#888888',
            bg: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 1,
          },
        },
        // Focus True
        focused: {
          normal: {
            labelColor: '#888888',
            bg: '#ffffff',
            borderColor: '#555555',
            borderWidth: 2,
          },
          filled: {
            labelColor: '#555555',
            bg: '#ffffff',
            borderColor: '#555555',
            borderWidth: 2,
          },
          disabled: {
            labelColor: '#888888',
            bg: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 1,
          },
        },
      },
      
      // Feedback Error
      error: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: '#bbbbbb',
            bg: '#ffffff',
            borderColor: '#bc1229',
            borderWidth: 1,
          },
          filled: {
            labelColor: '#bc1229',
            bg: '#ffffff',
            borderColor: '#bc1229',
            borderWidth: 1,
          },
          disabled: {
            labelColor: '#888888',
            bg: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 1,
          },
        },
        // Focus True
        focused: {
          normal: {
            labelColor: '#bbbbbb',
            bg: '#ffffff',
            borderColor: '#bc1229',
            borderWidth: 2,
          },
          filled: {
            labelColor: '#bc1229',
            bg: '#ffffff',
            borderColor: '#bc1229',
            borderWidth: 2,
          },
          disabled: {
            labelColor: '#888888',
            bg: '#eeeeee',
            borderColor: '#eeeeee',
            borderWidth: 1,
          },
        },
      },
    },
  },
}
```

---

## 📝 Observações Importantes

1. **Componente Base:** Este é o componente fundamental para todos os outros inputs (Textarea, Select, Field)
2. **Estados Complexos:** Combina 4 dimensões de estados (tamanho, preenchimento, foco, feedback)
3. **Borda com Foco:** Border width aumenta de 1px para 2px quando focado (exceto disabled)
4. **Label Dinâmico:** Cor do label muda baseado em estado preenchido e feedback
5. **Feedback de Erro:** Usa cor vermelha (#bc1229) para indicar erro visualmente
6. **Disabled Consistente:** Estado disabled sempre usa background #eeeeee e não responde a foco
7. **Typography Responsiva:** Tamanho de fonte ajusta conforme tamanho do input

---

## ✅ Checklist de Implementação

- [ ] Adicionar cores novas em `tokens.ts` (gray400, gray600)
- [ ] Adicionar seção inputSingle em `tokens.ts`
- [ ] Criar componente `InputSingle.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (small, medium)
- [ ] Implementar estados de preenchimento (normal, filled, disabled)
- [ ] Implementar estados de foco (blurred, focused)
- [ ] Implementar feedback (normal, error)
- [ ] Criar sistema de label/placeholder
- [ ] Implementar suporte a ícones (leading/trailing)
- [ ] Adicionar suporte a mensagem de erro
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

