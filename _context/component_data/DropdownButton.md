# DropdownButton - Especificação Técnica

**Componente:** Dropdown Button (Botão com dropdown/chevron)  
**Figma Node ID:** 5385:2844  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5385-2844&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 5385:2844
- **Nome:** Dropdown Button 🔵
- **Posição:** x=5407, y=104
- **Dimensões:** 4389 × 620

### Variantes Identificadas

Total de **144 variantes** estruturadas por:
- **3 Hierarquias:** Primary, Secondary, Tertiary
- **2 Tamanhos:** Small (36px), Medium (48px)
- **6 Estados:** Normal, Hover, Focus, Active, Loading, Disabled
- **2 Tipos de Layout:** Hug Content (largura automática), Fixed Width (164px fixo)
- **2 Configurações:** Leading Icon Show=False / Show=True

#### Primary - Medium - Hug Content (Exemplos)

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 5385:2863 | Primary, Medium, Normal, No Leading Icon | 113 × 48 |
| 5619:25184 | Primary, Medium, Normal, With Leading Icon | 137 × 48 |
| 5414:21784 | Primary, Medium, Hover, No Leading Icon | 113 × 48 |
| 5619:25192 | Primary, Medium, Hover, With Leading Icon | 137 × 48 |
| 5414:21856 | Primary, Medium, Focus, No Leading Icon | 113 × 48 |
| 5619:25200 | Primary, Medium, Focus, With Leading Icon | 137 × 48 |
| 5385:2881 | Primary, Medium, Active, No Leading Icon | 113 × 48 |
| 5619:25256 | Primary, Medium, Active, With Leading Icon | 137 × 48 |
| 5414:21970 | Primary, Medium, Loading, No Leading Icon | 113 × 48 |
| 5619:25264 | Primary, Medium, Loading, With Leading Icon | 105 × 48 |
| 5385:2899 | Primary, Medium, Disabled, No Leading Icon | 113 × 48 |
| 5619:25307 | Primary, Medium, Disabled, With Leading Icon | 137 × 48 |

#### Primary - Medium - Fixed Width (Exemplos)

| Node ID | Nome da Variante | Dimensões (w×h) |
|---------|------------------|-----------------|
| 5619:24764 | Primary, Medium, Normal, No Leading Icon, Fixed | 164 × 48 |
| 5619:25574 | Primary, Medium, Normal, With Leading Icon, Fixed | 164 × 48 |
| 5619:24772 | Primary, Medium, Hover, No Leading Icon, Fixed | 164 × 48 |
| 5619:25582 | Primary, Medium, Hover, With Leading Icon, Fixed | 164 × 48 |

_*Nota: Padrão se repete para Secondary e Tertiary, e para Small (36px altura)._

---

## 🎨 Tokens Extraídos (Variable Definitions)

### 1. Tipografia

#### Medium (48px altura)
```typescript
action/strong/regular/medium = Font(family: "Roboto Flex", style: SemiBold, size: 16, weight: 600, lineHeight: 24)
```

#### Small (36px altura)
```typescript
action/strong/regular/small = Font(family: "Roboto Flex", style: SemiBold, size: 14, weight: 600, lineHeight: 20)
```

### 2. Tamanhos e Espaçamentos

#### Medium (48px altura)

**Layout: Hug Content (sem Leading Icon)**
```typescript
token.components.dropdownButton.sizes.single.icon.width.medium = 24
token.components.dropdownButton.sizes.single.content.gap.medium = 8
token.components.dropdownButton.sizes.single.padding.left.medium = 16
token.components.dropdownButton.sizes.single.padding.top.medium = 12
token.components.dropdownButton.sizes.single.padding.right.medium = 16
token.components.dropdownButton.sizes.single.padding.bottom.medium = 12
token.components.dropdownButton.sizes.single.border.radii.topLeft.medium = 16
token.components.dropdownButton.sizes.single.border.radii.topRight.medium = 16
token.components.dropdownButton.sizes.single.border.radii.bottomLeft.medium = 16
token.components.dropdownButton.sizes.single.border.radii.bottomRight.medium = 16
```

