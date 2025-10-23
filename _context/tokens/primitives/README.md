# Design Tokens Primitivos - Zé Delivery

> Tokens primitivos extraídos do Figma usando MCP (Model Context Protocol)  
> Todos os valores seguem a especificação W3C Design Tokens Format

[![Figma](https://img.shields.io/badge/Figma-Source-F24E1E?style=flat&logo=figma&logoColor=white)](https://www.figma.com/design/gX0iN6b6iCise7aUc2KJFe/)
[![W3C](https://img.shields.io/badge/W3C-Design%20Tokens-005A9C?style=flat&logo=w3c&logoColor=white)](https://tr.designtokens.org/format/)

---

## 📚 Índice

- [🎨 Colors (incluindo Opacities)](#-colors-incluindo-opacities)
- [📐 Elevation](#-elevation)
- [📝 Typography](#-typography)
- [📏 Dimensions](#-dimensions)
- [🔘 Border Radius](#-border-radius)
- [➖ Border Width](#-border-width)
- [🔄 Como Usar](#-como-usar)
- [📊 Resumo Geral](#-resumo-geral)

---

## 🎨 Colors (incluindo Opacities)

**Arquivo:** [`tokens-colors.json`](./tokens-colors.json)

Paleta completa de cores do Design System, incluindo todas as famílias de cores, suas variações **E** todas as opacidades.

### Conteúdo:
- **75 cores sólidas** organizadas em 8 famílias
- Cada família possui 9-11 variações (100-900)
- **132 variações de opacidade** aplicadas às cores base
- **12 níveis de opacidade:** 4%, 8%, 12%, 16%, 24%, 32%, 40%, 48%, 60%, 72%, 84%, 96%

### Famílias de Cores:

| Família | Variações | Uso Principal |
|---------|-----------|---------------|
| **Yellow** | 100-900 | Cor primária da marca Zé Delivery |
| **Cyan** | 100-900 | Cores frias, informativas |
| **Orange** | 100-900 | Avisos, alertas importantes |
| **Red** | 100-900 | Erros, ações destrutivas |
| **Purple** | 100-900 | Destaques, features especiais |
| **Green** | 100-900 | Sucesso, confirmações |
| **Mist** | 100-900 | Backgrounds sutis, overlays |
| **Grayscale** | White, 100-900, Black | Textos, bordas, fundos neutros |

### Cores com Opacidades Integradas:

**Todas as opacidades agora fazem parte do arquivo `tokens-colors.json` na seção `opacity`:**

| Família | Níveis de Opacidade | Descrição |
|---------|-------|-----------|
| **Green** | 4%-96% (12 níveis) | Baseado em Green/500 |
| **Red** | 4%-96% (12 níveis) | Baseado em Red/500 |
| **Orange** | 4%-96% (12 níveis) | Baseado em Orange/500 |
| **Purple** | 4%-96% (12 níveis) | Baseado em Purple/500 |
| **Yellow** | 4%-96% (12 níveis) | Baseado em Yellow/500 |
| **Cyan** | 4%-96% (12 níveis) | Baseado em Cyan/500 |
| **Mist** | 4%-96% (12 níveis) | Baseado em Mist/500 |
| **Grayscale 500** | 4%-96% (12 níveis) | Baseado em Grayscale/500 |
| **Grayscale 700** | 4%-96% (12 níveis) | Baseado em Grayscale/700 |
| **Black** | 4%-96% (12 níveis) | Black puro com opacidade |
| **White** | 4%-96% (12 níveis) | White puro com opacidade |

**Total:** 132 variações de opacidade (11 famílias × 12 níveis)

### Exemplo de uso:
```json
{
  "colors": {
    "yellow": {
      "500": { "value": "#ffcc00", "type": "color" }
    },
    "opacity": {
      "yellow": {
        "24": { "value": "#ffcc003d", "type": "color", "description": "Yellow 500 with 24% opacity" }
      },
      "black": {
        "16": { "value": "#00000029", "type": "color", "description": "Black with 16% opacity" }
      }
    }
  }
}
```

---

## 📐 Elevation

**Arquivo:** [`tokens-elevation.json`](./tokens-elevation.json)

Sistema de elevação para criar hierarquia visual e profundidade na UI.

### Conteúdo:
- **17 níveis de elevação** (de -8 a 8)
- Mapeamento para `z-index`
- Sugestões de sombras para cada nível

### Níveis:

| Nível | Z-Index | Uso |
|-------|---------|-----|
| **-8** a **-1** | Negativo | Backgrounds, elementos atrás |
| **0** | 1000 | Nível base |
| **1** a **4** | 1010-1040 | Cards, dropdowns |
| **5** a **8** | 1050-1080 | Modais, tooltips, overlays |

### Exemplo de uso:
```json
{
  "2": {
    "value": "1020",
    "type": "number",
    "description": "Level 2 - Cards, panels",
    "shadow": "0 4px 8px rgba(0, 0, 0, 0.1)"
  }
}
```

---

## 📝 Typography

**Arquivo:** [`tokens-typography.json`](./tokens-typography.json)

Sistema tipográfico completo com fontes, tamanhos, alturas de linha e espaçamentos.

### Conteúdo:
- **48 variáveis totais**
- Font families (2)
- Font sizes (16)
- Line heights (10)
- Letter spacings (9)
- Paragraph spacing (1)

### Famílias de Fonte:

| Nome | Valor | Uso |
|------|-------|-----|
| **main** | Roboto Flex | Textos em geral, corpo, labels |
| **display** | Gelada RC3 | Headings, títulos, display |

### Font Sizes:
12, 14, 16, 20, 24, 28, 32, 36, 42, 48, 54, 60, 68, 76, 84, 92 (px)

### Line Heights:
12, 16, 20, 24, 28, 32, 36, 40, 44, 48 (px)

### Letter Spacing:
-4, -3, -2, -1, 0, 1, 2, 3, 4 (valores relativos)

### Exemplo de uso:
```json
{
  "fontFamily": {
    "main": {
      "value": "Roboto Flex",
      "type": "string"
    }
  },
  "fontSize": {
    "16": {
      "value": 16,
      "type": "number"
    }
  }
}
```

---

## 📏 Dimensions

**Arquivo:** [`tokens-dimensions.json`](./tokens-dimensions.json)

Valores de dimensão primitivos baseados em grid de 4px. Servem como base para **spacing** (margin, gap) e **padding** na Foundation.

### Conteúdo:
- **24 tokens** de dimensão
- **Grid System:** 4px
- **Range:** 4px - 96px
- **Incremento:** 4px
- **Tipo:** `dimension` (W3C Design Tokens)

### Escala de Valores:

| Token | Valor | Descrição |
|-------|-------|-----------|
| `4` | 4px | Extra tight dimension |
| `8` | 8px | Tight dimension |
| `12` | 12px | Compact dimension |
| `16` | 16px | Base dimension unit ⭐ |
| `20` | 20px | Medium dimension |
| `24` | 24px | Comfortable dimension |
| `28` | 28px | Relaxed dimension |
| `32` | 32px | Large dimension |
| `36` | 36px | Extra large dimension |
| `40` | 40px | Extra large dimension |
| `44` | 44px | Extra extra large dimension |
| `48` | 48px | Huge dimension |
| `52` | 52px | Very large dimension |
| `56` | 56px | Very large dimension |
| `60` | 60px | Massive dimension |
| `64` | 64px | Massive dimension |
| `68` | 68px | Extra massive dimension |
| `72` | 72px | Extra massive dimension |
| `76` | 76px | Giant dimension |
| `80` | 80px | Giant dimension |
| `84` | 84px | Enormous dimension |
| `88` | 88px | Enormous dimension |
| `92` | 92px | Maximum dimension |
| `96` | 96px | Maximum dimension ⭐ |

### Uso na Foundation:
Estes valores são referenciados por:
- **Foundation Spacing** → `{primitives.dimension.*}` (para margin, gap)
- **Foundation Padding** → `{primitives.dimension.*}` (para padding interno)

### Exemplo de uso:
```json
{
  "dimension": {
    "16": {
      "value": 16,
      "type": "dimension",
      "description": "16px - Base dimension unit"
    },
    "24": {
      "value": 24,
      "type": "dimension",
      "description": "24px - Comfortable dimension"
    }
  }
}
```

---

## 🔘 Border Radius

**Arquivo:** [`tokens-radius.json`](./tokens-radius.json)

Valores primitivos de border radius para cantos arredondados.

### Conteúdo:
- **8 tokens** de border radius
- **Range:** 0px - 1000px
- **Valor especial:** `circular` (1000px)

### Escala de Valores:

| Token | Valor | Descrição |
|-------|-------|-----------|
| `0` | 0px | No border radius, sharp corners |
| `4` | 4px | Subtle rounding |
| `8` | 8px | Small rounding |
| `12` | 12px | Medium rounding |
| `16` | 16px | Base rounding ⭐ |
| `20` | 20px | Large rounding |
| `24` | 24px | Extra large rounding |
| `circular` | 1000px | Circular shape ⭐ |

### Exemplo de uso:
```json
{
  "radius": {
    "16": {
      "value": 16,
      "type": "number",
      "description": "16px - Base rounding"
    },
    "circular": {
      "value": 1000,
      "type": "number",
      "description": "1000px - Circular shape (fully rounded)"
    }
  }
}
```

---

## ➖ Border Width

**Arquivo:** [`tokens-border-width.json`](./tokens-border-width.json)

Valores primitivos de largura de borda para espessura de contornos.

### Conteúdo:
- **5 tokens** de border width
- **Range:** 0px - 4px
- **Incremento:** 1px

### Escala de Valores:

| Token | Valor | Descrição |
|-------|-------|-----------|
| `0` | 0px | No border |
| `1` | 1px | Hairline border ⭐ |
| `2` | 2px | Standard border ⭐ |
| `3` | 3px | Medium border |
| `4` | 4px | Thick border |

### Exemplo de uso:
```json
{
  "borderWidth": {
    "1": {
      "value": 1,
      "type": "number",
      "description": "1px - Hairline border, subtle separation"
    },
    "2": {
      "value": 2,
      "type": "number",
      "description": "2px - Standard border"
    }
  }
}
```

---

## 🔄 Como Usar

### 1. Importar tokens no código

#### JavaScript/TypeScript:
```typescript
import colors from './_docs/tokens/primitives/tokens-colors.json';
import typography from './_docs/tokens/primitives/tokens-typography.json';

// Usar valores
const primaryColor = colors.colors.yellow['500'].value; // "#ffcc00"
const mainFont = typography.typography.fontFamily.main.value; // "Roboto Flex"
```

#### CSS (via CSS Variables):
```css
:root {
  /* Colors */
  --color-yellow-500: #ffcc00;
  --color-grayscale-white: #ffffff;
  
  /* Typography */
  --font-main: "Roboto Flex";
  --font-display: "Gelada RC3";
  --font-size-16: 16px;
}
```

### 2. Integração com tokens.ts

Os valores destes arquivos JSON devem ser sincronizados com o arquivo principal:
```typescript
// tokens.ts
export const tokens = {
  color: {
    zeYellow: '#ffcc00', // ← vem de colors.yellow.500
    // ...
  },
  typography: {
    fontFamily: {
      main: 'Roboto Flex', // ← vem de typography.fontFamily.main
      display: 'Gelada RC3', // ← vem de typography.fontFamily.display
    }
  }
}
```

---

## 📊 Resumo Geral

| Arquivo | Tokens | Descrição |
|---------|--------|-----------|
| **tokens-colors.json** | 75 cores + 132 opacidades = **207** | Paleta completa + opacidades |
| **tokens-elevation.json** | 17 níveis | Sistema de z-index e profundidade |
| **tokens-typography.json** | 48 variáveis | Sistema tipográfico completo |
| **tokens-dimensions.json** | 24 tokens | Dimensões base (4px grid) para spacing/padding |
| **tokens-radius.json** | 8 tokens | Border radius para cantos arredondados |
| **tokens-border-width.json** | 5 tokens | Largura de bordas |
| **TOTAL** | **309 tokens** | Primitivos do Design System |

---

## 📋 Metadados

### Fonte Original:
- **Figma File:** [Zé Delivery - Primitives](https://www.figma.com/design/gX0iN6b6iCise7aUc2KJFe/)
- **Data de Extração:** Outubro 22, 2025
- **Método:** MCP (Model Context Protocol) - Figma Desktop Plugin

### Especificações:
- **Formato:** W3C Design Tokens Format
- **Schema:** https://tr.designtokens.org/format/
- **Versão:** 1.0.0

### WCAG Compliance:
Todas as escalas de cores incluem informações de acessibilidade (contrast ratios) disponíveis na fonte do Figma.

---

## 🔗 Links Úteis

- [W3C Design Tokens Format](https://tr.designtokens.org/format/)
- [Figma Variables Documentation](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Tamagui Tokens](https://tamagui.dev/docs/core/configuration)

---

## 📝 Notas

1. **Não editar manualmente**: Estes arquivos são gerados automaticamente a partir do Figma via MCP
2. **Sincronização**: Sempre que o Figma for atualizado, re-extrair os tokens
3. **Validação**: Todos os valores seguem o schema W3C Design Tokens
4. **Tipos**: Cada token possui um `type` definido (`color`, `number`, `string`)

---

**Mantido por:** Design System Zé Delivery  
**Última atualização:** 2025-10-22

