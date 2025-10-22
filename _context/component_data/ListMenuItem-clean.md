# ListMenuItem - Especificação Técnica

**Componente:** List Menu Item  
**Figma Node ID:** 5053:5994  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5053-5994  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 5053:5994
- **Nome:** List Menu Item 🔵
- **Posição:** (2766, 204)
- **Dimensões:** 1226 × 196

### Variantes Identificadas (8 variantes)

**Estrutura das Variantes:**
- **2 Sizes:** Small, Medium
- **4 States:** Normal, Hover, Active, Focus
- **SEM estado Error!** (componente de lista/navegação)
- **SEM estado Disabled!**

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Estrutura Interna

```
┌────────────────────────────────────┐
│ Container                          │
│  ┌──┬─────────────────────┬──┐    │
│  │🔲│ Content Area        │➡️│    │
│  │  │  Text + Trailing    │  │    │
│  └──┴─────────────────────┴──┘    │
└────────────────────────────────────┘
 Leading    Text     Trailing
```

### Tamanhos (sizes)

#### Medium
```
container:
  height: $size.height.48
  paddingVertical: $space.12
  paddingHorizontal: $space.12
  borderRadius: $radius.12
  gap: $space.8

leadingArea:
  iconSize: $iconSize.24

contentArea:
  gap: $space.8
  trailing:
    iconSize: $iconSize.24

typography:
  fontSize: $fontSize.bodyLarge (16)
  lineHeight: $lineHeight.bodyLarge (24)
  fontWeight: $fontWeight.regular (400)
  fontFamily: $fontFamily.roboto
```

#### Small
```
container:
  height: $size.height.36
  paddingVertical: $space.8
  paddingHorizontal: $space.12
  borderRadius: $radius.8
  gap: $space.8

leadingArea:
  iconSize: $iconSize.20

contentArea:
  gap: $space.8
  trailing:
    iconSize: $iconSize.20

typography:
  fontSize: $fontSize.body (14)
  lineHeight: $lineHeight.body (20)
  fontWeight: $fontWeight.regular (400)
  fontFamily: $fontFamily.roboto
```

### Estados (styles) - Default (SEM error/disabled)

**Normal (Enabled):**
```
leadingContent.color: gray800
contentArea.text.color: gray800
contentArea.trailing.icon: gray800
container.bg.color: transparent
container.border.color: transparent
container.border.width: 0
```

**Hover:**
```
leadingContent.color: gray850
contentArea.text.color: gray850
contentArea.trailing.icon: gray850
container.bg.color: gray100
container.border.color: transparent
container.border.width: 0
```

**Active (Pressed):**
```
leadingContent.color: gray850
contentArea.text.color: gray850
contentArea.trailing.icon: gray850
container.bg.color: gray200
container.border.color: transparent
container.border.width: 0
```

**Focus:**
```
leadingContent.color: gray850
contentArea.text.color: gray850
contentArea.trailing.icon: gray850
container.bg.color: gray200
container.border.color: gray300
container.border.width: 2
```

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
**TODAS as cores já existem!** ✅
- gray800
- gray850
- gray300
- gray200
- gray100
- transparent

### Estrutura para tokens.ts

```typescript
listMenuItem: {
  // Tamanhos
  size: {
    small: {
      height: 36,
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      gap: 8,
      fontSize: 14,
      lineHeight: 20,
      fontWeight: '400' as const,
      leadingIconSize: 20,
      trailingIconSize: 20,
    },
    medium: {
      height: 48,
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderRadius: 12,
      gap: 8,
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400' as const,
      leadingIconSize: 24,
      trailingIconSize: 24,
    },
  },
  
  // Estados (APENAS normal, SEM error/disabled)
  state: {
    normal: {
      leadingColor: 'gray800',
      textColor: 'gray800',
      trailingColor: 'gray800',
      bgColor: 'transparent',
      borderColor: 'transparent',
      borderWidth: 0,
    },
    hover: {
      leadingColor: 'gray850',
      textColor: 'gray850',
      trailingColor: 'gray850',
      bgColor: 'gray100',
      borderColor: 'transparent',
      borderWidth: 0,
    },
    active: {
      leadingColor: 'gray850',
      textColor: 'gray850',
      trailingColor: 'gray850',
      bgColor: 'gray200',
      borderColor: 'transparent',
      borderWidth: 0,
    },
    focus: {
      leadingColor: 'gray850',
      textColor: 'gray850',
      trailingColor: 'gray850',
      bgColor: 'gray200',
      borderColor: 'gray300',
      borderWidth: 2,
    },
  },
}
```

---

## 🎯 Componente React

### Props Esperadas
```typescript
interface ListMenuItemProps {
  // Visual
  size?: 'small' | 'medium'
  
  // Conteúdo
  children: React.ReactNode  // Texto do item
  leading?: React.ReactNode  // Ícone à esquerda (opcional)
  trailing?: React.ReactNode // Ícone à direita (opcional)
  
  // Callbacks
  onPress?: () => void
  onFocus?: () => void
  onBlur?: () => void
  
  // SEM estados error/disabled
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### Estrutura do Componente

```typescript
<ListMenuItem
  size="medium"
  leading={<Icon name="home" />}
  trailing={<Icon name="chevron-right" />}
  onPress={() => console.log('Item clicado')}
>
  Label item
</ListMenuItem>
```

### 3 Configurações Possíveis

1. **Apenas Text:**
   ```typescript
   <ListMenuItem>Label item</ListMenuItem>
   ```

2. **Leading + Text:**
   ```typescript
   <ListMenuItem leading={<Icon name="home" />}>
     Label item
   </ListMenuItem>
   ```

3. **Leading + Text + Trailing:**
   ```typescript
   <ListMenuItem 
     leading={<Icon name="home" />}
     trailing={<Icon name="chevron-right" />}
   >
     Label item
   </ListMenuItem>
   ```

---

## 📝 Notas de Implementação

1. **Item Individual Básico:**
   - Componente base para itens de lista
   - Usado pelo List Menu (container)
   - Não tem estado error ou disabled

2. **Estrutura Flexível:**
   - Leading: Opcional (ícone à esquerda)
   - Text: Obrigatório (conteúdo principal)
   - Trailing: Opcional (ícone à direita, geralmente seta)

3. **Estados Interativos:**
   - `normal`: Padrão (transparent background)
   - `hover`: Mouse sobre (gray100 background)
   - `active`: Clicado/pressionado (gray200 background)
   - `focus`: Focado via teclado (gray200 + border gray300)

4. **SEM Estados:**
   - ❌ Error (não se aplica a listas)
   - ❌ Disabled (não se aplica a listas)
   - ❌ Loading (não se aplica a listas)

5. **Uso Comum:**
   - Menus de navegação
   - Listas de configurações
   - Dropdowns
   - Sidebars
   - Action sheets

6. **Acessibilidade:**
   - `role="button"` ou `role="menuitem"`
   - `aria-label` para descrever a ação
   - Suporte a navegação via teclado (setas, Enter, Space)

7. **Gap Interno:**
   - 8px entre leading e text
   - 8px entre text e trailing
   - Consistente em ambos os tamanhos

8. **Trailing Icon:**
   - Geralmente usado para indicar navegação (chevron-right)
   - Ou ações secundárias (more-vertical, info)

---

**8 variantes! Item básico de lista com leading/trailing opcional! 📦**


