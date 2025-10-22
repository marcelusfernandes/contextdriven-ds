# 🏗️ Diagrama da Arquitetura de Tokens - DSZé

## 📐 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│                    ARQUITETURA EM 3 CAMADAS                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

                                    ▼

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  CAMADA 1: PRIMITIVE TOKENS (Fundação)                                │
│  ════════════════════════════════════════                              │
│                                                                         │
│  "Valores raw - O que existe"                                         │
│                                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                   │
│  │   COLORS    │  │   SPACING   │  │    SIZING   │                   │
│  ├─────────────┤  ├─────────────┤  ├─────────────┤                   │
│  │ zeYellow    │  │ 8: 8        │  │ 20: 20      │                   │
│  │ gray800     │  │ 12: 12      │  │ 24: 24      │                   │
│  │ red         │  │ 16: 16      │  │ 32: 32      │                   │
│  │ ...         │  │ ...         │  │ ...         │                   │
│  └─────────────┘  └─────────────┘  └─────────────┘                   │
│                                                                         │
│  ✅ Paleta completa                                                    │
│  ✅ Agnóstico de contexto                                              │
│  ❌ Não usar diretamente em componentes                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ ref()
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  CAMADA 2: SEMANTIC TOKENS (Decisão) ← NOVA!                          │
│  ════════════════════════════════════════════                          │
│                                                                         │
│  "Intenção e contexto - Para que serve"                               │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ BRAND                                                   │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ primary         = primitive.zeYellow                    │          │
│  │ primaryHover    = primitive.zeYellowDark                │          │
│  │ primaryActive   = primitive.zeYellowLight               │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ FEEDBACK                                                │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ error           = primitive.red                         │          │
│  │ errorStrong     = primitive.redDark                     │          │
│  │ success         = primitive.successGreen                │          │
│  │ warning         = primitive.warningOrange               │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ TEXT                                                    │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ primary         = primitive.gray800                     │          │
│  │ secondary       = primitive.gray500                     │          │
│  │ disabled        = primitive.gray400                     │          │
│  │ inverse         = primitive.white                       │          │
│  │ onBrand         = primitive.black                       │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ INTERACTIVE                                             │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ default         = primitive.gray800                     │          │
│  │ hover           = primitive.gray700                     │          │
│  │ active          = primitive.gray400                     │          │
│  │ disabled        = primitive.gray500                     │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ✅ Contexto claro                                                     │
│  ✅ Decisões centralizadas                                             │
│  ✅ Facilita tematização                                               │
│  ✅ Use em componentes customizados                                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ ref()
                                    ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  CAMADA 3: COMPONENT TOKENS (Aplicação)                               │
│  ════════════════════════════════════════════                          │
│                                                                         │
│  "Implementação específica - Como é usado"                            │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ BUTTON                                                  │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ variant.primary.normal:                                 │          │
│  │   bg          = semantic.brand.primary                  │          │
│  │   color       = semantic.text.onBrand                   │          │
│  │                                                         │          │
│  │ variant.primary.hover:                                  │          │
│  │   bg          = semantic.brand.primaryHover             │          │
│  │   color       = semantic.text.onBrand                   │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────┐          │
│  │ CHECKBOX                                                │          │
│  ├─────────────────────────────────────────────────────────┤          │
│  │ state.error.enabled:                                    │          │
│  │   textColor   = semantic.feedback.errorStrong           │          │
│  │   bgColor     = semantic.surface.transparent            │          │
│  │                                                         │          │
│  │ state.error.hover:                                      │          │
│  │   textColor   = semantic.text.onBrand                   │          │
│  │   bgColor     = semantic.feedback.errorBg               │          │
│  └─────────────────────────────────────────────────────────┘          │
│                                                                         │
│  ✅ Específico de componente                                           │
│  ✅ Estados mapeados                                                   │
│  ✅ Pronto para uso                                                    │
│  ✅ Use em componentes do DS                                           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ resolve
                                    ▼
                          ┌──────────────────┐
                          │   TAMAGUI        │
                          │ (Valores finais) │
                          │                  │
                          │  '#ffcc00'       │
                          │  '#333333'       │
                          │  '#e91935'       │
                          └──────────────────┘
```

---

## 🔄 Fluxo de Dados Detalhado

### Exemplo: Botão Primary

```
┌────────────────────────────────────────────────────────────────────┐
│ DEVELOPER CODE                                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  <Button variant="primary" />                                     │
│                                                                    │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│ CAMADA 3: Component Tokens                                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  tokens.button.variant.primary.normal.bg                          │
│     = ref(semantic.color.brand.primary)                           │
│                                                                    │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│ CAMADA 2: Semantic Tokens                                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  semantic.color.brand.primary                                     │
│     = ref(primitive.color.zeYellow)                               │
│                                                                    │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│ CAMADA 1: Primitive Tokens                                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  primitive.color.zeYellow = '#ffcc00'                             │
│                                                                    │
└─────────────────────────────┬──────────────────────────────────────┘
                              │
                              ▼
                         '#ffcc00'
                              │
                              ▼
┌────────────────────────────────────────────────────────────────────┐
│ TAMAGUI RECEIVES                                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  backgroundColor: '#ffcc00'  ← Valor final!                       │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 Exemplo Prático: Error State

### Múltiplos Componentes Usando a Mesma Intenção

