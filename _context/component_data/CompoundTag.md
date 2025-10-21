# CompoundTag - Especificação Técnica

**Componente:** Compound Tag  
**Figma Node ID:** 6963:47463  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=6963-47463&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 6963:47463
- **Nome:** Compound Tag [New] 🔵
- **Posição:** (-9843, 2550)
- **Dimensões:** 2918 × 568

### Total de Variantes Identificadas

**112 variantes** organizadas por:
- **Color:** Success, Cold, Warning, Danger, Primary, Secondary, Rewards (7 cores)
- **Leading Content:** Label, Icon (2 tipos de conteúdo)
- **Radius:** Rounded, Pill (2 tipos de border radius)
- **Size:** ExtraSmall, Small, Medium, Large, ExtraLarge (5 tamanhos)

**Estrutura Composta:**
```
┌─────────────────────────────────────┐
│ [Leading]  +  [Trailing Text]       │
│  (colorido)    (fundo claro)        │
└─────────────────────────────────────┘
```

- **Leading:** Pode ser um Label ou Ícone com fundo colorido sólido
- **Trailing:** Sempre um texto com fundo claro (weak)

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Cores - Leading (Solid/Strong)

#### Success
- **Leading Background:** `#2c855f` (successGreen)
- **Leading Text:** `#ffffff` (white)
- **Trailing Background:** `#e6f7f0` (successGreenLight)
- **Trailing Text:** `#006440` (successGreenDark)

#### Cold
- **Leading Background:** `#118198` (coldBlue)
- **Leading Text:** `#ffffff` (white)
- **Trailing Background:** `#e0f7fc` (coldBlueLight)
- **Trailing Text:** `#050400` (coldBlueDark)

#### Warning
- **Leading Background:** `#eb8207` (warningOrange)
- **Leading Text:** `#000000` (black)
- **Trailing Background:** `#fef3e5` (warningOrangeLight)
- **Trailing Text:** `#b93200` (warningOrangeDark)

#### Danger
- **Leading Background:** `#e91935` (red)
- **Leading Text:** `#ffffff` (white)
- **Trailing Background:** `#fde8eb` (redLightest)
- **Trailing Text:** `#b60018` (redDarker)

#### Primary
- **Leading Background:** `#ffcc00` (zeYellow)
- **Leading Text:** `#000000` (black)
- **Trailing Background:** `#fffae5` (zeYellowLightest)
- **Trailing Text:** `#806600` (zeYellowDarkest)

#### Secondary
- **Leading Background:** `#1f1f22` (gray600)
- **Leading Text:** `#ffffff` (white)
- **Trailing Background:** `#eaeaea` (gray250)
- **Trailing Text:** `#141417` (gray950)

#### Rewards (ZeCompensa)
- **Leading Background:** `#6e3ce4` (zeCompensaPurple)
- **Leading Text:** `#ffffff` (white)
- **Trailing Background:** `#f1ecfc` (zeCompensaPurpleLight)
- **Trailing Text:** `#3c1598` (zeCompensaPurpleDark)

---

## 📐 Dimensões e Espaçamentos por Tamanho

### ExtraLarge (32px altura)

#### Rounded (border-radius: 4px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 4px

**Leading Icon:**
- Icon Size: 24px
- Padding: 4px (all sides)
- Border Radius: 4px

**Container:**
- Gap: 12px (entre leading e trailing)
- Padding Right: 12px
- Border Radius: 4px

#### Pill (border-radius: 1000px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 1000px

**Leading Icon:**
- Icon Size: 24px
- Padding: 4px (all sides)
- Border Radius: 1000px

**Container:**
- Gap: 12px (entre leading e trailing)
- Padding Right: 12px
- Border Radius: 1000px

---

### Large (28px altura)

#### Rounded (border-radius: 4px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 4px

**Leading Icon:**
- Icon Size: 20px
- Padding: 4px (all sides)
- Border Radius: 4px

**Container:**
- Gap: 12px (entre leading e trailing)
- Padding Right: 12px
- Border Radius: 4px

#### Pill (border-radius: 1000px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 1000px

**Leading Icon:**
- Icon Size: 20px
- Padding: 4px (all sides)
- Border Radius: 1000px

**Container:**
- Gap: 12px
- Padding Right: 12px
- Border Radius: 1000px

---

### Medium (24px altura)

#### Rounded (border-radius: 4px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 4px

**Leading Icon:**
- Icon Size: 16px
- Padding: 4px (all sides)
- Border Radius: 4px

**Container:**
- Gap: 12px
- Padding Right: 12px
- Border Radius: 4px

#### Pill (border-radius: 1000px)
**Leading Label:**
- Padding: 12px (horizontal) × 4px (vertical)
- Border Radius: 1000px

