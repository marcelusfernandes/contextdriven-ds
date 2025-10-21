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
- **Posição:** (-3529, 1132) [referência Figma]
- **Dimensões:** 3236 × 638 [referência Figma - frame container]

### Variantes Identificadas (82 variantes)

**Estrutura das Variantes:**
- **2 Functions:** Input (radio com label), Single (radio apenas)
- **2 Types:** Unchecked (desmarcado), Checked (marcado) - **SEM indeterminate!**
- **2 Sizes:** Small (ref(primitive.size[36])), Medium (ref(primitive.size[48]))
- **5 States:** Enabled, Hover, Focus, Active/Pressed, Disabled
- **2 Error:** False (normal), True (erro)

#### Dimensões por Function e Size

**Function=Input (com label):**
- Medium: auto width × ref(primitive.size[48])
- Small: auto width × ref(primitive.size[36])

**Function=Single (apenas radio):**
- Medium: ref(primitive.size[24]) × ref(primitive.size[24]) (icon plate)
- Small: ref(primitive.size[20]) × ref(primitive.size[20]) (icon plate)

---

## 🎨 Tokens Extraídos (Variable Definitions)

### Tamanhos (sizes)

#### Input + Medium
```
iconPlate.icon.width: ref(primitive.size[24])
iconPlate.border.radii: ref(primitive.radius[16]) - CIRCULAR!
gap: ref(primitive.space[8])
padding: { 
  vertical: ref(primitive.space[12]), 
  horizontal: ref(primitive.space[12]) 
}
border.radii: ref(primitive.radius[12]) - container
height: ref(primitive.size[48])
```

#### Input + Small
```
iconPlate.icon.width: ref(primitive.size[20])
iconPlate.border.radii: ref(primitive.radius[16]) - CIRCULAR!
gap: ref(primitive.space[8])
padding: { 
  vertical: ref(primitive.space[8]), 
  horizontal: ref(primitive.space[8]) 
}
border.radii: ref(primitive.radius[8]) - container
height: ref(primitive.size[36])
```

#### Single + Medium
```
iconPlate.icon.width: ref(primitive.size[24])
iconPlate.border.radii: ref(primitive.radius[16]) - CIRCULAR!
gap: ref(primitive.space[0])
padding: { 
  vertical: ref(primitive.space[0]), 
  horizontal: ref(primitive.space[0]) 
}
border.radii: ref(primitive.radius[16]) - CIRCULAR!
size: ref(primitive.size[24])
```

#### Single + Small
```
iconPlate.icon.width: ref(primitive.size[20])
iconPlate.border.radii: ref(primitive.radius[16]) - CIRCULAR!
gap: ref(primitive.space[0])
padding: { 
  vertical: ref(primitive.space[0]), 
  horizontal: ref(primitive.space[0]) 
}
border.radii: ref(primitive.radius[16]) - CIRCULAR!
size: ref(primitive.size[20])
```

### Tipografia

#### Medium (Input function)
```
family: ref(primitive.typography.fontFamily.main)
style: Regular
size: ref(primitive.typography.fontSize.medium)
weight: ref(primitive.typography.fontWeight.regular)
lineHeight: ref(primitive.typography.lineHeight.regular.medium)
letterSpacing: ref(primitive.typography.letterSpacing.regular)
```

#### Small (Input function)
```
family: ref(primitive.typography.fontFamily.main)
style: Regular
size: ref(primitive.typography.fontSize.small)
weight: ref(primitive.typography.fontWeight.regular)
lineHeight: ref(primitive.typography.lineHeight.regular.small)
letterSpacing: ref(primitive.typography.letterSpacing.regular)
```

### Estados (styles) - IDÊNTICOS AO CHECKBOX!

Os estados são **exatamente iguais** ao Checkbox:
- Normal: Enabled, Hover, Focus, Active, Disabled
- Error: Enabled, Hover, Focus, Active, Disabled
- Mesmas cores: ref(primitive.color.gray850), ref(primitive.color.gray100), ref(primitive.color.gray800), ref(primitive.color.gray500), ref(primitive.color.redDark), ref(primitive.color.redLightest), ref(primitive.color.redDarkest), etc.

---

## 🔗 Mapeamento para tokens.ts

### Cores Identificadas
**TODAS as cores já existem!** ✅ (adicionadas no Checkbox)
- Mesmas cores que o Checkbox - ref(primitive.color.*)

### Estrutura para tokens.ts

```typescript
radioButton: {
  // Tamanhos (CIRCULAR border radius!)
  size: {
    small: {
      // Function=Input (com label)
      input: {
        height: ref(primitive.size[36]),
        paddingVertical: ref(primitive.space[8]),
        paddingHorizontal: ref(primitive.space[8]),
        borderRadius: ref(primitive.radius[8]),
        gap: ref(primitive.space[8]),
        fontSize: ref(primitive.typography.fontSize.small),
        lineHeight: ref(primitive.typography.lineHeight.regular.small),
        iconPlateSize: ref(primitive.size[20]),
        iconPlateBorderRadius: ref(primitive.radius[16]),  // CIRCULAR!
      },
      // Function=Single (apenas radio)
      single: {
        size: ref(primitive.size[20]),
        borderRadius: ref(primitive.radius[16]),  // CIRCULAR!
      },
    },
    medium: {
      // Function=Input (com label)
      input: {
        height: ref(primitive.size[48]),
        paddingVertical: ref(primitive.space[12]),
        paddingHorizontal: ref(primitive.space[12]),
        borderRadius: ref(primitive.radius[12]),
        gap: ref(primitive.space[8]),
        fontSize: ref(primitive.typography.fontSize.medium),
        lineHeight: ref(primitive.typography.lineHeight.regular.medium),
        iconPlateSize: ref(primitive.size[24]),
        iconPlateBorderRadius: ref(primitive.radius[16]),  // CIRCULAR!
      },
      // Function=Single (apenas radio)
      single: {
        size: ref(primitive.size[24]),
        borderRadius: ref(primitive.radius[16]),  // CIRCULAR!
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
- ✅ Mesmos tamanhos (small: ref(primitive.size[36]), medium: ref(primitive.size[48]))
- ✅ Mesmas dimensões de icon plate (ref(primitive.size[20]), ref(primitive.size[24]))
- ✅ Mesmos espaçamentos e gaps
- ✅ Mesma tipografia

### Diferenças (5%)
- 🆕 **Border Radius CIRCULAR:** ref(primitive.radius[16]) (sempre circular, não quadrado)
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
   - Sempre ref(primitive.radius[16]) (circular) para icon plate
   - Diferente do checkbox que usa ref(primitive.radius[4])/ref(primitive.radius[8]) (quadrado)

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

