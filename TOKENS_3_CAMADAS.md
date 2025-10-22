# 🎨 Arquitetura de Tokens em 3 Camadas - DSZé

## 📚 Visão Geral

O sistema de tokens do DSZé segue as **boas práticas de Design Systems**, implementando uma arquitetura em 3 camadas que separa valores brutos, intenções de uso e aplicações específicas.

---

## 🏗️ As 3 Camadas

### **Camada 1: Primitive Tokens** (Fundação)
**"O que existe"** - Valores raw, agnósticos de contexto

```typescript
const primitive = {
  color: {
    zeYellow: '#ffcc00',        // ← Apenas o valor, sem contexto
    gray800: '#333333',
    red: '#e91935',
  },
  space: { 8: 8, 16: 16 },
  size: { 20: 20, 24: 24 },
}
```

**Características:**
- ✅ **Valores absolutos** sem significado semântico
- ✅ **Agnósticos de contexto** - não dizem "onde" ou "quando" usar
- ✅ **Paleta completa** - todas as opções disponíveis
- ❌ **Não devem ser usados diretamente** nos componentes

---

### **Camada 2: Semantic Tokens** (Decisão)
**"Para que serve"** - Tokens com intenção e contexto

```typescript
const semantic = {
  color: {
    // Intenções de marca
    brand: {
      primary: ref(primitive.color.zeYellow),
      primaryHover: ref(primitive.color.zeYellowDark),
    },
    
    // Intenções de feedback
    feedback: {
      error: ref(primitive.color.red),
      errorStrong: ref(primitive.color.redDark),
      success: ref(primitive.color.successGreen),
    },
    
    // Intenções de texto
    text: {
      primary: ref(primitive.color.gray800),
      secondary: ref(primitive.color.gray500),
      disabled: ref(primitive.color.gray400),
      inverse: ref(primitive.color.white),
      onBrand: ref(primitive.color.black),
    },
    
    // Intenções de superfície
    surface: {
      primary: ref(primitive.color.white),
      secondary: ref(primitive.color.gray100),
      transparent: ref(primitive.color.transparent),
    },
    
    // Estados interativos
    interactive: {
      default: ref(primitive.color.gray800),
      hover: ref(primitive.color.gray700),
      active: ref(primitive.color.gray400),
      disabled: ref(primitive.color.gray500),
    },
  }
}
```

**Características:**
- ✅ **Contexto e intenção** claros
- ✅ **Decisões de design** centralizadas
- ✅ **Independentes de componentes** específicos
- ✅ **Fácil mudança de tema** (ex: dark mode)

---

### **Camada 3: Component Tokens** (Aplicação)
**"Como é usado"** - Tokens específicos de cada componente

```typescript
export const tokens = {
  button: {
    variant: {
      primary: {
        normal: {
          bg: ref(semantic.color.brand.primary),        // ← Usa semântico!
          color: ref(semantic.color.text.onBrand),
        },
        hover: {
          bg: ref(semantic.color.brand.primaryHover),
        }
      }
    }
  },
  
  checkbox: {
    state: {
      error: {
        enabled: {
          textColor: ref(semantic.color.feedback.errorStrong), // ← Usa semântico!
        }
      }
    }
  }
}
```

**Características:**
- ✅ **Específico de componente** - cada componente tem seus tokens
- ✅ **Estados e variantes** mapeados
- ✅ **Pronto para uso** - desenvolvedores pegam daqui
- ✅ **Referenciam tokens semânticos** (não primitivos diretamente)

---

## 🔄 Fluxo de Dados

```
┌──────────────────────────────────────────────────────────┐
│ CAMADA 1: PRIMITIVE (Fundação)                           │
│ ─────────────────────────────────────────────────────    │
│ "Paleta de opções brutas"                               │
│                                                          │
│ color.zeYellow = '#ffcc00'                              │
│ color.gray800 = '#333333'                               │
│ color.red = '#e91935'                                   │
│                                                          │
│ 🎨 Todas as cores disponíveis, sem contexto             │
└──────────────────┬───────────────────────────────────────┘
                   │ ref()
                   ▼
┌──────────────────────────────────────────────────────────┐
│ CAMADA 2: SEMANTIC (Decisão)                            │
│ ─────────────────────────────────────────────────────    │
│ "Para que serve cada cor"                               │
│                                                          │
│ brand.primary = primitive.zeYellow                      │
│ feedback.error = primitive.red                          │
│ text.primary = primitive.gray800                        │
│                                                          │
│ 🎯 Intenção e contexto de uso                           │
└──────────────────┬───────────────────────────────────────┘
                   │ ref()
                   ▼
┌──────────────────────────────────────────────────────────┐
│ CAMADA 3: COMPONENT (Aplicação)                         │
│ ─────────────────────────────────────────────────────    │
│ "Como cada componente usa"                              │
│                                                          │
│ button.primary.bg = semantic.brand.primary              │
│ checkbox.error.text = semantic.feedback.errorStrong     │
│                                                          │
│ 🧩 Implementação específica de cada componente          │
└──────────────────┬───────────────────────────────────────┘
                   │ ref() resolve
                   ▼
              Tamagui recebe '#ffcc00'
```

