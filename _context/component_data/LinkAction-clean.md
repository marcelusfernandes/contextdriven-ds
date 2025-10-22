# LinkAction - Especificação Técnica (Clean)

**Componente:** Link Action (Link com ícone de ação/navegação)  
**Figma Node ID:** 4638:2682  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=4638-2682&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente

### Variantes Identificadas

Total de **96 variantes** estruturadas por:
- **3 Tamanhos:** Small, Medium, Large
- **4 Tipos de Ação:** Go To (→), Down (↓), Up (↑), External (↗)
- **4 Estados:** Normal, Hover, Pressed/Active, Focus
- **2 Estilos de Padding:** Button (com background), Link (sem background)

---

## 🎨 Tokens do Componente

### 1. Tipografia

#### Large
```typescript
// Padding=Button
token.text.highlight1  // Font: Roboto Flex, SemiBold 600, 20px, LH: 28

// Padding=Link
token.text.body        // Font: Roboto Flex, Regular 400, 20px, LH: 20
```

#### Medium
```typescript
// Padding=Button
token.text.highlight2  // Font: Roboto Flex, SemiBold 600, 16px, LH: 24

// Padding=Link
token.text.body        // Font: Roboto Flex, Regular 400, 16px, LH: 16
```

#### Small
```typescript
// Padding=Button
token.text.highlight3  // Font: Roboto Flex, SemiBold 600, 14px, LH: 20

// Padding=Link
token.text.body        // Font: Roboto Flex, Regular 400, 14px, LH: 16
```

### 2. Tamanhos e Espaçamentos

#### Large (52px altura - Button / 28px altura - Link)
```typescript
token.components.linkAction.sizes.large = {
  // Button padding
  button: {
    paddingHorizontal: tokens.space.$2,     // 8px
    paddingVertical: tokens.space.$3,       // 12px
    borderRadius: tokens.radius.large,      // 12px
  },
  // Link padding
  link: {
    padding: 0,
  },
  // Ícone
  iconSize: tokens.size.icon.large,         // 28px
  gap: tokens.space.$1,                     // 4px
  minWidth: tokens.size.touchTarget.min,    // 44px
}
```

#### Medium (48px altura - Button / 24px altura - Link)
```typescript
token.components.linkAction.sizes.medium = {
  // Button padding
  button: {
    paddingHorizontal: tokens.space.$2,     // 8px
    paddingVertical: tokens.space.$3,       // 12px
    borderRadius: tokens.radius.large,      // 12px
  },
  // Link padding
  link: {
    padding: 0,
  },
  // Ícone
  iconSize: tokens.size.icon.medium,        // 24px
  gap: tokens.space.$1,                     // 4px
  minWidth: tokens.size.content.minWidth,   // 72px
}
```

#### Small (36px altura - Button / 20px altura - Link)
```typescript
token.components.linkAction.sizes.small = {
  // Button padding
  button: {
    paddingHorizontal: tokens.space.$1,     // 4px
    paddingVertical: tokens.space.$2,       // 8px
    borderRadius: tokens.radius.medium,     // 8px
  },
  // Link padding
  link: {
    padding: 0,
  },
  // Ícone
  iconSize: tokens.size.icon.small,         // 20px
  gap: tokens.space.$1,                     // 4px
  minWidth: tokens.size.content.minWidth,   // 72px
}
```

### 3. Cores - Padding=Button

```typescript
token.components.linkAction.styles.button = {
  normal: {
    labelColor: tokens.color.text.title,           // gray800
    iconColor: tokens.color.text.title,            // gray800
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: { left: 8, top: 0, right: 0, bottom: 0 },
  },
  hover: {
    labelColor: tokens.color.text.title,           // gray800
    iconColor: tokens.color.text.titleAlpha50,     // gray800 50%
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: { left: 8, top: 0, right: 0, bottom: 0 },
  },
  pressed: {
    labelColor: tokens.color.text.highlight,       // black
    iconColor: tokens.color.text.highlight,        // black
    bg: tokens.color.gray150,                      // pressed bg
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: { left: 4, top: 0, right: 4, bottom: 0 },
  },
  focus: {
    labelColor: tokens.color.text.highlight,       // black
    iconColor: tokens.color.text.highlight,        // black
    bg: tokens.color.transparent,
    borderColor: tokens.color.gray350,             // focus border
    borderWidth: 1,
    contentPadding: { left: 8, top: 0, right: 0, bottom: 0 },
  },
}
```

### 4. Cores - Padding=Link

```typescript
token.components.linkAction.styles.link = {
  normal: {
    labelColor: tokens.color.text.title,           // gray800
    iconColor: tokens.color.text.title,            // gray800
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: 0,
  },
  hover: {
    labelColor: tokens.color.text.titleAlpha50,    // gray800 50%
    iconColor: tokens.color.text.titleAlpha50,     // gray800 50%
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: 0,
  },
  pressed: {
    labelColor: tokens.color.text.title,           // gray800
    iconColor: tokens.color.text.title,            // gray800
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: { left: 4, top: 0, right: 4, bottom: 0 },
  },
  focus: {
    labelColor: tokens.color.text.highlight,       // black
    iconColor: tokens.color.text.highlight,        // black
    bg: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
    contentPadding: 0,
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

## 🔗 Tokens Necessários

### Novos Tokens de Cor
```typescript
tokens.color.gray150        // Background pressed do LinkAction
tokens.color.gray350        // Border focus do LinkAction
```

### Tokens Existentes Utilizados
```typescript
tokens.color.text.title
tokens.color.text.titleAlpha50
tokens.color.text.highlight
tokens.color.transparent
tokens.space.$1             // 4px
tokens.space.$2             // 8px
tokens.space.$3             // 12px
tokens.radius.medium        // 8px
tokens.radius.large         // 12px
tokens.size.icon.small      // 20px
tokens.size.icon.medium     // 24px
tokens.size.icon.large      // 28px
tokens.size.touchTarget.min // 44px
```

---

**Status:** ⏳ Documentação completa - Pronto para implementação  
**Próximo Passo:** Atualizar `tokens.ts` e criar componente

