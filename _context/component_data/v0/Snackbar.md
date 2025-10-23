# Snackbar - Especificação Técnica

**Componente:** Snackbar (Toast/Notification)  
**Figma Node ID:** 8231-335  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=8231-335  
**Data de Extração:** 13/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 8231:335
- **Nome:** Snackbars [New] ⚪️
- **Posição:** (-8154, 2887)
- **Dimensões:** 1600 × 970

### Variantes Identificadas

**Total:** 16 variantes (4 feedback × 2 lines × 2 action types)

| Node ID | Nome da Variante | Posição (x,y) | Dimensões (w×h) |
|---------|------------------|---------------|-----------------|
| 8231:330 | Feedback=Success, Lines Title=One, Action Type=Dismiss | (61, 55) | 328 × 124 |
| 8236:265 | Feedback=Informative, Lines Title=One, Action Type=Dismiss | (61, 296) | 328 × 124 |
| 8236:355 | Feedback=Warning, Lines Title=One, Action Type=Dismiss | (61, 537) | 328 × 124 |
| 8236:479 | Feedback=Error, Lines Title=One, Action Type=Dismiss | (61, 778) | 328 × 124 |
| 8236:221 | Feedback=Success, Lines Title=Two, Action Type=Dismiss | (413, 55) | 328 × 136 |
| 8236:277 | Feedback=Informative, Lines Title=Two, Action Type=Dismiss | (413, 296) | 328 × 136 |
| 8236:367 | Feedback=Warning, Lines Title=Two, Action Type=Dismiss | (413, 537) | 328 × 136 |
| 8236:467 | Feedback=Error, Lines Title=Two, Action Type=Dismiss | (413, 778) | 328 × 136 |
| 8231:336 | Feedback=Success, Lines Title=One, Action Type=Button | (836, 55) | 328 × 124 |
| 8236:289 | Feedback=Informative, Lines Title=One, Action Type=Button | (836, 296) | 328 × 124 |
| 8236:379 | Feedback=Warning, Lines Title=One, Action Type=Button | (836, 537) | 328 × 124 |
| 8236:455 | Feedback=Error, Lines Title=One, Action Type=Button | (836, 778) | 328 × 124 |
| 8236:233 | Feedback=Success, Lines Title=Two, Action Type=Button | (1188, 55) | 328 × 136 |
| 8236:301 | Feedback=Informative, Lines Title=Two, Action Type=Button | (1188, 296) | 328 × 136 |
| 8236:391 | Feedback=Warning, Lines Title=Two, Action Type=Button | (1188, 537) | 328 × 136 |
| 8236:443 | Feedback=Error, Lines Title=Two, Action Type=Button | (1188, 778) | 328 × 136 |

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Cores de Feedback

#### Success (Verde)
```typescript
background: '#2c855f'
border: '#1f5d42'
txtOn: '#ffffff'
```

#### Informative (Azul/Ciano)
```typescript
background: '#10a8c7'
border: '#0c5a6a'
txtOn: '#000000'
```

#### Warning (Laranja)
```typescript
background: '#eb8207'
border: '#bc6806'
txtOn: '#000000'
```

#### Error/Danger (Vermelho)
```typescript
background: '#e91935'
border: '#bc1229'
txtOn: '#ffffff'
```

### Tipografia

#### Title (Título do Snackbar)
```typescript
fontFamily: 'Roboto Flex'
fontWeight: 700 (Bold)
fontSize: 16
lineHeight: 24
letterSpacing: 0
```

#### Body (Descrição/Subtitle do Snackbar)
```typescript
fontFamily: 'Roboto Flex'
fontWeight: 400 (Regular)
fontSize: 16
lineHeight: 24
letterSpacing: 0
```

### Espaçamentos

```typescript
extraSmall: 8
medium: 16
micro: 4
```

### Border Radius

```typescript
medium: 16
```

### Dimensões

```typescript
small: 12
nano: 2
zero: 0
```

### Opacidade

```typescript
superTransparent: '#3333331a' (10% alpha)
```

### DismissButton Tokens (Usado no Snackbar)

```typescript
icon: {
  color: {
    normal: '#333333'
  },
  width: 24,
  height: 24
}
gap: 0
padding: {
  left: 4,
  top: 4,
  right: 4,
  bottom: 4
}
border: {
  radii: 116, // circular
  width: 0
}
background: {
  color: {
    normal: '#3333331a' // 10% alpha
  }
}
```

### Button Tokens (Usado no Snackbar Action)

```typescript
secondary: {
  label: {
    color: {
      normal: '#333333'
    }
  },
  border: {
    width: 1,
    color: {
      normal: '#1c1c1f'
    }
  },
  background: {
    color: {
      normal: '#33333300' // transparente
    }
  }
}
small: {
  gap: 8,
  padding: {
    left: 16,
    top: 8,
    right: 16,
    bottom: 8
  },
  border: {
    radii: 12
  },
  minWidth: 44
}
```

