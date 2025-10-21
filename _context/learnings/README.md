# 📚 Learnings - Documentação de Aprendizados

Documentação de problemas encontrados, soluções aplicadas e lições aprendidas durante o desenvolvimento do projeto.

## 📁 Organização

Os learnings são organizados por **data** em pastas no formato `DD-MM`:
- **Formato:** `DD-MM/` (dia-mês)
- **Arquivos:** `[categoria]_[resumo-do-problema].md`

## 📊 Índice por Data

### 21-10 (21 de Outubro, 2025)

#### Icons / Design System
- **[icons_nomenclature-validation.md](21-10/icons_nomenclature-validation.md)** 🔴
  - **Problema:** Uso de ícones com nomenclatura incorreta (`Closefilled`, `Starratingfilled`)
  - **Solução:** Validar ícones em `components/icons/index.ts` antes de usar
  - **Lição:** Nunca assumir nomenclatura - sempre verificar exports disponíveis
  - **Afetado:** ButtonIcon.stories.tsx

## 🏷️ Índice por Categoria

### Icons / Design System
- [21-10] [icons_nomenclature-validation.md](21-10/icons_nomenclature-validation.md) - Validação de nomenclatura de ícones

## 🎯 Categorias Disponíveis

- **Icons** - Sistema de ícones, nomenclatura, imports
- **Design System** - Tokens, componentes, padrões visuais
- **React** - Componentes, hooks, estado, renderização
- **TypeScript** - Tipagem, generics, inferência
- **Tamagui** - Styled components, variantes, responsividade
- **Performance** - Otimizações, bundle size, lazy loading
- **Testing** - Testes unitários, integração, Storybook
- **Build** - Compilação, bundling, deployment
- **Integration** - APIs externas, serviços, SDKs
- **Database** - Queries, migrações, modelagem
- **Security** - Autenticação, autorização, variáveis de ambiente
- **UX** - Padrões de interface, acessibilidade, estados de loading

## 🔍 Como Consultar

### Por Data (Mais Recente)
```bash
# Ver learnings mais recentes
ls -lt _context/learnings/
```

### Por Categoria
Use este README.md e busque pela seção "Índice por Categoria"

### Por Palavra-chave
```bash
# Buscar em todos os learnings
grep -r "palavra-chave" _context/learnings/ --include="*.md"
```

## 📝 Como Adicionar Novo Learning

Use o comando `/learning` para documentar automaticamente:
```
/learning [descrição do problema que foi resolvido]
```

O sistema irá:
1. Criar pasta da data atual (DD-MM)
2. Gerar arquivo com estrutura padronizada
3. Atualizar este README.md

## 📊 Estatísticas

- **Total de learnings:** 1
- **Última atualização:** 21/10/2025
- **Categorias ativas:** 1 (Icons/Design System)

---

**Mantido por:** AI Coding Agent  
**Atualização:** Automática via comando `/learning`

