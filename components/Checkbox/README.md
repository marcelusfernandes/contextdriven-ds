# Checkbox Component

Componente de checkbox do Design System Zé com 108 variantes possíveis.

## 📊 Especificações

- **Figma Node ID:** 22:612
- **Data de Extração:** 08/10/2025
- **Variantes:** 108 combinações possíveis

### Estrutura das Variantes

- **2 Functions:** Input (checkbox com label), Single (checkbox apenas)
- **3 Types:** Unchecked, Checked, Indeterminate
- **2 Sizes:** Small (36px height), Medium (48px height)
- **5 States:** Enabled, Hover, Focus, Active, Disabled
- **2 Error:** False (normal), True (erro)

## 🎯 Uso Básico

```tsx
import { Checkbox } from './components/Checkbox'

function App() {
  const [accepted, setAccepted] = useState(false)

  return (
    <Checkbox
      label="Aceito os termos e condições"
      checked={accepted}
      onChange={setAccepted}
    />
  )
}
```

## 📐 Props

### Visual

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do checkbox |
| `function` | `'input' \| 'single'` | `'input'` | Tipo (com ou sem label) |
| `label` | `string` | - | Texto do label (apenas function="input") |

### Estado

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `checked` | `boolean` | `false` | Estado de seleção |
| `indeterminate` | `boolean` | `false` | Estado parcialmente selecionado |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Estado desabilitado |

### Callbacks

| Prop | Tipo | Descrição |
|------|------|-----------|
| `onChange` | `(checked: boolean) => void` | Callback ao mudar estado |
| `onFocus` | `() => void` | Callback ao receber foco |
| `onBlur` | `() => void` | Callback ao perder foco |

### Acessibilidade

| Prop | Tipo | Descrição |
|------|------|-----------|
| `accessibilityLabel` | `string` | Label para screen readers |
| `testID` | `string` | ID para testes |
| `id` | `string` | ID HTML do elemento |
| `name` | `string` | Nome do input |

## 💡 Exemplos

### Checkbox com Label

```tsx
<Checkbox
  size="medium"
  label="Aceito os termos"
  checked={accepted}
  onChange={setAccepted}
/>
```

### Checkbox Simples (Single)

```tsx
<Checkbox
  function="single"
  size="small"
  checked={selected}
  onChange={setSelected}
/>
```

### Estado Indeterminado

Usado para "Selecionar todos" quando alguns itens estão selecionados:

```tsx
const [items, setItems] = useState([false, false, false])
const allChecked = items.every(Boolean)
const someChecked = items.some(Boolean) && !allChecked

<Checkbox
  label="Selecionar todos"
  checked={allChecked}
  indeterminate={someChecked}
  onChange={() => {
    const newValue = !allChecked
    setItems([newValue, newValue, newValue])
  }}
/>
```

### Checkbox com Erro

```tsx
<Checkbox
  label="Campo obrigatório"
  checked={value}
  onChange={setValue}
  error={!value && submitted}
/>
```

### Lista de Checkboxes

```tsx
const [selected, setSelected] = useState<string[]>([])

const options = [
  { id: 'cerveja', label: 'Cerveja' },
  { id: 'refrigerante', label: 'Refrigerante' },
  { id: 'agua', label: 'Água' },
]

{options.map(option => (
  <Checkbox
    key={option.id}
    label={option.label}
    checked={selected.includes(option.id)}
    onChange={() => {
      setSelected(prev =>
        prev.includes(option.id)
          ? prev.filter(item => item !== id)
          : [...prev, option.id]
      )
    }}
  />
))}
```

## 🎨 Tamanhos

### Medium (Padrão)
- **Input:** 123 × 48px (com label)
- **Single:** 24 × 24px (apenas checkbox)
- **Icon Plate:** 24px
- **Font Size:** 16px
- **Line Height:** 24px

### Small
- **Input:** 103 × 36px (com label)
- **Single:** 20 × 20px (apenas checkbox)
- **Icon Plate:** 20px
- **Font Size:** 14px
- **Line Height:** 20px

## 🎭 Estados Visuais

### 3 Estados Possíveis

1. **Unchecked** (`checked=false, indeterminate=false`)
   - Quadrado vazio

2. **Checked** (`checked=true, indeterminate=false`)
   - Checkmark (✓)

3. **Indeterminate** (`indeterminate=true`)
   - Traço/menos (−)
   - Tem prioridade sobre `checked`

### Estados Interativos

- **Enabled:** Estado padrão
- **Hover:** Mouse sobre o checkbox
- **Focus:** Focado (navegação por teclado)
- **Active:** Clicado/pressionado
- **Disabled:** Desabilitado (sem interação)

### Estados de Validação

- **Normal:** Sem erro (cores cinza)
- **Error:** Com erro (cores vermelhas)

## ♿ Acessibilidade

O componente implementa as melhores práticas de acessibilidade:

- ✅ `role="checkbox"`
- ✅ `aria-checked="true" | "false" | "mixed"` (mixed = indeterminate)
- ✅ `aria-disabled` quando disabled
- ✅ `aria-invalid` quando error
- ✅ Suporte completo a navegação por teclado (Tab, Space, Enter)
- ✅ Estados visuais claros (hover, focus, active)
- ✅ Cursor apropriado (pointer normal, not-allowed quando disabled)

## 🎯 Tokens Utilizados

O componente utiliza os seguintes tokens do Design System:

### Cores
- `gray850`, `gray800`, `gray650`, `gray500`, `gray300`, `gray200`, `gray100`
- `redDark`, `redLight`, `redLightest`, `redDarkest`
- `black`, `white`, `transparent`

### Espaçamento
- `space[8]`, `space[12]`

### Tamanhos
- `size[20]`, `size[24]`

### Border Radius
- `radius[4]`, `radius[8]`, `radius[12]`

### Tipografia
- `typography.fontFamily.body`
- `typography.fontSize.small` (14px), `typography.fontSize.medium` (16px)
- `typography.lineHeight.regular.small` (20px), `typography.lineHeight.regular.medium` (24px)

## 🔗 Links

- [Figma - Checkbox Component](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=22-612)
- [Especificação Técnica](./Checkbox-clean.md)
- [Storybook Stories](./Checkbox.stories.tsx)

## 📝 Notas

### Function Input vs Single

- **input:** Checkbox com label (área clicável maior)
- **single:** Apenas checkbox (tamanho mínimo, sem label)

### Indeterminate State

- Estado especial para seleção parcial
- Usado em hierarquias (ex: "Selecionar todos" com alguns itens marcados)
- Tem prioridade sobre `checked`
- Quando `indeterminate=true`, o prop `checked` é ignorado visualmente

### Icon Plate

- Container visual do ícone do checkbox
- Pode ter borda nos estados hover, focus e active
- Border radius menor que o container principal

### Comportamento de Erro

- Muda cores do ícone, texto e backgrounds
- Mantém os mesmos estados interativos
- Estado disabled sobrepõe estado error (disabled + error = visual disabled)

## 🚀 Performance

- Componente otimizado com `React.forwardRef`
- Estados gerenciados localmente (hover, focus, active)
- Ícones SVG inline para melhor performance
- Type-safe com TypeScript

