# InputTextarea - Especificação Técnica

**Componente:** Input Textarea (Campo de texto multilinhas)  
**Figma Node ID:** 4943:44572  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4943-44572&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4943:44572
- **Nome:** Input Textearea 🟢
- **Posição:** x=17752, y=-11937
- **Dimensões:** 993 × 834

### Variantes Identificadas

Total de **24 variantes** estruturadas por:
- **2 Tamanhos:** Small (56px altura), Medium (72px altura)
- **3 Estados de Preenchimento:** Normal (vazio), Filled (preenchido), Disabled
- **2 Estados de Focus:** False (blurred), True (focused)
- **2 Tipos de Feedback:** Normal, Error

#### Medium - Feedback Normal

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 4943:44573 | Medium, Normal, Blurred, Normal | 294 × 72 |
| 4943:44587 | Medium, Filled, Blurred, Normal | 294 × 72 |
| 4943:44603 | Medium, Disabled, Blurred, Normal | 294 × 72 |
| 4943:44661 | Medium, Normal, Focused, Normal | 294 × 72 |
| 4943:44675 | Medium, Filled, Focused, Normal | 294 × 72 |
| 4943:44691 | Medium, Disabled, Focused, Normal | 294 × 72 |

#### Medium - Feedback Error

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 4943:44617 | Medium, Normal, Blurred, Error | 294 × 72 |
| 4943:44631 | Medium, Filled, Blurred, Error | 294 × 72 |
| 4943:44647 | Medium, Disabled, Blurred, Error | 294 × 72 |
| 4943:44705 | Medium, Normal, Focused, Error | 294 × 72 |
| 4943:44719 | Medium, Filled, Focused, Error | 294 × 72 |
| 4943:44735 | Medium, Disabled, Focused, Error | 294 × 72 |

#### Small - Feedback Normal

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 4943:44580 | Small, Normal, Blurred, Normal | 294 × 56 |
| 4943:44595 | Small, Filled, Blurred, Normal | 294 × 56 |
| 4943:44610 | Small, Disabled, Blurred, Normal | 294 × 56 |
| 4943:44668 | Small, Normal, Focused, Normal | 294 × 56 |
| 4943:44683 | Small, Filled, Focused, Normal | 294 × 56 |
| 4943:44698 | Small, Disabled, Focused, Normal | 294 × 56 |

#### Small - Feedback Error

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 4943:44624 | Small, Normal, Blurred, Error | 294 × 56 |
| 4943:44639 | Small, Filled, Blurred, Error | 294 × 56 |
| 4943:44654 | Small, Disabled, Blurred, Error | 294 × 56 |
| 4943:44712 | Small, Normal, Focused, Error | 294 × 56 |
| 4943:44727 | Small, Filled, Focused, Error | 294 × 56 |
| 4943:44742 | Small, Disabled, Focused, Error | 294 × 56 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### 1. Tipografia

#### Medium (72px altura)
```typescript
content/body-large = Font(family: "Roboto Flex", style: Regular, size: 16, weight: 400, lineHeight: 24)
```

#### Small (56px altura)
```typescript
content/body = Font(family: "Roboto Flex", style: Regular, size: 14, weight: 400, lineHeight: 20)
```

### 2. Tamanhos e Espaçamentos

#### Medium (72px altura)
```typescript
tokens.inputTextarea.sizes.content.gap.medium = 8
tokens.inputTextarea.sizes.content.padding.left.medium = 0
tokens.inputTextarea.sizes.content.padding.top.medium = 0
tokens.inputTextarea.sizes.content.padding.right.medium = 0
tokens.inputTextarea.sizes.content.padding.bottom.medium = 0
tokens.inputTextarea.sizes.gap.medium = 8
tokens.inputTextarea.sizes.padding.left.medium = 16
tokens.inputTextarea.sizes.padding.top.medium = 12
tokens.inputTextarea.sizes.padding.right.medium = 16
tokens.inputTextarea.sizes.padding.bottom.medium = 12
tokens.inputTextarea.sizes.border.radii.topLeft.medium = 16
tokens.inputTextarea.sizes.border.radii.topRight.medium = 16
tokens.inputTextarea.sizes.border.radii.bottomLeft.medium = 16
tokens.inputTextarea.sizes.border.radii.bottomRight.medium = 16
```

