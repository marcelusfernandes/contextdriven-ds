# Comparação: Figma MCP > Code vs Figma > Context > Code

**Data:** 22/10/2025  
**Objetivo:** Avaliar qual abordagem gera melhor contexto para AI Coding Agent implementar componentes

---

## 🎯 Resumo Executivo

| Critério | Figma MCP Direto | Context Manual | Vencedor |
|----------|------------------|----------------|----------|
| **Velocidade** | ⚡️ Instantâneo | 🐢 Manual (horas) | MCP |
| **Completude** | ⚠️ 40% | ✅ 95% | Context |
| **Estrutura** | ❌ Caótica | ✅ Organizada | Context |
| **Mapeamento Tokens** | ❌ Inexistente | ✅ Completo | Context |
| **Implementável** | ❌ Não | ✅ Sim | Context |
| **Manutenção** | ❌ Impossível | ✅ Rastreável | Context |

**Conclusão:** Context manual é **essencial**. MCP sozinho é **insuficiente**.

---

## 📊 Análise Detalhada

### 1. Figma MCP > Code Direto

**Arquivo Analisado:** `figma-mcp-full.md`  
**Node ID:** 303:5197 (Botão "Adicionar")

#### O Que o MCP Retorna

```jsx
// get_design_context
export default function Actions() {
  return (
    <div className="content-stretch flex gap-[22px]..." data-node-id="303:5197">
      <div className="bg-[var(--colors\/background\/brand\/primary,#ffcc00)]...">
        <p className="font-[var(--family\/roboto,'Roboto:Bold',_sans-serif)]...">
          Adicionar
        </p>
      </div>
    </div>
  );
}
```

```json
// get_variable_defs
{
  "Colors/Tipography/Neutral/Primary": "#1c1c1c",
  "Label/Label Strong": "Font(family: \"Roboto\", style: Bold, size: 14, weight: 700, lineHeight: 20)"
}
```

```xml
// get_metadata
<frame id="303:5197" name="Actions" x="8" y="248" width="144" height="36">
  <instance id="303:5198" name="Buttons" x="0" y="0" width="144" height="36" />
</frame>
```

#### ✅ Pontos Fortes

1. **Velocidade**: Instantâneo (< 5 segundos)
2. **Código Visual**: Gera código React+Tailwind imediatamente
3. **Screenshot**: Inclui imagem do componente
4. **CSS Variables**: Mostra tokens Figma como variáveis CSS
5. **Estrutura DOM**: Hierarquia de elementos clara

#### ❌ Pontos Fracos Críticos

1. **UMA VARIANTE APENAS**
   - MCP retorna apenas o node específico (1 variante)
   - ButtonIcon tem **48 variantes** (4 hierarquias × 2 tamanhos × 6 estados)
   - **Dados perdidos:** 47 variantes (98% do componente)

