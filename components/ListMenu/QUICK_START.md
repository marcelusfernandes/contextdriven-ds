# ListMenu - Quick Start

## 🚀 Uso Básico

```tsx
import { ListMenu } from '@/components/ListMenu'
import { ListMenuItem } from '@/components/ListMenuItem'

function MyMenu() {
  return (
    <ListMenu contentType="text">
      <ListMenuItem>Opção 1</ListMenuItem>
      <ListMenuItem>Opção 2</ListMenuItem>
      <ListMenuItem>Opção 3</ListMenuItem>
    </ListMenu>
  )
}
```

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `contentType` | `'text' \| 'leading' \| 'trailing' \| 'radio' \| 'checkbox'` | `'text'` | Tipo de conteúdo |
| `children` | `React.ReactNode` | - | ListMenuItem children |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho dos itens |
| `value` | `string \| string[]` | - | Valor selecionado (radio/checkbox) |
| `onChange` | `(value: string \| string[]) => void` | - | Callback de mudança |
| `name` | `string` | - | Nome do grupo (radio) |

## 🎨 5 Variantes de Conteúdo

### 1. Text - Itens Simples

Apenas texto, sem ícones.

```tsx
<ListMenu contentType="text">
  <ListMenuItem>Opção 1</ListMenuItem>
  <ListMenuItem>Opção 2</ListMenuItem>
  <ListMenuItem>Opção 3</ListMenuItem>
</ListMenu>
```

### 2. Leading - Ícones à Esquerda

Itens com ícone à esquerda.

```tsx
<ListMenu contentType="leading">
  <ListMenuItem leading={<HomeIcon />}>Início</ListMenuItem>
  <ListMenuItem leading={<SettingsIcon />}>Configurações</ListMenuItem>
  <ListMenuItem leading={<HelpIcon />}>Ajuda</ListMenuItem>
</ListMenu>
```

### 3. Trailing - Ícones à Direita

Itens com ícone à direita (navegação).

```tsx
<ListMenu contentType="trailing">
  <ListMenuItem trailing={<ChevronRight />}>Ver detalhes</ListMenuItem>
  <ListMenuItem trailing={<ChevronRight />}>Ver mais</ListMenuItem>
  <ListMenuItem trailing={<ChevronRight />}>Abrir</ListMenuItem>
</ListMenu>
```

### 4. Radio - Seleção Única

Lista com seleção única (RadioButton).

```tsx
function RadioMenu() {
  const [selected, setSelected] = useState('1')
  
  return (
    <ListMenu 
      contentType="radio"
      value={selected}
      onChange={setSelected}
      name="options"
    >
      <ListMenuItem value="1">Opção 1</ListMenuItem>
      <ListMenuItem value="2">Opção 2</ListMenuItem>
      <ListMenuItem value="3">Opção 3</ListMenuItem>
    </ListMenu>
  )
}
```

### 5. Checkbox - Seleção Múltipla

Lista com seleção múltipla (Checkbox).

```tsx
function CheckboxMenu() {
  const [selected, setSelected] = useState<string[]>(['1', '2'])
  
  return (
    <ListMenu 
      contentType="checkbox"
      value={selected}
      onChange={setSelected}
    >
      <ListMenuItem value="1">Opção 1</ListMenuItem>
      <ListMenuItem value="2">Opção 2</ListMenuItem>
      <ListMenuItem value="3">Opção 3</ListMenuItem>
    </ListMenu>
  )
}
```

## 💡 Exemplos Rápidos

### Menu de Navegação

```tsx
<ListMenu contentType="leading">
  <ListMenuItem 
    leading={<HomeIcon />}
    trailing={<ChevronRight />}
    onPress={() => navigate('home')}
  >
    Início
  </ListMenuItem>
  <ListMenuItem 
    leading={<SettingsIcon />}
    trailing={<ChevronRight />}
    onPress={() => navigate('settings')}
  >
    Configurações
  </ListMenuItem>
</ListMenu>
```

### Método de Pagamento (Radio)

