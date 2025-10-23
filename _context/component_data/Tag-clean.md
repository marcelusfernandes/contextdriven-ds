# Tag - Especificação Técnica

**Componente:** Tag (Etiqueta/Badge de status)  
**Figma Node ID:** 6943:46686  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)  
**Data de Extração:** 23/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 6943:46686
- **Nome:** Tag New 🟠
- **Tipo:** Componente com múltiplas variantes

### Variantes Identificadas

**Total de 140 variantes** (2 hierarquias × 7 cores × 2 radius × 5 tamanhos)

#### Dimensões por Tamanho

| Tamanho | Dimensões Aproximadas | Font Size | Line Height |
|---------|----------------------|-----------|-------------|
| **ExtraSmall** | 16-24px altura | 12px | 12px (tight) |
| **Small** | 20-28px altura | 12px | 12px (tight) |
| **Medium** | 24-32px altura | 14px | 16px (tight) |
| **Large** | 28-36px altura | 16px | 20px (close) |
| **ExtraLarge** | 32-40px altura | 20px | 24px (close) |

---

## 🎨 Variantes por Categoria

### 1. Hierarchy (Hierarquia Visual)

| Variante | Descrição | Uso |
|----------|-----------|-----|
| **Solid** | Background sólido, alto contraste | Status principal, destaque |
| **Weak** | Background suave, baixo contraste | Status secundário, informativo |

### 2. Color (Esquema de Cores)

| Cor | Descrição | Uso Semântico | Ícone |
|-----|-----------|---------------|-------|
| **Success** | Verde | Sucesso, aprovado, ativo | ✅ |
| **Cold** | Azul | Informação, neutro, frio | ❄️ |
| **Warning** | Laranja | Atenção, alerta | ⚠️ |
| **Danger** | Vermelho | Erro, crítico, cancelado | ❌ |
| **Primary** | Roxo/Primário | Destaque principal | ⭐ |
| **Secondary** | Cinza/Preto | Neutro, genérico | 🔘 |
| **Rewards** | Dourado/Amarelo | Recompensas, pontos | 🏆 |

### 3. Radius (Formato da Borda)

| Variante | Descrição | Border Radius |
|----------|-----------|---------------|
| **Rounded** | Cantos arredondados padrão | ~8px |
| **Pill** | Totalmente arredondado (pílula) | 9999px |

### 4. Size (Tamanhos)

| Tamanho | Ícone (se presente) | Padding | Uso Recomendado |
|---------|---------------------|---------|-----------------|
| **ExtraSmall** | 12×12px | 4px 6px | Tabelas compactas, listas densas |
| **Small** | 12×12px | 4px 8px | Listas, cards pequenos |
| **Medium** | 16×16px | 6px 10px | Uso padrão, formulários |
| **Large** | 20×20px | 8px 12px | Headers, destaque |
| **ExtraLarge** | 24×24px | 10px 16px | Hero sections, grandes destaques |

### 5. Icon Show (Exibição de Ícone)

| Prop | Valor | Descrição |
|------|-------|-----------|
| `iconShow` | `true` | Exibe ícone à esquerda do texto |
| `iconShow` | `false` | Apenas texto, sem ícone |

---

## 🎯 Mapeamento Completo de Variantes

### SOLID + SUCCESS (Verde)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46682 | Solid | Success | Rounded | ExtraSmall | true |
| 6948:47113 | Solid | Success | Pill | ExtraSmall | true |
| 6943:46684 | Solid | Success | Rounded | Small | true |
| 6948:47071 | Solid | Success | Pill | Small | true |
| 6943:46681 | Solid | Success | Rounded | Medium | true |
| 6948:47155 | Solid | Success | Pill | Medium | true |
| 6943:46683 | Solid | Success | Rounded | Large | true |
| 6948:47029 | Solid | Success | Pill | Large | true |
| 6943:46685 | Solid | Success | Rounded | ExtraLarge | true |
| 6948:46987 | Solid | Success | Pill | ExtraLarge | true |