#### Small (56px altura)
```typescript
tokens.inputTextarea.sizes.content.gap.small = 8
tokens.inputTextarea.sizes.content.padding.left.small = 0
tokens.inputTextarea.sizes.content.padding.top.small = 0
tokens.inputTextarea.sizes.content.padding.right.small = 0
tokens.inputTextarea.sizes.content.padding.bottom.small = 0
tokens.inputTextarea.sizes.gap.small = 8
tokens.inputTextarea.sizes.padding.left.small = 12
tokens.inputTextarea.sizes.padding.top.small = 8
tokens.inputTextarea.sizes.padding.right.small = 12
tokens.inputTextarea.sizes.padding.bottom.small = 8
tokens.inputTextarea.sizes.border.radii.topLeft.small = 12
tokens.inputTextarea.sizes.border.radii.topRight.small = 12
tokens.inputTextarea.sizes.border.radii.bottomLeft.small = 12
tokens.inputTextarea.sizes.border.radii.bottomRight.small = 12
```

### 3. Cores - Feedback Normal

#### Estado Normal (Vazio) - Blurred
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.normal = "#888888"
tokens.inputTextarea.styles.normal.blurred.icon.resizing.color.normal = "#888888"
tokens.inputSingle.styles.normal.blurred.border.width.normal = 1
tokens.inputSingle.styles.normal.blurred.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.normal.blurred.border.color.normal = "#bbbbbb"
```

#### Estado Filled (Preenchido) - Blurred
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.filled = "#555555"
tokens.inputTextarea.styles.normal.blurred.icon.resizing.color.filled = "#888888"
tokens.inputSingle.styles.normal.blurred.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.normal.blurred.border.color.filled = "#bbbbbb"
```

#### Estado Disabled - Blurred
```typescript
tokens.inputSingle.styles.normal.blurred.label.color.disabled = "#888888"
tokens.inputSingle.styles.normal.blurred.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.normal.blurred.border.color.disabled = "#eeeeee"
```

#### Estado Normal (Vazio) - Focused
```typescript
tokens.inputSingle.styles.normal.focused.label.color.normal = "#888888"
tokens.inputTextarea.styles.normal.focused.icon.resizing.color.normal = "#888888"
tokens.inputSingle.styles.normal.focused.border.width.normal = 2
tokens.inputSingle.styles.normal.focused.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.normal.focused.border.color.normal = "#555555"
```

#### Estado Filled (Preenchido) - Focused
```typescript
tokens.inputSingle.styles.normal.focused.label.color.filled = "#555555"
tokens.inputTextarea.styles.normal.focused.icon.resizing.color.filled = "#888888"
tokens.inputSingle.styles.normal.focused.border.width.filled = 2
tokens.inputSingle.styles.normal.focused.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.normal.focused.border.color.filled = "#555555"
```

#### Estado Disabled - Focused
```typescript
tokens.inputSingle.styles.normal.focused.label.color.disabled = "#888888"
tokens.inputSingle.styles.normal.focused.border.width.disabled = 1
tokens.inputSingle.styles.normal.focused.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.normal.focused.border.color.disabled = "#eeeeee"
```

### 4. Cores - Feedback Error

#### Estado Normal (Vazio) - Blurred
```typescript
tokens.inputSingle.styles.error.blurred.label.color.normal = "#bbbbbb"
tokens.inputTextarea.styles.error.blurred.icon.resizing.color.normal = "#bc1229"
tokens.inputSingle.styles.error.blurred.border.width.normal = 1
tokens.inputSingle.styles.error.blurred.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.error.blurred.border.color.normal = "#bc1229"
```

#### Estado Filled (Preenchido) - Blurred
```typescript
tokens.inputSingle.styles.error.blurred.label.color.filled = "#bc1229"
tokens.inputTextarea.styles.error.blurred.icon.resizing.color.filled = "#bc1229"
tokens.inputSingle.styles.error.blurred.border.width.filled = 1
tokens.inputSingle.styles.error.blurred.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.error.blurred.border.color.filled = "#bc1229"
```

#### Estado Disabled - Blurred
```typescript
tokens.inputSingle.styles.error.blurred.label.color.disabled = "#888888"
tokens.inputSingle.styles.error.blurred.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.error.blurred.border.color.disabled = "#eeeeee"
```

#### Estado Normal (Vazio) - Focused
```typescript
tokens.inputSingle.styles.error.focused.label.color.normal = "#bbbbbb"
tokens.inputTextarea.styles.error.focused.icon.resizing.color.normal = "#bc1229"
tokens.inputSingle.styles.error.focused.border.width.normal = 2
tokens.inputSingle.styles.error.focused.bg.color.normal = "#ffffff"
tokens.inputSingle.styles.error.focused.border.color.normal = "#bc1229"
```