```tsx
function PaymentMethod() {
  const [method, setMethod] = useState('credit')
  
  return (
    <ListMenu 
      contentType="radio"
      value={method}
      onChange={setMethod}
      name="payment"
    >
      <ListMenuItem value="credit">Cartão de Crédito</ListMenuItem>
      <ListMenuItem value="debit">Cartão de Débito</ListMenuItem>
      <ListMenuItem value="pix">PIX</ListMenuItem>
    </ListMenu>
  )
}
```

### Notificações (Checkbox)

```tsx
function NotificationSettings() {
  const [notifications, setNotifications] = useState<string[]>(['email'])
  
  return (
    <ListMenu 
      contentType="checkbox"
      value={notifications}
      onChange={setNotifications}
    >
      <ListMenuItem value="email">Email</ListMenuItem>
      <ListMenuItem value="push">Push</ListMenuItem>
      <ListMenuItem value="sms">SMS</ListMenuItem>
    </ListMenu>
  )
}
```

### Tamanho Small

```tsx
<ListMenu contentType="text" size="small">
  <ListMenuItem>Item compacto 1</ListMenuItem>
  <ListMenuItem>Item compacto 2</ListMenuItem>
</ListMenu>
```

## 🔄 Casos de Uso Comuns

### Tela de Configurações

```tsx
function Settings() {
  const [notifications, setNotifications] = useState<string[]>(['push'])
  
  return (
    <YStack gap="$6">
      {/* Navegação */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Conta</Text>
        <ListMenu contentType="trailing">
          <ListMenuItem trailing={<ChevronRight />}>Perfil</ListMenuItem>
          <ListMenuItem trailing={<ChevronRight />}>Segurança</ListMenuItem>
        </ListMenu>
      </YStack>
      
      {/* Seleção múltipla */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Notificações</Text>
        <ListMenu 
          contentType="checkbox"
          value={notifications}
          onChange={setNotifications}
        >
          <ListMenuItem value="email">Email</ListMenuItem>
          <ListMenuItem value="push">Push</ListMenuItem>
        </ListMenu>
      </YStack>
    </YStack>
  )
}
```

### Menu Lateral (Drawer)

```tsx
function DrawerMenu() {
  return (
    <ListMenu contentType="leading">
      <ListMenuItem 
        leading={<HomeIcon />}
        onPress={() => navigate('home')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<ProfileIcon />}
        onPress={() => navigate('profile')}
      >
        Perfil
      </ListMenuItem>
      <ListMenuItem 
        leading={<OrdersIcon />}
        onPress={() => navigate('orders')}
      >
        Pedidos
      </ListMenuItem>
    </ListMenu>
  )
}
```

### Filtros (Checkbox)

```tsx
function Filters() {
  const [filters, setFilters] = useState<string[]>([])
  
  return (
    <YStack gap="$3">
      <Text fontSize={16} fontWeight="600">Filtros</Text>
      <ListMenu 
        contentType="checkbox"
        value={filters}
        onChange={setFilters}
      >
        <ListMenuItem value="available">Disponível</ListMenuItem>
        <ListMenuItem value="promotion">Em promoção</ListMenuItem>
        <ListMenuItem value="new">Novidades</ListMenuItem>
      </ListMenu>
    </YStack>
  )
}
```

## ⚠️ Notas Importantes

1. **Container Simples** - ListMenu é um container sem estilos complexos
2. **Delegação** - Delega renderização para ListMenuItem
3. **Estado Radio** - Valor único (string)
4. **Estado Checkbox** - Array de valores (string[])
5. **Props Propagadas** - Size e outras props são propagadas para children
6. **Acessibilidade** - Implementa roles adequados (list, radiogroup, group)

## 🎯 Content Types - Quando Usar

| Content Type | Quando Usar | Exemplo |
|--------------|-------------|---------|
| `text` | Listas simples | Menu básico |
| `leading` | Navegação com ícones | Menu principal |
| `trailing` | Navegação detalhada | Submenu com seta |
| `radio` | Seleção única | Método de pagamento |
| `checkbox` | Seleção múltipla | Filtros, configurações |

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./ListMenu.stories.tsx)
- [Especificação Figma](../../_context/component_data/ListMenu-clean.md)
- [ListMenuItem](../ListMenuItem/README.md) - Componente base
- [Documentação de tokens](../../tokens.ts)

