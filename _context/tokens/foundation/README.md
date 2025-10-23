# Design Tokens Foundation - Zé Delivery

> Tokens semânticos da Foundation que referenciam os tokens primitivos  
> Define o propósito e uso dos tokens no Design System

[![Figma](https://img.shields.io/badge/Figma-Source-F24E1E?style=flat&logo=figma&logoColor=white)](https://www.figma.com/design/tW7TAIJa6IN6bpUH62t5CD/)
[![W3C](https://img.shields.io/badge/W3C-Design%20Tokens-005A9C?style=flat&logo=w3c&logoColor=white)](https://tr.designtokens.org/format/)

---

## 📚 Índice

- [🎨 Colors (Foundation)](#-colors-foundation)
- [👻 Opacities (Foundation)](#-opacities-foundation)
- [📝 Typography (Foundation)](#-typography-foundation)
- [📏 Spacing (Foundation)](#-spacing-foundation)
- [📦 Padding (Foundation)](#-padding-foundation)
- [🔘 Border Radius (Foundation)](#-border-radius-foundation)
- [➖ Border Width (Foundation)](#-border-width-foundation)
- [🔄 Relação com Primitivos](#-relação-com-primitivos)
- [💡 Como Usar](#-como-usar)
- [📊 Resumo Geral](#-resumo-geral)

---

## 🎨 Colors (Foundation)

**Arquivo:** [`tokens-colors.json`](./tokens-colors.json)

Cores semânticas que definem o **propósito** e **uso** das cores no sistema. Cada token Foundation faz referência a um token primitivo.

### Categorias de Cores:

#### 1️⃣ **Brand** (Zé Delivery)
Paleta amarela do serviço principal de entrega. Representa energia e otimismo.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-brand-1` | Yellow/100 | `#fff7d8` | Backgrounds, lightest accent |
| `color-brand-2` | Yellow/300 | `#ffe376` | Light accent |
| `color-brand-3` | Yellow/500 | `#ffcc00` | **Cor primária Zé Delivery** ⭐ |
| `color-brand-4` | Yellow/600 | `#e9b01d` | Hover states |
| `color-brand-5` | Yellow/700 | `#cb9600` | Active states, darkest |

#### 2️⃣ **Rewards** (Zé Compensa)
Paleta roxa do programa de benefícios. Representa exclusividade e valor premium.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-rewards-1` | Purple/100 | `#f3f1fe` | Backgrounds, lightest accent |
| `color-rewards-2` | Purple/300 | `#aa94ff` | Light accent |
| `color-rewards-3` | Purple/500 | `#6e3ce4` | **Cor primária Zé Compensa** ⭐ |
| `color-rewards-4` | Purple/600 | `#612cdf` | Hover states |
| `color-rewards-5` | Purple/700 | `#5624cc` | Active states, darkest |

#### 3️⃣ **Highlight**
Paleta de cinzas complementar para destacar elementos importantes. Adapta-se a ambos os temas.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-highlight-1` | Grayscale/100 | `#f5f5f5` | Very light gray |
| `color-highlight-2` | Grayscale/300 | `#b8b8b8` | Light gray |
| `color-highlight-3` | Grayscale/500 | `#767676` | **Neutral gray** |
| `color-highlight-4` | Grayscale/700 | `#474747` | Dark gray |
| `color-highlight-5` | Grayscale/900 | `#1c1c1c` | Almost black |

#### 4️⃣ **Background**
Cores de fundo para superfícies da interface.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-background-primary` | Grayscale/White | `#ffffff` | Main content areas |
| `color-background-secondary` | Mist/100 | `#f1f4f1` | Secondary surfaces |
| `color-background-disabled` | Grayscale/200 | `#dbdbdb` | Disabled state |

#### 5️⃣ **Border**
Cores para bordas e divisões.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-border-primary` | Black/16 | `#00000029` | Primary borders |
| `color-border-secondary` | Black/8 | `#00000014` | Subtle dividers |
| `color-border-disabled` | Black/8 | `#00000014` | Disabled borders |

#### 6️⃣ **Content**
Cores para texto e ícones. Garantem legibilidade e acessibilidade.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-content-primary` | Grayscale/900 | `#1c1c1c` | **Main text**, high emphasis |
| `color-content-secondary` | Grayscale/500 | `#767676` | Supporting text, medium emphasis |
| `color-content-tertiary` | Grayscale/White | `#ffffff` | Text on dark backgrounds |
| `color-content-disabled` | Grayscale/300 | `#b8b8b8` | Disabled text |

#### 7️⃣ **Feedback**
Cores que comunicam estado e resultado das interações.

##### 🟢 Success (Verde)
Para ações bem-sucedidas, informações positivas e descontos.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-feedback-success-1` | Green/100 | `#e6f7f0` | Background |
| `color-feedback-success-2` | Green/300 | `#5dc598` | Light accent |
| `color-feedback-success-3` | Green/500 | `#2c855f` | **Primary success** |
| `color-feedback-success-4` | Green/600 | `#2d7657` | Hover |
| `color-feedback-success-5` | Green/700 | `#2e684f` | Active |

##### 🔵 Info (Ciano)
Para informações gerais não-críticas mas úteis.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-feedback-info-1` | Cyan/100 | `#eaf9fc` | Background |
| `color-feedback-info-2` | Cyan/300 | `#33c2e0` | Light accent |
| `color-feedback-info-3` | Cyan/500 | `#118198` | **Primary info** |
| `color-feedback-info-4` | Cyan/600 | `#1d7082` | Hover |
| `color-feedback-info-5` | Cyan/700 | `#246270` | Active |

##### 🟠 Alert (Laranja)
Para situações que requerem atenção.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-feedback-alert-1` | Orange/100 | `#fff0e7` | Background |
| `color-feedback-alert-2` | Orange/300 | `#ffa66a` | Light accent |
| `color-feedback-alert-3` | Orange/500 | `#eb5a07` | **Primary alert** |
| `color-feedback-alert-4` | Orange/600 | `#cb471b` | Hover |
| `color-feedback-alert-5` | Orange/700 | `#a54230` | Active |

##### 🔴 Error (Vermelho)
Para erros, falhas e situações críticas.

| Token | Referência | Hex | Uso |
|-------|-----------|-----|-----|
| `color-feedback-error-1` | Red/100 | `#ffefef` | Background |
| `color-feedback-error-2` | Red/300 | `#ff9597` | Light accent |
| `color-feedback-error-3` | Red/500 | `#e91935` | **Primary error** |
| `color-feedback-error-4` | Red/600 | `#c4283d` | Hover |
| `color-feedback-error-5` | Red/700 | `#a03544` | Active |

---

## 👻 Opacities (Foundation)

**Arquivo:** [`tokens-opacities.json`](./tokens-opacities.json)

Opacidades semânticas aplicadas em diferentes contextos e estados. Todas referenciam os tokens primitivos de opacity.

### Categorias de Opacidades:

#### 1. **Tokens Gerais** (12 níveis)
Valores gerais de opacidade para uso flexível em qualquer contexto.

| Token | Referência Primitiva | Valor | Uso |
|-------|---------------------|-------|-----|
| `opacity-4` | `primitives.colors.opacity.black.4` | #0000000a | 4% opacity - overlays sutis |
| `opacity-8` | `primitives.colors.opacity.black.8` | #00000014 | 8% opacity - backgrounds leves |
| `opacity-12` | `primitives.colors.opacity.black.12` | #0000001f | 12% opacity - separadores |
| `opacity-16` | `primitives.colors.opacity.black.16` | #00000029 | 16% opacity - elementos desabilitados |
| `opacity-24` | `primitives.colors.opacity.black.24` | #0000003d | 24% opacity - overlays médios |
| `opacity-32` | `primitives.colors.opacity.black.32` | #00000052 | 32% opacity - backgrounds |
| `opacity-40` | `primitives.colors.opacity.black.40` | #00000066 | 40% opacity - elementos secundários |
| `opacity-48` | `primitives.colors.opacity.black.48` | #0000007a | 48% opacity - estados hover |
| `opacity-60` | `primitives.colors.opacity.black.60` | #00000099 | 60% opacity - overlays modais |
| `opacity-72` | `primitives.colors.opacity.black.72` | #000000b8 | 72% opacity - elementos em destaque |
| `opacity-84` | `primitives.colors.opacity.black.84` | #000000d6 | 84% opacity - quase sólidos |
| `opacity-96` | `primitives.colors.opacity.black.96` | #000000f5 | 96% opacity - textos sobrepostos |

#### 2. **Brand (Yellow)** - Cor de Marca
Opacidades aplicadas ao amarelo da marca Zé Delivery.

| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-brand-enabled-8` | `primitives.colors.opacity.yellow.8` | Enabled | 8% |
| `opacity-brand-hovered-16` | `primitives.colors.opacity.yellow.16` | Hovered | 16% |
| `opacity-brand-pressed-24` | `primitives.colors.opacity.yellow.24` | Pressed | 24% |

#### 3. **Rewards (Purple)** - Programa de Recompensas
Opacidades aplicadas ao roxo do programa de recompensas.

| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-rewards-enabled-8` | `primitives.colors.opacity.purple.8` | Enabled | 8% |
| `opacity-rewards-hovered-16` | `primitives.colors.opacity.purple.16` | Hovered | 16% |
| `opacity-rewards-pressed-24` | `primitives.colors.opacity.purple.24` | Pressed | 24% |

#### 4. **Highlight (Grayscale)** - Destaques Neutros
Opacidades em tons de cinza para criar contraste e foco.

| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-highlight-enabled-4` | `primitives.colors.opacity.grayscale.500.4` | Enabled | 4% |
| `opacity-highlight-hovered-8` | `primitives.colors.opacity.grayscale.500.8` | Hovered | 8% |
| `opacity-highlight-pressed-12` | `primitives.colors.opacity.grayscale.500.12` | Pressed | 12% |

#### 5. **Background** - Fundos e Overlays
Opacidades para fundos, com overlay especial para modais.

| Token | Referência | Estado/Uso | Opacity |
|-------|-----------|-----------|---------|
| `opacity-background-enabled-16` | `primitives.colors.opacity.grayscale.500.16` | Enabled | 16% |
| `opacity-background-hovered-24` | `primitives.colors.opacity.grayscale.500.24` | Hovered | 24% |
| `opacity-background-pressed-32` | `primitives.colors.opacity.grayscale.500.32` | Pressed | 32% |
| `opacity-background-overlay-60` | `primitives.colors.opacity.black.60` | Modal Overlay | 60% |

#### 6. **Feedback Colors** - Estados de Feedback

**Success (Green):**
| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-feedback-success-enabled-8` | `primitives.colors.opacity.green.8` | Enabled | 8% |
| `opacity-feedback-success-hovered-16` | `primitives.colors.opacity.green.16` | Hovered | 16% |
| `opacity-feedback-success-pressed-24` | `primitives.colors.opacity.green.24` | Pressed | 24% |

**Info (Cyan):**
| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-feedback-info-enabled-8` | `primitives.colors.opacity.cyan.8` | Enabled | 8% |
| `opacity-feedback-info-hovered-16` | `primitives.colors.opacity.cyan.16` | Hovered | 16% |
| `opacity-feedback-info-pressed-24` | `primitives.colors.opacity.cyan.24` | Pressed | 24% |

**Alert (Orange):**
| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-feedback-alert-enabled-8` | `primitives.colors.opacity.orange.8` | Enabled | 8% |
| `opacity-feedback-alert-hovered-16` | `primitives.colors.opacity.orange.16` | Hovered | 16% |
| `opacity-feedback-alert-pressed-24` | `primitives.colors.opacity.orange.24` | Pressed | 24% |

**Error (Red):**
| Token | Referência | Estado | Opacity |
|-------|-----------|---------|---------|
| `opacity-feedback-error-enabled-8` | `primitives.colors.opacity.red.8` | Enabled | 8% |
| `opacity-feedback-error-hovered-16` | `primitives.colors.opacity.red.16` | Hovered | 16% |
| `opacity-feedback-error-pressed-24` | `primitives.colors.opacity.red.24` | Pressed | 24% |

### Exemplo de uso:
```typescript
import { tokens } from '@ze-delivery/ds-tokens/foundation'

// Overlay de modal
<Overlay style={{ backgroundColor: tokens.opacity.background.overlay["60"] }} />

// Button brand com estados
<Button 
  style={{ 
    backgroundColor: tokens.opacity.brand.enabled["8"],  // normal
    '&:hover': { backgroundColor: tokens.opacity.brand.hovered["16"] },  // hover
    '&:active': { backgroundColor: tokens.opacity.brand.pressed["24"] }  // active
  }} 
/>

// Feedback de sucesso
<Alert style={{ backgroundColor: tokens.opacity.feedback.success.enabled["8"] }} />
```

---

## 📝 Typography (Foundation)

**Arquivo:** [`tokens-typography.json`](./tokens-typography.json)

Estilos tipográficos semânticos que combinam tokens primitivos de tipografia em escalas completas.

### Categorias Tipográficas:

#### 📐 Display
Estilos maiores para headers e anúncios importantes.

| Estilo | Fonte | Tamanho | Peso | Line Height | Uso |
|--------|-------|---------|------|-------------|-----|
| **Display 1** | Roboto Flex | 28px | 700 (Bold) | 36px | Hero sections, largest text |
| **Display 2** | Roboto Flex | 24px | 700 (Bold) | 32px | Large display |
| **Display 2 Strikethrough** | Roboto Flex | 24px | 400 (Regular) | 32px | Old prices |
| **Display 3** | Roboto Flex | 16px | 700 (Bold) | 24px | Small display |

#### 📌 Title
Para cabeçalhos de seção e títulos importantes.

| Estilo | Fonte | Tamanho | Peso | Line Height | Uso |
|--------|-------|---------|------|-------------|-----|
| **Title 1** | Roboto Flex | 20px | 700 (Bold) | 28px | Primary section titles |

#### 📋 Subtitle
Para cabeçalhos secundários e subtítulos.

| Estilo | Fonte | Tamanho | Peso | Line Height | Uso |
|--------|-------|---------|------|-------------|-----|
| **Subtitle 1** | Roboto Flex | 16px | 500 (Medium) | 24px | Large subtitles |
| **Subtitle 2** | Roboto Flex | 14px | 500 (Medium) | 20px | Smaller subtitles |

#### 📄 Body
Para texto principal de conteúdo.

| Estilo | Fonte | Tamanho | Peso | Line Height | Decoração | Uso |
|--------|-------|---------|------|-------------|-----------|-----|
| **Body 1** | Roboto Flex | 16px | 400 (Regular) | 24px | - | Paragraphs, main text |
| **Body 1 Strong** | Roboto Flex | 16px | 600 (Semi Bold) | 24px | - | Emphasized text |
| **Body 1 Strong Underline** | Roboto Flex | 16px | 600 (Semi Bold) | 24px | underline | Links |
| **Body 2** | Roboto Flex | 14px | 400 (Regular) | 20px | - | Smaller paragraphs |
| **Body 2 Strong** | Roboto Flex | 14px | 600 (Semi Bold) | 20px | - | Emphasized small text |
| **Body 2 Strong Underline** | Roboto Flex | 14px | 600 (Semi Bold) | 20px | underline | Small links |

#### 🏷️ Label
Para labels de formulário, botões e elementos UI.

| Estilo | Fonte | Tamanho | Peso | Line Height | Decoração | Uso |
|--------|-------|---------|------|-------------|-----------|-----|
| **Label** | Roboto Flex | 14px | 400 (Regular) | 16px | - | Form fields |
| **Label Strong** | Roboto Flex | 14px | 600 (Semi Bold) | 16px | - | Button text |
| **Label Strong Underline** | Roboto Flex | 14px | 600 (Semi Bold) | 16px | underline | Emphasized labels |

#### 💬 Caption
Para textos auxiliares, metadados e anotações pequenas.

| Estilo | Fonte | Tamanho | Peso | Line Height | Decoração | Uso |
|--------|-------|---------|------|-------------|-----------|-----|
| **Caption** | Roboto Flex | 12px | 400 (Regular) | 16px | - | Helper text, timestamps |
| **Caption Strong** | Roboto Flex | 12px | 700 (Bold) | 16px | - | Emphasized captions |
| **Caption Strikethrough** | Roboto Flex | 12px | 400 (Regular) | 16px | line-through | Old prices, discounts |

---

## 📏 Spacing (Foundation)

**Arquivo:** [`tokens-spacing.json`](./tokens-spacing.json)

Sistema de espaçamento semântico que referencia tokens primitivos de dimensão. Usado para **margin**, **gap** e **layout spacing** entre elementos (espaçamento externo).

### Grid System:
- **Sistema de Grid:** 4px
- **Range:** 4px - 96px
- **Incremento:** 4px
- **Total:** 24 tokens

### Escala de Spacing:

| Token | Referência | Valor | Uso |
|-------|-----------|-------|-----|
| `spacing-4` | `{primitives.dimension.4}` | 4px | Extra tight - minimal gaps, inline elements |
| `spacing-8` | `{primitives.dimension.8}` | 8px | Tight - small gaps between related items |
| `spacing-12` | `{primitives.dimension.12}` | 12px | Compact - compact layouts |
| `spacing-16` | `{primitives.dimension.16}` | 16px | **Base** - standard margins and gaps ⭐ |
| `spacing-20` | `{primitives.dimension.20}` | 20px | Medium - comfortable spacing |
| `spacing-24` | `{primitives.dimension.24}` | 24px | Comfortable - good separation |
| `spacing-28` | `{primitives.dimension.28}` | 28px | Relaxed - clear separation |
| `spacing-32` | `{primitives.dimension.32}` | 32px | Large - prominent separation |
| `spacing-36` | `{primitives.dimension.36}` | 36px | Extra large |
| `spacing-40` | `{primitives.dimension.40}` | 40px | Extra large - major section breaks |
| `spacing-44` | `{primitives.dimension.44}` | 44px | Extra extra large |
| `spacing-48` | `{primitives.dimension.48}` | 48px | Huge - large content blocks |
| `spacing-52` | `{primitives.dimension.52}` | 52px | Very large |
| `spacing-56` | `{primitives.dimension.56}` | 56px | Very large - major separations |
| `spacing-60` | `{primitives.dimension.60}` | 60px | Massive |
| `spacing-64` | `{primitives.dimension.64}` | 64px | Massive - full section dividers |
| `spacing-68` | `{primitives.dimension.68}` | 68px | Extra massive |
| `spacing-72` | `{primitives.dimension.72}` | 72px | Extra massive - major page sections |
| `spacing-76` | `{primitives.dimension.76}` | 76px | Giant |
| `spacing-80` | `{primitives.dimension.80}` | 80px | Giant - large page sections |
| `spacing-84` | `{primitives.dimension.84}` | 84px | Enormous |
| `spacing-88` | `{primitives.dimension.88}` | 88px | Enormous - page-level dividers |
| `spacing-92` | `{primitives.dimension.92}` | 92px | Maximum |
| `spacing-96` | `{primitives.dimension.96}` | 96px | Maximum - largest possible separation |

### Categorias de Uso:

#### 🔹 Tight (4-12px)
Para espaçamentos mínimos, elementos inline, ícones adjacentes a texto.

**Tokens:** `spacing-4`, `spacing-8`, `spacing-12`

#### 🔹 Base (16-24px)
Para espaçamento padrão, padding de componentes, margins entre elementos relacionados.

**Tokens:** `spacing-16`, `spacing-20`, `spacing-24`

#### 🔹 Comfortable (28-40px)
Para separação clara entre grupos, sections dentro de cards.

**Tokens:** `spacing-28`, `spacing-32`, `spacing-36`, `spacing-40`

#### 🔹 Large (44-64px)
Para separação proeminente, divisão de seções principais.

**Tokens:** `spacing-44`, `spacing-48`, `spacing-52`, `spacing-56`, `spacing-60`, `spacing-64`

#### 🔹 Massive (68-96px)
Para separação de páginas inteiras, hero sections, headers de página.

**Tokens:** `spacing-68`, `spacing-72`, `spacing-76`, `spacing-80`, `spacing-84`, `spacing-88`, `spacing-92`, `spacing-96`

### Exemplo de Uso:

```typescript
// Card component
{
  padding: spacing-16,        // Base padding
  gap: spacing-12,            // Tight gap entre elementos
  marginBottom: spacing-24    // Comfortable margin para separação
}

// Page layout
{
  paddingHorizontal: spacing-20,   // Medium padding lateral
  paddingTop: spacing-64,          // Large padding topo
  gap: spacing-32                  // Large gap entre sections
}

// Button
{
  paddingVertical: spacing-12,     // Tight vertical
  paddingHorizontal: spacing-20,   // Medium horizontal
  gap: spacing-8                   // Tight gap entre icon e text
}
```

---

## 🔘 Border Radius (Foundation)

**Arquivo:** [`tokens-radius.json`](./tokens-radius.json)

Tokens de border radius semânticos que mantêm a consistência dos cantos arredondados na interface.

### Conteúdo:
- **8 tokens** de border radius
- **Range:** 0px - 1000px
- **Valor especial:** `circular` (1000px para formas circulares)

### Escala de Border Radius:

| Token | Referência | Valor | Uso |
|-------|-----------|-------|-----|
| `border-radius-0` | `{primitives.radius.0}` | 0px | Sharp corners - elementos formais |
| `border-radius-4` | `{primitives.radius.4}` | 4px | Subtle rounding - pequenos elementos |
| `border-radius-8` | `{primitives.radius.8}` | 8px | Small - badges, tags, small buttons |
| `border-radius-12` | `{primitives.radius.12}` | 12px | Medium - buttons, inputs, small cards |
| `border-radius-16` | `{primitives.radius.16}` | 16px | **Base** - cards, modals, panels ⭐ |
| `border-radius-20` | `{primitives.radius.20}` | 20px | Large - prominent cards |
| `border-radius-24` | `{primitives.radius.24}` | 24px | Extra large - hero sections |
| `border-radius-circular` | `{primitives.radius.circular}` | 1000px | **Circular** - avatars, pills, icon buttons ⭐ |

### Categorias de Uso:

#### 🔸 Sharp (0px)
Sem arredondamento, cantos afiados para elementos formais e estritamente geométricos.

**Token:** `border-radius-0`

**Exemplos:** Divisores, linhas, elementos estruturais

#### 🔸 Subtle (4-8px)
Arredondamento sutil para suavizar cantos sem chamar muita atenção.

**Tokens:** `border-radius-4`, `border-radius-8`

**Exemplos:** Badges, tags, tooltips, small chips

#### 🔸 Standard (12-16px)
Arredondamento padrão para a maioria dos componentes interativos.

**Tokens:** `border-radius-12`, `border-radius-16`

**Exemplos:** Buttons, inputs, cards, dropdowns, modals

#### 🔸 Prominent (20-24px)
Arredondamento proeminente para elementos que precisam se destacar.

**Tokens:** `border-radius-20`, `border-radius-24`

**Exemplos:** Hero cards, featured content, large containers

#### 🔸 Circular (1000px)
Forma completamente circular/pill-shaped.

**Token:** `border-radius-circular`

**Exemplos:** Avatars, profile pictures, pill buttons, status indicators

### Exemplo de Uso:

```typescript
// Card padrão
{
  borderRadius: "border-radius-16"  // 16px - Base rounding
}

// Button
{
  borderRadius: "border-radius-12"  // 12px - Medium rounding
}

// Badge
{
  borderRadius: "border-radius-8"   // 8px - Small rounding
}

// Pill button
{
  borderRadius: "border-radius-circular"  // 1000px - Circular
}

// Avatar
{
  borderRadius: "border-radius-circular",  // 1000px - Circular
  width: 48,
  height: 48
}

// Input field
{
  borderRadius: "border-radius-12"  // 12px - Medium rounding
}

// Modal
{
  borderRadius: "border-radius-16"  // 16px - Base rounding
}
```

### Boas Práticas:

1. **Consistência:** Use o mesmo border radius para elementos similares
2. **Hierarquia:** Elementos maiores podem ter radius maiores
3. **Circular:** Use `border-radius-circular` para elementos quadrados (width = height) que precisam ser circulares
4. **Evite valores customizados:** Use sempre os tokens definidos

---

## ➖ Border Width (Foundation)

**Arquivo:** [`tokens-border-width.json`](./tokens-border-width.json)

Tokens de largura de borda semânticos que mantêm a consistência da espessura das bordas na interface.

### Conteúdo:
- **5 tokens** de border width
- **Range:** 0px - 4px
- **Incremento:** 1px

### Escala de Border Width:

| Token | Referência | Valor | Uso |
|-------|-----------|-------|-----|
| `border-width-0` | `{primitives.borderWidth.0}` | 0px | No border - ghost buttons, borderless |
| `border-width-1` | `{primitives.borderWidth.1}` | 1px | **Hairline** - dividers, subtle separation ⭐ |
| `border-width-2` | `{primitives.borderWidth.2}` | 2px | **Standard** - buttons, cards, modals ⭐ |
| `border-width-3` | `{primitives.borderWidth.3}` | 3px | Medium - focus states, selected items |
| `border-width-4` | `{primitives.borderWidth.4}` | 4px | Thick - active states, strong emphasis |

### Categorias de Uso:

#### 🔹 None (0px)
Sem borda, para elementos sem contorno visual.

**Token:** `border-width-0`

**Exemplos:** Ghost buttons, borderless inputs, seamless cards

#### 🔹 Hairline (1px)
Borda muito fina, separação sutil e elegante.

**Token:** `border-width-1`

**Exemplos:** Dividers, table borders, subtle separators, input underlines

#### 🔹 Standard (2px)
Borda padrão, visibilidade equilibrada.

**Token:** `border-width-2`

**Exemplos:** Buttons, cards, modals, tabs, dropdowns, standard inputs

#### 🔹 Medium (3px)
Borda média, ênfase moderada.

**Token:** `border-width-3`

**Exemplos:** Focus rings, selected states, emphasized buttons

#### 🔹 Thick (4px)
Borda grossa, ênfase forte.

**Token:** `border-width-4`

**Exemplos:** Active states, error borders, loading indicators, primary CTAs

### Exemplo de Uso:

```typescript
// Input field
{
  borderWidth: "border-width-1",  // 1px - Hairline
  borderColor: "color-border-primary"
}

// Button default
{
  borderWidth: "border-width-2",  // 2px - Standard
  borderColor: "color-brand-3"
}

// Button focus
{
  borderWidth: "border-width-3",  // 3px - Medium emphasis
  borderColor: "color-brand-4"
}

// Button active/pressed
{
  borderWidth: "border-width-4",  // 4px - Thick emphasis
  borderColor: "color-brand-5"
}

// Ghost button (no border)
{
  borderWidth: "border-width-0",  // 0px - No border
  backgroundColor: "transparent"
}

// Divider
{
  borderBottomWidth: "border-width-1",  // 1px - Hairline
  borderColor: "color-border-secondary"
}

// Error input
{
  borderWidth: "border-width-3",  // 3px - Medium for emphasis
  borderColor: "color-feedback-error-3"
}
```

### Estados Comuns:

| Estado | Border Width Sugerido | Descrição |
|--------|----------------------|-----------|
| **Default** | `border-width-2` (2px) | Estado padrão de elementos |
| **Hover** | `border-width-2` (2px) | Mantém largura, muda cor |
| **Focus** | `border-width-3` (3px) | Aumenta para indicar foco |
| **Active/Pressed** | `border-width-4` (4px) | Máxima ênfase visual |
| **Disabled** | `border-width-1` (1px) | Reduz para aparência sutil |
| **Error** | `border-width-3` (3px) | Ênfase no erro |

### Boas Práticas:

1. **Consistência de estado:** Use a mesma largura para o mesmo estado em diferentes componentes
2. **Progressão:** Estados mais importantes devem ter bordas mais grossas (default → focus → active)
3. **Hairline para divisões:** Use `border-width-1` para separadores e dividers
4. **Standard como base:** `border-width-2` é a largura padrão para a maioria dos elementos
5. **Evite misturar:** Não use bordas de larguras diferentes no mesmo componente (exceto em estados)

### Combinações com Border Radius:

```typescript
// Card com borda sutil
{
  borderWidth: "border-width-1",
  borderRadius: "border-radius-16",
  borderColor: "color-border-primary"
}

// Button primário
{
  borderWidth: "border-width-2",
  borderRadius: "border-radius-12",
  borderColor: "color-brand-3"
}

// Pill button com borda
{
  borderWidth: "border-width-2",
  borderRadius: "border-radius-circular",
  borderColor: "color-brand-3"
}
```

---

## 🔄 Relação com Primitivos

### Como Funciona a Hierarquia:

```
PRIMITIVOS (valores brutos)
    ↓ referenciados por
FOUNDATION (significado semântico)
    ↓ usados em
COMPONENTES (implementação)
```

### Exemplo Prático:

#### Cor Brand Principal:

```json
// PRIMITIVO
"yellow": {
  "500": { "value": "#ffcc00", "type": "color" }
}

// FOUNDATION (referencia o primitivo)
"brand": {
  "3": {
    "value": "#ffcc00",
    "reference": "Yellow/500",
    "token": "color-brand-3",
    "usage": "Primary brand color"
  }
}

// USO NO COMPONENTE
const Button = styled(Pressable, {
  backgroundColor: tokens.foundation.colors.brand[3].value
})
```

#### Tipografia Body:

```json
// PRIMITIVOS
"fontSize": { "16": { "value": 16 } },
"fontWeight": { "400": "Regular" },
"lineHeight": { "24": { "value": 24 } }

// FOUNDATION (combina primitivos)
"body": {
  "body1": {
    "fontSize": { "value": 16 },
    "fontWeight": { "value": 400 },
    "lineHeight": { "value": 24 },
    "usage": "Primary body text"
  }
}
```

---

## 💡 Como Usar

### 1. Importar Foundation Tokens

```typescript
import foundationColors from './_docs/tokens/foundation/tokens-colors.json';
import foundationTypography from './_docs/tokens/foundation/tokens-typography.json';

// Cores
const primaryBrand = foundationColors.colors.brand[3].value; // "#ffcc00"
const successColor = foundationColors.colors.feedback.success[3].value; // "#2c855f"

// Tipografia
const bodyStyle = foundationTypography.typography.body.body1;
// {
//   fontFamily: "Roboto Flex",
//   fontSize: 16,
//   fontWeight: 400,
//   lineHeight: 24
// }
```

### 2. Usar em Componentes

#### React Native / Tamagui:

```typescript
import { Text, View } from '@tamagui/core';

const MyComponent = () => (
  <View backgroundColor={foundationColors.colors.background.primary.value}>
    <Text
      fontFamily={foundationTypography.typography.body.body1.fontFamily.value}
      fontSize={foundationTypography.typography.body.body1.fontSize.value}
      fontWeight={foundationTypography.typography.body.body1.fontWeight.value}
      color={foundationColors.colors.content.primary.value}
    >
      Hello Zé Delivery!
    </Text>
  </View>
);
```

#### CSS:

```css
:root {
  /* Brand Colors */
  --color-brand-primary: #ffcc00;
  --color-brand-hover: #e9b01d;
  
  /* Content Colors */
  --color-text-primary: #1c1c1c;
  --color-text-secondary: #767676;
  
  /* Typography */
  --font-body-1-size: 16px;
  --font-body-1-weight: 400;
  --font-body-1-line-height: 24px;
}

.button-primary {
  background-color: var(--color-brand-primary);
  font-size: var(--font-body-1-size);
  font-weight: 600; /* Semi Bold for buttons */
}
```

### 3. Mapeamento para tokens.ts

```typescript
// tokens.ts
import foundationColors from './_docs/tokens/foundation/tokens-colors.json';
import foundationTypography from './_docs/tokens/foundation/tokens-typography.json';

export const tokens = {
  // Cores Foundation
  color: {
    brand: {
      primary: foundationColors.colors.brand[3].value,
      hover: foundationColors.colors.brand[4].value,
      active: foundationColors.colors.brand[5].value,
    },
    background: {
      primary: foundationColors.colors.background.primary.value,
      secondary: foundationColors.colors.background.secondary.value,
    },
    content: {
      primary: foundationColors.colors.content.primary.value,
      secondary: foundationColors.colors.content.secondary.value,
    },
  },
  
  // Tipografia Foundation
  typography: {
    body1: foundationTypography.typography.body.body1,
    body2: foundationTypography.typography.body.body2,
    title1: foundationTypography.typography.title.title1,
  }
};
```

---

## 📊 Resumo Geral

### Colors Foundation:

| Categoria | Tokens | Descrição |
|-----------|--------|-----------|
| **Brand** | 5 | Cores Zé Delivery (amarelo) |
| **Rewards** | 5 | Cores Zé Compensa (roxo) |
| **Highlight** | 5 | Escala de cinzas complementar |
| **Background** | 3 | Cores de fundo |
| **Border** | 3 | Cores de borda |
| **Content** | 4 | Cores de texto/conteúdo |
| **Feedback - Success** | 5 | Cores de sucesso (verde) |
| **Feedback - Info** | 5 | Cores informativas (ciano) |
| **Feedback - Alert** | 5 | Cores de alerta (laranja) |
| **Feedback - Error** | 5 | Cores de erro (vermelho) |
| **TOTAL** | **47** | **Total de color tokens** |

### Typography Foundation:

| Categoria | Estilos | Descrição |
|-----------|---------|-----------|
| **Display** | 4 | Texto grande para headers |
| **Title** | 1 | Títulos de seção |
| **Subtitle** | 2 | Subtítulos |
| **Body** | 6 | Texto principal (3 pesos × 2 tamanhos) |
| **Label** | 3 | Labels e botões |
| **Caption** | 3 | Textos auxiliares |
| **TOTAL** | **19** | **Total de typography styles** |

### Spacing Foundation:

| Categoria | Tokens | Range | Descrição |
|-----------|--------|-------|-----------|
| **Tight** | 3 | 4-12px | Espaçamentos mínimos |
| **Base** | 3 | 16-24px | Espaçamento padrão |
| **Comfortable** | 4 | 28-40px | Separação clara |
| **Large** | 6 | 44-64px | Separação proeminente |
| **Massive** | 8 | 68-96px | Maior separação possível |
| **TOTAL** | **24** | **4-96px** | **Total de spacing tokens** |

### Border Radius Foundation:

| Categoria | Tokens | Range | Descrição |
|-----------|--------|-------|-----------|
| **Sharp** | 1 | 0px | Cantos afiados |
| **Subtle** | 2 | 4-8px | Arredondamento sutil |
| **Standard** | 2 | 12-16px | Arredondamento padrão |
| **Prominent** | 2 | 20-24px | Arredondamento proeminente |
| **Circular** | 1 | 1000px | Formas circulares |
| **TOTAL** | **8** | **0-1000px** | **Total de radius tokens** |

### Border Width Foundation:

| Categoria | Tokens | Range | Descrição |
|-----------|--------|-------|-----------|
| **None** | 1 | 0px | Sem borda |
| **Hairline** | 1 | 1px | Separação sutil |
| **Standard** | 1 | 2px | Borda padrão |
| **Medium** | 1 | 3px | Ênfase moderada |
| **Thick** | 1 | 4px | Ênfase forte |
| **TOTAL** | **5** | **0-4px** | **Total de width tokens** |

### Opacity Foundation:

| Categoria | Tokens | Range | Descrição |
|-----------|--------|-------|-----------|
| **Tokens Gerais** | 12 | 4%-96% | Opacidades flexíveis |
| **Brand** | 3 | 8%-24% | Estados brand (yellow) |
| **Rewards** | 3 | 8%-24% | Estados rewards (purple) |
| **Highlight** | 3 | 4%-12% | Destaques neutros (grayscale) |
| **Background** | 4 | 16%-60% | Fundos + overlay modal |
| **Feedback Success** | 3 | 8%-24% | Estados success (green) |
| **Feedback Info** | 3 | 8%-24% | Estados info (cyan) |
| **Feedback Alert** | 3 | 8%-24% | Estados alert (orange) |
| **Feedback Error** | 3 | 8%-24% | Estados error (red) |
| **TOTAL** | **37** | **4%-96%** | **Total de opacity tokens** |

### Total Geral:
- **47 color tokens**
- **37 opacity tokens**
- **19 typography styles**
- **24 spacing tokens**
- **8 border radius tokens**
- **5 border width tokens**
- **140 foundation tokens** no total

---

## 📋 Metadados

### Fonte Original:
- **Figma File:** [Zé Delivery - Foundations](https://www.figma.com/design/tW7TAIJa6IN6bpUH62t5CD/)
- **Data de Extração:** Outubro 22, 2025
- **Método:** MCP (Model Context Protocol) - Figma Desktop Plugin

### Especificações:
- **Formato:** W3C Design Tokens Format
- **Schema:** https://tr.designtokens.org/format/
- **Versão:** 1.0.0

### Diferença entre Primitivos e Foundation:

| Aspecto | Primitivos | Foundation |
|---------|-----------|------------|
| **Propósito** | Valores brutos | Significado semântico |
| **Exemplos** | `#ffcc00`, `16px`, `700` | `color-brand-primary`, `body-1` |
| **Uso** | Referenciados por Foundation | Usados diretamente em componentes |
| **Mudanças** | Raramente mudam | Podem mudar conforme contexto |

---

## 🔗 Links Úteis

- [W3C Design Tokens Format](https://tr.designtokens.org/format/)
- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Semantic Design Tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Tamagui Themes](https://tamagui.dev/docs/intro/themes)

---

## 📝 Notas

1. **Foundation vs Primitivos**: Foundation tokens sempre **referenciam** primitivos, nunca valores hardcoded
2. **Semântica**: Use Foundation tokens nos componentes para facilitar temas e manutenção
3. **Sincronização**: Quando primitivos mudarem, Foundation deve ser atualizado para refletir novas referências
4. **Tokens Compostos**: Typography Foundation combina múltiplos primitivos (fontSize + fontWeight + lineHeight)
5. **Não editar manualmente**: Estes arquivos são gerados do Figma via MCP

---

**Mantido por:** Design System Zé Delivery  
**Última atualização:** 2025-10-22