### WEAK + SUCCESS (Verde Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46870 | Weak | Success | Rounded | ExtraSmall | true |
| 6948:47116 | Weak | Success | Pill | ExtraSmall | true |
| 6943:46849 | Weak | Success | Rounded | Small | true |
| 6948:47074 | Weak | Success | Pill | Small | true |
| 6943:46891 | Weak | Success | Rounded | Medium | true |
| 6948:47158 | Weak | Success | Pill | Medium | true |
| 6943:46828 | Weak | Success | Rounded | Large | true |
| 6948:47032 | Weak | Success | Pill | Large | true |
| 6943:46807 | Weak | Success | Rounded | ExtraLarge | true |
| 6948:46990 | Weak | Success | Pill | ExtraLarge | true |

### SOLID + COLD (Azul)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46696 | Solid | Cold | Rounded | ExtraSmall | true |
| 6948:47119 | Solid | Cold | Pill | ExtraSmall | true |
| 6943:46693 | Solid | Cold | Rounded | Small | true |
| 6948:47077 | Solid | Cold | Pill | Small | true |
| 6943:46699 | Solid | Cold | Rounded | Medium | true |
| 6948:47161 | Solid | Cold | Pill | Medium | true |
| 6943:46690 | Solid | Cold | Rounded | Large | true |
| 6948:47035 | Solid | Cold | Pill | Large | true |
| 6943:46687 | Solid | Cold | Rounded | ExtraLarge | true |
| 6948:46993 | Solid | Cold | Pill | ExtraLarge | true |

### WEAK + COLD (Azul Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46873 | Weak | Cold | Rounded | ExtraSmall | true |
| 6948:47122 | Weak | Cold | Pill | ExtraSmall | true |
| 6943:46852 | Weak | Cold | Rounded | Small | true |
| 6948:47080 | Weak | Cold | Pill | Small | true |
| 6943:46894 | Weak | Cold | Rounded | Medium | true |
| 6948:47164 | Weak | Cold | Pill | Medium | true |
| 6943:46831 | Weak | Cold | Rounded | Large | true |
| 6948:47038 | Weak | Cold | Pill | Large | true |
| 6943:46810 | Weak | Cold | Rounded | ExtraLarge | true |
| 6948:46996 | Weak | Cold | Pill | ExtraLarge | true |

### SOLID + WARNING (Laranja)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46716 | Solid | Warning | Rounded | ExtraSmall | true |
| 6948:47125 | Solid | Warning | Pill | ExtraSmall | true |
| 6943:46713 | Solid | Warning | Rounded | Small | true |
| 6948:47083 | Solid | Warning | Pill | Small | true |
| 6943:46719 | Solid | Warning | Rounded | Medium | true |
| 6948:47167 | Solid | Warning | Pill | Medium | true |
| 6943:46710 | Solid | Warning | Rounded | Large | true |
| 6948:46999 | Solid | Warning | Pill | Large | true |
| 6943:46707 | Solid | Warning | Rounded | ExtraLarge | true |
| 6948:46999 | Solid | Warning | Pill | ExtraLarge | true |

### WEAK + WARNING (Laranja Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46876 | Weak | Warning | Rounded | ExtraSmall | true |
| 6948:47128 | Weak | Warning | Pill | ExtraSmall | true |
| 6943:46855 | Weak | Warning | Rounded | Small | true |
| 6948:47086 | Weak | Warning | Pill | Small | true |
| 6943:46897 | Weak | Warning | Rounded | Medium | true |
| 6948:47170 | Weak | Warning | Pill | Medium | true |
| 6943:46834 | Weak | Warning | Rounded | Large | true |
| 6948:47044 | Weak | Warning | Pill | Large | true |
| 6943:46813 | Weak | Warning | Rounded | ExtraLarge | true |
| 6948:47002 | Weak | Warning | Pill | ExtraLarge | true |

### SOLID + DANGER (Vermelho)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46736 | Solid | Danger | Rounded | ExtraSmall | true |
| 6948:47131 | Solid | Danger | Pill | ExtraSmall | true |
| 6943:46733 | Solid | Danger | Rounded | Small | true |
| 6948:47089 | Solid | Danger | Pill | Small | true |
| 6943:46739 | Solid | Danger | Rounded | Medium | true |
| 6948:47173 | Solid | Danger | Pill | Medium | true |
| 6943:46730 | Solid | Danger | Rounded | Large | true |
| 6948:47047 | Solid | Danger | Pill | Large | true |
| 6943:46727 | Solid | Danger | Rounded | ExtraLarge | true |
| 6948:47005 | Solid | Danger | Pill | ExtraLarge | true |

