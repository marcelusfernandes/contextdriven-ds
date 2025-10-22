# Toggle - Especificação Técnica (Clean)

**Componente:** Toggle (Switch)  
**Figma Node ID:** 5556:15158  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5556-15158  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente

### Variantes Identificadas (40 variantes)

**Estrutura das Variantes:**
- **2 Functions:** Input (toggle com label), Single (toggle apenas)
- **2 Types:** Unchecked (OFF/desligado), Checked (ON/ligado)
- **2 Sizes:** Small, Medium
- **5 States:** Enabled, Hover, Focus, Active/Pressed, Disabled
- **SEM estado Error!** (diferente de Checkbox e Radio Button)

---

## 🎨 Tokens do Componente

### Tamanhos (sizes)

```typescript
token.components.toggle.sizes = {
  small: {
    // Function=Input (com label)
    input: {
      height: tokens.size.component.input.small,        // 36px
      paddingVertical: tokens.space.$1,                 // 4px
      paddingHorizontal: tokens.space.$2,               // 8px
      borderRadius: tokens.radius.medium,               // 8px
      gap: tokens.space.$2,                             // 8px
      fontSize: tokens.typography.fontSize.small,       // 14px
      lineHeight: tokens.typography.lineHeight.regular.small,  // 20px
    },
    // Function=Single (apenas toggle)
    single: {
      trackWidth: tokens.size.toggle.track.small.width,   // 34px
      trackHeight: tokens.size.toggle.track.small.height, // 20px
      trackBorderRadius: tokens.radius.full,              // circular
      thumbSize: tokens.size.toggle.thumb.small,          // 16px
      thumbPadding: tokens.space.$0_5,                    // 2px
    },
  },
  medium: {
    // Function=Input (com label)
    input: {
      height: tokens.size.component.input.medium,       // 48px
      paddingVertical: tokens.space.$2,                 // 8px
      paddingHorizontal: tokens.space.$3,               // 12px
      borderRadius: tokens.radius.large,                // 12px
      gap: tokens.space.$2,                             // 8px
      fontSize: tokens.typography.fontSize.medium,      // 16px
      lineHeight: tokens.typography.lineHeight.regular.medium,  // 24px
    },
    // Function=Single (apenas toggle)
    single: {
      trackWidth: tokens.size.toggle.track.medium.width,   // 41px
      trackHeight: tokens.size.toggle.track.medium.height, // 24px
      trackBorderRadius: tokens.radius.full,               // circular
      thumbSize: tokens.size.toggle.thumb.medium,          // 20px
      thumbPadding: tokens.space.$0_5,                     // 2px
    },
  },
}
```

### Tipografia

```typescript
token.components.toggle.typography = {
  small: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.small,
    fontWeight: tokens.typography.fontWeight.regular,
    lineHeight: tokens.typography.lineHeight.regular.small,
  },
  medium: {
    fontFamily: tokens.typography.fontFamily.main,
    fontSize: tokens.typography.fontSize.medium,
    fontWeight: tokens.typography.fontWeight.regular,
    lineHeight: tokens.typography.lineHeight.regular.medium,
  },
}
```

### Estados - Unchecked (OFF)

```typescript
token.components.toggle.state.unchecked = {
  enabled: {
    trackColor: tokens.color.gray200,
    thumbColor: tokens.color.gray500,
    textColor: tokens.color.text.title,
    bgColor: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  hover: {
    trackColor: tokens.color.gray200,
    thumbColor: tokens.color.gray650,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray100,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  focus: {
    trackColor: tokens.color.gray200,
    thumbColor: tokens.color.gray650,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray200,
    borderColor: tokens.color.gray650,
    borderWidth: 2,
  },
  active: {
    trackColor: tokens.color.gray200,
    thumbColor: tokens.color.gray650,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray200,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  disabled: {
    trackColor: tokens.color.gray200,
    thumbColor: tokens.color.gray500,
    textColor: tokens.color.text.disabled,
    bgColor: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
}
```

### Estados - Checked (ON) - AMARELO! 🟡

```typescript
token.components.toggle.state.checked = {
  enabled: {
    trackColor: tokens.color.brand.primary,        // zeYellow
    thumbColor: tokens.color.white,
    textColor: tokens.color.text.title,
    bgColor: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  hover: {
    trackColor: tokens.color.brand.primary.dark,   // yellowDark
    thumbColor: tokens.color.white,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray100,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  focus: {
    trackColor: tokens.color.brand.primary,        // zeYellow
    thumbColor: tokens.color.white,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray200,
    borderColor: tokens.color.gray650,
    borderWidth: 2,
  },
  active: {
    trackColor: tokens.color.brand.primary.light,  // yellowLight
    thumbColor: tokens.color.white,
    textColor: tokens.color.text.highlight,
    bgColor: tokens.color.gray200,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
  disabled: {
    trackColor: tokens.color.gray200,              // cinza quando disabled
    thumbColor: tokens.color.gray500,
    textColor: tokens.color.text.disabled,
    bgColor: tokens.color.transparent,
    borderColor: tokens.color.transparent,
    borderWidth: 0,
  },
}
```

