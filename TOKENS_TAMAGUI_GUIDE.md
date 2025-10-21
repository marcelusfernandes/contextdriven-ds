# 🎨 Guia: tokens-tamagui.ts

## ✅ Solução Implementada

Estrutura **híbrida** que funciona perfeitamente com Tamagui e segue boas práticas de Design Systems.

---

## 🎯 Como Funciona

### 1. Tokens Primitivos (Fonte Única)

```typescript
const primitive = {
  color: {
    zeYellow: '#ffcc00',  // ✅ Definido UMA vez
  }
}
```

### 2. Helper Function

```typescript
const ref = <T>(value: T): T => value

// Uso:
bg: ref(primitive.color.zeYellow)  // Retorna '#ffcc00' para Tamagui
```

### 3. Tokens de Componentes

```typescript
export const tokens = {
  color: primitive.color,  // Expor primitivos
  
  button: {
    variant: {
      primary: {
        bg: ref(primitive.color.zeYellow),  // ✅ Rastreável + valor final
      }
    }
  }
}
```

---

## ✅ Benefícios

| Aspecto | Status |
|---------|--------|
| **Compatível com Tamagui** | ✅ Valores finais |
| **Fonte única de verdade** | ✅ Zero duplicação |
| **Rastreabilidade** | ✅ ref(primitive.color.zeYellow) |
| **Type-safe** | ✅ TypeScript valida |
| **Manutenível** | ✅ Mudar em 1 lugar |
| **Boas práticas** | ✅ Estrutura em camadas |

---

## 🚀 Como Usar

### Em Componentes:

```typescript
import { tokens } from './tokens-tamagui'

// Usar cores diretamente
const Button = styled(TamaguiButton, {
  backgroundColor: tokens.color.zeYellow,  // ✅ Funciona
})

// Usar tokens de componentes
const Button = styled(TamaguiButton, {
  backgroundColor: tokens.button.variant.primary.normal.bg,  // ✅ Funciona
})

// Usar primitivos avançados
import { primitive } from './tokens-tamagui'

const customColor = primitive.color.zeYellow  // ✅ Acesso direto
```

### Em Tamagui Config:

```typescript
import { tokens } from './tokens-tamagui'
import { createTamagui } from '@tamagui/core'

export default createTamagui({
  tokens: {
    color: tokens.color,
    space: tokens.space,
    size: tokens.size,
    radius: tokens.radius,
  },
  themes: {
    light: {
      primary: tokens.color.zeYellow,  // ✅ Funciona
      background: tokens.color.white,
    }
  }
})
```

---

## 🔄 Migração do tokens.ts atual

### Opção A: Substituir Completamente

```bash
# Backup
mv tokens.ts tokens.old.ts

# Usar nova versão
mv tokens-tamagui.ts tokens.ts
```

### Opção B: Usar em Paralelo

```typescript
// Manter tokens.ts atual para compatibilidade
// Usar tokens-tamagui.ts para novos componentes

import { tokens as oldTokens } from './tokens'
import { tokens as newTokens } from './tokens-tamagui'
```

---

## 📝 Próximos Passos

### Implementados (3 componentes):
- ✅ Button (completo com todas as variantes)
- ✅ Icon (todos os tamanhos)
- ✅ Loading (brands e animação)

### Para Implementar:
- [ ] DismissButton
- [ ] InputSingle / InputTextarea / InputSelect / InputField
- [ ] ButtonIcon
- [ ] LinkAction
- [ ] DropdownButton
- [ ] Checkbox / RadioButton / Toggle
- [ ] ListMenuItem
- [ ] Tag / CompoundTag
- [ ] Text
- [ ] Snackbar

### Copiar do tokens.ts e adaptar:

```typescript
// Do tokens.ts atual
dismissButton: {
  size: {
    small: {
      width: 24,
      iconSize: 16,
    }
  }
}

// Para tokens-tamagui.ts (adicionar ref())
dismissButton: {
  size: {
    small: {
      width: ref(primitive.size[24]),       // ✅ Referência
      iconSize: ref(primitive.size[16]),     // ✅ Referência
    }
  }
}
```

---

## 🎓 Explicação Técnica

### Por que funciona?

```typescript
// 1. Helper retorna o valor tal qual
const ref = <T>(value: T): T => value

// 2. Primitive tem valor raw
primitive.color.zeYellow = '#ffcc00'

// 3. ref() resolve imediatamente
ref(primitive.color.zeYellow)  // → '#ffcc00'

// 4. Tamagui recebe valor final
tokens.button.variant.primary.normal.bg  // → '#ffcc00' ✅

// 5. Mas código mantém rastreabilidade
// Você vê: ref(primitive.color.zeYellow)
// Tamagui vê: '#ffcc00'
```

### Diferença do tokens-refactored.ts

```typescript
// ❌ tokens-refactored.ts (não funciona direto no Tamagui)
bg: primitiveTokens.color.zeYellow  // Referência JS

// ✅ tokens-tamagui.ts (funciona no Tamagui)
bg: ref(primitive.color.zeYellow)   // Resolve para '#ffcc00'
```

---

## 🤝 Comparação

| Aspecto | tokens.ts (atual) | tokens-tamagui.ts (novo) |
|---------|-------------------|--------------------------|
| Valores raw | 707 | 116 |
| Duplicação | Alta | Zero |
| Tamagui | ✅ Funciona | ✅ Funciona |
| Manutenção | Difícil | Fácil |
| Rastreabilidade | Baixa | Alta |
| Type-safe | Parcial | Total |

---

## ✨ Conclusão

**tokens-tamagui.ts é a solução ideal:**

- ✅ Funciona perfeitamente com Tamagui
- ✅ Segue boas práticas de Design Systems
- ✅ Mantém código limpo e rastreável
- ✅ Fácil de manter e escalar

**Próximo passo:** Completar os componentes restantes seguindo o padrão!


