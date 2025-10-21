# Tag - Especificação Técnica

**Componente:** Tag  
**Figma Node ID:** 6943:46686  
**Figma URL:** [Abrir no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Z%C3%A9-Delivery---App-Components?node-id=6943-46686&t=WAePLGMYEe2sFS7R-11)  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 6943:46686
- **Nome:** Tag [New] 🔵
- **Posição:** (-17474, 2557)
- **Dimensões:** 2177 × 644

### Total de Variantes Identificadas

**160 variantes** organizadas por:
- **Hierarchy:** Solid, Weak
- **Color:** Success, Cold, Warning, Danger, Primary, Secondary, Rewards (7 cores)
- **Radius:** Rounded, Pill (2 tipos)
- **Size:** ExtraSmall, Small, Medium, Large, ExtraLarge (5 tamanhos)

### Dimensões por Tamanho

| Tamanho | Dimensões (Rounded) | Dimensões (Pill) |
|---------|---------------------|------------------|
| **ExtraSmall** | 55 × 16 | 55 × 16 |
| **Small** | 55 × 20 | 55 × 20 |
| **Medium** | 72 × 24 | 72 × 24 |
| **Large** | 81 × 28 | 81 × 28 |
| **ExtraLarge** | 94 × 32 | 94 × 32 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Cores - Hierarchy: Solid (Brand)

| Color | Background | Text On |
|-------|-----------|---------|
| **Success** | `#2c855f` | `#ffffff` |
| **Cold** | `#118198` | `#ffffff` |
| **Warning** | `#eb8207` | `#000000` |
| **Danger** | `#e91935` | `#ffffff` |
| **Primary** | `#ffcc00` | `#000000` |
| **Secondary** | `#1f1f22` | `#ffffff` |
| **Third/Rewards** | `#6e3ce4` | `#ffffff` |

### Cores - Hierarchy: Weak (Neutral)

| Color | Background | Text On |
|-------|-----------|---------|
| **Success** | `#e6f7f0` | `#006440` |
| **Cold** | `#e0f7fc` | `#050400` |
| **Warning** | `#fef3e5` | `#b93200` |
| **Danger** | `#fde8eb` | `#b60018` |
| **Primary** | `#fffae5` | `#806600` |
| **Secondary** | `#eaeaea` | `#141417` |
| **Third/Rewards** | `#f1ecfc` | `#3c1598` |

### Tamanhos - Rounded (Border Radius: 4px)

#### ExtraSmall
```json
{
  "icon": 12,
  "gap": 4,
  "paddingLeft": 4,
  "paddingTop": 2,
  "paddingRight": 4,
  "paddingBottom": 2,
  "borderRadius": 4
}
```

#### Small
```json
{
  "icon": 12,
  "gap": 4,
  "paddingLeft": 4,
  "paddingTop": 4,
  "paddingRight": 4,
  "paddingBottom": 4,
  "borderRadius": 4
}
```

#### Medium
```json
{
  "icon": 16,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 4
}
```

#### Large
```json
{
  "icon": 20,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 4
}
```

#### ExtraLarge
```json
{
  "icon": 24,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 4
}
```

### Tamanhos - Pill (Border Radius: 1000px)

#### ExtraSmall
```json
{
  "icon": 12,
  "gap": 4,
  "paddingLeft": 4,
  "paddingTop": 2,
  "paddingRight": 4,
  "paddingBottom": 2,
  "borderRadius": 1000
}
```

#### Small
```json
{
  "icon": 12,
  "gap": 4,
  "paddingLeft": 4,
  "paddingTop": 4,
  "paddingRight": 4,
  "paddingBottom": 4,
  "borderRadius": 1000
}
```

#### Medium
```json
{
  "icon": 16,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 1000
}
```

#### Large
```json
{
  "icon": 20,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 1000
}
```

#### ExtraLarge
```json
{
  "icon": 24,
  "gap": 4,
  "paddingLeft": 8,
  "paddingTop": 4,
  "paddingRight": 8,
  "paddingBottom": 4,
  "borderRadius": 1000
}
```

### Tipografia Extraída

| Context | Font Family | Style | Size | Weight | Line Height |
|---------|------------|-------|------|--------|-------------|
| **ExtraLarge** | Roboto Flex | SemiBold | 20 | 600 | 24 |
| **Large** | Roboto Flex | SemiBold | 16 | 600 | 20 |
| **Medium** | Roboto Flex | SemiBold | 14 | 600 | 16 |
| **Small** | Roboto Flex | SemiBold | 12 | 600 | 12 |
| **ExtraSmall** | Roboto Flex | SemiBold | 12 | 600 | 12 |

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

Todas as cores já existem no sistema, exceto possivelmente:
- `#6e3ce4` - Purple/Third (Rewards)
- `#f1ecfc` - Purple Light (Rewards Weak Background)
- `#3c1598` - Purple Dark (Rewards Weak Text)

### Estrutura a Adicionar em tokens.ts