---

## 🔄 Diferenças em Relação ao Checkbox e Radio Button

### Semelhanças (60%)
- ✅ Mesma estrutura de estados (enabled, hover, focus, active, disabled)
- ✅ Mesmos tamanhos container (small: 36px, medium: 48px)
- ✅ Mesma tipografia
- ✅ Mesmos espaçamentos e gaps

### Diferenças (40%)
- 🆕 **SEM estado Error!** Toggle não tem variante de erro
- 🆕 **Cor amarela quando ON:** Track fica amarelo quando checked
- 🆕 **Thumb (bolinha) deslizante:** Círculo branco que se move
- 🆕 **Track (trilha):** Container do switch
- 🆕 **Animação implícita:** Thumb desliza da esquerda para direita
- 🆕 **Estados diferentes:** Unchecked vs Checked (ao invés de normal vs error)

---

## 🎯 Componente React

### Props Esperadas
```typescript
interface ToggleProps {
  // Visual
  size?: 'small' | 'medium'
  
  // Função (com ou sem label)
  function?: 'input' | 'single'
  label?: string  // Apenas se function='input'
  
  // Estado do toggle (ON/OFF)
  checked?: boolean
  value?: string | boolean
  
  // Callbacks
  onChange?: (checked: boolean) => void
  onFocus?: () => void
  onBlur?: () => void
  
  // Estados
  disabled?: boolean
  // SEM error!
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### 2 Estados Visuais Possíveis

1. **Unchecked (OFF)** (`checked=false`)
   - Track: Cinza
   - Thumb: Cinza, posicionado à esquerda

2. **Checked (ON)** (`checked=true`)
   - Track: Amarelo 🟡
   - Thumb: Branco, posicionado à direita

### Animação do Thumb

- **Position:** Esquerda (OFF) → Direita (ON)
- **Cálculo:** `translateX(trackWidth - thumbSize - padding)`
- **Duração sugerida:** 200-300ms ease-in-out

---

## 📝 Notas de Implementação

1. **Function Input vs Single:**
   - `input`: Toggle com label (clickable area maior)
   - `single`: Apenas toggle switch (tamanho mínimo)

2. **Track (Trilha):**
   - Container do switch
   - Background muda de cinza (OFF) para amarelo (ON)
   - Border radius full (sempre circular)

3. **Thumb (Bolinha):**
   - Círculo que desliza
   - Branco quando ON, cinza quando OFF

4. **Animação:**
   - Usar `Animated.View` (React Native) ou CSS transition (Web)
   - Animar `translateX` do thumb
   - Animar `backgroundColor` do track
   - Duração: 200-300ms

5. **Estados Interativos:**
   - `enabled`: Padrão
   - `hover`: Mouse sobre (track e thumb mais escuros)
   - `focus`: Focado (border no container)
   - `active`: Clicado/pressionado
   - `disabled`: Desabilitado (tudo cinza)

6. **SEM Estado Error:**
   - Toggle não tem variante de erro
   - Sempre usa estado "normal"
   - Validação deve ser externa

7. **Acessibilidade:**
   - `role="switch"`
   - `aria-checked="true" | "false"`
   - `aria-disabled` quando disabled
   - `aria-label` para descrever a função

---

## 🔗 Tokens Necessários

### Novos Tokens de Cor
```typescript
tokens.color.brand.primary.dark   // yellowDark (hover do ON)
tokens.color.brand.primary.light  // yellowLight (active do ON)
```

### Tokens Existentes Utilizados
```typescript
// Cores
tokens.color.brand.primary        // zeYellow
tokens.color.white
tokens.color.gray100
tokens.color.gray200
tokens.color.gray500
tokens.color.gray650
tokens.color.text.title
tokens.color.text.highlight
tokens.color.text.disabled
tokens.color.transparent

// Espaçamentos
tokens.space.$0_5     // 2px
tokens.space.$1       // 4px
tokens.space.$2       // 8px
tokens.space.$3       // 12px

// Radius
tokens.radius.medium  // 8px
tokens.radius.large   // 12px
tokens.radius.full    // circular

// Tamanhos
tokens.size.toggle.track.small.width
tokens.size.toggle.track.small.height
tokens.size.toggle.track.medium.width
tokens.size.toggle.track.medium.height
tokens.size.toggle.thumb.small
tokens.size.toggle.thumb.medium
```

---

**40 variantes! Switch ON/OFF com animação deslizante! 🔛**