```
                    ┌─────────────────────────┐
                    │  SEMANTIC TOKEN         │
                    │  (Fonte única)          │
                    │                         │
                    │  feedback.errorStrong   │
                    │    = primitive.redDark  │
                    │    = '#bc1229'          │
                    └───────────┬─────────────┘
                                │
                ┌───────────────┼───────────────┐
                │               │               │
                ▼               ▼               ▼
        ┌───────────┐   ┌───────────┐   ┌───────────┐
        │  BUTTON   │   │ CHECKBOX  │   │   TEXT    │
        │           │   │           │   │           │
        │ variant   │   │ state     │   │ error     │
        │  .destru  │   │  .error   │   │  message  │
        │  ctive    │   │  .enabled │   │           │
        │  .normal  │   │           │   │           │
        │  .color   │   │  .text    │   │  .color   │
        │           │   │   Color   │   │           │
        └───────────┘   └───────────┘   └───────────┘
             │               │               │
             └───────────────┼───────────────┘
                             │
                             ▼
                    Todos usam '#bc1229'
                    
    ✅ Mudar semantic.feedback.errorStrong 
       = Atualiza TODOS automaticamente!
```

---

## 🎨 Tematização: Light vs Dark

```
┌─────────────────────────────────────────────────────────────────────┐
│                         LIGHT THEME                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  PRIMITIVE (não muda)            SEMANTIC (muda!)                  │
│  ══════════════════              ═══════════════                   │
│  gray800 = '#333333'    →        text.primary = gray800            │
│  gray500 = '#888888'    →        text.secondary = gray500          │
│  white = '#ffffff'      →        surface.primary = white           │
│  gray100 = '#f7f7f7'    →        surface.secondary = gray100       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

                                    vs

┌─────────────────────────────────────────────────────────────────────┐
│                         DARK THEME                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  PRIMITIVE (não muda)            SEMANTIC (muda!)                  │
│  ══════════════════              ═══════════════                   │
│  gray800 = '#333333'    →        text.primary = white              │
│  gray500 = '#888888'    →        text.secondary = gray400          │
│  white = '#ffffff'      →        surface.primary = gray900         │
│  gray100 = '#f7f7f7'    →        surface.secondary = gray800       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

    COMPONENT TOKENS (não precisam mudar!)
    ═════════════════════════════════════
    button.primary.normal.color = semantic.text.primary
    
    ✅ Mesmo código funciona para ambos os temas!
```

---

## 📊 Comparação: Com vs Sem Semantic Layer

### ❌ SEM Camada Semântica (Antes)

```
PROBLEMA: Decisão duplicada e acoplamento

┌──────────────┐
│  Primitive   │
│  gray800     │
└──────┬───────┘
       │
       ├───────────────────┬──────────────────┬──────────────
       ▼                   ▼                  ▼
  ┌─────────┐        ┌──────────┐       ┌─────────┐
  │ Button  │        │ Checkbox │       │  Text   │
  │ .color  │        │ .text    │       │ .color  │
  └─────────┘        └──────────┘       └─────────┘

⚠️ Problema: Mudar "cor de texto primária"
             = Editar TODOS os componentes!
```

### ✅ COM Camada Semântica (Depois)

```
SOLUÇÃO: Decisão centralizada e desacoplamento

┌──────────────┐
│  Primitive   │
│  gray800     │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│    Semantic      │
│  text.primary    │ ← DECISÃO ÚNICA!
└──────┬───────────┘
       │
       ├───────────────────┬──────────────────┬──────────────
       ▼                   ▼                  ▼
  ┌─────────┐        ┌──────────┐       ┌─────────┐
  │ Button  │        │ Checkbox │       │  Text   │
  │ .color  │        │ .text    │       │ .color  │
  └─────────┘        └──────────┘       └─────────┘

✅ Solução: Mudar semantic.text.primary
            = Atualiza TODOS automaticamente!
```

---

## 🎯 Hierarquia de Uso Visual

```
┌────────────────────────────────────────────────────────────┐
│                   COMO ESCOLHER                            │
└────────────────────────────────────────────────────────────┘

Estou criando um componente do DS?
    │
    ├─ SIM → Use tokens.button / tokens.checkbox / etc.
    │        (CAMADA 3: Component Tokens)
    │        ✅ Mais específico
    │        ✅ Estados já definidos
    │
    └─ NÃO → Estou criando componente customizado?
              │
              ├─ SIM → Use tokens.semantic.*
              │        (CAMADA 2: Semantic Tokens)
              │        ✅ Intenção clara
              │        ✅ Fácil manutenção
              │
              └─ NÃO → Preciso de um valor específico?
                       │
                       └─ Use primitive.* (raro!)
                          (CAMADA 1: Primitive Tokens)
                          ⚠️ Só em casos muito especiais
```

---

## 🚀 Resumo Visual

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│           ARQUITETURA EM 3 CAMADAS - DSZé                  │
│                                                             │
│  Primitive → Semantic → Component → Tamagui                │
│    (raw)   (intenção)  (aplicação)  (valores)             │
│                                                             │
│  ✅ Fonte única de verdade                                 │
│  ✅ Desacoplamento correto                                 │
│  ✅ Fácil manutenção                                       │
│  ✅ Fácil tematização                                      │
│  ✅ Type-safe                                              │
│  ✅ Boas práticas de DS                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

**Veja também:**
- `TOKENS_3_CAMADAS.md` - Arquitetura completa
- `TOKENS_USAGE_EXAMPLES.md` - Exemplos práticos
- `REFATORACAO_TOKENS_SUMMARY.md` - Resumo da refatoração