---

## 📐 Dimensões Extraídas das Variantes

### Altura por Lines Title
- **One Line:** 124px
- **Two Lines:** 136px
- **Diferença:** 12px (altura extra para segunda linha)

### Largura
- **Fixa:** 328px (todas as variantes)

### Estrutura Visual Observada
- Ícone à esquerda (24×24px)
- Conteúdo central (título + descrição opcional)
- Ação à direita (DismissButton ou Button)
- Padding interno: 16px
- Gap entre elementos: 8px-16px

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

**Feedback Success:**
- `#2c855f` - Background success
- `#1f5d42` - Border success

**Feedback Info:**
- `#10a8c7` - Background info
- `#0c5a6a` - Border info

**Feedback Warning:**
- `#eb8207` - Background warning
- `#bc6806` - Border warning

**Feedback Error:**
- `#e91935` - Background error (já existe como `zeRed`)
- `#bc1229` - Border error

**Observação:** Algumas cores já existem em `tokens.ts`, mas precisam ser verificadas.

### Estrutura Adicionada em tokens.ts

```typescript
snackbar: {
  size: {
    oneLine: {
      height: 124,
      width: 328,
    },
    twoLines: {
      height: 136,
      width: 328,
    },
    icon: {
      width: 24,
      height: 24,
    },
  },
  spacing: {
    padding: 16,
    gap: 8,
  },
  borderRadius: 16,
  
  feedback: {
    success: {
      background: '#2c855f',
      border: '#1f5d42',
      textColor: '#ffffff',
    },
    informative: {
      background: '#10a8c7',
      border: '#0c5a6a',
      textColor: '#000000',
    },
    warning: {
      background: '#eb8207',
      border: '#bc6806',
      textColor: '#000000',
    },
    error: {
      background: '#e91935',
      border: '#bc1229',
      textColor: '#ffffff',
    },
  },
  
  typography: {
    title: {
      fontFamily: 'Roboto Flex',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 24,
    },
    body: {
      fontFamily: 'Roboto Flex',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 24,
    },
  },
}
```

---

## 🏗️ Estrutura de Componente

### Anatomia do Snackbar

```
┌─────────────────────────────────────────────┐
│ [Icon] Title Text                    [Action] │
│        Optional description text             │
└─────────────────────────────────────────────┘
```

### Elementos:
1. **Leading Icon** (24×24px) - Ícone de feedback (check, info, warning, error)
2. **Content Area**
   - **Title** (obrigatório) - Texto principal
   - **Description** (opcional) - Texto secundário
3. **Trailing Action**
   - **Dismiss Button** - Botão X para fechar
   - **Action Button** - Botão de ação customizado

### Variantes de Props

```typescript
feedback: 'success' | 'informative' | 'warning' | 'error'
lines: 'one' | 'two'
actionType: 'dismiss' | 'button'
```

---

## 📝 Notas de Implementação

### Usar Toast do Tamagui

O componente deve ser implementado usando o sistema `Toast` do Tamagui:
- `@tamagui/toast`
- API composable: `ToastProvider`, `ToastViewport`, `Toast.Title`, `Toast.Description`, `Toast.Action`, `Toast.Close`

### Dependências

- **Icon**: Para ícones de feedback (check-circle, info-circle, warning, error)
- **DismissButton**: Para ação de fechar (já implementado)
- **Button**: Para ação customizada (já implementado)

### Estados

- **Normal**: Estado padrão
- **Hover**: Hover sobre ação (web)
- **Press**: Press na ação (mobile)
- **Entering**: Animação de entrada
- **Exiting**: Animação de saída

### Animações Esperadas

- Slide in from top/bottom
- Fade in/out
- Duração padrão: 3-5 segundos (auto-dismiss)
- Swipe to dismiss (mobile)

---

## 🎯 Casos de Uso

1. **Success Notification** - "Pedido realizado com sucesso!"
2. **Info Notification** - "Nova atualização disponível"
3. **Warning Notification** - "Sua sessão expira em 5 minutos"
4. **Error Notification** - "Erro ao processar pagamento"

---

## ✅ Checklist de Implementação

- [ ] Adicionar tokens novos em `tokens.ts`
- [ ] Criar seção `snackbar` em `tokens.ts`
- [ ] Implementar componente base com `Toast` do Tamagui
- [ ] Implementar 16 variantes
- [ ] Adicionar ícones de feedback
- [ ] Integrar DismissButton e Button
- [ ] Criar helper `useSnackbar()` para API simplificada
- [ ] Criar Storybook stories
- [ ] Testar animações
- [ ] Testar auto-dismiss
- [ ] Testar em mobile e web

---

**Observações Finais:**
- Componente usa tokens de DismissButton e Button já existentes
- Cores de feedback são novas e específicas do Snackbar
- Tipografia usa Roboto Flex Bold (título) e Regular (descrição)
- Dimensões fixas: 328px largura, altura variável conforme linhas