### WEAK + DANGER (Vermelho Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46879 | Weak | Danger | Rounded | ExtraSmall | true |
| 6948:47134 | Weak | Danger | Pill | ExtraSmall | true |
| 6943:46858 | Weak | Danger | Rounded | Small | true |
| 6948:47092 | Weak | Danger | Pill | Small | true |
| 6943:46900 | Weak | Danger | Rounded | Medium | true |
| 6948:47176 | Weak | Danger | Pill | Medium | true |
| 6943:46837 | Weak | Danger | Rounded | Large | true |
| 6948:47050 | Weak | Danger | Pill | Large | true |
| 6943:46816 | Weak | Danger | Rounded | ExtraLarge | true |
| 6948:47008 | Weak | Danger | Pill | ExtraLarge | true |

### SOLID + PRIMARY (Roxo)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46756 | Solid | Primary | Rounded | ExtraSmall | true |
| 6948:47137 | Solid | Primary | Pill | ExtraSmall | true |
| 6943:46753 | Solid | Primary | Rounded | Small | true |
| 6948:47095 | Solid | Primary | Pill | Small | true |
| 6943:46759 | Solid | Primary | Rounded | Medium | true |
| 6948:47179 | Solid | Primary | Pill | Medium | true |
| 6943:46750 | Solid | Primary | Rounded | Large | true |
| 6948:47053 | Solid | Primary | Pill | Large | true |
| 6943:46747 | Solid | Primary | Rounded | ExtraLarge | true |
| 6948:47011 | Solid | Primary | Pill | ExtraLarge | true |

### WEAK + PRIMARY (Roxo Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46882 | Weak | Primary | Rounded | ExtraSmall | true |
| 6948:47140 | Weak | Primary | Pill | ExtraSmall | true |
| 6943:46861 | Weak | Primary | Rounded | Small | true |
| 6948:47098 | Weak | Primary | Pill | Small | true |
| 6943:46903 | Weak | Primary | Rounded | Medium | true |
| 6948:47182 | Weak | Primary | Pill | Medium | true |
| 6943:46840 | Weak | Primary | Rounded | Large | true |
| 6948:47056 | Weak | Primary | Pill | Large | true |
| 6943:46819 | Weak | Primary | Rounded | ExtraLarge | true |
| 6948:47014 | Weak | Primary | Pill | ExtraLarge | true |

### SOLID + SECONDARY (Cinza/Preto)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46776 | Solid | Secondary | Rounded | ExtraSmall | true |
| 6948:47143 | Solid | Secondary | Pill | ExtraSmall | true |
| 6943:46770 | Solid | Secondary | Rounded | Small | true |
| 6948:47101 | Solid | Secondary | Pill | Small | true |
| 6943:46779 | Solid | Secondary | Rounded | Medium | true |
| 6948:47185 | Solid | Secondary | Pill | Medium | true |
| 6943:46773 | Solid | Secondary | Rounded | Large | true |
| 6948:47059 | Solid | Secondary | Pill | Large | true |
| 6943:46767 | Solid | Secondary | Rounded | ExtraLarge | true |
| 6948:47017 | Solid | Secondary | Pill | ExtraLarge | true |

### WEAK + SECONDARY (Cinza Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46885 | Weak | Secondary | Rounded | ExtraSmall | true |
| 6948:47146 | Weak | Secondary | Pill | ExtraSmall | true |
| 6943:46864 | Weak | Secondary | Rounded | Small | true |
| 6948:47104 | Weak | Secondary | Pill | Small | true |
| 6943:46906 | Weak | Secondary | Rounded | Medium | true |
| 6948:47188 | Weak | Secondary | Pill | Medium | true |
| 6943:46843 | Weak | Secondary | Rounded | Large | true |
| 6948:47062 | Weak | Secondary | Pill | Large | true |
| 6943:46822 | Weak | Secondary | Rounded | ExtraLarge | true |
| 6948:47020 | Weak | Secondary | Pill | ExtraLarge | true |

