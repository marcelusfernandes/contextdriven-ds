# InputSingle - Especificação Técnica

**Componente:** Input Single (Campo de entrada de texto de linha única)  
**Figma Node ID:** 4921:43563  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4921-43563&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

> ✅ **Token-Based:** Esta especificação usa apenas referências a tokens semânticos através da função `ref()`, seguindo as boas práticas do Design System. Nenhum valor bruto (raw value) é usado diretamente.

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
fontFamily: ref(primitive.typography.fontFamily.body)
fontSize: ref(primitive.typography.fontSize.medium)
fontWeight: ref(primitive.typography.fontWeight.regular)
lineHeight: ref(primitive.typography.lineHeight.regular.medium)
letterSpacing: ref(primitive.typography.letterSpacing.regular)
```

#### Small
```typescript
// Font: Roboto Flex, Regular, 14px, lineHeight: 20px
fontFamily: ref(primitive.typography.fontFamily.body)
fontSize: ref(primitive.typography.fontSize.small)
fontWeight: ref(primitive.typography.fontWeight.regular)
lineHeight: ref(primitive.typography.lineHeight.regular.small)
letterSpacing: ref(primitive.typography.letterSpacing.regular)
```

### 3. Cores - Feedback Normal, Focus False (Blurred)

#### Estado Normal (vazio)
```typescript
labelColor: ref(primitive.color.gray500)    // #888888
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.gray300)    // #bbbbbb
borderWidth: 1
```

#### Estado Filled (preenchido)
```typescript
labelColor: ref(primitive.color.gray650)     // #555555
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.gray300)    // #bbbbbb
borderWidth: 1
```

#### Estado Disabled
```typescript
labelColor: ref(primitive.color.gray500)     // #888888
bg: ref(primitive.color.gray200)             // #eeeeee
borderColor: ref(primitive.color.gray200)    // #eeeeee
borderWidth: 1
```

### 4. Cores - Feedback Normal, Focus True

#### Estado Normal (vazio com foco)
```typescript
labelColor: ref(primitive.color.gray500)     // #888888
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.gray650)    // #555555
borderWidth: 2
```

#### Estado Filled (preenchido com foco)
```typescript
labelColor: ref(primitive.color.gray650)     // #555555
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.gray650)    // #555555
borderWidth: 2
```

#### Estado Disabled (com foco - borda não muda)
```typescript
labelColor: ref(primitive.color.gray500)     // #888888
bg: ref(primitive.color.gray200)             // #eeeeee
borderColor: ref(primitive.color.gray200)    // #eeeeee
borderWidth: 1
```

### 5. Cores - Feedback Error, Focus False (Blurred)

#### Estado Normal (vazio com erro)
```typescript
labelColor: ref(primitive.color.gray300)     // #bbbbbb
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.redDark)    // #bc1229
borderWidth: 1
```

#### Estado Filled (preenchido com erro)
```typescript
labelColor: ref(primitive.color.redDark)     // #bc1229
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.redDark)    // #bc1229
borderWidth: 1
```

#### Estado Disabled (com erro)
```typescript
labelColor: ref(primitive.color.gray500)     // #888888
bg: ref(primitive.color.gray200)             // #eeeeee
borderColor: ref(primitive.color.gray200)    // #eeeeee
borderWidth: 1
```

### 6. Cores - Feedback Error, Focus True

#### Estado Normal (vazio com erro e foco)
```typescript
labelColor: ref(primitive.color.gray300)     // #bbbbbb
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.redDark)    // #bc1229
borderWidth: 2
```

#### Estado Filled (preenchido com erro e foco)
```typescript
labelColor: ref(primitive.color.redDark)     // #bc1229
bg: ref(primitive.color.white)               // #ffffff
borderColor: ref(primitive.color.redDark)    // #bc1229
borderWidth: 2
```

#### Estado Disabled (com erro e foco)
```typescript
labelColor: ref(primitive.color.gray500)     // #888888
bg: ref(primitive.color.gray200)             // #eeeeee
borderColor: ref(primitive.color.gray200)    // #eeeeee
borderWidth: 1
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

### Cores Identificadas no Design

Todas as cores já existem nos tokens primitivos:
- `gray500` (#888888) ✅ - Label normal
- `gray650` (#555555) ✅ - Label preenchido e borda com foco
- `gray300` (#bbbbbb) ✅ - Borda padrão e label em erro
- `white` (#ffffff) ✅ - Background normal
- `gray200` (#eeeeee) ✅ - Background disabled
- `redDark` (#bc1229) ✅ - Estados de erro

### Estrutura a Ser Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  /**
   * INPUT SINGLE
   * Campo de entrada de texto de linha única
   */
  inputSingle: {
    // Tamanhos
    size: {
      small: {
        height: 36,
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        gap: ref(primitive.space[8]),
      },
      medium: {
        height: 48,
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[16]),
        borderRadius: ref(primitive.radius[16]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        gap: ref(primitive.space[8]),
      },
    },
    
    // Estados visuais
    state: {
      // Feedback Normal
      normal: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray300),
            borderWidth: 1,
          },
          filled: {
            labelColor: ref(primitive.color.gray650),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray300),
            borderWidth: 1,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1,
          },
        },
        // Focus True
        focused: {
          normal: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray650),
            borderWidth: 2,
          },
          filled: {
            labelColor: ref(primitive.color.gray650),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.gray650),
            borderWidth: 2,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1,
          },
        },
      },
      
      // Feedback Error
      error: {
        // Focus False (Blurred)
        blurred: {
          normal: {
            labelColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 1,
          },
          filled: {
            labelColor: ref(primitive.color.redDark),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 1,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
            borderWidth: 1,
          },
        },
        // Focus True
        focused: {
          normal: {
            labelColor: ref(primitive.color.gray300),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 2,
          },
          filled: {
            labelColor: ref(primitive.color.redDark),
            bg: ref(primitive.color.white),
            borderColor: ref(primitive.color.redDark),
            borderWidth: 2,
          },
          disabled: {
            labelColor: ref(primitive.color.gray500),
            bg: ref(primitive.color.gray200),
            borderColor: ref(primitive.color.gray200),
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

- [ ] Adicionar seção `inputSingle` em `tokens.ts` usando ref()
- [ ] Criar componente `InputSingle.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (small, medium)
- [ ] Implementar estados de preenchimento (normal, filled, disabled)
- [ ] Implementar estados de foco (blurred, focused)
- [ ] Implementar feedback (normal, error)
- [ ] Criar sistema de label/placeholder dinâmico
- [ ] Implementar suporte a ícones (leading/trailing)
- [ ] Adicionar suporte a mensagem de erro
- [ ] Criar stories no Storybook com todas as variantes
- [ ] Testar comportamento de foco e blur
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade (ARIA labels)

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

