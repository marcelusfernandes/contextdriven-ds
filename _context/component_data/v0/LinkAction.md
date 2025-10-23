# LinkAction - Especificação Técnica

**Componente:** Link Action (Link com ícone de ação/navegação)  
**Figma Node ID:** 4638:2682  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4638-2682&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 4638:2682
- **Nome:** Link Action 🟢
- **Posição:** x=-1621, y=216
- **Dimensões:** 1092 × 1191

### Variantes Identificadas

Total de **96 variantes** estruturadas por:
- **3 Tamanhos:** Small, Medium, Large
- **4 Tipos de Ação:** Go To (→), Down (↓), Up (↑), External (↗)
- **4 Estados:** Normal, Hover, Pressed/Active, Focus
- **2 Estilos de Padding:** Button (com background), Link (sem background)

#### Padding=Button, Type=Go To

| Tamanho | Node ID | Nome da Variante | Dimensões (w×h) |
|---------|---------|------------------|-----------------|
| Large Normal | 4638:2683 | Large, Normal, Go To, Button | 149 × 52 |
| Large Hover | 4638:2707 | Large, Hover, Go To, Button | 149 × 52 |
| Large Pressed | 4638:2731 | Large, Pressed/Active, Go To, Button | 149 × 52 |
| Large Focus | 4638:2755 | Large, Focus, Go To, Button | 149 × 52 |
| Medium Normal | 4638:2875 | Medium, Normal, Go To, Button | 127 × 48 |
| Medium Hover | 4638:2779 | Medium, Hover, Go To, Button | 127 × 48 |
| Medium Pressed | 4638:2803 | Medium, Pressed/Active, Go To, Button | 127 × 48 |
| Medium Focus | 4638:2851 | Medium, Focus, Go To, Button | 127 × 48 |
| Small Normal | 4638:2887 | Small, Normal, Go To, Button | 106 × 36 |
| Small Hover | 4638:2827 | Small, Hover, Go To, Button | 106 × 36 |
| Small Pressed | 4638:2839 | Small, Pressed/Active, Go To, Button | 106 × 36 |
| Small Focus | 4638:2863 | Small, Focus, Go To, Button | 106 × 36 |

#### Padding=Link, Type=Go To

| Tamanho | Node ID | Nome da Variante | Dimensões (w×h) |
|---------|---------|------------------|-----------------|
| Large Normal | 4638:2899 | Large, Normal, Go To, Link | 125 × 28 |
| Large Hover | 4638:2917 | Large, Hover, Go To, Link | 125 × 28 |
| Large Pressed | 4638:2935 | Large, Pressed/Active, Go To, Link | 133 × 28 |
| Large Focus | 4638:2953 | Large, Focus, Go To, Link | 120 × 28 |
| Medium Normal | 4638:2905 | Medium, Normal, Go To, Link | 103 × 24 |
| Medium Hover | 4638:2923 | Medium, Hover, Go To, Link | 103 × 24 |
| Medium Pressed | 4638:2941 | Medium, Pressed/Active, Go To, Link | 111 × 24 |
| Medium Focus | 4638:2959 | Medium, Focus, Go To, Link | 100 × 24 |
| Small Normal | 4638:2911 | Small, Normal, Go To, Link | 90 × 20 |
| Small Hover | 4638:2929 | Small, Hover, Go To, Link | 90 × 20 |
| Small Pressed | 4638:2947 | Small, Pressed/Active, Go To, Link | 98 × 20 |
| Small Focus | 4638:2965 | Small, Focus, Go To, Link | 88 × 20 |

_*Nota: Os outros tipos (Down, Up, External) seguem o mesmo padrão de tamanhos e estados._

---

## 🎨 Tokens Extraídos (Variable Definitions)

### 1. Tipografia

#### Large
```typescript
// Padding=Button
action/strong/regular/large = Font(family: "Roboto Flex", style: SemiBold, size: 20, weight: 600, lineHeight: 28)

// Padding=Link
link/large = Font(family: "Roboto Flex", style: Regular, size: 20, weight: 400, lineHeight: 20)
```

#### Medium
```typescript
// Padding=Button
action/strong/regular/medium = Font(family: "Roboto Flex", style: SemiBold, size: 16, weight: 600, lineHeight: 24)

// Padding=Link
link/inline/medium = Font(family: "Roboto Flex", style: Regular, size: 16, weight: 400, lineHeight: 16)
```

#### Small
```typescript
// Padding=Button
action/strong/regular/small = Font(family: "Roboto Flex", style: SemiBold, size: 14, weight: 600, lineHeight: 20)

// Padding=Link
link/inline/small = Font(family: "Roboto Flex", style: Regular, size: 14, weight: 400, lineHeight: 16)
```

