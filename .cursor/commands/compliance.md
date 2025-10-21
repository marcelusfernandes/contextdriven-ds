# 🔍 Comando Compliance - Verificação AIBD

## 🎯 Objetivo
Verificar se a implementação está 100% em compliance com as regras AIBD aplicáveis ao projeto.

## 📋 Checklist de Verificação

### 🏗️ Arquitetura (000-aibd-architecture.mdc)
- [ ] Estrutura modular respeitada (`pages/[feature]/` ao invés de `features/`)
- [ ] Separação clara entre Smart Components e UI Components
- [ ] UI Components em `components/` (não `internal/`)
- [ ] Services organizados por domínio em `services/hierarchy/`

### 📝 TypeScript Básico (001-aibd-ts.mdc)
- [ ] `import type` usado para importações de tipos
- [ ] Interfaces preferidas sobre types quando apropriado
- [ ] Nomenclatura consistente (camelCase para funções, PascalCase para componentes)
- [ ] Strict mode habilitado no TypeScript

### 🔧 Types e Interfaces (002-aibd-ts-types.mdc)
- [ ] Types centralizados em arquivos `types.ts`
- [ ] Interfaces bem definidas para props de componentes
- [ ] Union types usados apropriadamente
- [ ] Generic constraints aplicados quando necessário

### ⚡ Funções (003-aibd-ts-function.mdc)
- [ ] Funções puras quando possível
- [ ] Arrow functions vs function declarations usadas consistentemente
- [ ] Parâmetros tipados explicitamente
- [ ] Return types explícitos em funções complexas

### 🚨 Error Handling (004-aibd-ts-errors.mdc)
- [ ] Try/catch implementado em operações assíncronas
- [ ] Error boundaries em componentes React críticos
- [ ] Tipos de erro específicos definidos
- [ ] Logging adequado de erros

### ✅ Validação Zod (005-aibd-ts-zod.mdc)
- [ ] Schemas Zod para validação de dados externos
- [ ] Validação de formulários com react-hook-form + zod
- [ ] Parse/safeParse usado apropriadamente
- [ ] Schemas reutilizáveis definidos

### ⚛️ React + shadcn (100-aibd-ts-react-shadcn.mdc)
- [ ] Hooks customizados seguem padrão `use[Feature]Data` / `use[Feature]Mutations`
- [ ] TanStack Query implementado corretamente
- [ ] shadcn/ui components importados de `@/components/ui/`
- [ ] Loading states e error states implementados

### 🧩 Componentes React (101-aibd-blueprint-react-component.mdc)
- [ ] Smart Components orquestram lógica de negócio
- [ ] UI Components são puramente apresentacionais
- [ ] Props interfaces bem definidas
- [ ] Componentes exportados com `export default`

### 📄 Documentação PRD (020-aibd-doc-prd.mdc)
- [ ] Features principais possuem arquivo `prd.md` no diretório raiz
- [ ] PRD inclui todas as seções obrigatórias (Objective, User Stories, Requirements, Acceptance Criteria, Out of Scope)
- [ ] User Stories seguem formato "As a <role>, I want <goal> so that <reason>"
- [ ] Requirements divididos em Functional e Non-Functional
- [ ] Acceptance Criteria são testáveis e rastreáveis
- [ ] Out of Scope lista itens explicitamente não incluídos
- [ ] ⚠️ **Nota:** Este projeto usa estrutura legada sem PRD files (conforme main.mdc)

## 🔍 Pontos Específicos do Projeto

### Airtable Integration
- [ ] Constantes de schema usadas (`TAREFAS_FIELDS`, `PROCESSOS_FIELDS`, etc.)
- [ ] Conversão de tempo implementada (`secondsToHours`, `hoursToSeconds`)
- [ ] Campos read-only não sendo modificados
- [ ] Campos de relação tratados como arrays

### Backend Services
- [ ] Pattern de classes para services
- [ ] Routes usando `configureXxxRoutes(router)` pattern
- [ ] `asyncHandler` middleware usado para routes assíncronas
- [ ] Error handling consistente

### Estado e Cache
- [ ] Query keys seguem hierarquia do domínio
- [ ] Invalidação de cache após mutações
- [ ] Separação entre data hooks e mutation hooks

## 🚀 Como Usar
Execute este comando para verificar compliance em:
- Arquivos modificados recentemente
- Nova funcionalidade implementada
- Refatoração de código existente
- Antes de merge/deploy

## 📊 Resultado Esperado
Resposta detalhada indicando:
- ✅ Regras em compliance
- ❌ Violações encontradas
- 🔧 Sugestões de correção
- 📈 Score de compliance geral