```typescript
tag: {
  // Hierarchy: Solid
  solid: {
    success: {
      bg: '#2c855f',
      color: '#ffffff',
    },
    cold: {
      bg: '#118198',
      color: '#ffffff',
    },
    warning: {
      bg: '#eb8207',
      color: '#000000',
    },
    danger: {
      bg: '#e91935',
      color: '#ffffff',
    },
    primary: {
      bg: '#ffcc00',
      color: '#000000',
    },
    secondary: {
      bg: '#1f1f22',
      color: '#ffffff',
    },
    rewards: {
      bg: '#6e3ce4',
      color: '#ffffff',
    },
  },
  
  // Hierarchy: Weak
  weak: {
    success: {
      bg: '#e6f7f0',
      color: '#006440',
    },
    cold: {
      bg: '#e0f7fc',
      color: '#050400',
    },
    warning: {
      bg: '#fef3e5',
      color: '#b93200',
    },
    danger: {
      bg: '#fde8eb',
      color: '#b60018',
    },
    primary: {
      bg: '#fffae5',
      color: '#806600',
    },
    secondary: {
      bg: '#eaeaea',
      color: '#141417',
    },
    rewards: {
      bg: '#f1ecfc',
      color: '#3c1598',
    },
  },
  
  // Sizes - Rounded
  rounded: {
    extraSmall: {
      height: 16,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 4,
      fontSize: 12,
      lineHeight: 12,
      iconSize: 12,
      gap: 4,
    },
    small: {
      height: 20,
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 4,
      fontSize: 12,
      lineHeight: 12,
      iconSize: 12,
      gap: 4,
    },
    medium: {
      height: 24,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      fontSize: 14,
      lineHeight: 16,
      iconSize: 16,
      gap: 4,
    },
    large: {
      height: 28,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      fontSize: 16,
      lineHeight: 20,
      iconSize: 20,
      gap: 4,
    },
    extraLarge: {
      height: 32,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      fontSize: 20,
      lineHeight: 24,
      iconSize: 24,
      gap: 4,
    },
  },
  
  // Sizes - Pill
  pill: {
    extraSmall: {
      height: 16,
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderRadius: 1000,
      fontSize: 12,
      lineHeight: 12,
      iconSize: 12,
      gap: 4,
    },
    small: {
      height: 20,
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 1000,
      fontSize: 12,
      lineHeight: 12,
      iconSize: 12,
      gap: 4,
    },
    medium: {
      height: 24,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 1000,
      fontSize: 14,
      lineHeight: 16,
      iconSize: 16,
      gap: 4,
    },
    large: {
      height: 28,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 1000,
      fontSize: 16,
      lineHeight: 20,
      iconSize: 20,
      gap: 4,
    },
    extraLarge: {
      height: 32,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 1000,
      fontSize: 20,
      lineHeight: 24,
      iconSize: 24,
      gap: 4,
    },
  },
}
```

---

## 📐 Variantes Completas Extraídas

### Matriz de Variantes (160 total)

| Hierarchy | Color | Radius | Size | Node ID |
|-----------|-------|--------|------|---------|
| Solid | Success | Rounded | ExtraSmall | 6943:46682 |
| Solid | Success | Rounded | Small | 6943:46684 |
| Solid | Success | Rounded | Medium | 6943:46681 |
| Solid | Success | Rounded | Large | 6943:46683 |
| Solid | Success | Rounded | ExtraLarge | 6943:46685 |
| Solid | Success | Pill | ExtraSmall | 6948:47113 |
| Solid | Success | Pill | Small | 6948:47071 |
| Solid | Success | Pill | Medium | 6948:47155 |
| Solid | Success | Pill | Large | 6948:47029 |
| Solid | Success | Pill | ExtraLarge | 6948:46987 |
| Weak | Success | Rounded | ExtraSmall | 6943:46870 |
| Weak | Success | Rounded | Small | 6943:46849 |
| Weak | Success | Rounded | Medium | 6943:46891 |
| Weak | Success | Rounded | Large | 6943:46828 |
| Weak | Success | Rounded | ExtraLarge | 6943:46807 |
| Weak | Success | Pill | ExtraSmall | 6948:47116 |
| Weak | Success | Pill | Small | 6948:47074 |
| Weak | Success | Pill | Medium | 6948:47158 |
| Weak | Success | Pill | Large | 6948:47032 |
| Weak | Success | Pill | ExtraLarge | 6948:46990 |

_[... e mais 140 variantes para as outras cores: Cold, Warning, Danger, Primary, Secondary, Rewards]_

---

## 📝 Observações de Implementação

1. **Hierarquia Solid vs Weak:**
   - Solid = Fundo colorido, texto branco/preto
   - Weak = Fundo claro (tint), texto da cor base

2. **Radius:**
   - Rounded = 4px (cantos arredondados sutis)
   - Pill = 1000px (totalmente arredondado)

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

## ✅ Checklist de Implementação

- [ ] Adicionar cores novas em `tokens.ts` (Rewards colors)
- [ ] Adicionar seção `tag` em `tokens.ts`
- [ ] Criar componente `Tag.tsx` com styled do Tamagui
- [ ] Implementar variantes: hierarchy, color, radius, size
- [ ] Criar Storybook stories para todas as variantes
- [ ] Testar em React Native e Web
- [ ] Documentar casos de uso

---

**Próximo passo:** Analisar `tokens.ts` e adicionar tokens necessários.