### 2. Tamanhos e Espaçamentos

#### Large (52px altura - Button / 28px altura - Link)
```typescript
// Button padding
token.components.linkAction.sizes.padding.button.right.large = 8
token.components.linkAction.sizes.padding.button.top.large = 12
token.components.linkAction.sizes.padding.button.bottom.large = 12

// Link padding
token.components.linkAction.sizes.padding.link.left.large = 0
token.components.linkAction.sizes.padding.link.top.large = 0
token.components.linkAction.sizes.padding.link.right.large = 0
token.components.linkAction.sizes.padding.link.bottom.large = 0

// Ícone
token.components.linkAction.sizes.content.trailing.icon.width.large = 28

// Gap e border radius
token.components.linkAction.sizes.content.gap.large = 4
token.components.linkAction.sizes.gap.large = 0
token.components.linkAction.sizes.border.radii.topLeft.large = 12
token.components.linkAction.sizes.border.radii.topRight.large = 12
token.components.linkAction.sizes.border.radii.bottomLeft.large = 12
token.components.linkAction.sizes.border.radii.bottomRight.large = 12

// Min width
token.components.linkAction.sizes.content.width.min.large = 44
```

#### Medium (48px altura - Button / 24px altura - Link)
```typescript
// Button padding
token.components.linkAction.sizes.padding.button.left.medium = 8
token.components.linkAction.sizes.padding.button.top.medium = 12
token.components.linkAction.sizes.padding.button.right.medium = 8
token.components.linkAction.sizes.padding.button.bottom.medium = 12

// Link padding
token.components.linkAction.sizes.padding.link.left.medium = 0
token.components.linkAction.sizes.padding.link.top.medium = 0
token.components.linkAction.sizes.padding.link.right.medium = 0
token.components.linkAction.sizes.padding.link.bottom.medium = 0

// Ícone
token.components.linkAction.sizes.content.trailing.icon.width.medium = 24

// Gap e border radius
token.components.linkAction.sizes.content.gap.medium = 4
token.components.linkAction.sizes.gap.medium = 0
token.components.linkAction.sizes.border.radii.topLeft.medium = 12
token.components.linkAction.sizes.border.radii.topRight.medium = 12
token.components.linkAction.sizes.border.radii.bottomLeft.medium = 12
token.components.linkAction.sizes.border.radii.bottomRight.medium = 12

// Min width
token.components.linkAction.sizes.content.width.min.medium = 72
```

#### Small (36px altura - Button / 20px altura - Link)
```typescript
// Button padding
token.components.linkAction.sizes.padding.button.left.small = 4
token.components.linkAction.sizes.padding.button.top.small = 8
token.components.linkAction.sizes.padding.button.right.small = 4
token.components.linkAction.sizes.padding.button.bottom.small = 8

// Link padding
token.components.linkAction.sizes.padding.link.left.small = 0
token.components.linkAction.sizes.padding.link.top.small = 0
token.components.linkAction.sizes.padding.link.right.small = 0
token.components.linkAction.sizes.padding.link.bottom.small = 0

// Ícone
token.components.linkAction.sizes.content.trailing.icon.width.small = 20

// Gap e border radius
token.components.linkAction.sizes.content.gap.small = 4
token.components.linkAction.sizes.gap.small = 0
token.components.linkAction.sizes.border.radii.topLeft.small = 8
token.components.linkAction.sizes.border.radii.topRight.small = 8
token.components.linkAction.sizes.border.radii.bottomLeft.small = 8
token.components.linkAction.sizes.border.radii.bottomRight.small = 8

// Min width
token.components.linkAction.sizes.content.width.min.small = 72
```

### 3. Cores - Padding=Button

#### Estado Normal
```typescript
token.components.linkAction.styles.button.label.txt.color.normal = "#333333"
token.components.linkAction.styles.button.bg.normal = "#ffffff00"
token.components.linkAction.styles.button.trailing.icon.color.normal = "#333333"
token.components.linkAction.styles.button.border.width.normal = 0
token.components.linkAction.styles.button.border.color.normal = "#ffffff00"

// Content padding
token.components.linkAction.styles.button.content.padding.left.normal = 8
token.components.linkAction.styles.button.content.padding.top.normal = 0
token.components.linkAction.styles.button.content.padding.right.normal = 0
token.components.linkAction.styles.button.content.padding.bottom.normal = 0
```