### SOLID + REWARDS (Dourado)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46799 | Solid | Rewards | Rounded | ExtraSmall | true |
| 6948:47149 | Solid | Rewards | Pill | ExtraSmall | true |
| 6943:46790 | Solid | Rewards | Rounded | Small | true |
| 6948:47107 | Solid | Rewards | Pill | Small | true |
| 6943:46796 | Solid | Rewards | Rounded | Medium | true |
| 6948:47191 | Solid | Rewards | Pill | Medium | true |
| 6943:46793 | Solid | Rewards | Rounded | Large | true |
| 6948:47065 | Solid | Rewards | Pill | Large | true |
| 6943:46787 | Solid | Rewards | Rounded | ExtraLarge | true |
| 6948:47023 | Solid | Rewards | Pill | ExtraLarge | true |

### WEAK + REWARDS (Dourado Suave)

| Node ID | Hierarchy | Color | Radius | Size | iconShow |
|---------|-----------|-------|--------|------|----------|
| 6943:46888 | Weak | Rewards | Rounded | ExtraSmall | true |
| 6948:47152 | Weak | Rewards | Pill | ExtraSmall | true |
| 6943:46867 | Weak | Rewards | Rounded | Small | true |
| 6948:47110 | Weak | Rewards | Pill | Small | true |
| 6943:46909 | Weak | Rewards | Rounded | Medium | true |
| 6948:47194 | Weak | Rewards | Pill | Medium | true |
| 6943:46846 | Weak | Rewards | Rounded | Large | true |
| 6948:47068 | Weak | Rewards | Pill | Large | true |
| 6943:46825 | Weak | Rewards | Rounded | ExtraLarge | true |
| 6948:47026 | Weak | Rewards | Pill | ExtraLarge | true |

---

## 🎨 Design Tokens Necessários

### Cores - SOLID Hierarchy

```typescript
// Background colors (Solid)
tag: {
  solid: {
    success: {
      bg: tokens.color.semantic.feedback.success.pure,    // Verde sólido
      text: tokens.color.semantic.feedback.success.onPure, // Branco
    },
    cold: {
      bg: tokens.color.semantic.feedback.info.pure,       // Azul sólido
      text: tokens.color.semantic.feedback.info.onPure,   // Branco
    },
    warning: {
      bg: tokens.color.semantic.feedback.warning.pure,    // Laranja sólido
      text: tokens.color.semantic.feedback.warning.onPure, // Branco ou Preto
    },
    danger: {
      bg: tokens.color.semantic.feedback.error.pure,      // Vermelho sólido
      text: tokens.color.semantic.feedback.error.onPure,  // Branco
    },
    primary: {
      bg: tokens.color.semantic.brand.primary.pure,       // Roxo primário
      text: tokens.color.semantic.brand.primary.onPure,   // Branco
    },
    secondary: {
      bg: tokens.color.semantic.neutral.high,             // Cinza/Preto escuro
      text: tokens.color.semantic.neutral.onHigh,         // Branco
    },
    rewards: {
      bg: tokens.color.semantic.brand.rewards.pure,       // Dourado
      text: tokens.color.semantic.brand.rewards.onPure,   // Preto ou Branco
    },
  },
}
```

### Cores - WEAK Hierarchy

```typescript
// Background colors (Weak/Subtle)
tag: {
  weak: {
    success: {
      bg: tokens.color.semantic.feedback.success.low,     // Verde suave
      text: tokens.color.semantic.feedback.success.pure,  // Verde escuro
    },
    cold: {
      bg: tokens.color.semantic.feedback.info.low,        // Azul suave
      text: tokens.color.semantic.feedback.info.pure,     // Azul escuro
    },
    warning: {
      bg: tokens.color.semantic.feedback.warning.low,     // Laranja suave
      text: tokens.color.semantic.feedback.warning.pure,  // Laranja escuro
    },
    danger: {
      bg: tokens.color.semantic.feedback.error.low,       // Vermelho suave
      text: tokens.color.semantic.feedback.error.pure,    // Vermelho escuro
    },
    primary: {
      bg: tokens.color.semantic.brand.primary.low,        // Roxo suave
      text: tokens.color.semantic.brand.primary.pure,     // Roxo escuro
    },
    secondary: {
      bg: tokens.color.semantic.neutral.low,              // Cinza claro
      text: tokens.color.semantic.neutral.high,           // Cinza escuro
    },
    rewards: {
      bg: tokens.color.semantic.brand.rewards.low,        // Dourado suave
      text: tokens.color.semantic.brand.rewards.pure,     // Dourado escuro
    },
  },
}
```

