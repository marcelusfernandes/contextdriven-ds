# 📚 Índice de Regras - Referência Rápida

## 🎯 Navegação por Objetivo

### "Estou começando um componente novo"
1. 📄 Leia a spec → `_context/component_data/ComponentName.md`
2. 📖 Entenda o padrão → [`design-system-agent.md`](./design-system-agent.md) - "Padrão de Documentação"
3. 📖 Processo completo → [`figma-to-code.md`](./figma-to-code.md)
4. 💻 Veja código de exemplo → [`tamagui-patterns.md`](./tamagui-patterns.md) - "Estrutura de Componente"

---

### "Como extrair tokens da spec?"
1. 📖 [`figma-to-code.md`](./figma-to-code.md) → "Extraindo Tokens"
2. 📖 [`figma-to-code.md`](./figma-to-code.md) → "Passo 3: Adicionar Tokens Faltantes"

---

### "Como usar Tamagui styled components?"
1. 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Componentes Styled"
2. 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Com Variants"

---

### "Como implementar hover, press, focus?"
1. 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Estados Interativos"
2. 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Hover não funciona no mobile"

---

### "Como criar Stories no Storybook?"
1. 📖 [`design-system-agent.md`](./design-system-agent.md) → "Storybook Stories"

---

### "Como fazer componente acessível?"
1. 📖 [`design-system-agent.md`](./design-system-agent.md) → "Acessibilidade"
2. 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Testing" → "Acessibilidade"

---

### "Algo não está funcionando!"
1. 🔧 [`troubleshooting.md`](./troubleshooting.md)
2. 🔧 [`troubleshooting.md`](./troubleshooting.md) → "FAQ"

---

### "Qual é a estrutura de pastas?"
1. 📖 [`design-system-agent.md`](./design-system-agent.md) → "Arquitetura de Componentes"

---

### "Como fazer componente responsivo?"
1. 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Responsividade"

---

## 📑 Índice por Arquivo

### [`design-system-agent.md`](./design-system-agent.md)
**Documento principal - Visão geral**

#### Seções:
- ✅ Papel do Agente
- ✅ Padrão de Documentação
- ✅ Arquitetura de Componentes
  - Estrutura de Pastas
  - Padrão de Implementação
- ✅ Uso de Tokens
  - Hierarquia
  - Estados Interativos
- ✅ Storybook Stories
- ✅ Acessibilidade
- ✅ Responsividade
- ✅ Testes e Validação
- ✅ Fluxo de Trabalho
- ✅ Anti-Patterns
- ✅ Best Practices

**Busque aqui:** Padrões gerais, estrutura de projeto, documentação

---

### [`figma-to-code.md`](./figma-to-code.md)
**Guia de implementação - Figma para código**

#### Seções:
- ✅ Entendendo Specs do Figma
  - Metadata
  - Estrutura
  - Variantes
  - Dimensões
- ✅ Extraindo Tokens
  - Tamanhos
  - Tipografia
  - Cores
  - Estados
- ✅ Processo de Implementação (7 passos)
  1. Análise da Spec
  2. Auditoria de Tokens
  3. Adicionar Tokens Faltantes
  4. Interface TypeScript
  5. Implementação Tamagui
  6. Sub-componentes
  7. Lógica de Estados
- ✅ Checklist de Implementação
- ✅ Dicas Importantes
- ✅ Erros Comuns

**Busque aqui:** Como ler specs, extrair tokens, mapear variantes

---

### [`tamagui-patterns.md`](./tamagui-patterns.md)
**Referência técnica - Código Tamagui**

#### Seções:
- ✅ Componentes Styled
  - Sintaxe Básica
  - Com Variants
  - Compound Variants
- ✅ Componentes Base
  - Stack, XStack, YStack
  - Text
- ✅ Tokens no Tamagui
  - $ prefix
  - Spacing, Cores
- ✅ Estados Interativos
  - Hover, Press, Focus, Disabled
  - Combinando Estados
- ✅ Responsividade
  - Media Queries
  - Platform-Specific
- ✅ Animações
- ✅ Padrões Específicos do Projeto
  - Estrutura Completa
  - Com Sub-componentes
  - Usando Ícones
- ✅ Performance
  - Memoização
  - Lazy Loading
- ✅ Testing
- ✅ Referência Rápida de Props

**Busque aqui:** Sintaxe, exemplos de código, referência técnica

---

### [`troubleshooting.md`](./troubleshooting.md)
**Problemas e soluções**

#### Seções:
- ✅ Problemas Comuns (10+)
  1. Tokens não funcionam
  2. Variants não aplicam
  3. Hover não funciona no mobile
  4. Ícones SVG não aparecem
  5. Estados disabled
  6. Text overflow
  7. Focus style
  8. Compound variants
  9. Tipos TypeScript
  10. Animation
- ✅ FAQ (15+ perguntas)
  - Quais tokens usar?
  - Props vs Variants?
  - Todas variantes necessárias?
  - Testar estados?
  - Modificar tokens?
  - Componentes complexos?
  - Temas?
  - Acessibilidade?
  - Storybook obrigatório?
  - Organizar imports?
  - Nomear componentes?
  - Platform-specific?
  - forwardRef?
  - Componentes genéricos?