#### Estado Hover
```typescript
token.components.linkAction.styles.button.trailing.icon.color.hover = "#33333380"
token.components.linkAction.styles.button.bg.hover = "#ffffff00"
token.components.linkAction.styles.button.border.width.hover = 0
token.components.linkAction.styles.link.border.color.hover = "#ffffff00"

// Content padding (mesmo do normal)
token.components.linkAction.styles.button.content.padding.left.hover = 8
token.components.linkAction.styles.button.content.padding.top.hover = 0
token.components.linkAction.styles.button.content.padding.right.hover = 0
token.components.linkAction.styles.button.content.padding.bottom.hover = 0
```

#### Estado Pressed/Active
```typescript
token.components.linkAction.styles.button.label.txt.color.pressed = "#000000"
token.components.linkAction.styles.button.trailing.icon.color.pressed = "#000000"
token.components.linkAction.styles.button.bg.pressed = "#d5d5d5"
token.components.linkAction.styles.button.border.width.pressed = 0
token.components.linkAction.styles.button.border.color.pressed = "#ffffff00"

// Content padding (reduz nas laterais)
token.components.linkAction.styles.button.content.padding.left.pressed = 4
token.components.linkAction.styles.button.content.padding.top.pressed = 0
token.components.linkAction.styles.button.content.padding.right.pressed = 4
token.components.linkAction.styles.button.content.padding.bottom.pressed = 0
```

#### Estado Focus
```typescript
token.components.linkAction.styles.button.label.txt.color.focus = "#000000"
token.components.linkAction.styles.button.trailing.icon.color.focus = "#000000"
token.components.linkAction.styles.button.bg.focus = "#ffffff00"
token.components.linkAction.styles.button.border.width.focus = 1
token.components.linkAction.styles.button.border.color.focus = "#c0c0c0"

// Content padding (mesmo do normal)
token.components.linkAction.styles.button.content.padding.left.focus = 8
token.components.linkAction.styles.button.content.padding.top.focus = 0
token.components.linkAction.styles.button.content.padding.right.focus = 0
token.components.linkAction.styles.button.content.padding.bottom.focus = 0
```

### 4. Cores - Padding=Link

#### Estado Normal
```typescript
token.components.linkAction.styles.link.label.txt.color.normal = "#333333"
token.components.linkAction.styles.link.trailing.icon.color.normal = "#333333"
token.components.linkAction.styles.link.bg.normal = "#ffffff00"
token.components.linkAction.styles.link.border.width.normal = 0
token.components.linkAction.styles.link.border.color.normal = "#ffffff00"

// Content padding (sem padding)
token.components.linkAction.styles.link.content.padding.left.normal = 0
token.components.linkAction.styles.link.content.padding.top.normal = 0
token.components.linkAction.styles.link.content.padding.right.normal = 0
token.components.linkAction.styles.link.content.padding.bottom.normal = 0
```

#### Estado Hover
```typescript
token.components.linkAction.styles.link.label.txt.color.hover = "#33333380"
token.components.linkAction.styles.link.trailing.icon.color.hover = "#33333380"
token.components.linkAction.styles.link.bg.hover = "#ffffff00"
token.components.linkAction.styles.link.border.width.hover = 0
token.components.linkAction.styles.link.border.color.hover = "#ffffff00"

// Content padding (sem padding)
token.components.linkAction.styles.link.content.padding.left.hover = 0
token.components.linkAction.styles.link.content.padding.top.hover = 0
token.components.linkAction.styles.link.content.padding.right.hover = 0
token.components.linkAction.styles.link.content.padding.bottom.hover = 0
```

#### Estado Pressed/Active
```typescript
token.components.linkAction.styles.link.label.txt.color.pressed = "#333333"
token.components.linkAction.styles.link.trailing.icon.color.pressed = "#333333"
token.components.linkAction.styles.link.bg.pressed = "#ffffff00"
token.components.linkAction.styles.link.border.width.pressed = 0
token.components.linkAction.styles.link.border.color.pressed = "#ffffff00"

// Content padding (adiciona padding nas laterais)
token.components.linkAction.styles.link.content.padding.left.pressed = 4
token.components.linkAction.styles.link.content.padding.top.pressed = 0
token.components.linkAction.styles.link.content.padding.right.pressed = 4
token.components.linkAction.styles.link.content.padding.bottom.pressed = 0
```

#### Estado Focus
```typescript
token.components.linkAction.styles.link.label.txt.color.focus = "#000000"
token.components.linkAction.styles.link.trailing.icon.color.focus = "#000000"
token.components.linkAction.styles.link.bg.focus = "#ffffff00"
token.components.linkAction.styles.link.border.color.focus = "#ffffff00"

// Content padding (sem padding)
token.components.linkAction.styles.link.content.padding.left.focus = 0
token.components.linkAction.styles.link.content.padding.top.focus = 0
token.components.linkAction.styles.link.content.padding.right.focus = 0
token.components.linkAction.styles.link.content.padding.bottom.focus = 0
```