### Espaçamentos e Tamanhos

```typescript
tag: {
  size: {
    extraSmall: {
      height: 16,
      paddingHorizontal: 6,
      paddingVertical: 2,
      gap: 4,
      iconSize: 12,
      fontSize: tokens.fontSize.xs,      // 12px
      lineHeight: tokens.lineHeight.xs,  // 12px
    },
    small: {
      height: 20,
      paddingHorizontal: 8,
      paddingVertical: 4,
      gap: 4,
      iconSize: 12,
      fontSize: tokens.fontSize.xs,      // 12px
      lineHeight: tokens.lineHeight.xs,  // 12px
    },
    medium: {
      height: 24,
      paddingHorizontal: 10,
      paddingVertical: 4,
      gap: 6,
      iconSize: 16,
      fontSize: tokens.fontSize.sm,      // 14px
      lineHeight: tokens.lineHeight.sm,  // 16px
    },
    large: {
      height: 28,
      paddingHorizontal: 12,
      paddingVertical: 6,
      gap: 6,
      iconSize: 20,
      fontSize: tokens.fontSize.md,      // 16px
      lineHeight: tokens.lineHeight.md,  // 20px
    },
    extraLarge: {
      height: 32,
      paddingHorizontal: 16,
      paddingVertical: 8,
      gap: 8,
      iconSize: 24,
      fontSize: tokens.fontSize.lg,      // 20px
      lineHeight: tokens.lineHeight.lg,  // 24px
    },
  },
  radius: {
    rounded: 8,      // Border radius padrão
    pill: 9999,      // Totalmente arredondado
  },
}
```

### Tipografia

```typescript
tag: {
  fontFamily: tokens.fontFamily.body,  // 'RobotoFlex'
  fontWeight: tokens.fontWeight.semibold,  // 600
  // Variações de font settings do RobotoFlex
  fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100",
}
```

---

## 📐 Props Esperadas

### Interface TypeScript

```typescript
export type TagHierarchy = 'solid' | 'weak'
export type TagColor = 'success' | 'cold' | 'warning' | 'danger' | 'primary' | 'secondary' | 'rewards'
export type TagRadius = 'rounded' | 'pill'
export type TagSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'

export type TagProps = StackProps & {
  /**
   * Hierarquia visual do tag
   * @default 'solid'
   */
  hierarchy?: TagHierarchy
  
  /**
   * Esquema de cor do tag
   * @default 'primary'
   */
  color?: TagColor
  
  /**
   * Formato do border radius
   * @default 'rounded'
   */
  radius?: TagRadius
  
  /**
   * Tamanho do tag
   * @default 'medium'
   */
  size?: TagSize
  
  /**
   * Se deve exibir o ícone
   * @default true
   */
  iconShow?: boolean
  
  /**
   * Ícone customizado (componente)
   * Se não fornecido, usa ícone padrão baseado na cor
   */
  icon?: React.ReactNode
  
  /**
   * Texto do label
   * @required
   */
  children: string
}
```

---

## 🎯 Casos de Uso e Exemplos

### Por Contexto de Aplicação

#### 1. Status de Pedido
```tsx
// Pedido confirmado
<Tag hierarchy="solid" color="success" size="medium">
  Confirmado
</Tag>

// Aguardando pagamento
<Tag hierarchy="weak" color="warning" size="medium">
  Aguardando
</Tag>

// Pedido cancelado
<Tag hierarchy="solid" color="danger" size="medium">
  Cancelado
</Tag>
```

#### 2. Categorias de Produto
```tsx
// Promoção
<Tag hierarchy="solid" color="primary" size="small" radius="pill">
  Promoção
</Tag>

// Novo produto
<Tag hierarchy="weak" color="cold" size="small" radius="pill">
  Novo
</Tag>

// Edição limitada
<Tag hierarchy="solid" color="rewards" size="small" radius="pill">
  Limitado
</Tag>
```