**Leading Icon:**
- Icon Size: 16px
- Padding: 4px (all sides)
- Border Radius: 1000px

**Container:**
- Gap: 12px
- Padding Right: 12px
- Border Radius: 1000px

---

### Small (20px altura)

#### Rounded (border-radius: 4px)
**Leading Label:**
- Padding: 8px (horizontal) × 4px (vertical)
- Border Radius: 4px

**Leading Icon:**
- Icon Size: 12px
- Padding: 4px (all sides)
- Border Radius: 4px

**Container:**
- Gap: 8px
- Padding Right: 8px
- Border Radius: 4px

#### Pill (border-radius: 1000px)
**Leading Label:**
- Padding: 8px (horizontal) × 4px (vertical)
- Border Radius: 1000px

**Leading Icon:**
- Icon Size: 12px
- Padding: 4px (all sides)
- Border Radius: 1000px

**Container:**
- Gap: 4px
- Padding Right: 8px
- Border Radius: 1000px

---

### ExtraSmall (16px altura)

#### Rounded (border-radius: 4px)
**Leading Label:**
- Padding: 8px (horizontal) × 2px (vertical)
- Border Radius: 4px

**Leading Icon:**
- Icon Size: 12px
- Padding: 2px (all sides)
- Border Radius: 4px

**Container:**
- Gap: 8px
- Padding Right: 8px
- Border Radius: 4px

#### Pill (border-radius: 1000px)
**Leading Label:**
- Padding: 8px (horizontal) × 2px (vertical)
- Border Radius: 1000px

**Leading Icon:**
- Icon Size: 12px
- Padding: 2px (all sides)
- Border Radius: 1000px

**Container:**
- Gap: 4px
- Padding Right: 8px
- Border Radius: 1000px

---

## 📝 Tipografia

### Font Family
- Roboto Flex

### Font Weight
- SemiBold (600)

### Font Sizes e Line Heights por Tamanho

| Tamanho | Font Size | Line Height |
|---------|-----------|-------------|
| ExtraLarge | 20px | 24px |
| Large | 16px | 20px |
| Medium | 14px | 16px |
| Small | 12px | 12px |
| ExtraSmall | 12px | 12px |

---

## 🔄 Variantes Completas

### Total: 112 Variantes

**Cálculo:**
- 7 cores × 2 leading types × 2 radius × 4 sizes (ExtraSmall, Small, Medium, Large) = 112
- ExtraLarge tem apenas Label (não tem Icon em algumas combinações)

### Exemplos de Variantes:

1. **Success + Label + Rounded + ExtraLarge**
   - Leading: Verde sólido (#2c855f) com "Label" branco
   - Trailing: Verde claro (#e6f7f0) com texto verde escuro (#006440)

2. **Primary + Icon + Pill + Medium**
   - Leading: Amarelo Zé (#ffcc00) com ícone preto
   - Trailing: Amarelo claro (#fffae5) com texto amarelo escuro (#806600)

3. **Danger + Label + Rounded + Small**
   - Leading: Vermelho (#e91935) com "Label" branco
   - Trailing: Vermelho claro (#fde8eb) com texto vermelho escuro (#b60018)

---

## 🎯 Observações de Design

### Cores Já Existem nos Tokens
- ✅ Todas as cores do Compound Tag já foram adicionadas quando criamos o componente Tag
- ✅ Não precisamos adicionar cores novas

### Estrutura do Componente
- É um componente COMPOSTO (compound)
- Sempre tem 2 partes: Leading (colorido forte) + Trailing (colorido fraco)
- Leading pode ser texto ("Label") ou ícone
- Trailing é sempre texto com informação adicional

### Estados
- ❌ SEM estados interativos (hover, focus, active, disabled)
- É um componente puramente visual/informativo
- Não tem onClick ou interações

---

## 📦 Estrutura de Implementação

```tsx
<CompoundTag
  color="success"           // success | cold | warning | danger | primary | secondary | rewards
  leadingType="label"       // label | icon
  leadingContent="Label"    // texto ou componente Icon
  trailingContent="Details" // texto do trailing
  radius="rounded"          // rounded | pill
  size="medium"             // extraSmall | small | medium | large | extraLarge
/>
```

---

## ✅ Validação

- [x] 112 variantes identificadas
- [x] Cores extraídas (7 cores semânticas)
- [x] Dimensões por tamanho (5 tamanhos)
- [x] Leading types (Label e Icon)
- [x] Radius types (Rounded e Pill)
- [x] Tipografia (Roboto Flex SemiBold 600)
- [x] Screenshot de referência obtida

---

**Pronto para implementação!** 🚀

