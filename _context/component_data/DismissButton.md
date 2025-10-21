# DismissButton - Especificação Técnica

**Componente:** Dismiss Button  
**Figma Node ID:** 4432:6034  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4432-6034&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4432:6034
- **Nome:** Dismiss Button 🟢
- **Posição:** x=5581, y=-2558
- **Dimensões:** 533 × 192

### Variantes Identificadas

Total de **15 variantes** (3 tamanhos × 5 estados)

#### Tamanho: Medium (32px)
| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4433:6061 | Size=Medium (32), State=Normal | 66, 40 | 32 × 32 |
| 4433:6067 | Size=Medium (32), State=Hover | 150, 40 | 32 × 32 |
| 4433:6073 | Size=Medium (32), State=Focus | 234, 40 | 32 × 32 |
| 4432:6041 | Size=Medium (32), State=Active | 318, 40 | 32 × 32 |
| 4433:6085 | Size=Medium (32), State=Disabled | 402, 40 | 32 × 32 |

#### Tamanho: Small (24px)
| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4433:6059 | Size=Small (24), State=Normal | 70, 90 | 24 × 24 |
| 4433:6065 | Size=Small (24), State=Hover | 154, 90 | 24 × 24 |
| 4433:6071 | Size=Small (24), State=Focus | 238, 90 | 24 × 24 |
| 4432:6039 | Size=Small (24), State=Active | 322, 90 | 24 × 24 |
| 4433:6083 | Size=Small (24), State=Disabled | 406, 90 | 24 × 24 |

#### Tamanho: Extra Small (20px)
| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 4880:5700 | Size=Extra Small (20), State=Normal | 72, 132 | 20 × 20 |
| 4880:5702 | Size=Extra Small (20), State=Hover | 156, 132 | 20 × 20 |
| 4880:5704 | Size=Extra Small (20), State=Focus | 240, 132 | 20 × 20 |
| 4880:5696 | Size=Extra Small (20), State=Active | 324, 132 | 20 × 20 |
| 4880:5698 | Size=Extra Small (20), State=Disabled | 408, 132 | 20 × 20 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### 1. Tamanhos de Ícone

```typescript
// Medium (32px container)
token.components.dismissButton.sizes.icon.width.medium = 24
token.components.dismissButton.sizes.icon.height.medium = 24

// Small (24px container)
token.components.dismissButton.sizes.icon.width.small = 16
token.components.dismissButton.sizes.icon.height.small = 16

// Extra Small (20px container)
token.components.dismissButton.sizes.icon.width.extraSmall = 12
token.components.dismissButton.sizes.icon.height.extraSmall = 12
```

### 2. Espaçamentos (Padding)

```typescript
// Medium
token.components.dismissButton.sizes.padding.top.medium = 4
token.components.dismissButton.sizes.padding.right.medium = 4
token.components.dismissButton.sizes.padding.bottom.medium = 4
// padding.left.medium não especificado (usar 4)

// Small
token.components.dismissButton.sizes.padding.top.small = 4
token.components.dismissButton.sizes.padding.right.small = 4
token.components.dismissButton.sizes.padding.bottom.small = 4
// padding.left.small não especificado (usar 4)

// Extra Small
token.components.dismissButton.sizes.padding.top.extraSmall = 4
token.components.dismissButton.sizes.padding.right.extraSmall = 4
token.components.dismissButton.sizes.padding.bottom.extraSmall = 4
token.components.dismissButton.sizes.padding.left.extraSmall = 4
```

### 3. Gap (Espaçamento Interno)

```typescript
token.components.dismissButton.sizes.gap.medium = 0
token.components.dismissButton.sizes.gap.small = 0
token.components.dismissButton.sizes.gap.extraSmall = 0
```

### 4. Border Radius

```typescript
// Todos os tamanhos usam o mesmo valor (totalmente arredondado)
token.components.dismissButton.sizes.border.radii.topLeft.medium = 116
token.components.dismissButton.sizes.border.radii.topRight.medium = 116
token.components.dismissButton.sizes.border.radii.bottomLeft.medium = 116
token.components.dismissButton.sizes.border.radii.bottomRight.medium = 116

token.components.dismissButton.sizes.border.radii.topLeft.small = 116
token.components.dismissButton.sizes.border.radii.topRight.small = 116
token.components.dismissButton.sizes.border.radii.bottomLeft.small = 116
token.components.dismissButton.sizes.border.radii.bottomRight.small = 116

token.components.dismissButton.sizes.border.radii.topLeft.extraSmall = 116
token.components.dismissButton.sizes.border.radii.topRight.extraSmall = 116
token.components.dismissButton.sizes.border.radii.bottomLeft.extraSmall = 116
token.components.dismissButton.sizes.border.radii.bottomRight.extraSmall = 116
```

### 5. Cores - Estado Normal

```typescript
token.components.dismissButton.styles.default.Icon.color.normal = "#333333"
token.components.dismissButton.styles.default.bg.color.normal = "#3333331a"
token.components.dismissButton.styles.default.border.color.normal = "#3333331a"
token.components.dismissButton.styles.default.border.width.normal = 0
```