#### 3. Pontos e Recompensas
```tsx
// Pontos ganhos
<Tag hierarchy="solid" color="rewards" size="large">
  +50 pontos
</Tag>

// Nível do usuário
<Tag hierarchy="weak" color="rewards" size="medium" radius="pill">
  Gold
</Tag>
```

#### 4. Temperatura de Bebida
```tsx
// Gelada
<Tag hierarchy="solid" color="cold" size="extraSmall" iconShow={false}>
  Gelada
</Tag>

// Temperatura ambiente
<Tag hierarchy="weak" color="secondary" size="extraSmall" iconShow={false}>
  Ambiente
</Tag>
```

#### 5. Tabelas e Listas
```tsx
// Status em lista compacta
<Tag hierarchy="weak" color="success" size="extraSmall" radius="pill">
  Ativo
</Tag>

<Tag hierarchy="weak" color="danger" size="extraSmall" radius="pill">
  Inativo
</Tag>
```

### Por Tamanho

#### ExtraSmall - Tabelas densas
```tsx
<Tag size="extraSmall" color="success">Ativo</Tag>
<Tag size="extraSmall" color="danger">Bloqueado</Tag>
```

#### Small - Cards e listas
```tsx
<Tag size="small" color="primary" radius="pill">Destaque</Tag>
<Tag size="small" color="secondary">Normal</Tag>
```

#### Medium - Uso geral (padrão)
```tsx
<Tag size="medium" color="success">Entregue</Tag>
<Tag size="medium" color="warning">Em trânsito</Tag>
```

#### Large - Headers e destaque
```tsx
<Tag size="large" color="rewards">VIP</Tag>
<Tag size="large" color="primary">Premium</Tag>
```

#### ExtraLarge - Hero sections
```tsx
<Tag size="extraLarge" color="success">Promoção Ativa</Tag>
```

---

## 🔧 Notas de Implementação

### 1. Ícones por Cor

Ícones sugeridos para cada cor (quando `iconShow={true}` e `icon` não fornecido):

| Color | Ícone Sugerido | Nome do Componente |
|-------|----------------|-------------------|
| success | ✅ Check | `IconCheckCircle` |
| cold | ❄️ Snowflake | `IconSnowflake` |
| warning | ⚠️ Alert | `IconAlertTriangle` |
| danger | ❌ X | `IconXCircle` |
| primary | ⭐ Star | `IconStar` |
| secondary | 🔘 Dot | `IconDot` ou `IconCircle` |
| rewards | 🏆 Trophy | `IconTrophy` ou `IconStar` |

**Nota:** Se não houver ícone específico no design system, pode-se omitir o ícone padrão e apenas usar quando `icon` prop for fornecida explicitamente.

### 2. Layout do Componente

```
┌─────────────────────┐
│ [Icon] Label        │  ← XStack com gap
└─────────────────────┘
  └─┬─┘ └──┬──┘
    │     └─── Text com nowrap
    └───────── Icon opcional (12-24px)

Padding: horizontal variável por size
Gap entre icon e text: 4-8px por size
```

### 3. Comportamento de Texto

- **Text Overflow:** `ellipsis` se ultrapassar largura máxima
- **White Space:** `nowrap` - não quebra linha
- **Max Width:** Opcional, pode ser definida via props
- **Alignment:** `center` vertical e horizontal

### 4. Estados Interativos

**IMPORTANTE:** Tags são geralmente **não-interativos** (não têm hover/focus/pressed states)

Se precisar de interatividade:
- Envolver em `Pressable` ou `Button`
- Adicionar `onPress` prop
- Implementar estados visuais de feedback

### 5. Acessibilidade

```tsx
<Tag
  accessibilityRole="text"
  accessibilityLabel={`Status: ${children}`}
  accessibilityLiveRegion="polite" // Se status mudar dinamicamente
>
  {children}
</Tag>
```

### 6. Responsividade

Tags devem manter tamanhos fixos em diferentes breakpoints. Se precisar de tamanhos diferentes:

```tsx
// Mobile
<Tag size="small" color="success">Entregue</Tag>

// Desktop
<Tag size="medium" color="success">Entregue</Tag>
```

---

## ✅ Checklist de Implementação