**Layout: Com Leading Icon**
```typescript
token.components.dropdownButton.sizes.leading.icon.width.medium = 24
token.components.dropdownButton.sizes.leading.content.gap.medium = 8
token.components.dropdownButton.sizes.leading.padding.left.medium = 16
token.components.dropdownButton.sizes.leading.padding.top.medium = 12
token.components.dropdownButton.sizes.leading.padding.right.medium = 16
token.components.dropdownButton.sizes.leading.padding.bottom.medium = 12
token.components.dropdownButton.sizes.leading.border.radii.topLeft.medium = 16
token.components.dropdownButton.sizes.leading.border.radii.topRight.medium = 16
token.components.dropdownButton.sizes.leading.border.radii.bottomLeft.medium = 16
token.components.dropdownButton.sizes.leading.border.radii.bottomRight.medium = 16
```

#### Small (36px altura)

**Layout: Hug Content (sem Leading Icon)**
```typescript
token.components.dropdownButton.sizes.single.icon.width.small = 20
token.components.dropdownButton.sizes.single.content.gap.small = 8
token.components.dropdownButton.sizes.single.padding.left.small = 16
token.components.dropdownButton.sizes.single.padding.top.small = 8
token.components.dropdownButton.sizes.single.padding.right.small = 16
token.components.dropdownButton.sizes.single.padding.bottom.small = 8
token.components.dropdownButton.sizes.single.border.radii.topLeft.small = 12
token.components.dropdownButton.sizes.single.border.radii.topRight.small = 12
token.components.dropdownButton.sizes.single.border.radii.bottomLeft.small = 12
token.components.dropdownButton.sizes.single.border.radii.bottomRight.small = 12
```

**Layout: Com Leading Icon**
```typescript
token.components.dropdownButton.sizes.leading.icon.width.small = 20
token.components.dropdownButton.sizes.leading.content.gap.small = 8
token.components.dropdownButton.sizes.leading.padding.left.small = 16
token.components.dropdownButton.sizes.leading.padding.top.small = 8
token.components.dropdownButton.sizes.leading.padding.right.small = 16
token.components.dropdownButton.sizes.leading.padding.bottom.small = 8
token.components.dropdownButton.sizes.leading.border.radii.topLeft.small = 12
token.components.dropdownButton.sizes.leading.border.radii.topRight.small = 12
token.components.dropdownButton.sizes.leading.border.radii.bottomLeft.small = 12
token.components.dropdownButton.sizes.leading.border.radii.bottomRight.small = 12
```

### 3. Cores - Hierarquia Primary

#### Estado Normal
```typescript
token.components.dropdownButton.styles.primary.label.color.normal = "#000000"
token.components.dropdownButton.styles.primary.icon.trailling.color.normal = "#000000"
token.components.dropdownButton.styles.primary.bg.color.normal = "#ffcc00"
token.components.dropdownButton.styles.primary.icon.leading.color.normal = "#000000"
```

#### Estado Hover
```typescript
token.components.dropdownButton.styles.primary.label.color.hover = "#000000"
token.components.dropdownButton.styles.primary.icon.trailling.color.hover = "#000000"
token.components.dropdownButton.styles.primary.bg.color.hover = "#cca300"
```

#### Estado Focus
```typescript
token.components.dropdownButton.styles.primary.label.color.focus = "#000000"
token.components.dropdownButton.styles.primary.icon.trailling.color.focus = "#000000"
token.components.dropdownButton.styles.primary.border.width.focus = 2
token.components.dropdownButton.styles.primary.bg.color.focus = "#cca300"
token.components.dropdownButton.styles.primary.border.color.focus = "#cca300"
```

#### Estado Active
```typescript
token.components.dropdownButton.styles.primary.label.color.active = "#000000"
token.components.dropdownButton.styles.primary.icon.trailling.color.active = "#000000"
token.components.dropdownButton.styles.primary.bg.color.active = "#ffe680"
```

#### Estado Loading
```typescript
token.components.dropdownButton.styles.primary.label.color.loading = "#000000"
token.components.dropdownButton.styles.primary.icon.trailling.color.loading = "#000000"
token.components.dropdownButton.styles.primary.bg.color.loading = "#ffcc00"
```