---

## 💡 Exemplos Práticos

### ❌ **SEM** Camada Semântica (Acoplamento Ruim)

```typescript
// ❌ Component referencia Primitive diretamente
button: {
  variant: {
    primary: {
      normal: {
        bg: ref(primitive.color.zeYellow),  // ← Acoplamento direto!
      }
    }
  }
}

checkbox: {
  state: {
    error: {
      enabled: {
        textColor: ref(primitive.color.redDark), // ← Duplicação de decisão!
      }
    }
  }
}
```

**Problemas:**
1. **Duplicação de decisões**: Mudar "cor de erro" requer editar N lugares
2. **Falta de contexto**: `primitive.color.redDark` não diz "isto é erro"
3. **Dificulta temas**: Dark mode requer alterar cada componente
4. **Acoplamento forte**: Componentes acoplados aos valores brutos

---

### ✅ **COM** Camada Semântica (Desacoplamento Correto)

```typescript
// ✅ CAMADA 2: Define intenção UMA vez
semantic.color.feedback.errorStrong = ref(primitive.color.redDark)

// ✅ CAMADA 3: Componentes usam a intenção
button: {
  variant: {
    destructive: {
      normal: {
        color: ref(semantic.color.feedback.errorStrong), // ← Usa semântico!
      }
    }
  }
}

checkbox: {
  state: {
    error: {
      enabled: {
        textColor: ref(semantic.color.feedback.errorStrong), // ← Mesma intenção!
      }
    }
  }
}
```

**Benefícios:**
1. ✅ **Decisão centralizada**: Mudar `semantic.feedback.errorStrong` = pronto!
2. ✅ **Contexto claro**: Nome autoexplicativo da intenção
3. ✅ **Fácil tematização**: Troca no nível semântico
4. ✅ **Desacoplamento**: Componentes independentes dos valores raw

---

## 🎯 Quando Usar Cada Camada

| Camada | Quando Usar | Exemplo |
|--------|-------------|---------|
| **Primitive** | Definindo a paleta base do design | Adicionar nova cor da marca |
| **Semantic** | Definindo intenções e contextos | "Esta é a cor para erros" |
| **Component** | Implementando componentes | "Botão primary usa brand.primary" |

---

## 🔧 Como Adicionar Novos Tokens

### 1. Adicionar Primitive (se necessário)

```typescript
const primitive = {
  color: {
    // ... cores existentes
    newColor: '#123456', // ← Nova cor raw
  }
}
```

### 2. Adicionar Semantic (SEMPRE recomendado)

```typescript
const semantic = {
  color: {
    // ... intenções existentes
    newIntent: {
      primary: ref(primitive.color.newColor),
      secondary: ref(primitive.color.anotherColor),
    }
  }
}
```

### 3. Usar em Component

```typescript
export const tokens = {
  newComponent: {
    variant: {
      default: {
        color: ref(semantic.color.newIntent.primary), // ← Usa semântico!
      }
    }
  }
}
```

---

## 🎨 Tematização (Dark Mode)

A camada semântica facilita muito a criação de temas:

```typescript
// Light Theme
const semanticLight = {
  color: {
    text: {
      primary: ref(primitive.color.gray800),    // Texto escuro
    },
    surface: {
      primary: ref(primitive.color.white),      // Fundo claro
    }
  }
}

// Dark Theme
const semanticDark = {
  color: {
    text: {
      primary: ref(primitive.color.white),      // Texto claro
    },
    surface: {
      primary: ref(primitive.color.gray900),    // Fundo escuro
    }
  }
}

// Component tokens NÃO MUDAM!
// Eles sempre referenciam semantic.color.text.primary
```

---

## 📊 Comparação

| Aspecto | Sem Semantic | Com Semantic |
|---------|--------------|--------------|
| **Manutenção** | Editar 20 componentes | Editar 1 semantic token |
| **Legibilidade** | `primitive.red` (?) | `semantic.feedback.error` (✓) |
| **Temas** | Complexo | Simples |
| **Consistência** | Fácil errar | Difícil errar |
| **DRY** | Duplicação | Centralizado |

---

## 🚀 Próximos Passos

1. ✅ **Primitive Tokens** - Implementado
2. ✅ **Semantic Tokens** - Implementado
3. ✅ **Component Tokens** refatorados para usar Semantic
4. 🔜 **Expandir Semantic Tokens** conforme necessário
5. 🔜 **Implementar Dark Theme** usando semantic layer
6. 🔜 **Adicionar novos componentes** seguindo o padrão

---

## 📚 Referências

- [Design Tokens - W3C Community Group](https://design-tokens.github.io/community-group/)
- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/design-tokens/)
- [Material Design - Design Tokens](https://m3.material.io/foundations/design-tokens/overview)
- [Brad Frost - Design Systems](https://bradfrost.com/blog/post/design-systems/)

---

**Feito com ❤️ pelo time DSZé**


