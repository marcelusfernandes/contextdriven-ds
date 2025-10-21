# RadioButton - Especificação Técnica

**Componente:** Radio Buttons  
**Figma Node ID:** 5555:39003  
**Figma URL:** https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5555-39003  
**Data de Extração:** 08/10/2025

---

## 📊 Estrutura do Componente (Metadata Extraído)

### Frame Principal
- **ID:** 5555:39003
- **Nome:** Radio Buttons 🔵
- **Posição:** (-3529, 1132)
- **Dimensões:** 3236 × 638

### Variantes Identificadas (82 variantes)

**Estrutura das Variantes:**
- **2 Functions:** Input (radio com label), Single (radio apenas)
- **2 Types:** Unchecked (desmarcado), Checked (marcado) - **SEM indeterminate!**
- **2 Sizes:** Small (36px height), Medium (48px height)
- **5 States:** Enabled, Hover, Focus, Active/Pressed, Disabled
- **2 Error:** False (normal), True (erro)

#### Dimensões por Function e Size

**Function=Input (com label):**
- Medium: 123 × 48px
- Small: 103 × 36px

**Function=Single (apenas radio):**
- Medium: 24 × 24px (icon plate)
- Small: 20 × 20px (icon plate)

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (sizes)

#### Input + Medium
```
iconPlate.icon.width: 24
iconPlate.border.radii: 16 (todos os cantos) - CIRCULAR!
gap: 8
padding: { left: 12, top: 12, right: 12, bottom: 12 }
border.radii: 12 (todos os cantos) - container
```

#### Input + Small
```
iconPlate.icon.width: 20
iconPlate.border.radii: 16 (todos os cantos) - CIRCULAR!
gap: 8
padding: { left: 8, top: 8, right: 8, bottom: 8 }
border.radii: 8 (todos os cantos) - container
```

#### Single + Medium
```
iconPlate.icon.width: 24
iconPlate.border.radii: 16 (todos os cantos) - CIRCULAR!
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 16 (todos os cantos) - CIRCULAR!
```

#### Single + Small
```
iconPlate.icon.width: 20
iconPlate.border.radii: 16 (todos os cantos) - CIRCULAR!
gap: 0
padding: { left: 0, top: 0, right: 0, bottom: 0 }
border.radii: 16 (todos os cantos) - CIRCULAR!
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

### Estados (styles) - IDÊNTICOS AO CHECKBOX!

Os estados são **exatamente iguais** ao Checkbox:
- Normal: Enabled, Hover, Focus, Active, Disabled
- Error: Enabled, Hover, Focus, Active, Disabled
- Mesmas cores: gray850, gray100, gray800, gray500, redDark, redLightest, redDarkest, etc.

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
**TODAS as cores já existem!** ✅ (adicionadas no Checkbox)
- Mesmas cores que o Checkbox

### Estrutura para tokens.ts

```typescript
radioButton: {
  // Tamanhos (CIRCULAR border radius!)
  size: {
    small: {
      // Function=Input (com label)
      input: {
        height: 36,
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 8,
        gap: 8,
        fontSize: 14,
        lineHeight: 20,
        iconPlateSize: 20,
        iconPlateBorderRadius: 16,  // CIRCULAR!
      },
      // Function=Single (apenas radio)
      single: {
        size: 20,
        borderRadius: 16,  // CIRCULAR!
      },
    },
    medium: {
      // Function=Input (com label)
      input: {
        height: 48,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 12,
        gap: 8,
        fontSize: 16,
        lineHeight: 24,
        iconPlateSize: 24,
        iconPlateBorderRadius: 16,  // CIRCULAR!
      },
      // Function=Single (apenas radio)
      single: {
        size: 24,
        borderRadius: 16,  // CIRCULAR!
      },
    },
  },
  
  // Estados (REUTILIZA 100% do checkbox!)
  state: {
    // Mesma estrutura do checkbox.state
    normal: { enabled, hover, focus, active, disabled },
    error: { enabled, hover, focus, active, disabled },
  },
}
```

---

## 🔄 Diferenças em Relação ao Checkbox

### Semelhanças (95%)
- ✅ Mesma estrutura de estados (normal/error × estados interativos)
- ✅ Mesmas cores em todos os estados
- ✅ Mesmos tamanhos (small: 36px, medium: 48px)
- ✅ Mesmas dimensões de icon plate (20px, 24px)
- ✅ Mesmos espaçamentos e gaps
- ✅ Mesma tipografia

### Diferenças (5%)
- 🆕 **Border Radius CIRCULAR:** 16px (sempre circular, não quadrado)
- 🆕 **Sem Indeterminate:** Apenas 2 estados (unchecked, checked)
- 🆕 **Ícones diferentes:** Radio circles ao invés de checkboxes
- 🆕 **Comportamento:** Seleção única (não múltipla)

---

## 🎯 Componente React

### Props Esperadas
```typescript
interface RadioButtonProps {
  // Visual
  size?: 'small' | 'medium'
  
  // Função (com ou sem label)
  function?: 'input' | 'single'
  label?: string  // Apenas se function='input'
  
  // Estado do radio (seleção única)
  checked?: boolean
  value?: string  // Valor do radio no grupo
  name?: string   // Nome do grupo (para agrupar radios)
  
  // Callbacks
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  
  // Estados
  error?: boolean
  disabled?: boolean
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
}
```

### 2 Estados Visuais Possíveis

1. **Unchecked** (`checked=false`)
   - Ícone: Círculo vazio

2. **Checked** (`checked=true`)
   - Ícone: Círculo com ponto central preenchido

### Ícones Necessários

- **Unchecked:** `RadioButtonOutlinedUnchecked` - Círculo vazio
- **Checked:** `RadioButtonFilledChecked` - Círculo preenchido com ponto central

---

## 🎯 Componente Tamagui

```typescript
// Exemplo de uso em grupo
<RadioGroup value={selected} onValueChange={setSelected}>
  <RadioButton
    size="medium"
    function="input"
    label="Opção 1"
    value="option1"
    name="group1"
  />
  <RadioButton
    size="medium"
    function="input"
    label="Opção 2"
    value="option2"
    name="group1"
  />
</RadioGroup>

// Radio single (apenas ícone)
<RadioButton
  size="small"
  function="single"
  checked={selected}
  value="value1"
/>
```

---

## 📝 Notas de Implementação

1. **Function Input vs Single:**
   - `input`: Radio com label (clickable area maior)
   - `single`: Apenas radio (tamanho mínimo)

2. **Border Radius Circular:**
   - Sempre 16px (circular) para icon plate
   - Diferente do checkbox que usa 4px/8px (quadrado)

3. **Seleção Única:**
   - Radios com mesmo `name` funcionam como grupo
   - Apenas um pode ser selecionado por vez
   - Comportamento diferente do checkbox (seleção múltipla)

4. **Estados Interativos:**
   - `enabled`: Padrão
   - `hover`: Mouse sobre
   - `focus`: Focado (teclado)
   - `active`: Clicado/pressionado
   - `disabled`: Desabilitado (sem interação)

5. **Error State:**
   - Muda cores do ícone, texto e backgrounds
   - Mantém mesmos estados interativos

6. **Acessibilidade:**
   - `role="radio"`
   - `aria-checked="true" | "false"`
   - `aria-disabled` quando disabled
   - `aria-invalid` quando error

---

**82 variantes! Componente de seleção única com border radius circular! 🎯**

