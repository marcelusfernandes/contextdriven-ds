# 🔧 Proposta de Refatoração: tokens.ts

## 📊 Análise Atual

O arquivo `tokens.ts` contém **707 hex codes**, sendo que muitos são repetições que poderiam ser referências aos tokens base.

### ❌ Problema Atual

```typescript
export const tokens = {
  color: {
    white: '#ffffff',
    black: '#000000',
  },
  button: {
    variant: {
      primary: {
        normal: {
          bg: '#ffcc00',     // ❌ Valor duplicado (deveria ser tokens.color.zeYellow)
          color: '#000000',  // ❌ Valor duplicado (deveria ser tokens.color.black)
        }
      }
    }
  }
}
```

**Limitação**: Em um objeto literal JavaScript, não é possível referenciar propriedades do mesmo objeto durante sua criação.

---

## ✅ Solução Proposta

### **Opção 1: Separação em Camadas (Recomendado)**

Separar tokens em 3 camadas conforme boas práticas de Design Systems (Figma Tokens, Style Dictionary):

```typescript
/**
 * CAMADA 1: Primitive Tokens (valores raw)
 * Tokens fundamentais que não dependem de nada
 */
const primitiveTokens = {
  color: {
    zeYellow: '#ffcc00',
    zeYellowDark: '#cca300',
    black: '#000000',
    white: '#ffffff',
    gray800: '#333333',
    gray500: '#888888',
    gray200: '#eeeeee',
    // ... todas as cores
  },
  space: {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    // ... todos os espaçamentos
  },
  size: {
    // ... todos os tamanhos
  },
  radius: {
    // ... todos os raios
  }
} as const

/**
 * CAMADA 2: Semantic Tokens (aliases)
 * Tokens semânticos que referenciam os primitivos
 */
const semanticTokens = {
  color: {
    // Intenções de uso
    bg: {
      primary: primitiveTokens.color.zeYellow,
      secondary: primitiveTokens.color.white,
      disabled: primitiveTokens.color.gray200,
      error: primitiveTokens.color.red,
    },
    text: {
      primary: primitiveTokens.color.gray800,
      secondary: primitiveTokens.color.gray500,
      inverse: primitiveTokens.color.white,
      disabled: primitiveTokens.color.gray500,
    },
    border: {
      default: primitiveTokens.color.gray300,
      focus: primitiveTokens.color.gray650,
      error: primitiveTokens.color.redDark,
    }
  }
} as const

/**
 * CAMADA 3: Component Tokens (especializados)
 * Tokens específicos de componentes que referenciam os semânticos ou primitivos
 */
const componentTokens = {
  button: {
    size: {
      small: {
        height: 36,
        paddingVertical: primitiveTokens.space[8],
        paddingHorizontal: primitiveTokens.space[16],
        borderRadius: primitiveTokens.radius[12],
        fontSize: 14,
        lineHeight: 20,
        iconSize: primitiveTokens.size[20],
        gap: primitiveTokens.space[8],
      },
      medium: {
        height: 48,
        paddingVertical: primitiveTokens.space[12],
        paddingHorizontal: primitiveTokens.space[16],
        borderRadius: primitiveTokens.radius[16],
        fontSize: 16,
        lineHeight: 24,
        iconSize: primitiveTokens.size[24],
        gap: primitiveTokens.space[8],
      },
    },
    variant: {
      primary: {
        normal: {
          bg: primitiveTokens.color.zeYellow,           // ✅ Referência
          color: primitiveTokens.color.black,            // ✅ Referência
          borderColor: primitiveTokens.color.zeYellow,   // ✅ Referência
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,        // ✅ Referência
        },
        hover: {
          bg: primitiveTokens.color.zeYellowDark,        // ✅ Referência
          color: primitiveTokens.color.black,
          borderColor: primitiveTokens.color.zeYellowDark,
          borderWidth: 0,
          iconColor: primitiveTokens.color.black,
        },
        // ... outros estados
      },
      // ... outras variantes
    }
  },
  // ... outros componentes
} as const

/**
 * EXPORT FINAL: Consolidação de todas as camadas
 */
export const tokens = {
  ...primitiveTokens,
  ...componentTokens,
} as const

// Types
export type Tokens = typeof tokens
```

---

### **Opção 2: Manter Estrutura Atual + Melhorar Documentação**

Se não quiser refatorar completamente, podemos:

1. **Adicionar comentários de referência** (já iniciado)
2. **Criar um arquivo de validação** que verifica consistência
3. **Documentar padrões de uso**

```typescript
export const tokens = {
  color: {
    zeYellow: '#ffcc00',
    // ... cores base
  },
  button: {
    variant: {
      primary: {
        normal: {
          bg: '#ffcc00',          // → tokens.color.zeYellow
          color: '#000000',        // → tokens.color.black
          borderColor: '#ffcc00',  // → tokens.color.zeYellow
        }
      }
    }
  }
} as const
```

---

### **Opção 3: Usar Style Dictionary (Profissional)**

Para projetos maiores, usar ferramenta como [Style Dictionary](https://amzn.github.io/style-dictionary/):

```json
// tokens.json (fonte única de verdade)
{
  "color": {
    "zeYellow": { "value": "#ffcc00" },
    "black": { "value": "#000000" }
  },
  "button": {
    "primary": {
      "bg": { "value": "{color.zeYellow}" },
      "color": { "value": "{color.black}" }
    }
  }
}
```

O Style Dictionary gera automaticamente:
- ✅ TypeScript
- ✅ CSS variables
- ✅ iOS (Swift)
- ✅ Android (XML)

---

## 🎯 Recomendação

Para este projeto, recomendo **Opção 1** (Separação em Camadas):

### Benefícios:
1. ✅ **Zero duplicação** - cada valor definido uma única vez
2. ✅ **Type-safe** - TypeScript garante que as referências existem
3. ✅ **Manutenível** - mudanças em um lugar refletem em todos
4. ✅ **Rastreável** - fácil ver de onde vem cada valor
5. ✅ **Escalável** - fácil adicionar novos componentes

### Desvantagens:
1. ❌ Requer refatoração significativa
2. ❌ Pode quebrar código existente temporariamente

---

## 📋 Plano de Implementação

### Fase 1: Extração dos Tokens Primitivos
- [ ] Extrair todas as cores para `primitiveTokens.color`
- [ ] Extrair todos os espaçamentos para `primitiveTokens.space`
- [ ] Extrair todos os tamanhos para `primitiveTokens.size`
- [ ] Extrair todos os raios para `primitiveTokens.radius`
- [ ] Extrair tipografia para `primitiveTokens.typography`

### Fase 2: Criar Tokens Semânticos (opcional)
- [ ] Criar aliases de cores por intenção (bg.primary, text.primary, etc)
- [ ] Criar aliases de espaçamentos por contexto

### Fase 3: Refatorar Tokens de Componentes
- [ ] Button (referenciando primitivos)
- [ ] Input* (referenciando primitivos)
- [ ] Checkbox/Radio/Toggle (referenciando primitivos)
- [ ] Tag/CompoundTag (referenciando primitivos)
- [ ] ListMenuItem (referenciando primitivos)
- [ ] Snackbar (referenciando primitivos)
- [ ] Text (referenciando primitivos)

### Fase 4: Testes e Validação
- [ ] Criar script de validação
- [ ] Testar todos os componentes
- [ ] Atualizar documentação

---

## 🚀 Próximos Passos

**Aguardando decisão:**
- Qual opção você prefere?
- Devo implementar a refatoração completa (Opção 1)?
- Ou prefere manter a estrutura atual e apenas melhorar os comentários (Opção 2)?


