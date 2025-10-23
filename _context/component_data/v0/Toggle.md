# Toggle - Especificação Técnica

**Componente:** Toggle (Switch)  
**Figma Node ID:** 5556:15158  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5556-15158  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 5556:15158
- **Nome:** Toggle 🔵
- **Posição:** (-3581, 731)
- **Dimensões:** 1659 × 476

### Variantes Identificadas (40 variantes)

**Estrutura das Variantes:**
- **2 Functions:** Input (toggle com label), Single (toggle apenas)
- **2 Types:** Unchecked (OFF/desligado), Checked (ON/ligado)
- **2 Sizes:** Small (36px height), Medium (48px height)
- **5 States:** Enabled, Hover, Focus, Active/Pressed, Disabled
- **SEM estado Error!** (diferente de Checkbox e Radio Button)

#### Dimensões por Function e Size

**Function=Input (com label):**
- Medium: 148 × 48px
- Small: 125.17 × 36px

**Function=Single (apenas toggle switch):**
- Medium: 41 × 24px (track do switch)
- Small: 34.17 × 20px (track do switch)

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (sizes)

#### Input + Medium
```
iconPlate.padding: { left: 4, top: 4, right: 4, bottom: 4 }
gap: 8
padding: { left: 12, top: 8, right: 12, bottom: 8 }
border.radii: 12 (todos os cantos)
```

#### Input + Small
```
gap: 8
padding: { left: 8, top: 4, right: 8, bottom: 4 }
border.radii: 8 (todos os cantos)
```

#### Single + Medium
```
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 16 (todos os cantos) - CIRCULAR track!
track: 41 × 24px
thumb: 20px (calculado: 24 - 4 padding)
```

#### Single + Small
```
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 16 (todos os cantos) - CIRCULAR track!
track: 34.17 × 20px
thumb: 16px (calculado: 20 - 4 padding)
```

### Tipografia

#### Medium (Input function)
```
family: "Roboto Flex"
style: Regular
size: 16
weight: 400
lineHeight: 24
letterSpacing: 0
```

#### Small (Input function)
```
family: "Roboto Flex"
style: Regular
size: 14
weight: 400
lineHeight: 20
letterSpacing: 0
```

### Estados (styles) - APENAS NORMAL! (sem error)

**Estados Unchecked (OFF):**
```
enabled:
  iconPlate.icon.color: (não aplicável - thumb sem ícone)
  iconPlate.border.color: #33333300 (transparent)
  text.color: #333333 (gray800)
  bg.color: #33333300 (transparent)
  border.color: #33333300 (transparent)
  track.color: #eeeeee (gray200 - cinza claro)
  thumb.color: #888888 (gray500 - cinza médio)

hover:
  iconPlate.icon.color: #111111 (gray850)
  iconPlate.border.color: #33333300 (transparent)
  text.color: #111111 (gray850)
  bg.color: #f7f7f7 (gray100)
  border.color: #33333300 (transparent)
  track.color: #eeeeee (gray200)
  thumb.color: #555555 (gray650 - mais escuro)

focus:
  iconPlate.icon.color: #111111 (gray850)
  iconPlate.border.color: #33333300 (transparent)
  text.color: #111111 (gray850)
  bg.color: #eeeeee (gray200)
  border.color: #555555 (gray650)
  track.color: #eeeeee (gray200)
  thumb.color: #555555 (gray650)

active:
  iconPlate.icon.color: #111111 (gray850)
  iconPlate.border.color: #33333300 (transparent)
  text.color: #111111 (gray850)
  bg.color: #eeeeee (gray200)
  border.color: #33333300 (transparent)
  track.color: #eeeeee (gray200)
  thumb.color: #555555 (gray650)

disabled:
  iconPlate.icon.color: #888888 (gray500)
  iconPlate.border.color: #33333300 (transparent)
  text.color: #888888 (gray500)
  bg.color: #33333300 (transparent)
  border.color: #33333300 (transparent)
  track.color: #eeeeee (gray200 - fica cinza)
  thumb.color: #888888 (gray500)
```

