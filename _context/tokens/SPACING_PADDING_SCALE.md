# Escala de Spacing & Padding - Foundation

**Nomenclatura Semântica Agnóstica de Plataforma**

---

## 📊 Tabela de Referência Completa

| Nome Semântico | Valor | Referência Primitivo | Uso Principal |
|----------------|-------|---------------------|---------------|
| **none** | 0px | - | Sem espaçamento |
| **quarck** | 1px | `primitives.dimension.1` | Hairline, separadores mínimos |
| **nano** | 2px | `primitives.dimension.2` | Espaçamento microscópico |
| **xxxs** | 4px | `primitives.dimension.4` | Extra extra extra small |
| **xxs** | 8px | `primitives.dimension.8` | Extra extra small |
| **xs** | 12px | `primitives.dimension.12` | Extra small |
| **sm** | 16px | `primitives.dimension.16` | Small ⭐ |
| **md** | 20px | `primitives.dimension.20` | Medium ⭐ |
| **lg** | 24px | `primitives.dimension.24` | Large ⭐ |
| **xl** | 28px | `primitives.dimension.28` | Extra large |
| **xxl** | 44px | `primitives.dimension.44` | Extra extra large |
| **xxxl** | 72px | `primitives.dimension.72` | Extra extra extra large |
| **huge** | 116px | `primitives.dimension.116` | Huge - máximo |

---

## 🎯 Uso por Contexto

### Spacing (Margin/Gap)
```typescript
// Tokens disponíveis
spacing-none      // 0px
spacing-quarck    // 1px
spacing-nano      // 2px
spacing-xxxs      // 4px
spacing-xxs       // 8px
spacing-xs        // 12px
spacing-sm        // 16px
spacing-md        // 20px
spacing-lg        // 24px
spacing-xl        // 28px
spacing-xxl       // 44px
spacing-xxxl      // 72px
spacing-huge      // 116px
```

### Padding (Internal)
```typescript
// Tokens disponíveis
padding-none      // 0px
padding-quarck    // 1px
padding-nano      // 2px
padding-xxxs      // 4px
padding-xxs       // 8px
padding-xs        // 12px
padding-sm        // 16px
padding-md        // 20px
padding-lg        // 24px
padding-xl        // 28px
padding-xxl       // 44px
padding-xxxl      // 72px
padding-huge      // 116px
```

---

## 📐 Categorias de Tamanho

### Minimal (0-2px)
**Tokens:** `none`, `quarck`, `nano`

**Quando usar:**
- Elementos sem espaçamento
- Hairlines e separadores finos
- Ajustes de 1-2px para alinhamento visual

---

### Compact (4-12px)
**Tokens:** `xxxs`, `xxs`, `xs`

**Quando usar:**
- Espaçamentos tight entre elementos relacionados
- Padding de badges, chips, pills
- Gaps em layouts compactos
- Spacing entre ícone e texto

---

### Standard (16-24px)
**Tokens:** `sm`, `md`, `lg` ⭐

**Quando usar:**
- Padding de botões (sm/md)
- Padding de inputs (sm/md)
- Padding de cards (lg)
- Spacing entre seções relacionadas (md/lg)
- **Uso mais frequente no DS**

---

### Comfortable (28-44px)
**Tokens:** `xl`, `xxl`

**Quando usar:**
- Padding de containers espaçosos (xl)
- Spacing entre groups de conteúdo (xl)
- Separação de seções principais (xxl)

---

### Spacious (72-116px)
**Tokens:** `xxxl`, `huge`

**Quando usar:**
- Padding de hero sections (xxxl)
- Spacing entre major page sections (xxxl)
- Padding vertical de páginas (huge)
- Espaçamentos dramáticos (huge)

---

## 💡 Exemplos de Uso

### Button Component
```typescript
// Small button
{
  paddingVertical: tokens.padding.xs,      // 12px
  paddingHorizontal: tokens.padding.sm,    // 16px
  gap: tokens.spacing.xxs                  // 8px (icon + text)
}

// Medium button (default)
{
  paddingVertical: tokens.padding.sm,      // 16px
  paddingHorizontal: tokens.padding.md,    // 20px
  gap: tokens.spacing.xxs                  // 8px
}

// Large button
{
  paddingVertical: tokens.padding.md,      // 20px
  paddingHorizontal: tokens.padding.lg,    // 24px
  gap: tokens.spacing.xs                   // 12px
}
```

### Card Component
```typescript
{
  padding: tokens.padding.lg,           // 24px internal padding
  gap: tokens.spacing.md,               // 20px between sections
  marginBottom: tokens.spacing.lg       // 24px separation from next card
}
```

### Page Layout
```typescript
{
  paddingHorizontal: tokens.padding.md,  // 20px lateral
  paddingVertical: tokens.padding.xxl,   // 44px top/bottom
  gap: tokens.spacing.xl                 // 28px between major sections
}
```

### Hero Section
```typescript
{
  paddingTop: tokens.padding.huge,       // 116px dramatic top spacing
  paddingBottom: tokens.padding.xxxl,    // 72px bottom spacing
  paddingHorizontal: tokens.padding.xl   // 28px lateral
}
```

### Input Component
```typescript
{
  paddingVertical: tokens.padding.xs,    // 12px vertical
  paddingHorizontal: tokens.padding.sm,  // 16px horizontal
  gap: tokens.spacing.xxs                // 8px between icon/text
}
```

---

## 🔄 Relação com Primitivos

```json
{
  "foundation": {
    "spacing": {
      "sm": {
        "$value": "{primitives.dimension.16}",
        "type": "dimension"
      }
    },
    "padding": {
      "sm": {
        "$value": "{primitives.dimension.16}",
        "type": "dimension"
      }
    }
  }
}
```

**Estrutura:**
- **Primitivos**: Valores brutos (0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 44, 72, 96, 116)
- **Foundation**: Nomes semânticos (none, quarck, nano, xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl, huge)

---

## 📊 Resumo

| Categoria | Tokens | Uso |
|-----------|--------|-----|
| **Primitives** | 28 valores | Valores brutos de dimensão |
| **Foundation Spacing** | 13 tokens semânticos | Margin, gap (externo) |
| **Foundation Padding** | 13 tokens semânticos | Padding interno |
| **Total Foundation** | 26 tokens | Spacing + Padding |

---

**Vantagens da Nomenclatura Semântica:**
- ✅ Agnóstico de plataforma
- ✅ Fácil de entender (small, medium, large)
- ✅ Flexível para mudanças (alterar valor sem mudar nome)
- ✅ Alinhado com padrões de Design Tokens (W3C)
- ✅ Escalável (fácil adicionar intermediate sizes)

---

**Data:** 2025-10-22  
**Versão:** 1.0  
**Status:** ✅ Implementado

