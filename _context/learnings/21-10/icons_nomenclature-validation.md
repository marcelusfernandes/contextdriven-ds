# Nomenclatura de Ícones - Validação Obrigatória

**Data:** 21 de Outubro, 2025  
**Categoria:** Icons / Design System  
**Severidade:** 🔴 Crítica (quebra runtime)  
**Componente Afetado:** ButtonIcon.stories.tsx

## 🐛 Problema Encontrado

Ao implementar o componente `ButtonIcon`, assumi nomes de ícones que **não seguem a convenção** do design system:

```typescript
// ❌ ERRADO - Ícones que NÃO existem
import { 
  Closefilled,      // não existe
  Starratingfilled, // não existe
} from '../icons'
```

**Erro no servidor:**
```
Uncaught SyntaxError: The requested module '/components/icons/index.ts' 
does not provide an export named 'Closefilled' (at ButtonIcon.stories.tsx:4:70)
```

## 🔍 Causa Raiz

**Assunção incorreta de nomenclatura:**
- Presumi que "Close" seria usado, mas o sistema usa **"Dismiss"** ou **"X"**
- Presumi que "Starrating" existiria, mas o sistema usa apenas **"Star"**

**Falta de validação:**
- Não verifiquei os ícones disponíveis em `components/icons/index.ts` antes de usá-los
- Não consultei a lista de ícones existentes

## ✅ Solução Aplicada

```typescript
// ✅ CORRETO - Ícones que EXISTEM
import { 
  Dismissfilled,  // existe ✓
  Starfilled,     // existe ✓
} from '../icons'
```

### Mapeamento de Nomenclatura

| Assumi (errado) | Real (correto) | Alternativas |
|-----------------|----------------|--------------|
| `Closefilled` | `Dismissfilled` | `Xfilled`, `Dismisscirclefilled` |
| `Starratingfilled` | `Starfilled` | `Starcirclefilled`, `Starhalf` |

## 📋 Checklist de Prevenção

**Antes de usar qualquer ícone em código:**

- [ ] Verificar se o ícone existe em `components/icons/index.ts`
- [ ] Usar `grep` para buscar o nome exato do export
- [ ] Consultar ICONS_GUIDE.md se disponível
- [ ] Testar localmente antes de commitar

### Comandos para Validação

```bash
# Verificar se um ícone existe
grep "export.*NomeDoIcone" components/icons/index.ts

# Listar todos os ícones de uma categoria
grep "export.*from.*Close" components/icons/index.ts -i

# Buscar ícones por tema (ex: fechar/close)
grep "Dismiss\|Close\|X" components/icons/index.ts
```

## 🎯 Convenções de Nomenclatura Identificadas

### Família "Fechar"
- ✅ `Dismissfilled` / `Dismissoutlined`
- ✅ `Dismisscirclefilled` / `Dismisscircleoutlined`
- ✅ `Xfilled` / `Xoutlined`
- ❌ ~~`Closefilled`~~ (não existe)

### Família "Estrela"
- ✅ `Starfilled` / `Staroutlined`
- ✅ `Starcirclefilled` / `Starcircleoutlined`
- ✅ `Starhalf`
- ✅ `Startadafilled` / `Startadaoutlined`
- ❌ ~~`Starratingfilled`~~ (não existe)

### Padrão Geral Observado

1. **Sufixos consistentes:**
   - `filled` - versão preenchida
   - `outlined` - versão com outline

2. **Nomes compostos:**
   - Primeira palavra em maiúscula: `Star`, `Dismiss`, `Heart`
   - Palavras adicionais em minúsculas: `circle`, `half`, `tada`
   - Exemplo: `Starcirclefilled`, `Dismisscirclefilled`

3. **Sem separadores:**
   - ❌ `Star_filled`, `star-filled`, `StarFilled`
   - ✅ `Starfilled`

## 📝 Boas Práticas

### ✅ FAZER

1. **Sempre verificar antes de usar:**
   ```bash
   grep "export.*Dismiss" components/icons/index.ts
   ```

2. **Consultar componentes existentes:**
   ```typescript
   // Ver que ícones Button.stories.tsx usa
   import { Checkmarkfilled, Arrowsfilledright, Trashfilled, Addfilled } from '../icons'
   ```

3. **Testar importações:**
   ```typescript
   // Testar import antes de usar em múltiplos lugares
   import { Dismissfilled } from '../icons'
   ```

4. **Usar autocomplete da IDE:**
   - Começar a digitar o import e ver sugestões
   - VS Code/Cursor mostram exports disponíveis

### ❌ EVITAR

1. **Assumir nomenclatura sem verificar**
   ```typescript
   // ❌ Não fazer isso
   import { Closefilled } from '../icons' // pode não existir
   ```

2. **Usar nomes "óbvios" sem validar**
   - "Close" parece óbvio, mas sistema usa "Dismiss"
   - "Starrating" parece lógico, mas sistema usa apenas "Star"

3. **Copiar de exemplos externos**
   - Sempre validar contra o sistema ATUAL
   - Nomenclatura pode ser específica do projeto

## 🔧 Como Recuperar de Erros Similares

Se encontrar erro tipo: `does not provide an export named 'X'`

```bash
# 1. Buscar ícones similares
grep "export.*from.*[parte-do-nome]" components/icons/index.ts -i

# 2. Ver alternativas
grep "Dismiss\|Close\|X" components/icons/index.ts

# 3. Verificar uso em outros componentes
grep -r "from '../icons'" components/ --include="*.tsx"
```

## 📊 Impacto

- **Tempo perdido:** ~10 minutos de debug
- **Severidade:** Runtime error (quebra aplicação)
- **Componentes afetados:** ButtonIcon.stories.tsx
- **Prevenção:** Checklist de validação (acima)

## 🎓 Lição Aprendida

> **Nunca assuma nomenclatura de ícones sem verificar.**  
> Sempre consulte `components/icons/index.ts` ou use grep para validar que o export existe antes de usar em código.

O sistema de ícones tem **585 ícones** disponíveis, mas a nomenclatura pode não ser intuitiva. Um ícone que parece se chamar "Close" pode na verdade ser "Dismiss" ou "X".

## 🔗 Referências

- **Sistema de ícones:** `components/icons/index.ts` (585 ícones)
- **Guia (se existir):** `ICONS_GUIDE.md`
- **Componente afetado:** `components/ButtonIcon/ButtonIcon.stories.tsx`
- **Comando de busca:** `grep "export.*from" components/icons/index.ts`

## 🚀 Próxima Vez

**Workflow correto:**
1. ✅ Identificar ícone necessário (ex: "preciso de um ícone de fechar")
2. ✅ Buscar no sistema: `grep "Dismiss\|Close\|X" components/icons/index.ts -i`
3. ✅ Verificar exports: `grep "export.*Dismiss" components/icons/index.ts`
4. ✅ Confirmar nomenclatura exata
5. ✅ Importar com nome correto
6. ✅ Testar localmente

---

**Atualizado:** 21/10/2025  
**Status:** ✅ Documentado e corrigido