**Estados Checked (ON):**
```
enabled:
  track.color: #ffcc00 (zeYellow - AMARELO quando ON! 🟡)
  thumb.color: #ffffff (white - bolinha branca)
  text.color: #333333 (gray800)
  bg.color: #33333300 (transparent)
  border.color: #33333300 (transparent)

hover:
  track.color: #e6b800 (yellowDark - amarelo mais escuro)
  thumb.color: #ffffff (white)
  text.color: #111111 (gray850)
  bg.color: #f7f7f7 (gray100)
  border.color: #33333300 (transparent)

focus:
  track.color: #ffcc00 (zeYellow)
  thumb.color: #ffffff (white)
  text.color: #111111 (gray850)
  bg.color: #eeeeee (gray200)
  border.color: #555555 (gray650)

active:
  track.color: #ffe066 (yellowLight - amarelo mais claro ao clicar)
  thumb.color: #ffffff (white)
  text.color: #111111 (gray850)
  bg.color: #eeeeee (gray200)
  border.color: #33333300 (transparent)

disabled:
  track.color: #eeeeee (gray200 - fica cinza igual unchecked)
  thumb.color: #888888 (gray500 - cinza)
  text.color: #888888 (gray500)
  bg.color: #33333300 (transparent)
  border.color: #33333300 (transparent)
```

---

## 🔗 Mapeamento para tokens.ts

### Cores Novas Identificadas

