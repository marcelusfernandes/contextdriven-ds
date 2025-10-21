# Design System Rules

Regras e guidelines para o Design System com Tamagui + Storybook.

## 📋 Índice de Regras

### 🎯 TypeScript Core (001-005)
Regras fundamentais de TypeScript aplicáveis a todo código.

- **001-aibd-ts.mdc** - Naming conventions e organização de arquivos
- **002-aibd-ts-types.mdc** - Declaração de tipos, type aliases
- **003-aibd-ts-function.mdc** - Padrões de funções e parâmetros
- ~~004-aibd-ts-errors.mdc~~ - (Opcional) Error handling com union types
- ~~005-aibd-ts-zod.mdc~~ - (Opcional) Validação com Zod

### 🏗️ Design System Architecture (010-014)
Regras específicas para o Design System.

- **010-ds-architecture.mdc** ⭐ - Estrutura de diretórios e organização
- **011-ds-component-structure.mdc** ⭐ - Como estruturar componentes
- **012-ds-tamagui-patterns.mdc** ⭐ - Padrões de uso do Tamagui
- **013-ds-storybook.mdc** ⭐ - Como criar stories no Storybook
- **014-ds-tokens.mdc** ⭐ - Como trabalhar com design tokens

### ❌ Arquivadas (não aplicáveis)
Regras removidas por não se aplicarem ao contexto de Design System:

- ~~000-aibd-architecture.mdc~~ - Feature-based (apps)
- ~~020-aibd-doc-prd.mdc~~ - PRDs (features de produto)
- ~~100-aibd-ts-react-shadcn.mdc~~ - shadcn/ui específico
- ~~101-aibd-blueprint-react-component.mdc~~ - Smart/UI separation (apps)

## 🎯 Regras por Contexto

### Ao criar um novo componente:
1. **010-ds-architecture** - Estrutura de diretórios
2. **011-ds-component-structure** - Como estruturar o componente
3. **012-ds-tamagui-patterns** - Como usar Tamagui
4. **014-ds-tokens** - Usar tokens, não hardcode
5. **013-ds-storybook** - Criar stories

### Ao escrever TypeScript:
1. **001-aibd-ts** - Naming e organização
2. **002-aibd-ts-types** - Tipagem explícita, type aliases
3. **003-aibd-ts-function** - Padrão de props object

### Ao trabalhar com tokens:
1. **014-ds-tokens** - Nomenclatura e uso de tokens
2. **012-ds-tamagui-patterns** - Como aplicar tokens no Tamagui

### Ao documentar no Storybook:
1. **013-ds-storybook** - Estrutura de stories
2. **011-ds-component-structure** - Props e variantes

## 🚀 Quick Start

### Checklist para novo componente:

```typescript
// 1. Criar estrutura [010]
components/
  MyComponent/
    MyComponent.tsx
    MyComponent.stories.tsx
    index.ts
    README.md

// 2. Implementar componente [011, 012]
import { styled, Stack } from '@tamagui/core'

export type MyComponentProps = StackProps & {
  variant?: 'primary' | 'secondary'
}

export const MyComponent = styled(Stack, {
  name: 'MyComponent',
  backgroundColor: '$primary',  // [014] Usar tokens
  variants: {
    variant: {
      primary: { /* ... */ },
      secondary: { /* ... */ },
    },
  },
})

// 3. Criar stories [013]
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
}

// 4. Documentar no README.md
```

## 🎨 Filosofia do Design System

1. **Token-driven** - Sempre use tokens, nunca hardcode
2. **Componentes puros** - Controlados por props, sem lógica de negócio
3. **Documentação visual** - Storybook como fonte da verdade
4. **TypeScript strict** - Tipagem explícita em tudo
5. **Multiplataforma** - Web + React Native via Tamagui

## 📝 Como Usar as Regras

### Formato dos Arquivos

Todos os arquivos `.mdc` seguem este formato:

```markdown
---
description: Breve descrição da regra
alwaysApply: true/false
---
# Título da Regra

## Seção
Conteúdo...
```

### AlwaysApply

- `true` - Regra se aplica automaticamente a arquivos relevantes
- `false` - Regra deve ser consultada manualmente quando necessário

### Prioridade

1. **Regras Always Apply** são verificadas automaticamente
2. **Regras específicas de DS (010-014)** têm prioridade sobre genéricas
3. **Regras TypeScript (001-003)** são base para todas

## 🔍 Enforcement

### Code Review Checklist

- [ ] Componente segue estrutura de 010-ds-architecture
- [ ] Usa Tamagui patterns de 012-ds-tamagui-patterns
- [ ] Todos os valores usam tokens (014-ds-tokens)
- [ ] Stories completas (013-ds-storybook)
- [ ] TypeScript strict (001, 002, 003)
- [ ] Documentação README.md presente
- [ ] Props tipadas e documentadas

## 🛠️ Manutenção

### Adicionar nova regra

1. Criar arquivo `0XX-ds-nome.mdc` seguindo formato
2. Atualizar este README com link
3. Adicionar à seção apropriada do índice
4. Testar com componentes existentes

### Atualizar regra existente

1. Editar arquivo `.mdc`
2. Atualizar data de modificação
3. Comunicar mudanças ao time
4. Revisar componentes afetados

## 📚 Recursos Adicionais

- [Tamagui Documentation](https://tamagui.dev)
- [Storybook Documentation](https://storybook.js.org)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contribuindo

Encontrou algo que pode melhorar? 
1. Propor mudança na regra
2. Discutir com o time
3. Atualizar documentação
4. Testar com componentes existentes