#### Estado Disabled
```typescript
token.components.dropdownButton.styles.primary.label.color.disabled = "#888888"
token.components.dropdownButton.styles.primary.icon.trailling.color.disabled = "#888888"
token.components.dropdownButton.styles.primary.bg.color.disabled = "#eeeeee"
```

### 4. Cores - Hierarquia Secondary

#### Estado Normal
```typescript
token.components.dropdownButton.styles.secondary.label.color.normal = "#333333"
token.components.dropdownButton.styles.secondary.icon.trailing.color.normal = "#333333"
token.components.dropdownButton.styles.secondary.border.width.normal = 1
token.components.dropdownButton.styles.secondary.bg.color.normal = "#33333300"
token.components.dropdownButton.styles.secondary.border.color.normal = "#1c1c1f"
token.components.dropdownButton.styles.secondary.icon.leading.color.normal = "#333333"
```

#### Estado Hover
```typescript
token.components.dropdownButton.styles.secondary.label.color.hover = "#ffffff"
token.components.dropdownButton.styles.secondary.icon.trailing.color.hover = "#ffffff"
token.components.dropdownButton.styles.secondary.border.width.hover = 0
token.components.dropdownButton.styles.secondary.bg.color.hover = "#19191b"
token.components.dropdownButton.styles.secondary.border.color.hover = "#19191b"
token.components.dropdownButton.styles.secondary.icon.leading.color.hover = "#ffffff"
```

#### Estado Focus
```typescript
token.components.dropdownButton.styles.secondary.label.color.focus = "#ffffff"
token.components.dropdownButton.styles.secondary.icon.trailing.color.focus = "#ffffff"
token.components.dropdownButton.styles.secondary.border.width.focus = 2
token.components.dropdownButton.styles.secondary.bg.color.focus = "#19191b"
token.components.dropdownButton.styles.secondary.border.color.focus = "#979797"
token.components.dropdownButton.styles.secondary.icon.leading.color.focus = "#ffffff"
```

#### Estado Active
```typescript
token.components.dropdownButton.styles.secondary.label.color.active = "#000000"
token.components.dropdownButton.styles.secondary.icon.trailing.color.active = "#000000"
token.components.dropdownButton.styles.secondary.border.width.active = 0
token.components.dropdownButton.styles.secondary.bg.color.active = "#979797"
token.components.dropdownButton.styles.secondary.border.color.active = "#979797"
token.components.dropdownButton.styles.secondary.icon.leading.color.active = "#000000"
```

#### Estado Loading
```typescript
token.components.dropdownButton.styles.secondary.label.color.loading = "#ffffff"
token.components.dropdownButton.styles.secondary.icon.trailing.color.loading = "#ffffff"
token.components.dropdownButton.styles.secondary.border.width.loading = 1
token.components.dropdownButton.styles.secondary.bg.color.loading = "#33333300"
token.components.dropdownButton.styles.secondary.border.color.loading = "#1f1f22"
```

#### Estado Disabled
```typescript
token.components.dropdownButton.styles.secondary.label.color.disabled = "#888888"
token.components.dropdownButton.styles.secondary.icon.trailing.color.disabled = "#888888"
token.components.dropdownButton.styles.secondary.border.width.disabled = 0
token.components.dropdownButton.styles.secondary.bg.color.disabled = "#eeeeee"
token.components.dropdownButton.styles.secondary.border.color.disabled = "#eeeeee"
token.components.dropdownButton.styles.secondary.icon.leading.color.disabled = "#888888"
```

### 5. Cores - Hierarquia Tertiary

#### Estado Normal
```typescript
token.components.dropdownButton.styles.tertiary.label.color.normal = "#333333"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.normal = "#333333"
token.components.dropdownButton.styles.tertiary.border.width.normal = 0
token.components.dropdownButton.styles.tertiary.bg.color.normal = "#33333300"
token.components.dropdownButton.styles.tertiary.border.color.normal = "#1f1f22"
token.components.dropdownButton.styles.tertiary.icon.leading.color.normal = "#333333"
```

