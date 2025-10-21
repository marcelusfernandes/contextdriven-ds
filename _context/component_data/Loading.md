# Loading - Especificação Técnica

**Componente:** Loading  
**Figma Node ID:** 508-222  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=508-222  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 508:222
- **Nome:** Loading 🟢
- **Posição:** x=-1419, y=-340
- **Dimensões:** 184 × 104

### Variantes Identificadas

O componente possui 6 variantes organizadas por **Brand** e **Animation**:

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 508:78 | Brand=Default, Animation=First | (24, 24) | 48 × 8 |
| 1155:2665 | Brand=ZeCompensa, Animation=First | (112, 24) | 48 × 8 |
| 508:333 | Brand=Default, Animation=Second | (24, 48) | 48 × 8 |
| 1155:2669 | Brand=ZeCompensa, Animation=Second | (112, 48) | 48 × 8 |
| 508:341 | Brand=Default, Animation=Third | (24, 72) | 48 × 8 |
| 1155:2673 | Brand=ZeCompensa, Animation=Third | (112, 72) | 48 × 8 |

### Estrutura de Variantes

**Brands (2):**
- `Default` - Brand padrão Zé Delivery
- `ZeCompensa` - Brand do programa de recompensas

**Animation States (3):**
- `First` - Primeiro frame da animação
- `Second` - Segundo frame da animação
- `Third` - Terceiro frame da animação

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (Sizes)

```json
{
  "token.components.loading.sizes.border.radii.medium.$value": "1000",
  "token.components.loading.sizes.container.medium.$value": "8",
  "token.components.loading.sizes.gap.medium.$value": "12"
}
```

**Interpretação:**
- **border.radii.medium:** `1000` - Border radius muito grande para criar círculos perfeitos
- **container.medium:** `8` - Tamanho (largura/altura) de cada dot
- **gap.medium:** `12` - Espaçamento entre os dots

### Cores (Colors)

#### Brand Default (Zé Delivery)

```json
{
  "token.components.loading.styles.brand.bg.color.active.$value": "#333333cc",
  "token.components.loading.styles.brand.bg.color.inactive.$value": "#33333333"
}
```

**Cores extraídas:**
- **Active:** `#333333cc` - Cinza escuro com opacidade 80% (cc = 204/255)
- **Inactive:** `#33333333` - Cinza escuro com opacidade 20% (33 = 51/255)

#### Brand ZeCompensa (Rewards)

```json
{
  "token.components.loading.styles.rewards.bg.color.active.$value": "#6e3ce4",
  "token.components.loading.styles.rewards.bg.color.inactive.$value": "#f1ecfc"
}
```

**Cores extraídas:**
- **Active:** `#6e3ce4` - Roxo vibrante (cor do ZeCompensa)
- **Inactive:** `#f1ecfc` - Roxo claro/lavanda

### Tokens Auxiliares

```json
{
  "Spacing/None": "0",
  "Border radius/12": "12",
  "Strokes/1": "1"
}
```

---

## 📐 Dimensões Extraídas das Variantes

### Dimensões do Componente
- **Largura total:** 48px (3 dots de 8px + 2 gaps de 12px cada = 8+12+8+12+8 = 48px)
- **Altura:** 8px (altura de cada dot)

### Estrutura Visual
```
┌─────┬────┬─────┬────┬─────┐
│ Dot │Gap │ Dot │Gap │ Dot │
│ 8px │12px│ 8px │12px│ 8px │
└─────┴────┴─────┴────┴─────┘
```

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

**Hexadecimais:**
- `#333333cc` - Cinza escuro com 80% opacidade (brand default active)
- `#33333333` - Cinza escuro com 20% opacidade (brand default inactive)
- `#6e3ce4` - Roxo ZeCompensa (rewards active)
- `#f1ecfc` - Roxo claro ZeCompensa (rewards inactive)

**Nota sobre opacidades:**
- As cores com opacidade (`cc` e `33`) precisam ser tratadas de forma especial
- No Tamagui/React Native, opacidade pode ser aplicada via:
  1. Cor RGBA: `rgba(51, 51, 51, 0.8)` e `rgba(51, 51, 51, 0.2)`
  2. Prop `opacity` separada
  3. Cor hex com alpha channel (alguns contextos)

### Estrutura Adicionada em tokens.ts

