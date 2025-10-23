# Tag - Especificação Técnica (Clean)

**Componente:** Tag  
**Figma Node ID:** 6943:46686  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Z%C3%A9-Delivery---App-Components?node-id=6943-46686&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente

### Total de Variantes Identificadas

**160 variantes** organizadas por:
- **Hierarchy:** Solid, Weak
- **Color:** Success, Cold, Warning, Danger, Primary, Secondary, Rewards (7 cores)
- **Radius:** Rounded, Pill (2 tipos)
- **Size:** ExtraSmall, Small, Medium, Large, ExtraLarge (5 tamanhos)

---

## 🎨 Tokens do Componente

### Cores - Hierarchy: Solid (Brand)

```typescript
token.components.tag.solid = {
  success: {
    bg: tokens.color.semantic.success.base,
    color: tokens.color.text.onDark,
  },
  cold: {
    bg: tokens.color.semantic.cold.base,
    color: tokens.color.text.onDark,
  },
  warning: {
    bg: tokens.color.semantic.warning.base,
    color: tokens.color.text.highlight,
  },
  danger: {
    bg: tokens.color.semantic.danger.base,
    color: tokens.color.text.onDark,
  },
  primary: {
    bg: tokens.color.brand.primary,
    color: tokens.color.text.highlight,
  },
  secondary: {
    bg: tokens.color.brand.secondary,
    color: tokens.color.text.onDark,
  },
  rewards: {
    bg: tokens.color.brand.rewards,
    color: tokens.color.text.onDark,
  },
}
```

### Cores - Hierarchy: Weak (Neutral)

```typescript
token.components.tag.weak = {
  success: {
    bg: tokens.color.semantic.success.light,
    color: tokens.color.semantic.success.dark,
  },
  cold: {
    bg: tokens.color.semantic.cold.light,
    color: tokens.color.text.highlight,
  },
  warning: {
    bg: tokens.color.semantic.warning.light,
    color: tokens.color.semantic.warning.dark,
  },
  danger: {
    bg: tokens.color.semantic.danger.light,
    color: tokens.color.semantic.danger.dark,
  },
  primary: {
    bg: tokens.color.brand.primary.light,
    color: tokens.color.brand.primary.dark,
  },
  secondary: {
    bg: tokens.color.gray200,
    color: tokens.color.gray850,
  },
  rewards: {
    bg: tokens.color.brand.rewards.light,
    color: tokens.color.brand.rewards.dark,
  },
}
```

### Tamanhos - Rounded (Border Radius: 4px)

```typescript
token.components.tag.rounded = {
  extraSmall: {
    height: tokens.size.component.xs,        // 16px
    paddingHorizontal: tokens.space.$1,      // 4px
    paddingVertical: tokens.space.$0_5,      // 2px
    borderRadius: tokens.radius.small,       // 4px
    fontSize: tokens.typography.fontSize.extraSmall,  // 12px
    lineHeight: tokens.typography.lineHeight.close.extraSmall,  // 12px
    iconSize: tokens.size.icon.xs,           // 12px
    gap: tokens.space.$1,                    // 4px
  },
  small: {
    height: tokens.size.component.small,     // 20px
    paddingHorizontal: tokens.space.$1,      // 4px
    paddingVertical: tokens.space.$1,        // 4px
    borderRadius: tokens.radius.small,       // 4px
    fontSize: tokens.typography.fontSize.extraSmall,  // 12px
    lineHeight: tokens.typography.lineHeight.close.extraSmall,  // 12px
    iconSize: tokens.size.icon.xs,           // 12px
    gap: tokens.space.$1,                    // 4px
  },
  medium: {
    height: tokens.size.component.medium,    // 24px
    paddingHorizontal: tokens.space.$2,      // 8px
    paddingVertical: tokens.space.$1,        // 4px
    borderRadius: tokens.radius.small,       // 4px
    fontSize: tokens.typography.fontSize.small,  // 14px
    lineHeight: tokens.typography.lineHeight.tight.small,  // 16px
    iconSize: tokens.size.icon.small,        // 16px
    gap: tokens.space.$1,                    // 4px
  },
  large: {
    height: tokens.size.component.large,     // 28px
    paddingHorizontal: tokens.space.$2,      // 8px
    paddingVertical: tokens.space.$1,        // 4px
    borderRadius: tokens.radius.small,       // 4px
    fontSize: tokens.typography.fontSize.medium,  // 16px
    lineHeight: tokens.typography.lineHeight.close.medium,  // 20px
    iconSize: tokens.size.icon.medium,       // 20px
    gap: tokens.space.$1,                    // 4px
  },
  extraLarge: {
    height: tokens.size.component.xl,        // 32px
    paddingHorizontal: tokens.space.$2,      // 8px
    paddingVertical: tokens.space.$1,        // 4px
    borderRadius: tokens.radius.small,       // 4px
    fontSize: tokens.typography.fontSize.large,  // 20px
    lineHeight: tokens.typography.lineHeight.close.large,  // 24px
    iconSize: tokens.size.icon.large,        // 24px
    gap: tokens.space.$1,                    // 4px
  },
}
```

