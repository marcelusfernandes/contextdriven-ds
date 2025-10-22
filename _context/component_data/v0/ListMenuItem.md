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
- **2 Sizes:** Small (36px height), Medium (48px height)
- **4 States:** Normal, Hover, Active, Focus
- **SEM estado Error!** (componente de lista/navegação)
- **SEM estado Disabled!**

#### Dimensões por Size

**Medium:**
- Container: 236 × 48px
- Leading icon: 24 × 24px
- Trailing icon: 24 × 24px
- Typography: 16px / 24px lineHeight

**Small:**
- Container: 236 × 36px
- Leading icon: 20 × 20px
- Trailing icon: 20 × 20px
- Typography: 14px / 20px lineHeight

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Estrutura Interna

```
┌────────────────────────────────────┐
│ Container (48px ou 36px)           │
│  ┌──┬─────────────────────┬──┐    │
│  │🔲│ Content Area        │➡️│    │
│  │  │  Text + Trailing    │  │    │
│  └──┴─────────────────────┴──┘    │
└────────────────────────────────────┘
 Leading    Text     Trailing
```

### Tamanhos (sizes)

#### Medium (48px)
```
container:
  height: 48
  padding: { left: 12, top: 12, right: 12, bottom: 12 }
  borderRadius: 12
  gap: 8

leadingArea:
  width: 24
  height: 24
  padding: 0

contentArea:
  gap: 8
  trailing:
    icon:
      width: 24
      height: 24
    gap: 0
    padding: 0

typography:
  fontSize: 16
  lineHeight: 24
  fontWeight: 400
  fontFamily: "Roboto Flex"
```

#### Small (36px)
```
container:
  height: 36
  padding: { left: 12, top: 8, right: 12, bottom: 8 }
  borderRadius: 8
  gap: 8

leadingArea:
  width: 20
  height: 20
  padding: 0

contentArea:
  gap: 8
  trailing:
    icon:
      width: 20
      height: 20
    gap: 0
    padding: 0

typography:
  fontSize: 14
  lineHeight: 20
  fontWeight: 400
  fontFamily: "Roboto Flex"
```

### Estados (styles) - Default (SEM error/disabled)

**Normal (Enabled):**
```
leadingContent.color: #333333 (gray800)
contentArea.text.color: #333333 (gray800)
contentArea.trailing.icon: #333333 (gray800)
container.bg.color: #33333300 (transparent)
container.border.color: #33333300 (transparent)
container.border.width: 0
```

**Hover:**
```
leadingContent.color: #111111 (gray850)
contentArea.text.color: #111111 (gray850)
contentArea.trailing.icon: #111111 (gray850)
container.bg.color: #f7f7f7 (gray100)
container.border.color: #33333300 (transparent)
container.border.width: 0
```

**Active (Pressed):**
```
leadingContent.color: #111111 (gray850)
contentArea.text.color: #111111 (gray850)
contentArea.trailing.icon: #111111 (gray850)
container.bg.color: #eeeeee (gray200)
container.border.color: #33333300 (transparent)
container.border.width: 0
```

**Focus:**
```
leadingContent.color: #111111 (gray850)
contentArea.text.color: #111111 (gray850)
contentArea.trailing.icon: #111111 (gray850)
container.bg.color: #eeeeee (gray200)
container.border.color: #bbbbbb (gray300)
container.border.width: 2
```

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
**TODAS as cores já existem!** ✅
- gray800 (#333333)
- gray850 (#111111)
- gray300 (#bbbbbb)
- gray200 (#eeeeee)
- gray100 (#f7f7f7)
- transparent (#33333300)

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
      leadingColor: '#333333',      // gray800
      textColor: '#333333',          // gray800
      trailingColor: '#333333',      // gray800
      bgColor: '#33333300',          // transparent
      borderColor: '#33333300',      // transparent
      borderWidth: 0,
    },
    hover: {
      leadingColor: '#111111',       // gray850
      textColor: '#111111',          // gray850
      trailingColor: '#111111',      // gray850
      bgColor: '#f7f7f7',            // gray100
      borderColor: '#33333300',      // transparent
      borderWidth: 0,
    },
    active: {
      leadingColor: '#111111',       // gray850
      textColor: '#111111',          // gray850
      trailingColor: '#111111',      // gray850
      bgColor: '#eeeeee',            // gray200
      borderColor: '#33333300',      // transparent
      borderWidth: 0,
    },
    focus: {
      leadingColor: '#111111',       // gray850
      textColor: '#111111',          // gray850
      trailingColor: '#111111',      // gray850
      bgColor: '#eeeeee',            // gray200
      borderColor: '#bbbbbb',        // gray300
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