```typescript
export const tokens = {
  // ... tokens globais existentes
  
  // Adicionar cores globais novas (se ainda não existem)
  color: {
    // ... cores existentes
    zeCompassaPurple: '#6e3ce4',    // 🆕 Loading - ZeCompensa brand
    zeCompassaPurpleLight: '#f1ecfc', // 🆕 Loading - ZeCompensa inactive
  },
  
  // Adicionar espaçamento novo (se não existe)
  space: {
    // ... espaçamentos existentes
    12: 12, // já existe (verificar)
  },
  
  // Adicionar seção do componente Loading
  loading: {
    size: {
      dot: 8,           // Tamanho de cada dot
      gap: 12,          // Espaçamento entre dots
      borderRadius: 1000, // Border radius para círculo perfeito
    },
    brand: {
      default: {
        active: {
          bg: 'rgba(51, 51, 51, 0.8)',   // #333333 com 80% opacidade
          bgHex: '#333333cc',
        },
        inactive: {
          bg: 'rgba(51, 51, 51, 0.2)',   // #333333 com 20% opacidade
          bgHex: '#33333333',
        },
      },
      rewards: {
        active: {
          bg: '#6e3ce4',    // Roxo ZeCompensa
        },
        inactive: {
          bg: '#f1ecfc',    // Roxo claro ZeCompensa
        },
      },
    },
  },
}
```

---

## 🔗 Uso no Button

O componente Loading é utilizado **dentro do componente Button** quando o estado `loading={true}`:

```tsx
<Button variant="primary" loading={true}>
  Salvando... {/* Texto não aparece, Loading substitui */}
</Button>
```

Quando `loading={true}`:
- O Loading component **substitui** o conteúdo do botão (texto + ícones)
- Os ícones `leadingIcon` e `trailingIcon` não são renderizados
- O botão mantém suas dimensões e estilos da variante
- Cursor muda para `wait` e opacidade para 0.7

---

## 🎯 Comportamento do Componente

### Animação

O componente Loading possui 3 frames de animação que devem alternar ciclicamente:

**Frame 1 (First):**
- Dot 1: Active
- Dot 2: Inactive
- Dot 3: Inactive

**Frame 2 (Second):**
- Dot 1: Inactive
- Dot 2: Active
- Dot 3: Inactive

**Frame 3 (Third):**
- Dot 1: Inactive
- Dot 2: Inactive
- Dot 3: Active

A animação cria um efeito de "onda" da esquerda para a direita.

### Timing da Animação (Sugerido - Não extraído do Figma)

⚠️ **Nota:** O Figma não especifica timing de animação. Valores comuns para este tipo de loading:
- Duração total do ciclo: 1.2s - 1.5s
- Duração de cada frame: 400ms - 500ms
- Easing: linear ou ease-in-out

---

## 📋 Props Interface (Sugerida)

```typescript
interface LoadingProps {
  /** Brand do loading (default ou rewards) */
  brand?: 'default' | 'rewards'
  
  /** Tamanho do componente (para extensões futuras) */
  size?: 'medium' // Por enquanto apenas medium
  
  /** Velocidade da animação em ms (opcional) */
  animationSpeed?: number
  
  /** Acessibilidade */
  accessibilityLabel?: string
}
```

---

## 🔍 Observações Técnicas

### Implementação da Animação

O componente precisa:
1. **3 dots renderizados** horizontalmente
2. **State/ref** para controlar qual dot está ativo
3. **useEffect/setTimeout** ou biblioteca de animação para ciclar entre os estados
4. **Interpolação suave** (opcional) para transição entre estados

### Opacidade vs Cores Separadas

O Figma usa a mesma cor base `#333333` com diferentes opacidades:
- Active: 80% (cc)
- Inactive: 20% (33)

Na implementação, podemos:
- **Opção A:** Usar `opacity` prop e mesma cor
- **Opção B:** Usar cores rgba diferentes
- **Opção C:** Usar hex com alpha channel (verificar suporte)

### Brand Rewards vs Default

- **Default:** Usa tons de cinza (#333333)
- **Rewards:** Usa tons de roxo (#6e3ce4 e #f1ecfc)
- A variante Rewards tem cores completamente opacas (sem transparência)

---

## ✅ Checklist de Implementação

- [ ] Adicionar cores novas em `tokens.ts` (global)
- [ ] Adicionar seção `loading` em `tokens.ts`
- [ ] Criar componente `/packages/core/src/components/Loading/Loading.tsx`
- [ ] Implementar lógica de animação (ciclo de 3 frames)
- [ ] Implementar variants `brand` (default/rewards)
- [ ] Criar stories no Storybook
- [ ] Testar animação em mobile e web
- [ ] Verificar acessibilidade (screen readers devem anunciar estado de carregamento)

---

**Documentação completa extraída diretamente do Figma via MCP.**  
**Nenhum dado foi inventado - apenas observações técnicas de implementação foram adicionadas.**