- ✅ Debug Tips
- ✅ Quando Pedir Ajuda

**Busque aqui:** Erros, dúvidas, como resolver problemas

---

## 🎨 Índice por Tópico

### **Tokens**
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Uso de Tokens"
- 📖 [`figma-to-code.md`](./figma-to-code.md) → "Extraindo Tokens"
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Tokens no Tamagui"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Tokens não funcionam"

### **Variants**
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Com Variants"
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Compound Variants"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Variants não aplicam"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Props vs Variants"

### **Estados Interativos**
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Estados Interativos"
- 📖 [`figma-to-code.md`](./figma-to-code.md) → "Passo 7: Lógica de Estados"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Hover não funciona"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Focus style não aparece"

### **Acessibilidade**
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Acessibilidade"
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Testing"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Como priorizar acessibilidade?"

### **Estrutura de Arquivos**
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Arquitetura de Componentes"
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Estrutura de Componente Típica"

### **TypeScript**
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Definição de Types"
- 📖 [`figma-to-code.md`](./figma-to-code.md) → "Passo 4: Interface TypeScript"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Tipos TypeScript reclamando"

### **Storybook**
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Storybook Stories"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Storybook é obrigatório?"

### **Performance**
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Performance"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Debug Tips"

### **Responsividade**
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Responsividade"
- 📖 [`design-system-agent.md`](./design-system-agent.md) → "Responsividade e Platform-specific"

### **Sub-componentes**
- 📖 [`figma-to-code.md`](./figma-to-code.md) → "Passo 6: Sub-componentes"
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Componente com Sub-componentes"

### **Ícones**
- 💻 [`tamagui-patterns.md`](./tamagui-patterns.md) → "Usando Ícones"
- 🔧 [`troubleshooting.md`](./troubleshooting.md) → "Ícones SVG não aparecem"

---

## 🔍 Busca Rápida por Palavra-chave

| Palavra-chave | Arquivo | Seção |
|--------------|---------|-------|
| accessibility | design-system-agent.md | Acessibilidade |
| animation | tamagui-patterns.md | Animações |
| aria | design-system-agent.md | Acessibilidade |
| breakpoint | tamagui-patterns.md | Responsividade |
| color | figma-to-code.md | Extraindo Tokens → Cores |
| component | tamagui-patterns.md | Estrutura Completa |
| disabled | tamagui-patterns.md | Estados → Disabled |
| error | troubleshooting.md | FAQ ou Problemas Comuns |
| focus | tamagui-patterns.md | Estados → Focus |
| forwardRef | troubleshooting.md | FAQ → forwardRef |
| hover | tamagui-patterns.md | Estados → Hover |
| icon | tamagui-patterns.md | Usando Ícones |
| import | troubleshooting.md | FAQ → Organizar imports |
| mobile | tamagui-patterns.md | Platform-Specific |
| performance | tamagui-patterns.md | Performance |
| press | tamagui-patterns.md | Estados → Press |
| props | figma-to-code.md | Interface TypeScript |
| responsive | tamagui-patterns.md | Responsividade |
| spec | figma-to-code.md | Entendendo Specs |
| state | figma-to-code.md | Lógica de Estados |
| stories | design-system-agent.md | Storybook Stories |
| styled | tamagui-patterns.md | Componentes Styled |
| svg | troubleshooting.md | Ícones SVG não aparecem |
| testID | tamagui-patterns.md | Testing |
| token | design-system-agent.md | Uso de Tokens |
| type | troubleshooting.md | Tipos TypeScript |
| variant | tamagui-patterns.md | Com Variants |

---

## 🚀 Fluxos Comuns

### Implementar Componente do Zero
```
1. Ler spec                    → _context/component_data/
2. Entender padrão             → design-system-agent.md
3. Seguir processo             → figma-to-code.md
4. Implementar código          → tamagui-patterns.md
5. Resolver problemas          → troubleshooting.md
6. Validar checklist           → design-system-agent.md
```

### Adicionar Variante Nova
```
1. Verificar spec              → _context/component_data/
2. Adicionar tokens            → figma-to-code.md → Passo 3
3. Adicionar variant           → tamagui-patterns.md → Variants
4. Testar no Storybook         → design-system-agent.md → Stories
```

### Corrigir Bug
```
1. Identificar problema        → troubleshooting.md → Problemas
2. Aplicar solução             → troubleshooting.md
3. Validar                     → Storybook
```

### Revisar Componente
```
1. Checklist                   → design-system-agent.md → Checklist
2. Validar acessibilidade      → design-system-agent.md → Acessibilidade
3. Validar tokens              → figma-to-code.md → Auditoria
4. Validar stories             → design-system-agent.md → Stories
```

---

## 📖 Legenda

- 📖 = Guia/Processo
- 💻 = Código/Técnico
- 🔧 = Problemas/Soluções
- ✅ = Checklist/Validação

---

**Dica:** Use Ctrl+F (Cmd+F no Mac) para buscar palavras-chave específicas neste índice!

