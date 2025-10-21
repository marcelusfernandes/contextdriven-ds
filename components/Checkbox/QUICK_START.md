# Checkbox - Quick Start Guide

Guia rápido para começar a usar o componente Checkbox.

## ⚡ Instalação

```bash
# O componente já está incluído no projeto
```

## 🎯 Uso Básico

```tsx
import { Checkbox } from './components/Checkbox'
import { useState } from 'react'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      label="Aceito os termos"
      checked={checked}
      onChange={setChecked}
    />
  )
}
```

## 📋 Casos de Uso Comuns

### 1. Checkbox Simples

```tsx
const [accepted, setAccepted] = useState(false)

<Checkbox
  label="Li e aceito os termos de uso"
  checked={accepted}
  onChange={setAccepted}
/>
```

### 2. Checkbox sem Label (Single)

```tsx
const [selected, setSelected] = useState(false)

<Checkbox
  function="single"
  checked={selected}
  onChange={setSelected}
/>
```

### 3. Checkbox Pequeno

```tsx
<Checkbox
  size="small"
  label="Opção pequena"
  checked={value}
  onChange={setValue}
/>
```

### 4. Lista de Opções

```tsx
const [selected, setSelected] = useState<string[]>([])

const options = [
  { id: 'cerveja', label: 'Cerveja' },
  { id: 'refrigerante', label: 'Refrigerante' },
  { id: 'agua', label: 'Água' },
]

const handleToggle = (id: string) => {
  setSelected(prev =>
    prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev, id]
  )
}

<YStack gap="$2">
  {options.map(option => (
    <Checkbox
      key={option.id}
      label={option.label}
      checked={selected.includes(option.id)}
      onChange={() => handleToggle(option.id)}
    />
  ))}
</YStack>
```

### 5. "Selecionar Todos" com Indeterminate

```tsx
const [items, setItems] = useState([false, false, false])

const allChecked = items.every(Boolean)
const someChecked = items.some(Boolean) && !allChecked

const handleToggleAll = () => {
  const newValue = !allChecked
  setItems([newValue, newValue, newValue])
}

const handleToggleItem = (index: number) => {
  const newItems = [...items]
  newItems[index] = !newItems[index]
  setItems(newItems)
}

<YStack gap="$2">
  {/* Checkbox principal */}
  <Checkbox
    label="Selecionar todos"
    checked={allChecked}
    indeterminate={someChecked}
    onChange={handleToggleAll}
  />
  
  {/* Itens individuais */}
  <YStack paddingLeft="$6" gap="$2">
    <Checkbox label="Item 1" checked={items[0]} onChange={() => handleToggleItem(0)} />
    <Checkbox label="Item 2" checked={items[1]} onChange={() => handleToggleItem(1)} />
    <Checkbox label="Item 3" checked={items[2]} onChange={() => handleToggleItem(2)} />
  </YStack>
</YStack>
```

### 6. Com Validação/Erro

```tsx
const [agreed, setAgreed] = useState(false)
const [submitted, setSubmitted] = useState(false)

const handleSubmit = () => {
  setSubmitted(true)
  if (!agreed) return // Não permite submit
  // ... continua
}

<Checkbox
  label="Aceito os termos (obrigatório)"
  checked={agreed}
  onChange={setAgreed}
  error={submitted && !agreed}
/>
```

### 7. Desabilitado

```tsx
<Checkbox
  label="Opção desabilitada"
  checked={false}
  disabled
/>
```

## 🎨 Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `label` | `string` | - | Texto do checkbox |
| `checked` | `boolean` | `false` | Se está marcado |
| `onChange` | `(checked: boolean) => void` | - | Callback ao mudar |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho |
| `function` | `'input' \| 'single'` | `'input'` | Com ou sem label |
| `indeterminate` | `boolean` | `false` | Estado parcial |
| `error` | `boolean` | `false` | Estado de erro |
| `disabled` | `boolean` | `false` | Desabilitado |

## 💡 Dicas

### Quando usar `function="single"`?

Use quando o checkbox estiver dentro de um contexto que já tem label, como:
- Em tabelas (uma coluna de checkboxes)
- Em cards onde o card inteiro é o label
- Em listas compactas

```tsx
// ✅ Bom uso de single
<Card onPress={() => handleSelect(item.id)}>
  <XStack gap="$2">
    <Checkbox function="single" checked={selected.includes(item.id)} />
    <YStack>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </YStack>
  </XStack>
</Card>
```

### Quando usar `indeterminate`?

Use para representar seleção parcial em hierarquias:
- "Selecionar todos" quando alguns itens estão selecionados
- Categorias com subcategorias parcialmente selecionadas
- Filtros com múltiplas opções

### Navegação por Teclado

O checkbox suporta:
- **Tab:** Navegar entre checkboxes
- **Space ou Enter:** Alternar estado
- **Shift + Tab:** Navegar para trás

### Acessibilidade

O componente já vem com:
- ✅ ARIA labels corretos
- ✅ Estados de foco visíveis
- ✅ Suporte a screen readers
- ✅ Indicadores de erro para acessibilidade

## 🐛 Troubleshooting

### Checkbox não muda de estado

```tsx
// ❌ Errado - falta onChange
<Checkbox label="Teste" checked={value} />

// ✅ Correto
<Checkbox label="Teste" checked={value} onChange={setValue} />
```

### Label não aparece

```tsx
// ❌ Errado - function="single" ignora label
<Checkbox function="single" label="Teste" />

// ✅ Correto
<Checkbox function="input" label="Teste" />
// ou
<Checkbox function="single" /> {/* sem label */}
```

### Indeterminate não funciona

```tsx
// ❌ Errado - checked tem prioridade quando indeterminate=false
<Checkbox checked={true} indeterminate={false} />

// ✅ Correto - indeterminate tem prioridade sobre checked
<Checkbox
  checked={allChecked}
  indeterminate={someChecked}
  onChange={handleToggleAll}
/>
```

## 📚 Próximos Passos

- Ver todos os exemplos no [Storybook](./Checkbox.stories.tsx)
- Ler a [documentação completa](./README.md)
- Conferir a [especificação técnica do Figma](./_context/component_data/Checkbox-clean.md)

## 🔗 Links Úteis

- [Figma Design](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=22-612)
- [Código do Componente](./Checkbox.tsx)
- [Stories do Storybook](./Checkbox.stories.tsx)

