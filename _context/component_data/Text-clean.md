# Text - Especificação Técnica (Clean)

**Componente:** Text (Typography System)

### Dados Extraídos do Figma

#### Tipografia
- **Figma Node ID:** 2904-2129
- **Figma URL:** https://www.figma.com/design/VayONk0HQsuE77Z7HA6aKO/branch/ALuNKRqK4LWqLXg9JjdIN1/Zé-Delivery---Foundations--v1.1.4-?node-id=2904-2129&t=jnnd6llE7z38z80u-11

#### Cores Semânticas
- **Figma Node ID:** 2906-1121
- **Figma URL:** https://www.figma.com/design/VayONk0HQsuE77Z7HA6aKO/branch/ALuNKRqK4LWqLXg9JjdIN1/Zé-Delivery---Foundations--v1.1.4-?node-id=2906-1121&t=jnnd6llE7z38z80u-11

---

## 📊 Estrutura do Componente

O componente de tipografia está organizado em **3 blocos principais**:

#### 1. Heading (Display + Titles + Highlights)
- Display: Tipografia para elementos proeminentes (banners, headers grandes)
- Titles: Títulos hierárquicos (seções, páginas, navegação)
- Highlights: Texto de suporte enfatizado

#### 2. Block Content
- Body: Conteúdo principal
- Body Large: Conteúdo destacado
- Label: Rótulos de formulários/interface
- Informative: Mensagens e notificações
- Meta: Informações secundárias

---

## 🎨 Tokens do Componente

### 1. Typography Base Tokens

```typescript
typography: {
  fontFamily: {
    display: tokens.font.display,    // Gelada RC3 Variable
    main: tokens.font.main,          // Roboto Flex
    content: tokens.font.main,       // Roboto Flex
  },
  
  fontSize: {
    peta: tokens.fontSize.peta,             // 48px - Display 1
    giga: tokens.fontSize.giga,             // 36px - Display 2
    mega: tokens.fontSize.mega,             // 28px - Display 3
    extraLarge: tokens.fontSize.extraLarge, // 24px - Display 4, Title 1
    large: tokens.fontSize.large,           // 20px - Title 2, Highlight 1
    medium: tokens.fontSize.medium,         // 16px - Title 3, Highlight 2, Body Large
    small: tokens.fontSize.small,           // 14px - Title 4, Highlight 3, Body, Label, Informative
    extraSmall: tokens.fontSize.extraSmall, // 12px - Highlight 4, Meta
  },
  
  fontWeight: {
    display: {
      stronger: tokens.fontWeight.black,    // 900 - Display
    },
    main: {
      bold: tokens.fontWeight.bold,         // 700 - Titles
      semibold: tokens.fontWeight.semibold, // 600 - Highlights, Label
    },
    content: {
      regular: tokens.fontWeight.regular,   // 400 - Body
      semibold: tokens.fontWeight.semibold, // 600 - Label
    },
  },
  
  lineHeight: {
    close: {
      peta: tokens.lineHeight.close.peta,             // 60px - Display 1
      giga: tokens.lineHeight.close.giga,             // 44px - Display 2
      mega: tokens.lineHeight.close.mega,             // 36px - Display 3
      extraLarge: tokens.lineHeight.close.extraLarge, // 32px - Display 4, Title 1
      large: tokens.lineHeight.close.large,           // 24px - Title 2, Highlight 1
      medium: tokens.lineHeight.close.medium,         // 20px - Highlight 2
      extraSmall: tokens.lineHeight.close.extraSmall, // 16px - Meta
    },
    regular: {
      medium: tokens.lineHeight.regular.medium,       // 24px - Title 3, Body Large
      small: tokens.lineHeight.regular.small,         // 20px - Title 4, Highlight 3, Body, Informative
      extraSmall: tokens.lineHeight.regular.extraSmall, // 20px - Highlight 4
    },
    tight: {
      small: tokens.lineHeight.tight.small,           // 16px - Label
    },
  },
  
  letterSpacing: {
    regular: 0,  // Todas as variantes usam 0
  },
}
```