---

## 📐 Dimensões Extraídas das Variantes

### Padding=Button (Com background)
- **Large:** 149 × 52 px (aproximado)
- **Medium:** 127 × 48 px (aproximado)
- **Small:** 106 × 36 px (aproximado)

### Padding=Link (Sem background)
- **Large:** 125 × 28 px (aproximado)
- **Medium:** 103 × 24 px (aproximado)
- **Small:** 90 × 20 px (aproximado)

### Tamanhos de Ícone (Trailing)
- **Large:** 28px
- **Medium:** 24px
- **Small:** 20px

### Gap entre Label e Ícone
- Todos os tamanhos: **4px**

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

Verificar se já existem:
- `#333333` → `gray800` ✅ já existe
- `#000000` → `black` ✅ já existe
- `#d5d5d5` → **NOVA** - gray para pressed state
- `#c0c0c0` → **NOVA** - gray para focus border
- `#ffffff00` → `transparent` ✅ já existe
- `#33333380` → `gray800Alpha50` ✅ já existe

**Cores novas a adicionar:**
- `gray150: '#d5d5d5'` - Background pressed do LinkAction
- `gray350: '#c0c0c0'` - Border focus do LinkAction

### Font Weights Novos

- **SemiBold (600):** Para o padding=Button já existe no tokens.typography.fontWeight

### Estrutura a Ser Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  // 🆕 Link Action
  linkAction: {
    size: {
      small: {
        // Button padding
        button: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 4,
          borderRadius: 8,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600',
        },
        // Link padding
        link: {
          height: 20,
          padding: 0,
          fontSize: 14,
          lineHeight: 16,
          fontWeight: '400',
        },
        iconSize: 20,
        gap: 4,
      },
      medium: {
        // Button padding
        button: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 8,
          borderRadius: 12,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
        },
        // Link padding
        link: {
          height: 24,
          padding: 0,
          fontSize: 16,
          lineHeight: 16,
          fontWeight: '400',
        },
        iconSize: 24,
        gap: 4,
      },
      large: {
        // Button padding
        button: {
          height: 52,
          paddingVertical: 12,
          paddingHorizontal: 8,
          borderRadius: 12,
          fontSize: 20,
          lineHeight: 28,
          fontWeight: '600',
        },
        // Link padding
        link: {
          height: 28,
          padding: 0,
          fontSize: 20,
          lineHeight: 20,
          fontWeight: '400',
        },
        iconSize: 28,
        gap: 4,
      },
    },
    
    padding: {
      // Estilo Button (com background)
      button: {
        normal: {
          labelColor: '#333333',
          iconColor: '#333333',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        hover: {
          labelColor: '#333333',
          iconColor: '#33333380',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        pressed: {
          labelColor: '#000000',
          iconColor: '#000000',
          bg: '#d5d5d5',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',
          iconColor: '#000000',
          bg: '#ffffff00',
          borderColor: '#c0c0c0',
          borderWidth: 1,
        },
      },
      
      // Estilo Link (sem background)
      link: {
        normal: {
          labelColor: '#333333',
          iconColor: '#333333',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        hover: {
          labelColor: '#33333380',
          iconColor: '#33333380',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        pressed: {
          labelColor: '#333333',
          iconColor: '#333333',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',
          iconColor: '#000000',
          bg: '#ffffff00',
          borderColor: '#ffffff00',
          borderWidth: 0,
        },
      },
    },
  },
}
```

---

## 📝 Observações Importantes

1. **Dois Estilos:** Button (com background) vs Link (sem background)
2. **Quatro Tipos de Ação:** Go To (→), Down (↓), Up (↑), External (↗)
3. **Typography Diferente:** Button usa SemiBold (600), Link usa Regular (400)
4. **Background no Pressed:** Apenas padding=Button tem background cinza no pressed
5. **Border no Focus:** Apenas padding=Button tem border no focus
6. **Ícones Direcionais:** Sempre ícone trailing indicando direção da ação
7. **Gap Fixo:** 4px entre label e ícone em todos os tamanhos
8. **Hover com Opacidade:** Ícone fica com 50% de opacidade no hover

---

## ✅ Checklist de Implementação

- [ ] Adicionar cores novas em `tokens.ts` (gray150, gray350)
- [ ] Adicionar seção linkAction em `tokens.ts`
- [ ] Criar componente `LinkAction.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (small, medium, large)
- [ ] Implementar variante `padding` (button, link)
- [ ] Implementar variante `type` (goTo, down, up, external)
- [ ] Implementar estados (normal, hover, pressed, focus)
- [ ] Integrar com biblioteca de ícones
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