- **`yellowDark` (#e6b800)** - Amarelo escuro (hover do ON) 🆕
- **`yellowLight` (#ffe066)** - Amarelo claro (active do ON) 🆕

**Observação:** As outras cores já existem (`zeYellow`, `white`, `gray*`).

### Estrutura para tokens.ts

```typescript
toggle: {
  // Tamanhos (track do switch)
  size: {
    small: {
      // Function=Input (com label)
      input: {
        height: 36,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        gap: 8,
        fontSize: 14,
        lineHeight: 20,
        trackWidth: 34,
        trackHeight: 20,
        trackBorderRadius: 16,  // CIRCULAR
        thumbSize: 16,
        thumbPadding: 2,
      },
      // Function=Single (apenas toggle)
      single: {
        trackWidth: 34,
        trackHeight: 20,
        trackBorderRadius: 16,  // CIRCULAR
        thumbSize: 16,
        thumbPadding: 2,
      },
    },
    medium: {
      // Function=Input (com label)
      input: {
        height: 48,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        gap: 8,
        fontSize: 16,
        lineHeight: 24,
        trackWidth: 41,
        trackHeight: 24,
        trackBorderRadius: 16,  // CIRCULAR
        thumbSize: 20,
        thumbPadding: 2,
      },
      // Function=Single (apenas toggle)
      single: {
        trackWidth: 41,
        trackHeight: 24,
        trackBorderRadius: 16,  // CIRCULAR
        thumbSize: 20,
        thumbPadding: 2,
      },
    },
  },
  
  // Estados (APENAS normal, SEM error!)
  state: {
    // Unchecked (OFF)
    unchecked: {
      enabled: {
        trackColor: '#eeeeee',    // gray200
        thumbColor: '#888888',    // gray500
        textColor: '#333333',     // gray800
        bgColor: '#33333300',     // transparent
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      hover: {
        trackColor: '#eeeeee',    // gray200
        thumbColor: '#555555',    // gray650 (mais escuro)
        textColor: '#111111',     // gray850
        bgColor: '#f7f7f7',       // gray100
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      focus: {
        trackColor: '#eeeeee',    // gray200
        thumbColor: '#555555',    // gray650
        textColor: '#111111',     // gray850
        bgColor: '#eeeeee',       // gray200
        borderColor: '#555555',   // gray650
        borderWidth: 2,
      },
      active: {
        trackColor: '#eeeeee',    // gray200
        thumbColor: '#555555',    // gray650
        textColor: '#111111',     // gray850
        bgColor: '#eeeeee',       // gray200
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      disabled: {
        trackColor: '#eeeeee',    // gray200
        thumbColor: '#888888',    // gray500
        textColor: '#888888',     // gray500
        bgColor: '#33333300',     // transparent
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
    },
    
    // Checked (ON) - AMARELO! 🟡
    checked: {
      enabled: {
        trackColor: '#ffcc00',    // zeYellow (AMARELO!)
        thumbColor: '#ffffff',    // white
        textColor: '#333333',     // gray800
        bgColor: '#33333300',     // transparent
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      hover: {
        trackColor: '#e6b800',    // yellowDark (🆕)
        thumbColor: '#ffffff',    // white
        textColor: '#111111',     // gray850
        bgColor: '#f7f7f7',       // gray100
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      focus: {
        trackColor: '#ffcc00',    // zeYellow
        thumbColor: '#ffffff',    // white
        textColor: '#111111',     // gray850
        bgColor: '#eeeeee',       // gray200
        borderColor: '#555555',   // gray650
        borderWidth: 2,
      },
      active: {
        trackColor: '#ffe066',    // yellowLight (🆕)
        thumbColor: '#ffffff',    // white
        textColor: '#111111',     // gray850
        bgColor: '#eeeeee',       // gray200
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
      disabled: {
        trackColor: '#eeeeee',    // gray200 (cinza quando disabled)
        thumbColor: '#888888',    // gray500
        textColor: '#888888',     // gray500
        bgColor: '#33333300',     // transparent
        borderColor: '#33333300', // transparent
        borderWidth: 0,
      },
    },
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
- 🆕 **Cor amarela quando ON:** Track fica amarelo `#ffcc00` quando checked
- 🆕 **Thumb (bolinha) deslizante:** Círculo branco que se move
- 🆕 **Track (trilha):** Container do switch (41×24px ou 34×20px)
- 🆕 **Animação implícita:** Thumb desliza da esquerda para direita
- 🆕 **Estados diferentes:** Unchecked vs Checked (ao invés de normal vs error)
- 🆕 **2 novas cores:** `yellowDark` (#e6b800), `yellowLight` (#ffe066)

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
   - Track: Cinza `#eeeeee`
   - Thumb: Cinza `#888888`, posicionado à esquerda

2. **Checked (ON)** (`checked=true`)
   - Track: Amarelo `#ffcc00` 🟡
   - Thumb: Branco `#ffffff`, posicionado à direita

### Animação do Thumb

- **Position:** Esquerda (OFF) → Direita (ON)
- **Cálculo:** `translateX(trackWidth - thumbSize - padding)`
- **Duração sugerida:** 200-300ms ease-in-out

---

## 🎯 Componente Tamagui

```typescript
// Exemplo de uso
<Toggle
  size="medium"
  function="input"
  label="Notificações"
  checked={isEnabled}
  onChange={setIsEnabled}
/>

// Toggle single (apenas switch)
<Toggle
  size="small"
  function="single"
  checked={isActive}
  onChange={setIsActive}
/>
```

---

## 📝 Notas de Implementação

1. **Function Input vs Single:**
   - `input`: Toggle com label (clickable area maior)
   - `single`: Apenas toggle switch (tamanho mínimo)

2. **Track (Trilha):**
   - Container do switch
   - Background muda de cinza (OFF) para amarelo (ON)
   - Border radius 16px (sempre circular)

3. **Thumb (Bolinha):**
   - Círculo que desliza
   - Branco quando ON, cinza quando OFF
   - Tamanho: 20px (medium), 16px (small)
   - Padding interno: 2px

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

8. **Cores Especiais:**
   - Amarelo `#ffcc00` é a cor da marca Zé Delivery
   - Indica "ativo" / "ligado" / "habilitado"
   - Hover: Amarelo mais escuro `#e6b800`
   - Active: Amarelo mais claro `#ffe066`

---

**40 variantes! Switch ON/OFF com animação deslizante! 🔛**