### Fase 1: Tokens
- [ ] Adicionar tokens de cores solid para todas as 7 cores
- [ ] Adicionar tokens de cores weak para todas as 7 cores
- [ ] Adicionar tokens de tamanhos (5 tamanhos)
- [ ] Adicionar tokens de radius (rounded, pill)
- [ ] Adicionar tokens de tipografia (font family, weight, sizes)

### Fase 2: Componente Base
- [ ] Criar componente `Tag.tsx`
- [ ] Implementar styled component com Tamagui
- [ ] Definir variants para `hierarchy`, `color`, `radius`, `size`
- [ ] Implementar lógica de exibição do ícone
- [ ] Implementar text truncation

### Fase 3: Ícones
- [ ] Verificar ícones disponíveis em `components/icons/`
- [ ] Mapear ícones para cada cor
- [ ] Implementar fallback se ícone não existir
- [ ] Permitir ícone customizado via prop

### Fase 4: Stories
- [ ] Story interativa padrão
- [ ] Stories por hierarchy (Solid, Weak)
- [ ] Stories por color (7 cores)
- [ ] Stories por size (5 tamanhos)
- [ ] Stories por radius (Rounded, Pill)
- [ ] Story com/sem ícone
- [ ] Story com ícone customizado
- [ ] Stories de casos de uso (Status, Categorias, etc)
- [ ] Matriz completa de variantes

### Fase 5: Documentação
- [ ] README.md completo (800-1000 linhas)
- [ ] QUICK_START.md conciso (100-200 linhas)
- [ ] Exemplos de uso por contexto
- [ ] Guia de acessibilidade
- [ ] Notas de performance

### Fase 6: Exports
- [ ] Criar `index.ts` com exports
- [ ] Exportar componente Tag
- [ ] Exportar todos os tipos (TagProps, TagHierarchy, TagColor, etc)

---

## 📊 Métricas de Sucesso

- ✅ **140 variantes** funcionando corretamente
- ✅ **7 cores** implementadas (Success, Cold, Warning, Danger, Primary, Secondary, Rewards)
- ✅ **2 hierarquias** (Solid, Weak)
- ✅ **5 tamanhos** (ExtraSmall, Small, Medium, Large, ExtraLarge)
- ✅ **2 formatos de radius** (Rounded, Pill)
- ✅ **Ícones opcionais** funcionando
- ✅ **0 valores hardcoded** (100% tokens)
- ✅ **Text truncation** funcionando
- ✅ **10+ stories** no Storybook
- ✅ **README completo** (800-1000 linhas)
- ✅ **QUICK_START** (100-200 linhas)
- ✅ **0 erros de lint**
- ✅ **Acessibilidade completa**

---

## 🎨 Comparação Visual

### Hierarchy: Solid vs Weak

| Cor | Solid | Weak |
|-----|-------|------|
| Success | Fundo verde vibrante + texto branco | Fundo verde claro + texto verde escuro |
| Cold | Fundo azul vibrante + texto branco | Fundo azul claro + texto azul escuro |
| Warning | Fundo laranja vibrante + texto branco/preto | Fundo laranja claro + texto laranja escuro |
| Danger | Fundo vermelho vibrante + texto branco | Fundo vermelho claro + texto vermelho escuro |
| Primary | Fundo roxo vibrante + texto branco | Fundo roxo claro + texto roxo escuro |
| Secondary | Fundo cinza/preto escuro + texto branco | Fundo cinza claro + texto cinza escuro |
| Rewards | Fundo dourado vibrante + texto branco/preto | Fundo dourado claro + texto dourado escuro |

### Radius: Rounded vs Pill

| Rounded | Pill |
|---------|------|
| Border radius ~8px (cantos levemente arredondados) | Border radius 9999px (totalmente arredondado) |
| Mais formal, tradicional | Mais moderno, suave |
| Ideal para tabelas, listas | Ideal para tags de categoria, filtros |

---

## 🔗 Referências

- **Figma:** [Tag Component](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)
- **Componentes Relacionados:**
  - Button (para tags clicáveis)
  - Badge (para contadores numéricos)
  - Chip (para tags removíveis)
- **Padrões de Design:**
  - Material Design: Chips
  - iOS: Labels/Tags
  - Web: Badge/Tag patterns

---

**Última atualização:** 23/10/2025  
**Versão:** 1.0  
**Autor:** Design System Team - Zé Delivery