#### Estado Hover
```typescript
token.components.dropdownButton.styles.tertiary.label.color.hover = "#333333"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.hover = "#333333"
token.components.dropdownButton.styles.tertiary.border.width.hover = 0
token.components.dropdownButton.styles.tertiary.bg.color.hover = "#33333333"
token.components.dropdownButton.styles.tertiary.border.color.hover = "#19191b"
token.components.dropdownButton.styles.tertiary.icon.leading.color.hover = "#333333"
```

#### Estado Focus
```typescript
token.components.dropdownButton.styles.tertiary.label.color.focus = "#333333"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.focus = "#333333"
token.components.dropdownButton.styles.tertiary.border.width.focus = 2
token.components.dropdownButton.styles.tertiary.bg.color.focus = "#33333333"
token.components.dropdownButton.styles.tertiary.border.color.focus = "#33333380"
token.components.dropdownButton.styles.tertiary.icon.leading.color.focus = "#333333"
```

#### Estado Active
```typescript
token.components.dropdownButton.styles.tertiary.label.color.active = "#333333"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.active = "#333333"
token.components.dropdownButton.styles.tertiary.border.width.active = 0
token.components.dropdownButton.styles.tertiary.bg.color.active = "#33333333"
token.components.dropdownButton.styles.tertiary.border.color.active = "#979797"
token.components.dropdownButton.styles.tertiary.icon.leading.color.active = "#333333"
```

#### Estado Loading
```typescript
token.components.dropdownButton.styles.tertiary.label.color.loading = "#333333"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.loading = "#333333"
token.components.dropdownButton.styles.tertiary.border.width.loading = 2
token.components.dropdownButton.styles.tertiary.bg.color.loading = "#3333331a"
token.components.dropdownButton.styles.tertiary.border.color.loading = "#3333331a"
```

#### Estado Disabled
```typescript
token.components.dropdownButton.styles.tertiary.label.color.disabled = "#888888"
token.components.dropdownButton.styles.tertiary.icon.trailing.color.disabled = "#888888"
token.components.dropdownButton.styles.tertiary.border.width.disabled = 0
token.components.dropdownButton.styles.tertiary.bg.color.disabled = "#eeeeee"
token.components.dropdownButton.styles.tertiary.border.color.disabled = "#eeeeee"
token.components.dropdownButton.styles.tertiary.icon.leading.color.disabled = "#888888"
```

### 6. Loading Component (Usado no estado Loading)

```typescript
token.components.loading.sizes.border.radii.medium = 1000
token.components.loading.sizes.container.medium = 8
token.components.loading.styles.brand.bg.color.active = "#333333cc"
token.components.loading.styles.brand.bg.color.inactive = "#33333333"
token.components.loading.sizes.gap.medium = 12
```

---

## 📐 Dimensões Extraídas das Variantes

### Hug Content (Largura Automática)
- **Medium sem Leading Icon:** ~113px × 48px
- **Medium com Leading Icon:** ~137px × 48px
- **Small sem Leading Icon:** ~104px × 36px
- **Small com Leading Icon:** ~124px × 36px

### Fixed Width (Largura Fixa)
- **Medium:** 164px × 48px (ambos com/sem Leading Icon)
- **Small:** 164px × 36px (ambos com/sem Leading Icon)

### Ícones
- **Medium:** 24px (tanto trailing quanto leading)
- **Small:** 20px (tanto trailing quanto leading)

### Gap Interno
- **Entre Label e Trailing Icon:** 8px
- **Entre Leading Icon e Label:** 8px

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

**NENHUMA NOVA!** Todas as cores já existem no tokens.ts:
- `#ffcc00` → zeYellow ✅
- `#cca300` → zeYellowDark ✅
- `#ffe680` → zeYellowLight ✅
- `#000000` → black ✅
- `#ffffff` → white ✅
- `#333333` → gray800 ✅
- `#1c1c1f` → gray900 ✅
- `#19191b` → gray700 ✅
- `#979797` → gray400 ✅
- `#1f1f22` → gray600 ✅
- `#888888` → gray500 ✅
- `#eeeeee` → gray200 ✅
- `#33333300` → transparent ✅
- `#33333333` → gray800Alpha20 ✅
- `#33333380` → gray800Alpha50 ✅
- `#3333331a` → gray800Alpha10 ✅
- `#333333cc` → já usado no Loading ✅