### 6. Cores - Estado Hover

```typescript
token.components.dismissButton.styles.default.Icon.color.hover = "#333333"
token.components.dismissButton.styles.default.bg.color.hover = "#33333333"
token.components.dismissButton.styles.default.border.color.hover = "#33333333"
token.components.dismissButton.styles.default.border.width.hover = 0
```

### 7. Cores - Estado Focus

```typescript
token.components.dismissButton.styles.default.Icon.color.focus = "#333333"
token.components.dismissButton.styles.default.bg.color.focus = "#33333333"
token.components.dismissButton.styles.default.border.color.focus = "#33333380"
token.components.dismissButton.styles.default.border.width.focus = 1
```

### 8. Cores - Estado Active (Pressed)

```typescript
token.components.dismissButton.styles.default.Icon.color.active = "#333333"
token.components.dismissButton.styles.default.bg.color.active = "#33333333"
token.components.dismissButton.styles.default.border.color.active = "#33333333"
token.components.dismissButton.styles.default.border.width.active = 0
```

### 9. Cores - Estado Disabled

```typescript
token.components.dismissButton.styles.default.Icon.color.disabled = "#888888"
token.components.dismissButton.styles.default.bg.color.disabled = "#eeeeee"
token.components.dismissButton.styles.default.border.color.disabled = "#eeeeee"
token.components.dismissButton.styles.default.border.width.disabled = 0
```

---

## 📐 Dimensões Extraídas das Variantes

### Tamanhos do Container
- **Medium:** 32 × 32 px
- **Small:** 24 × 24 px
- **Extra Small:** 20 × 20 px

### Tamanhos do Ícone (X)
- **Medium:** 24 × 24 px (ícone dentro de container 32px)
- **Small:** 16 × 16 px (ícone dentro de container 24px)
- **Extra Small:** 12 × 12 px (ícone dentro de container 20px)

### Padding Uniforme
- Todos os tamanhos: **4px** em todos os lados

### Border Radius
- Todos os tamanhos: **116px** (totalmente circular)

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

Todas as cores já existem no `tokens.ts`:
- `#333333` → `gray900` (já existe)
- `#888888` → `gray600` (já existe)
- `#eeeeee` → `gray200` (já existe)

**Cores com opacidade (novas):**
- `#3333331a` → rgba(51, 51, 51, 0.10) - Normal background (10% opacity)
- `#33333333` → rgba(51, 51, 51, 0.20) - Hover/Active background (20% opacity)
- `#33333380` → rgba(51, 51, 51, 0.50) - Focus border (50% opacity)

### Valores Numéricos Novos

Já existentes em `tokens.ts`:
- Padding: `4` ✅ (já existe em `tokens.space`)
- Border radius: Usar `9999` para circular (padrão Tamagui)

### Estrutura a Ser Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  // 🆕 Dismiss Button
  dismissButton: {
    size: {
      extraSmall: {
        width: 20,
        height: 20,
        iconSize: 12,
        padding: 4,
        borderRadius: 9999, // circular
      },
      small: {
        width: 24,
        height: 24,
        iconSize: 16,
        padding: 4,
        borderRadius: 9999, // circular
      },
      medium: {
        width: 32,
        height: 32,
        iconSize: 24,
        padding: 4,
        borderRadius: 9999, // circular
      },
    },
    
    variant: {
      default: {
        normal: {
          iconColor: '#333333',
          bg: '#3333331a',          // 10% opacity
          borderColor: '#3333331a',
          borderWidth: 0,
        },
        hover: {
          iconColor: '#333333',
          bg: '#33333333',          // 20% opacity
          borderColor: '#33333333',
          borderWidth: 0,
        },
        focus: {
          iconColor: '#333333',
          bg: '#33333333',          // 20% opacity
          borderColor: '#33333380', // 50% opacity
          borderWidth: 1,
        },
        active: {
          iconColor: '#333333',
          bg: '#33333333',          // 20% opacity
          borderColor: '#33333333',
          borderWidth: 0,
        },
        disabled: {
          iconColor: '#888888',
          bg: '#eeeeee',
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
    },
  },
}
```

---

## 📝 Observações Importantes

1. **Componente Circular:** Border radius de 116px garante que o botão seja perfeitamente circular em todos os tamanhos
2. **Ícone Único:** Usa apenas o ícone "X" (close) em todos os casos
3. **Padding Uniforme:** 4px em todos os lados, independente do tamanho
4. **Estados Visuais:** 5 estados bem definidos (Normal, Hover, Focus, Active, Disabled)
5. **Opacidade:** Usa cores base com opacidade hexadecimal para backgrounds
6. **Focus com Borda:** Único estado que usa border (1px com 50% de opacidade)
7. **Disabled Sólido:** Estado disabled usa background sólido (#eeeeee) em vez de transparente

---

## ✅ Checklist de Implementação

- [ ] Adicionar tokens em `tokens.ts`
- [ ] Criar componente `DismissButton.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (extraSmall, small, medium)
- [ ] Implementar estados (normal, hover, focus, active, disabled)
- [ ] Integrar com componente Icon existente
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