### 2. Text Component Tokens

```typescript
text: {
  // Display Variants (Gelada RC3 Variable - Black 900)
  display1: {
    fontFamily: tokens.typography.fontFamily.display,
    fontSize: tokens.typography.fontSize.peta,
    fontWeight: tokens.typography.fontWeight.display.stronger,
    lineHeight: tokens.typography.lineHeight.close.peta,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  display2: {
    fontFamily: tokens.typography.fontFamily.display,
    fontSize: tokens.typography.fontSize.giga,
    fontWeight: tokens.typography.fontWeight.display.stronger,
    lineHeight: tokens.typography.lineHeight.close.giga,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  display3: {
    fontFamily: tokens.typography.fontFamily.display,
    fontSize: tokens.typography.fontSize.mega,
    fontWeight: tokens.typography.fontWeight.display.stronger,
    lineHeight: tokens.typography.lineHeight.close.mega,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  display4: {
    fontFamily: tokens.typography.fontFamily.display,
    fontSize: tokens.typography.fontSize.extraLarge,
    fontWeight: tokens.typography.fontWeight.display.stronger,
    lineHeight: tokens.typography.lineHeight.close.extraLarge,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  
  // Title Variants (Roboto Flex - Bold 700)
  title1: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.extraLarge,
    fontWeight: tokens.typography.fontWeight.main.bold,
    lineHeight: tokens.typography.lineHeight.close.extraLarge,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  title2: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.large,
    fontWeight: tokens.typography.fontWeight.main.bold,
    lineHeight: tokens.typography.lineHeight.close.large,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  title3: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.medium,
    fontWeight: tokens.typography.fontWeight.main.bold,
    lineHeight: tokens.typography.lineHeight.regular.medium,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  title4: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.main.bold,
    lineHeight: tokens.typography.lineHeight.regular.small,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  
  // Highlight Variants (Roboto Flex - SemiBold 600)
  highlight1: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.large,
    fontWeight: tokens.typography.fontWeight.main.semibold,
    lineHeight: tokens.typography.lineHeight.close.large,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  highlight2: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.medium,
    fontWeight: tokens.typography.fontWeight.main.semibold,
    lineHeight: tokens.typography.lineHeight.close.medium,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  highlight3: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.main.semibold,
    lineHeight: tokens.typography.lineHeight.regular.small,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  highlight4: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.extraSmall,
    fontWeight: tokens.typography.fontWeight.main.semibold,
    lineHeight: tokens.typography.lineHeight.regular.extraSmall,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  
  // Content Variants (Roboto Flex - Regular 400 / SemiBold 600)
  body: {
    fontFamily: tokens.typography.fontFamily.content,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.content.regular,
    lineHeight: tokens.typography.lineHeight.regular.small,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  bodyLarge: {
    fontFamily: tokens.typography.fontFamily.content,
    fontSize: tokens.typography.fontSize.medium,
    fontWeight: tokens.typography.fontWeight.content.regular,
    lineHeight: tokens.typography.lineHeight.regular.medium,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  label: {
    fontFamily: tokens.typography.fontFamily.content,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.content.semibold,
    lineHeight: tokens.typography.lineHeight.tight.small,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  informative: {
    fontFamily: tokens.typography.fontFamily.content,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.content.regular,
    lineHeight: tokens.typography.lineHeight.regular.small,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
  meta: {
    fontFamily: tokens.typography.fontFamily.content,
    fontSize: tokens.typography.fontSize.extraSmall,
    fontWeight: tokens.typography.fontWeight.content.regular,
    lineHeight: tokens.typography.lineHeight.close.extraSmall,
    letterSpacing: tokens.typography.letterSpacing.regular,
  },
}
```

---

## 🎨 Cores Semânticas do Texto