### Tamanhos - Pill (Border Radius: Full)

```typescript
token.components.tag.pill = {
  // Mesmas propriedades do rounded, exceto borderRadius
  extraSmall: {
    ...token.components.tag.rounded.extraSmall,
    borderRadius: tokens.radius.full,        // 1000px
  },
  small: {
    ...token.components.tag.rounded.small,
    borderRadius: tokens.radius.full,        // 1000px
  },
  medium: {
    ...token.components.tag.rounded.medium,
    borderRadius: tokens.radius.full,        // 1000px
  },
  large: {
    ...token.components.tag.rounded.large,
    borderRadius: tokens.radius.full,        // 1000px
  },
  extraLarge: {
    ...token.components.tag.rounded.extraLarge,
    borderRadius: tokens.radius.full,        // 1000px
  },
}
```

### Tipografia

```typescript
// Todos os tamanhos usam SemiBold (600)
token.components.tag.typography = {
  fontFamily: tokens.typography.fontFamily.main,  // Roboto Flex
  fontWeight: tokens.typography.fontWeight.main.semibold.normal,  // 600
}
```

---

## 📝 Observações de Implementação

1. **Hierarquia Solid vs Weak:**
   - Solid = Fundo colorido, texto branco/preto
   - Weak = Fundo claro (tint), texto da cor base

2. **Radius:**
   - Rounded = 4px (cantos arredondados sutis)
   - Pill = Full (totalmente arredondado)

3. **Ícones (Opcional):**
   - Cada tamanho tem um iconSize específico
   - Gap de 4px entre ícone e texto

4. **Tipografia:**
   - Sempre SemiBold (600)
   - Font: Roboto Flex
   - Line-height varia por tamanho

5. **Color System:**
   - 7 cores semânticas: Success, Cold, Warning, Danger, Primary, Secondary, Rewards
   - Cada cor tem versão Solid e Weak

---

## 🔗 Tokens Necessários

### Novos Tokens de Cor (Rewards)
```typescript
tokens.color.brand.rewards        // Purple base
tokens.color.brand.rewards.light  // Purple light (weak)
tokens.color.brand.rewards.dark   // Purple dark (weak text)
```

### Tokens Existentes Utilizados
```typescript
// Cores Semânticas
tokens.color.semantic.success.base
tokens.color.semantic.success.light
tokens.color.semantic.success.dark
tokens.color.semantic.cold.base
tokens.color.semantic.cold.light
tokens.color.semantic.warning.base
tokens.color.semantic.warning.light
tokens.color.semantic.warning.dark
tokens.color.semantic.danger.base
tokens.color.semantic.danger.light
tokens.color.semantic.danger.dark

// Cores Brand
tokens.color.brand.primary
tokens.color.brand.primary.light
tokens.color.brand.primary.dark
tokens.color.brand.secondary

// Cores de Texto
tokens.color.text.onDark
tokens.color.text.highlight

// Espaçamentos
tokens.space.$0_5   // 2px
tokens.space.$1     // 4px
tokens.space.$2     // 8px

// Radius
tokens.radius.small // 4px
tokens.radius.full  // 1000px

// Ícones
tokens.size.icon.xs      // 12px
tokens.size.icon.small   // 16px
tokens.size.icon.medium  // 20px
tokens.size.icon.large   // 24px

// Componentes
tokens.size.component.xs      // 16px
tokens.size.component.small   // 20px
tokens.size.component.medium  // 24px
tokens.size.component.large   // 28px
tokens.size.component.xl      // 32px
```

---

**Próximo passo:** Analisar `tokens.ts` e adicionar tokens necessários.

