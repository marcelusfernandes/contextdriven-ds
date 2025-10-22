# INDEX - Design System Rules

Este arquivo serve como índice rápido das regras aplicáveis ao Design System.

## 🌟 COMECE AQUI

**📘 [main.mdc](./main.mdc)** - Regras principais e workflow de implementação  
**Ponto de entrada** para entender como implementamos componentes. **Leia primeiro!**

---

## 📋 Regras por Categoria

### 🎯 Design System Core (Sempre Aplicável)

| Arquivo | Descrição | Quando Usar |
|---------|-----------|-------------|
| **main.mdc** ⭐⭐⭐ | Workflow e regras gerais de implementação | **SEMPRE** - Ponto de entrada |
| **010-ds-architecture.mdc** ⭐ | Estrutura de diretórios e organização | Criar novo componente |
| **011-ds-component-structure.mdc** ⭐ | Como estruturar componentes React | Implementar componente |
| **012-ds-tamagui-patterns.mdc** ⭐ | Padrões de uso do Tamagui | Usar Tamagui styled() |
| **013-ds-storybook.mdc** ⭐ | Como criar stories no Storybook | Criar stories |
| **014-ds-tokens.mdc** ⭐ | Como trabalhar com design tokens | Usar/adicionar tokens |

### 🔤 TypeScript Core (Base)

| Arquivo | Descrição | Quando Usar |
|---------|-----------|-------------|
| **001-aibd-ts.mdc** | Naming e organização de arquivos | Todo código TypeScript |
| **002-aibd-ts-types.mdc** | Declaração de tipos, type aliases | Criar types/interfaces |
| **003-aibd-ts-function.mdc** | Padrões de funções e parâmetros | Criar funções |

---

## 🚀 Quick Reference por Tarefa

### Implementar Novo Componente

1. **main.mdc** - Entenda o workflow completo
2. **010-ds-architecture.mdc** - Estrutura de diretórios
3. **014-ds-tokens.mdc** - Adicionar tokens
4. **011-ds-component-structure.mdc** - Implementar componente
5. **012-ds-tamagui-patterns.mdc** - Usar Tamagui
6. **013-ds-storybook.mdc** - Criar stories

### Trabalhar com Tokens

1. **014-ds-tokens.mdc** - Como usar tokens
2. **012-ds-tamagui-patterns.mdc** - Aplicar no Tamagui
3. **main.mdc** - Reutilização de tokens

### Criar Stories

1. **013-ds-storybook.mdc** - Estrutura de stories
2. **main.mdc** - Stories obrigatórias

### Escrever TypeScript

1. **001-aibd-ts.mdc** - Naming e organização
2. **002-aibd-ts-types.mdc** - Types
3. **003-aibd-ts-function.mdc** - Funções

---

## 📁 Estrutura de Documentação

```
.cursor/
└── rules/                  # ← VOCÊ ESTÁ AQUI
    ├── main.mdc           # Regras principais ⭐⭐⭐
    ├── INDEX.md           # Este arquivo
    └── 0XX-*.mdc          # Regras específicas

_context/
├── component_data/         # Especificações extraídas do Figma
│   └── ComponentName.md
│
├── support-docs/           # Documentação adicional (quando necessário)
│   └── README.md
│
├── icons/                  # Ícones SVG originais
└── font-files/             # Fontes originais
```

---

## 🎯 Workflow Visual

```
📋 Especificação (.md)
    ↓
🎨 Tokens (tokens.ts)
    ↓
⚛️  Componente (.tsx)
    ↓
📖 Stories (.stories.tsx)
    ↓
📝 Docs (README.md + QUICK_START.md)
    ↓
📦 Export (index.ts)
```

---

## 💡 Dicas Rápidas

- **Sempre comece com main.mdc** - Ele tem o overview completo
- **Use tokens, nunca hardcode** - Ver 014-ds-tokens.mdc
- **Reutilize tokens quando possível** - Ver main.mdc
- **Todas as variantes nas stories** - Ver 013-ds-storybook.mdc
- **ARIA completo** - Ver 011-ds-component-structure.mdc
- **Documentação em _context/support-docs/** - Ver main.mdc

---

## 🔄 Última Atualização

**Data:** 22/10/2025  
**Versão:** 1.1