```typescript
text: {
  colors: {
    // Cores Padrão
    title: tokens.color.text.title,
    body: tokens.color.text.body,
    highlight: tokens.color.text.highlight,
    muted: tokens.color.text.muted,
    label: tokens.color.text.label,
    disabled: tokens.color.text.disabled,
    
    // Estados e Feedback
    info: tokens.color.text.info,
    success: tokens.color.text.success,
    warning: tokens.color.text.warning,
    danger: tokens.color.text.danger,
    
    // Especiais
    rewards: tokens.color.text.rewards,
    cold: tokens.color.text.cold,
  },
}
```

### Hierarquia de Cor

1. **Padrão do componente:** `body`
2. **Pode ser sobrescrita por:** `colorVariant` prop
3. **Pode ser sobrescrita por:** `color` prop (customizada)

**Ordem de prioridade:**
```
color (prop customizada) > colorVariant (semântica) > padrão (body)
```

---

## 🎯 Interface do Componente

```typescript
interface TextProps {
  /** Variante tipográfica (17 opções) */
  variant?: 
    // Display (4 variantes - Gelada RC3 Variable, Black 900)
    | 'display1' | 'display2' | 'display3' | 'display4'
    // Title (4 variantes - Roboto Flex, Bold 700)
    | 'title1' | 'title2' | 'title3' | 'title4'
    // Highlight (4 variantes - Roboto Flex, SemiBold 600)
    | 'highlight1' | 'highlight2' | 'highlight3' | 'highlight4'
    // Content (5 variantes - Roboto Flex, Regular 400 / SemiBold 600)
    | 'body' | 'bodyLarge' | 'label' | 'informative' | 'meta'
  
  /** Cor semântica do texto (12 opções) */
  colorVariant?: 
    | 'title' | 'body' | 'highlight' | 'muted' | 'label' | 'disabled'
    | 'info' | 'success' | 'warning' | 'danger'
    | 'rewards' | 'cold'
  
  /** Cor customizada (sobrescreve colorVariant) */
  color?: string
  
  /** Alinhamento do texto */
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  
  /** Conteúdo do texto */
  children?: React.ReactNode
}
```

---

## 📱 Variantes por Categoria

### Display (4 variantes)
Para elementos proeminentes e impactantes
- display1, display2, display3, display4

### Titles (4 variantes)
Para hierarquia de títulos
- title1, title2, title3, title4

### Highlights (4 variantes)
Para texto de suporte enfatizado
- highlight1, highlight2, highlight3, highlight4

### Content (5 variantes)
Para conteúdo de leitura
- body, bodyLarge, label, informative, meta

**Total: 17 variantes tipográficas**

---

## 🔗 Tokens Necessários

### Typography Tokens
```typescript
// Font Families
tokens.font.display          // Gelada RC3 Variable
tokens.font.main             // Roboto Flex

// Font Sizes
tokens.fontSize.peta         // 48px
tokens.fontSize.giga         // 36px
tokens.fontSize.mega         // 28px
tokens.fontSize.extraLarge   // 24px
tokens.fontSize.large        // 20px
tokens.fontSize.medium       // 16px
tokens.fontSize.small        // 14px
tokens.fontSize.extraSmall   // 12px

// Font Weights
tokens.fontWeight.black      // 900
tokens.fontWeight.bold       // 700
tokens.fontWeight.semibold   // 600
tokens.fontWeight.regular    // 400

// Line Heights
tokens.lineHeight.close.*
tokens.lineHeight.regular.*
tokens.lineHeight.tight.*
```

### Color Tokens
```typescript
// Text Colors
tokens.color.text.title
tokens.color.text.body
tokens.color.text.highlight
tokens.color.text.muted
tokens.color.text.label
tokens.color.text.disabled
tokens.color.text.info
tokens.color.text.success
tokens.color.text.warning
tokens.color.text.danger
tokens.color.text.rewards
tokens.color.text.cold
```

---

**Última atualização:** 08/10/2025  
**Status:** ✅ Especificação completa extraída do Figma

