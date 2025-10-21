# Regras do Design System Agent

Este diretório contém as regras e diretrizes para implementação de componentes no Design System usando Tamagui e React Native.

## 📁 Estrutura

### 1. `design-system-agent.md`
**Propósito:** Documento principal com visão geral do papel do agente e padrões gerais.

**Conteúdo:**
- Papel do agente especialista
- Padrão de documentação de componentes
- Arquitetura de componentes (estrutura de pastas)
- Uso de tokens (sem hardcoding!)
- Storybook Stories
- Acessibilidade
- Responsividade
- Checklist de implementação
- Anti-patterns e Best Practices

**Use quando:** 
- Começar um novo componente
- Revisar padrões gerais
- Entender a arquitetura do projeto

---

### 2. `figma-to-code.md`
**Propósito:** Guia específico de como ler especificações do Figma e implementar componentes.

**Conteúdo:**
- Estrutura das specs em `_context/component_data/`
- Como extrair tokens de specs
- Mapeamento de variantes para props
- Processo completo de implementação (7 passos)
- Checklist detalhado
- Erros comuns ao traduzir design para código

**Use quando:** 
- Implementar um novo componente a partir de uma spec
- Entender como mapear variantes do Figma
- Adicionar tokens ao tokens.ts

---

### 3. `tamagui-patterns.md`
**Propósito:** Referência técnica de padrões Tamagui e exemplos de código.

**Conteúdo:**
- Sintaxe de componentes styled
- Variants e compound variants
- Componentes base (Stack, XStack, YStack, Text)
- Sistema de tokens ($prefix)
- Estados interativos (hover, press, focus, disabled)
- Responsividade e media queries
- Animações
- Padrões específicos do projeto (estruturas completas)
- Performance (memoização, lazy loading)
- Testing e acessibilidade
- Referência rápida de props

**Use quando:** 
- Implementar lógica específica do Tamagui
- Dúvidas sobre sintaxe
- Precisar de exemplos de código
- Otimizar performance

---

## 🎯 Workflow Completo

### Para Implementar um Novo Componente:

```
1. Ler spec → _context/component_data/ComponentName.md
   📖 Use: design-system-agent.md (seção "Padrão de Documentação")

2. Analisar variantes e tokens
   📖 Use: figma-to-code.md (seção "Entendendo Specs")

3. Verificar/adicionar tokens em tokens.ts
   📖 Use: figma-to-code.md (seção "Extraindo Tokens")

4. Criar estrutura de arquivos
   📖 Use: design-system-agent.md (seção "Arquitetura")

5. Implementar componente
   📖 Use: tamagui-patterns.md (seção "Estrutura de Componente")

6. Adicionar estados interativos
   📖 Use: tamagui-patterns.md (seção "Estados Interativos")

7. Criar Stories
   📖 Use: design-system-agent.md (seção "Storybook Stories")

8. Documentar (README + QUICK_START)
   📖 Use: design-system-agent.md (seção "Checklist")

9. Validar acessibilidade
   📖 Use: design-system-agent.md (seção "Acessibilidade")
   📖 Use: tamagui-patterns.md (seção "Testing")
```

---

## 🔍 Referência Rápida

### Dúvidas Comuns

**Como extrair tokens de uma spec?**
→ `figma-to-code.md` → "Extraindo Tokens"

**Como usar variants no Tamagui?**
→ `tamagui-patterns.md` → "Componentes Styled" → "Com Variants"

**Como implementar estados hover/press/focus?**
→ `tamagui-patterns.md` → "Estados Interativos"

**Qual a estrutura de pastas de um componente?**
→ `design-system-agent.md` → "Arquitetura de Componentes"

**Como criar Stories no Storybook?**
→ `design-system-agent.md` → "Storybook Stories"

**Como mapear variantes do Figma para props?**
→ `figma-to-code.md` → "Passo 4: Interface TypeScript"

**Quais props usar para acessibilidade?**
→ `design-system-agent.md` → "Acessibilidade"
→ `tamagui-patterns.md` → "Testing" → "Acessibilidade"

**Como organizar tokens no tokens.ts?**
→ `figma-to-code.md` → "Passo 3: Adicionar Tokens Faltantes"

**Como fazer componente responsivo?**
→ `tamagui-patterns.md` → "Responsividade"

---

## 📊 Hierarquia de Documentos

```
┌─────────────────────────────────────────┐
│   design-system-agent.md                │
│   (Visão geral e princípios)            │
└───────────────┬─────────────────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌─────────────┐  ┌──────────────────┐
│ figma-to-   │  │ tamagui-         │
│ code.md     │  │ patterns.md      │
│ (Processo)  │  │ (Código)         │
└─────────────┘  └──────────────────┘
```

**Leia nesta ordem se for primeira vez:**
1. `design-system-agent.md` (entenda o contexto)
2. `figma-to-code.md` (aprenda o processo)
3. `tamagui-patterns.md` (veja exemplos práticos)

---

## ✅ Princípios Fundamentais

### 1. **Tokens First**
Nunca hardcode valores. Se não existe token, crie primeiro.

### 2. **Spec is Truth**
A especificação do Figma é a fonte da verdade. Dúvidas? Valide com Design.

### 3. **Accessibility First**
Acessibilidade não é opcional. Todo componente deve ser acessível.

### 4. **Composition > Complexity**
Prefira múltiplos componentes simples a um componente complexo.

### 5. **Type-Safe**
TypeScript não é decoração. Types completos e corretos.

### 6. **Document Everything**
Stories, README, QUICK_START. Se você não documentar, ninguém vai usar direito.

---

## 🚀 Quick Start

**Estou implementando meu primeiro componente:**

```bash
# 1. Leia a spec
cat _context/component_data/Button.md

# 2. Verifique tokens necessários
code tokens.ts

# 3. Crie estrutura
mkdir -p components/Button
touch components/Button/Button.tsx
touch components/Button/Button.stories.tsx
touch components/Button/index.ts
touch components/Button/README.md
touch components/Button/QUICK_START.md

# 4. Siga o template em tamagui-patterns.md
# 5. Use checklist em design-system-agent.md
```

---

## 💡 Dicas

- **Sempre consulte:** As regras existem para garantir qualidade e consistência
- **Não reinvente:** Siga os padrões estabelecidos
- **Quando em dúvida:** Pergunte ou valide com a equipe
- **Atualize as regras:** Se descobrir algo novo que deve ser padrão, adicione aqui

---

## 📞 Suporte

**Dúvidas sobre:**
- **Design/Tokens:** Consulte equipe de Design
- **Tamagui/Código:** Revise `tamagui-patterns.md` ou documentação oficial
- **Processo:** Siga `figma-to-code.md` passo a passo
- **Padrões:** Consulte `design-system-agent.md`

---

**Última atualização:** Outubro 2025
**Mantido por:** Time de Design System