2. **SEM MAPEAMENTO DE TOKENS**
   ```
   ❌ bg-[var(--colors\/background\/brand\/primary,#ffcc00)]
   ✅ backgroundColor: '$buttonIcon.primary.normal.bg'
   ```
   - Variáveis Figma != Design System tokens
   - Não há mapeamento para `tokens.ts`
   - Hardcode dos valores (#ffcc00)

3. **TECNOLOGIA ERRADA**
   - Gera: React + Tailwind
   - Projeto usa: React Native + Tamagui
   - Requires full rewrite

4. **SEM CONTEXTO DE ESTADOS**
   - Não mostra: hover, focus, active, disabled, loading
   - Apenas estado "normal" de uma variante
   - Estados são críticos para UX

5. **SEM DIMENSÕES COMPLETAS**
   ```json
   // O que temos
   "width": "144", "height": "36"
   
   // O que precisamos
   small: { width: 36, height: 36, iconSize: 20, padding: 8 }
   medium: { width: 48, height: 48, iconSize: 24, padding: 12 }
   ```

6. **SEM RELACIONAMENTOS**
   - Não indica que ButtonIcon reutiliza cores do Button
   - Não mostra hierarquia de componentes
   - Não menciona dependências (Icon component)

7. **METADATA SUPERFICIAL**
   - Apenas posição x/y no Figma (irrelevante)
   - Dimensões de UMA instância
   - Sem informação sobre variants

#### 📉 Score de Implementabilidade: 2/10

**Por quê?**
- ❌ Impossível implementar 48 variantes com dados de 1
- ❌ Tokens não mapeados (hardcode inevitável)
- ❌ Stack tecnológica incompatível
- ❌ Estados interativos ausentes
- ⚠️ Útil apenas como referência visual inicial

---

### 2. Figma > Context > Code

**Arquivo Analisado:** `ButtonIcon-clean.md`  
**Componente:** Button Icon (48 variantes completas)

#### O Que o Context Manual Contém

**Estrutura do Documento:**
1. ✅ Metadata do componente (Node ID, URL Figma, Data)
2. ✅ Estrutura completa (Frame + todas as 48 variantes)
3. ✅ Tabelas organizadas por hierarquia e tamanho
4. ✅ Tokens extraídos e mapeados
5. ✅ Dimensões exatas de todos os tamanhos
6. ✅ Mapeamento completo para `tokens.ts`
7. ✅ Observações de implementação
8. ✅ Checklist de tarefas

#### ✅ Pontos Fortes

##### 1. COMPLETUDE TOTAL (48/48 variantes)

```markdown
#### PRIMARY - Medium (48×48px)
| Node ID   | Nome da Variante          | Posição | Dimensões |
|-----------|---------------------------|---------|-----------|
| 3856:7613 | Primary, Medium, Normal   | 20, 20  | 48 × 48   |
| 3856:7623 | Primary, Medium, Hover    | 201, 20 | 48 × 48   |
| 3856:7629 | Primary, Medium, Focus    | 377, 20 | 48 × 48   |
| 3856:7634 | Primary, Medium, Active   | 542, 20 | 48 × 48   |
| 3856:7639 | Primary, Medium, Disabled | 872, 20 | 48 × 48   |
| 3856:7654 | Primary, Medium, Loading  | 707, 20 | 48 × 48   |

// ... + 42 outras variantes
```

**Resultado:** AI Agent sabe EXATAMENTE quantas variantes existem e quais implementar

##### 2. TOKENS MAPEADOS COMPLETAMENTE

```typescript
// Context mostra mapeamento explícito
token.components.buttonIcon.styles.primary.icon.color.normal = primitive.color.black
token.components.buttonIcon.styles.primary.bg.color.normal = primitive.color.zeYellow
token.components.buttonIcon.styles.primary.border.color.normal = primitive.color.zeYellow
token.components.buttonIcon.styles.primary.border.width.normal = 0
```

**Benefícios:**
- ✅ AI Agent copy-paste direto no `tokens.ts`
- ✅ Zero hardcode
- ✅ Usa `ref()` corretamente
- ✅ Rastreabilidade total (primitive → component)

##### 3. ESPECIFICAÇÃO TÉCNICA PRECISA

```typescript
// Tamanhos
small: {
  width: 36,
  height: 36,
  iconSize: ref(primitive.size[20]),    // 20px
  padding: ref(primitive.space[8]),      // 8px
  borderRadius: ref(primitive.radius[12]), // 12px
}

medium: {
  width: 48,
  height: 48,
  iconSize: ref(primitive.size[24]),    // 24px
  padding: ref(primitive.space[12]),    // 12px
  borderRadius: ref(primitive.radius[16]), // 16px
}
```

**Resultado:** Implementação pixel-perfect garantida

##### 4. TODOS OS ESTADOS (6/6)

Para cada hierarquia × tamanho:
- ✅ Normal
- ✅ Hover
- ✅ Focus (com border 2px)
- ✅ Active
- ✅ Disabled
- ✅ Loading (com spinner)

**Resultado:** UX completa, não apenas visual estático

##### 5. OBSERVAÇÕES CONTEXTUAIS

```markdown
## 📝 Observações Importantes

1. **Botão Quadrado:** Sempre mantém aspect ratio 1:1
2. **Apenas Ícone:** Não contém texto, apenas um ícone centralizado
3. **Hierarquias:** 4 tipos - mesmas do Button normal
4. **Loading State:** Exibe spinner animado no lugar do ícone
5. **Relação com Button:** Usa os mesmos tokens de cores
6. **Border Focus:** Apenas Focus tem border de 2px
```

**Resultado:** AI Agent entende o "porquê", não só o "o quê"

##### 6. CHECKLIST DE IMPLEMENTAÇÃO

```markdown
- [ ] Adicionar seção buttonIcon em `tokens.ts`
- [ ] Criar componente `ButtonIcon.tsx` com styled do Tamagui
- [ ] Implementar variante `size` (small, medium)
- [ ] Implementar variante `hierarchy` (primary, secondary, tertiary, destructive)
- [ ] Implementar estados (normal, hover, focus, active, disabled, loading)
- [ ] Integrar com componente Icon existente
- [ ] Implementar Loading spinner
- [ ] Criar stories no Storybook
- [ ] Testar em React Native e Web
- [ ] Validar acessibilidade
```

**Resultado:** AI Agent sabe exatamente o que fazer passo a passo

##### 7. RASTREABILIDADE

```markdown
**Componente:** Button Icon (Botão apenas com ícone)  
**Figma Node ID:** 3856:7612  
**Figma URL:** [Abrir no Figma](https://www.figma.com/...)  
**Data de Extração:** 08/10/2025
```

**Resultado:** Fácil voltar ao Figma para validar ou atualizar

#### ❌ Pontos Fracos

1. **Esforço Manual**: Criação manual leva 2-4 horas
2. **Manutenção**: Precisa ser atualizado se Figma mudar
3. **Erro Humano**: Possível digitar tokens errados
4. **Sem Screenshot**: Não tem imagem visual (apenas Node IDs)

#### 📈 Score de Implementabilidade: 10/10

**Por quê?**
- ✅ 100% das variantes documentadas
- ✅ Tokens mapeados e prontos para usar
- ✅ Dimensões exatas de todos os tamanhos
- ✅ Estados interativos completos
- ✅ Contexto e observações críticas
- ✅ Checklist guia implementação
- ✅ Rastreabilidade total ao Figma

---

## 🔬 Teste Prático

### Prompt para AI Agent

**Usando MCP:**
> "Implemente o ButtonIcon usando figma-mcp-full.md"

**Resultado Esperado:**
```typescript
// ❌ AI Agent vai perguntar:
// - "Só tem 1 variante no MCP. Quantas variantes tem no total?"
// - "Quais os tamanhos disponíveis? Só vi 144x36."
// - "Como mapear var(--colors/...) para tokens.ts?"
// - "Quais os estados? Só vi Normal."
// - "Esse código Tailwind, como converto para Tamagui?"
// - "Tem loading state? Não vi no MCP."
```

**Usando Context:**
> "Implemente o ButtonIcon usando ButtonIcon-clean.md"

**Resultado Esperado:**
```typescript
// ✅ AI Agent vai:
// 1. Adicionar 48 tokens em tokens.ts (copy-paste da spec)
// 2. Criar ButtonIcon.tsx com variants corretas
// 3. Implementar 4 hierarquias × 2 tamanhos × 6 estados
// 4. Usar Icon component existente
// 5. Adicionar Loading spinner
// 6. Criar 8-12 stories no Storybook
// 7. Completar checklist

// ZERO perguntas necessárias
```

---

## 📊 Análise Comparativa por Critério

### 1. Completude de Dados

| Aspecto | MCP | Context | Gap |
|---------|-----|---------|-----|
| Variantes | 1/48 (2%) | 48/48 (100%) | **98%** |
| Estados | 1/6 (17%) | 6/6 (100%) | **83%** |
| Tokens | Parcial | Completo | **100%** |
| Dimensões | 1 instância | Todos tamanhos | **Crítico** |
| Relacionamentos | Nenhum | Completo | **Crítico** |

**Veredito:** Context é **50x mais completo**

### 2. Mapeamento de Tokens

**MCP:**
```css
/* ❌ CSS Variables genéricas */
--colors/background/brand/primary: #ffcc00
--spacing/16: 16px
--corner-radius/12: 12px
```

**Context:**
```typescript
/* ✅ Tokens mapeados para Design System */
token.components.buttonIcon.styles.primary.bg.color.normal = primitive.color.zeYellow
token.components.buttonIcon.sizes.padding.medium = primitive.space[12]
token.components.buttonIcon.sizes.border.radii.medium = primitive.radius[16]
```

**Diferença Crítica:**
- MCP: Hardcode inevitável (#ffcc00)
- Context: Referência a primitivo rastreável (zeYellow)

**Veredito:** Context permite **manutenção sustentável**

### 3. Estrutura para Implementação

**MCP:**
```
❌ Estrutura Inexistente
- Código React+Tailwind "flat"
- Sem organização por variantes
- Sem hierarquia clara
- Sem guia de implementação
```

**Context:**
```
✅ Estrutura Clara
1. Metadata (rastreabilidade)
2. Variantes organizadas em tabelas
3. Tokens mapeados por seção
4. Dimensões especificadas
5. Observações contextuais
6. Checklist de implementação
```

**Veredito:** Context é **100% guiado**, MCP requer **interpretação**

### 4. Facilidade de Implementação

**Passos com MCP:**
1. ❌ Descobrir que faltam 47 variantes
2. ❌ Voltar ao Figma manualmente
3. ❌ Extrair cada variante (manual)
4. ❌ Criar mapeamento de tokens (manual)
5. ❌ Converter Tailwind → Tamagui (manual)
6. ❌ Adivinhar estados não visíveis
7. ❌ Implementar tudo

**Estimativa:** 6-8 horas (quase tudo manual)

**Passos com Context:**
1. ✅ Ler especificação (5 min)
2. ✅ Copy-paste tokens para tokens.ts (10 min)
3. ✅ Implementar componente seguindo spec (1-2h)
4. ✅ Criar stories (30 min)
5. ✅ Testar checklist (30 min)

**Estimativa:** 2-3 horas (70% automatizável)

**Veredito:** Context é **2-3x mais rápido** e **muito menos propenso a erros**

### 5. Manutenção e Rastreabilidade

**MCP:**
```
❌ Se Figma mudar:
- Precisa chamar MCP novamente em 48 variantes
- Sem histórico do que mudou
- Sem rastreabilidade de tokens
- Diff impossível
```

**Context:**
```
✅ Se Figma mudar:
- Atualizar arquivo .md (versionado no Git)
- Diff mostra exatamente o que mudou
- Tokens rastreáveis (primitive → component)
- Histórico completo no Git
```

**Veredito:** Context é **infinitamente mais sustentável**

---

## 🎯 Quando Usar Cada Abordagem

### Use MCP Direto (Raro)

✅ **Quando:**
- Exploração rápida de design
- Prototipagem throw-away
- Gerar screenshot para documentação
- Validar estrutura visual básica

❌ **NÃO use para:**
- Produção
- Design Systems
- Componentes com múltiplas variantes
- Projetos que não usam React+Tailwind

### Use Context Manual (Sempre para Design Systems)

✅ **Quando:**
- Implementação de componentes reais
- Design Systems
- Componentes com múltiplas variantes
- Produção
- Manutenção de longo prazo
- Equipes distribuídas
- Rastreabilidade obrigatória

---

## 💡 Abordagem Híbrida Ideal

### Workflow Recomendado

```
1. MCP (Exploração - 5 min)
   ↓
   • Screenshot para referência visual
   • Estrutura básica do componente
   • Primeiras CSS variables
   
2. Context Manual (Especificação - 2h)
   ↓
   • Extrair TODAS as variantes do Figma
   • Mapear tokens para tokens.ts
   • Documentar estados e dimensões
   • Adicionar observações contextuais
   • Criar checklist
   
3. Implementation (Código - 2h)
   ↓
   • AI Agent implementa usando Context
   • Validação visual contra screenshot MCP
   • Stories no Storybook
```

**Total:** ~4-5h  
**Qualidade:** ⭐️⭐️⭐️⭐️⭐️  
**Sustentável:** ✅

### O Que MCP Contribui

1. **Screenshot** - Referência visual rápida
2. **Estrutura DOM** - Hierarquia de elementos
3. **Validação** - Conferir se implementação está correta
4. **CSS Variables** - Ponto de partida para tokens

### O Que Context Manual Adiciona (Essencial)

1. **Completude** - 100% das variantes
2. **Tokens Mapeados** - Design System integration
3. **Estados** - Hover, focus, active, disabled, loading
4. **Dimensões** - Todos os tamanhos especificados
5. **Relacionamentos** - Dependências e reutilização
6. **Contexto** - Por que, não só o quê
7. **Checklist** - Guia de implementação
8. **Rastreabilidade** - Node IDs, URLs, versionamento

---

## 📈 Matriz de Decisão

| Critério | MCP Sozinho | Context Manual | Híbrido |
|----------|-------------|----------------|---------|
| **Velocidade Inicial** | ⚡️⚡️⚡️ | 🐢 | ⚡️⚡️ |
| **Completude** | ⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |
| **Qualidade** | ⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |
| **Sustentabilidade** | ❌ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |
| **Manutenibilidade** | ❌ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |
| **Rastreabilidade** | ⭐️ | ⭐️⭐️⭐️⭐️⭐️ | ⭐️⭐️⭐️⭐️⭐️ |
| **Produção** | ❌ | ✅ | ✅ |

---

## 🎓 Conclusões

### 1. MCP Sozinho é Insuficiente

**Por quê:**
- ❌ Dados incompletos (2% das variantes)
- ❌ Sem mapeamento de tokens
- ❌ Stack tecnológica incompatível
- ❌ Estados interativos ausentes
- ❌ Não sustentável

**Score:** 2/10 para implementação real

### 2. Context Manual é Essencial

**Por quê:**
- ✅ 100% das variantes documentadas
- ✅ Tokens mapeados e rastreáveis
- ✅ Estados completos
- ✅ Dimensões exatas
- ✅ Checklist guia implementação
- ✅ Sustentável e versionável

**Score:** 10/10 para implementação real

### 3. Híbrido é Ideal

**Melhor de ambos:**
- MCP: Screenshot e validação visual rápida
- Context: Especificação completa e implementável

**Resultado:** Velocidade + Qualidade + Sustentabilidade

---

## 🚀 Recomendação Final

### Para Design Systems em Produção

```
1. ✅ SEMPRE crie Context Manual (.md)
2. ⚠️ Use MCP apenas como suporte visual
3. ✅ Versione Context no Git
4. ✅ Mantenha rastreabilidade Figma ↔ Código
5. ✅ Atualize Context quando Figma mudar
```

### Processo Padrão

```mermaid
Figma Design
    ↓
[Manual] Extrair variantes → Context .md
    ↓
[MCP] Screenshot → Validação visual
    ↓
[AI] Implementar → Código
    ↓
[Storybook] Stories → Documentação
    ↓
Production ✅
```

### Custo vs Benefício

| Abordagem | Tempo Setup | Tempo Implementação | Qualidade | Sustentabilidade | Total |
|-----------|-------------|---------------------|-----------|------------------|-------|
| **MCP Direto** | 5 min | 6-8h | ⭐️⭐️ | ❌ | 8h |
| **Context Manual** | 2h | 2h | ⭐️⭐️⭐️⭐️⭐️ | ✅ | 4h |
| **Híbrido** | 2h 5min | 2h | ⭐️⭐️⭐️⭐️⭐️ | ✅ | 4h |

**ROI:** Context Manual poupa **50% do tempo** e entrega **250% mais qualidade**

---

## 📝 Aprendizados Principais

1. **MCP é ferramenta de suporte, não solução completa**
   - Útil: Screenshot, estrutura básica, validação
   - Insuficiente: Variantes, tokens, estados, implementação

2. **Context Manual é investimento, não custo**
   - Setup: 2h
   - Economia: 4-6h na implementação
   - Benefício: Sustentável para toda vida do componente

3. **Completude > Velocidade**
   - MCP rápido mas incompleto = retrabalho
   - Context lento mas completo = implementação correta primeira vez

4. **Rastreabilidade é crítica**
   - Figma Node ID + URL → Context .md → tokens.ts → Component
   - Permite manutenção e evolução sustentável

5. **AI Agent precisa de estrutura**
   - MCP caótico = AI faz perguntas
   - Context organizado = AI implementa direto

---

**Veredito Final:** Context Manual vence com **folga**. MCP é útil como **complemento visual**, mas **nunca substitui** especificação estruturada.