### Estrutura a Ser Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes (nenhum novo!)
  
  // 🆕 Dropdown Button
  dropdownButton: {
    // Tamanhos
    size: {
      small: {
        // Sem Leading Icon
        single: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600',
          iconSize: 20,
          gap: 8,
        },
        // Com Leading Icon
        leading: {
          height: 36,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          fontSize: 14,
          lineHeight: 20,
          fontWeight: '600',
          iconSize: 20,
          gap: 8,
        },
      },
      medium: {
        // Sem Leading Icon
        single: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 16,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
          iconSize: 24,
          gap: 8,
        },
        // Com Leading Icon
        leading: {
          height: 48,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 16,
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
          iconSize: 24,
          gap: 8,
        },
      },
    },
    
    // Hierarquias (variant)
    hierarchy: {
      primary: {
        normal: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffcc00',
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
        hover: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#cca300',
          borderColor: '#cca300',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#cca300',
          borderColor: '#cca300',
          borderWidth: 2,
        },
        active: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffe680',
          borderColor: '#ffe680',
          borderWidth: 0,
        },
        loading: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#ffcc00',
          borderColor: '#ffcc00',
          borderWidth: 0,
        },
        disabled: {
          labelColor: '#888888',
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
          bg: '#eeeeee',
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
      
      secondary: {
        normal: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333300',
          borderColor: '#1c1c1f',
          borderWidth: 1,
        },
        hover: {
          labelColor: '#ffffff',
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#19191b',
          borderColor: '#19191b',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#ffffff',
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#19191b',
          borderColor: '#979797',
          borderWidth: 2,
        },
        active: {
          labelColor: '#000000',
          trailingIconColor: '#000000',
          leadingIconColor: '#000000',
          bg: '#979797',
          borderColor: '#979797',
          borderWidth: 0,
        },
        loading: {
          labelColor: '#ffffff',
          trailingIconColor: '#ffffff',
          leadingIconColor: '#ffffff',
          bg: '#33333300',
          borderColor: '#1f1f22',
          borderWidth: 1,
        },
        disabled: {
          labelColor: '#888888',
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
          bg: '#eeeeee',
          borderColor: '#eeeeee',
          borderWidth: 0,
        },
      },
      
      tertiary: {
        normal: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333300',
          borderColor: '#1f1f22',
          borderWidth: 0,
        },
        hover: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',
          borderColor: '#19191b',
          borderWidth: 0,
        },
        focus: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',
          borderColor: '#33333380',
          borderWidth: 2,
        },
        active: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#33333333',
          borderColor: '#979797',
          borderWidth: 0,
        },
        loading: {
          labelColor: '#333333',
          trailingIconColor: '#333333',
          leadingIconColor: '#333333',
          bg: '#3333331a',
          borderColor: '#3333331a',
          borderWidth: 2,
        },
        disabled: {
          labelColor: '#888888',
          trailingIconColor: '#888888',
          leadingIconColor: '#888888',
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

1. **Ícone Trailing Sempre Presente:** ChevronDown para indicar dropdown
2. **Leading Icon Opcional:** Pode ter ou não ícone antes do label
3. **Dois Tipos de Layout:** Hug Content (largura automática) vs Fixed Width (164px)
4. **Estado Loading:** Usa o componente Loading (já existe)
5. **Hierarquias:** Mesmas do Button (Primary, Secondary, Tertiary)
6. **Todas as Cores Já Existem:** Nenhuma cor nova precisa ser adicionada!
7. **Depende de:** Button (base), Icon (ícones), Loading (estado loading)

---

## ✅ Checklist de Implementação

- [ ] Confirmar que não há cores novas (TODAS já existem ✅)
- [ ] Adicionar seção dropdownButton em `tokens.ts`
- [ ] Criar componente `DropdownButton.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (small, medium)
- [ ] Implementar variante `hierarchy` (primary, secondary, tertiary)
- [ ] Implementar variante `width` (hug, fixed)
- [ ] Implementar prop `leadingIcon` opcional
- [ ] Implementar estados (normal, hover, focus, active, loading, disabled)
- [ ] Integrar com ChevronOutlinedDown (trailing)
- [ ] Integrar com biblioteca de ícones (leading opcional)
- [ ] Integrar com Loading component
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