#### Estado Filled (Preenchido) - Focused
```typescript
tokens.inputSingle.styles.error.focused.label.color.filled = "#bc1229"
tokens.inputTextarea.styles.error.focused.icon.resizing.color.filled = "#bc1229"
tokens.inputSingle.styles.error.focused.border.width.filled = 2
tokens.inputSingle.styles.error.focused.bg.color.filled = "#ffffff"
tokens.inputSingle.styles.error.focused.border.color.filled = "#bc1229"
```

#### Estado Disabled - Focused
```typescript
tokens.inputSingle.styles.error.focused.label.color.disabled = "#888888"
tokens.inputSingle.styles.error.focused.border.width.disabled = 1
tokens.inputSingle.styles.error.focused.bg.color.disabled = "#eeeeee"
tokens.inputSingle.styles.error.focused.border.color.disabled = "#eeeeee"
```

---

## 📐 Dimensões Extraídas das Variantes

### Altura e Largura
- **Medium:** 294px (largura fixa) × 72px (altura mínima)
- **Small:** 294px (largura fixa) × 56px (altura mínima)

**Observação:** A altura é mínima. O textarea deve crescer verticalmente conforme o conteúdo.

### Ícone de Redimensionamento (Resizing Icon)
- Posicionado no canto inferior direito
- Indica que o textarea é redimensionável

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

**NENHUMA NOVA!** Todas as cores já existem:
- `#888888` → gray500 ✅ (já existe no InputSingle)
- `#555555` → gray650 ✅ (já existe no InputSingle)
- `#bbbbbb` → gray300 ✅ (já existe no InputSingle)
- `#bc1229` → redDark ✅ (já existe)
- `#ffffff` → white ✅ (já existe)
- `#eeeeee` → gray200 ✅ (já existe)

### Tokens Novos Específicos

Apenas tokens de **dimensões e ícone de redimensionamento**:

```typescript
export const tokens = {
  // ... tokens globais existentes (nenhum novo!)
  
  // 🆕 Input Textarea
  inputTextarea: {
    // Tamanhos
    size: {
      small: {
        minHeight: 56,
        padding: {
          vertical: 8,
          horizontal: 12,
        },
        borderRadius: 12,
        fontSize: 14,
        lineHeight: 20,
        gap: 8,
      },
      medium: {
        minHeight: 72,
        padding: {
          vertical: 12,
          horizontal: 16,
        },
        borderRadius: 16,
        fontSize: 16,
        lineHeight: 24,
        gap: 8,
      },
    },
    
    // Ícone de redimensionamento
    resizingIcon: {
      // Cores por estado (mesmas do InputSingle)
      normal: {
        blurred: {
          normal: '#888888',    // gray500
          filled: '#888888',    // gray500
        },
        focused: {
          normal: '#888888',    // gray500
          filled: '#888888',    // gray500
        },
      },
      error: {
        blurred: {
          normal: '#bc1229',    // redDark
          filled: '#bc1229',    // redDark
        },
        focused: {
          normal: '#bc1229',    // redDark
          filled: '#bc1229',    // redDark
        },
      },
    },
  },
}
```

**Observação:** A maioria dos tokens são **reutilizados do InputSingle**! O InputTextarea é basicamente um InputSingle com:
1. Altura mínima (não fixa)
2. Suporte a múltiplas linhas
3. Ícone de redimensionamento no canto inferior direito

---

## 📝 Observações Importantes

1. **Baseado no InputSingle:** Reutiliza TODOS os tokens de cores, estados e feedback
2. **Altura Variável:** Diferente do InputSingle, a altura cresce com o conteúdo
3. **Ícone de Redimensionamento:** Sempre presente no canto inferior direito
4. **Multilinhas:** Suporta texto em múltiplas linhas
5. **Mesmos Estados:** Normal, Filled, Disabled, Focused, Blurred
6. **Mesmo Feedback:** Normal e Error
7. **Dimensões Fixas no Figma:** 294px de largura, mas deve ser responsivo na implementação
8. **Nenhuma Cor Nova:** Todas as cores já existem nos tokens!

---

## ✅ Checklist de Implementação

- [ ] Confirmar que não há cores novas (TODAS já existem ✅)
- [ ] Adicionar seção inputTextarea em `tokens.ts`
- [ ] Criar componente `InputTextarea.tsx` baseado em `InputSingle.tsx`
- [ ] Implementar variante `size` (small, medium)
- [ ] Implementar altura mínima (não fixa)
- [ ] Implementar multilinhas (multiline prop)
- [ ] Implementar ícone de redimensionamento
- [ ] Reutilizar estados do InputSingle (focused, filled, disabled, error)
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade
- [ ] Validar redimensionamento

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente baseado em `InputSingle`

