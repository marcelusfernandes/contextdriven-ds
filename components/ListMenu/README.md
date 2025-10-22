# ListMenu

Container de lista que agrupa múltiplos ListMenuItem com 5 variantes de conteúdo.

## 📋 Visão Geral

**ListMenu** é um componente container que agrupa múltiplos `ListMenuItem` e suporta 5 tipos de conteúdo diferentes. É um wrapper simples que delega a renderização para os itens filhos e gerencia estados de seleção quando necessário.

### Características Principais

- ✨ **5 Variantes de Conteúdo:** Text, Leading, Trailing, Radio, Checkbox
- ✨ **Container Simples:** Sem estilos complexos, delega para ListMenuItem
- ✨ **Gerenciamento de Estado:** Para radio (único) e checkbox (múltiplo)
- ✨ **Props Propagadas:** Size e outras props para todos os children
- ✨ **Acessível:** Roles adequados (list, radiogroup, group)
- ✨ **Flexível:** Aceita qualquer children que seja ListMenuItem
- ✨ **Type-safe:** TypeScript com tipos completos

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de menu de navegação
- Precisar de lista de configurações
- Precisar de seleção de opções (única ou múltipla)
- Precisar de dropdown ou action sheet
- Precisar agrupar múltiplos ListMenuItem

❌ **Não use quando:**
- Precisar de apenas um item (use ListMenuItem direto)
- Precisar de layout complexo customizado
- Não for uma lista de itens

## 📦 Instalação

```tsx
import { ListMenu } from '@/components/ListMenu'
import { ListMenuItem } from '@/components/ListMenuItem'
```

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

## 🎨 5 Variantes de Conteúdo

### 1. Content / Text

Itens de lista apenas com texto, sem ícones.

**Node ID:** 5169:11600

```tsx
<ListMenu contentType="text">
  <ListMenuItem>Opção 1</ListMenuItem>
  <ListMenuItem>Opção 2</ListMenuItem>
  <ListMenuItem>Opção 3</ListMenuItem>
</ListMenu>
```

**Quando usar:**
- Listas simples
- Menus básicos
- Quando não precisa de ícones

### 2. Content / Leading

Itens de lista com ícone à esquerda.

**Node ID:** 5176:13846

```tsx
<ListMenu contentType="leading">
  <ListMenuItem leading={<HomeIcon />}>Início</ListMenuItem>
  <ListMenuItem leading={<SettingsIcon />}>Configurações</ListMenuItem>
  <ListMenuItem leading={<HelpIcon />}>Ajuda</ListMenuItem>
</ListMenu>
```

**Quando usar:**
- Menu principal com categorias
- Navegação com identificação visual
- Quando ícones ajudam a identificar ações

### 3. Content / Trailing

Itens de lista com ícone à direita (geralmente seta).

**Node ID:** 5176:13847

```tsx
<ListMenu contentType="trailing">
  <ListMenuItem trailing={<ChevronRight />}>Ver detalhes</ListMenuItem>
  <ListMenuItem trailing={<ChevronRight />}>Ver mais</ListMenuItem>
  <ListMenuItem trailing={<ChevronRight />}>Abrir</ListMenuItem>
</ListMenu>
```

**Quando usar:**
- Navegação para submenus
- Items que levam a outra tela
- Indicar que há mais conteúdo

### 4. Content / Radio Buttons

Lista com seleção única usando RadioButton.

**Node ID:** 5757:5118

```tsx
function RadioMenu() {
  const [selected, setSelected] = useState('2')
  
  return (
    <ListMenu 
      contentType="radio"
      value={selected}
      onChange={setSelected}
      name="payment-method"
    >
      <ListMenuItem value="1">Cartão de Crédito</ListMenuItem>
      <ListMenuItem value="2">Cartão de Débito</ListMenuItem>
      <ListMenuItem value="3">PIX</ListMenuItem>
    </ListMenu>
  )
}
```

**Quando usar:**
- Seleção de método de pagamento
- Escolha entre opções mutuamente exclusivas
- Configurações com uma única opção

### 5. Content / Checkboxes

Lista com seleção múltipla usando Checkbox.

**Node ID:** 5757:5590

```tsx
function CheckboxMenu() {
  const [selected, setSelected] = useState<string[]>(['1', '3'])
  
  return (
    <ListMenu 
      contentType="checkbox"
      value={selected}
      onChange={setSelected}
    >
      <ListMenuItem value="1">Notificações</ListMenuItem>
      <ListMenuItem value="2">Email</ListMenuItem>
      <ListMenuItem value="3">SMS</ListMenuItem>
    </ListMenu>
  )
}
```

**Quando usar:**
- Filtros de busca
- Configurações com múltiplas opções
- Seleção de múltiplos itens

## 📐 Props

### Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `contentType` | `'text' \| 'leading' \| 'trailing' \| 'radio' \| 'checkbox'` | `'text'` | Tipo de conteúdo da lista |
| `children` | `React.ReactNode` | - | ListMenuItem children |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho dos itens (propagado) |

### Seleção (Radio/Checkbox)

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string \| string[]` | - | Valor selecionado |
| `onChange` | `(value: string \| string[]) => void` | - | Callback quando valor muda |
| `name` | `string` | - | Nome do grupo (radio) |

**Radio:** `value` é `string` (única seleção)  
**Checkbox:** `value` é `string[]` (múltiplas seleções)

### Acessibilidade

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibilityLabel` | `string` | - | Label para screen readers |
| `accessibilityHint` | `string` | - | Hint para screen readers |
| `testID` | `string` | - | ID para testes |

## 💡 Exemplos Avançados

### Menu de Navegação Completo

```tsx
function NavigationMenu() {
  return (
    <ListMenu contentType="leading">
      <ListMenuItem 
        leading={<HomeIcon />}
        trailing={<ChevronRight />}
        onPress={() => navigate('home')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<ProfileIcon />}
        trailing={<ChevronRight />}
        onPress={() => navigate('profile')}
      >
        Meu Perfil
      </ListMenuItem>
      <ListMenuItem 
        leading={<OrdersIcon />}
        trailing={<ChevronRight />}
        onPress={() => navigate('orders')}
      >
        Meus Pedidos
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        trailing={<ChevronRight />}
        onPress={() => navigate('settings')}
      >
        Configurações
      </ListMenuItem>
    </ListMenu>
  )
}
```

### Tela de Configurações Completa

```tsx
function SettingsScreen() {
  const [notifications, setNotifications] = useState<string[]>(['email', 'push'])
  const [theme, setTheme] = useState('auto')
  
  return (
    <YStack gap="$6" padding="$4">
      {/* Seção: Conta */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Conta</Text>
        <ListMenu contentType="trailing">
          <ListMenuItem 
            trailing={<ChevronRight />}
            onPress={() => navigate('profile')}
          >
            Editar Perfil
          </ListMenuItem>
          <ListMenuItem 
            trailing={<ChevronRight />}
            onPress={() => navigate('security')}
          >
            Segurança
          </ListMenuItem>
          <ListMenuItem 
            trailing={<ChevronRight />}
            onPress={() => navigate('privacy')}
          >
            Privacidade
          </ListMenuItem>
        </ListMenu>
      </YStack>
      
      {/* Seção: Notificações */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Notificações</Text>
        <ListMenu 
          contentType="checkbox"
          value={notifications}
          onChange={setNotifications}
        >
          <ListMenuItem value="email">Email</ListMenuItem>
          <ListMenuItem value="push">Notificações Push</ListMenuItem>
          <ListMenuItem value="sms">SMS</ListMenuItem>
          <ListMenuItem value="whatsapp">WhatsApp</ListMenuItem>
        </ListMenu>
      </YStack>
      
      {/* Seção: Tema */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Aparência</Text>
        <ListMenu 
          contentType="radio"
          value={theme}
          onChange={setTheme}
          name="theme"
        >
          <ListMenuItem value="light">Claro</ListMenuItem>
          <ListMenuItem value="dark">Escuro</ListMenuItem>
          <ListMenuItem value="auto">Automático</ListMenuItem>
        </ListMenu>
      </YStack>
      
      {/* Seção: Sobre */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="700">Sobre</Text>
        <ListMenu contentType="trailing">
          <ListMenuItem trailing={<ChevronRight />}>
            Termos de Uso
          </ListMenuItem>
          <ListMenuItem trailing={<ChevronRight />}>
            Política de Privacidade
          </ListMenuItem>
          <ListMenuItem>
            Versão 1.0.0
          </ListMenuItem>
        </ListMenu>
      </YStack>
    </YStack>
  )
}
```

### Seleção de Método de Pagamento

```tsx
function PaymentMethodSelector() {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  
  return (
    <YStack gap="$3">
      <Text fontSize={16} fontWeight="600">
        Método de Pagamento
      </Text>
      
      <ListMenu 
        contentType="radio"
        value={paymentMethod}
        onChange={setPaymentMethod}
        name="payment-method"
      >
        <ListMenuItem value="credit">
          Cartão de Crédito
        </ListMenuItem>
        <ListMenuItem value="debit">
          Cartão de Débito
        </ListMenuItem>
        <ListMenuItem value="pix">
          PIX
        </ListMenuItem>
        <ListMenuItem value="boleto">
          Boleto Bancário
        </ListMenuItem>
      </ListMenu>
      
      <Button onPress={handleConfirm}>
        Confirmar Pagamento
      </Button>
    </YStack>
  )
}
```

### Filtros de Busca

```tsx
function SearchFilters() {
  const [categories, setCategories] = useState<string[]>([])
  const [availability, setAvailability] = useState<string[]>(['available'])
  
  return (
    <YStack gap="$6" padding="$4">
      <YStack gap="$3">
        <Text fontSize={16} fontWeight="600">Categorias</Text>
        <ListMenu 
          contentType="checkbox"
          value={categories}
          onChange={setCategories}
        >
          <ListMenuItem value="electronics">Eletrônicos</ListMenuItem>
          <ListMenuItem value="clothes">Roupas</ListMenuItem>
          <ListMenuItem value="food">Alimentos</ListMenuItem>
          <ListMenuItem value="books">Livros</ListMenuItem>
        </ListMenu>
      </YStack>
      
      <YStack gap="$3">
        <Text fontSize={16} fontWeight="600">Disponibilidade</Text>
        <ListMenu 
          contentType="checkbox"
          value={availability}
          onChange={setAvailability}
        >
          <ListMenuItem value="available">Em estoque</ListMenuItem>
          <ListMenuItem value="promotion">Em promoção</ListMenuItem>
          <ListMenuItem value="new">Novidades</ListMenuItem>
        </ListMenu>
      </YStack>
      
      <XStack gap="$3">
        <Button 
          flex={1}
          variant="secondary"
          onPress={() => {
            setCategories([])
            setAvailability([])
          }}
        >
          Limpar
        </Button>
        <Button 
          flex={1}
          onPress={handleApplyFilters}
        >
          Aplicar
        </Button>
      </XStack>
    </YStack>
  )
}
```

### Menu Lateral (Drawer)

```tsx
function DrawerMenu({ onClose }: { onClose: () => void }) {
  return (
    <YStack flex={1} backgroundColor="white">
      {/* Header */}
      <XStack 
        padding="$4" 
        alignItems="center" 
        borderBottomWidth={1}
        borderBottomColor="$gray200"
      >
        <Text fontSize={20} fontWeight="700">Menu</Text>
      </XStack>
      
      {/* Menu Items */}
      <ListMenu contentType="leading" size="medium">
        <ListMenuItem 
          leading={<HomeIcon />}
          onPress={() => {
            navigate('home')
            onClose()
          }}
        >
          Início
        </ListMenuItem>
        <ListMenuItem 
          leading={<SearchIcon />}
          onPress={() => {
            navigate('search')
            onClose()
          }}
        >
          Buscar
        </ListMenuItem>
        <ListMenuItem 
          leading={<FavoriteIcon />}
          onPress={() => {
            navigate('favorites')
            onClose()
          }}
        >
          Favoritos
        </ListMenuItem>
        <ListMenuItem 
          leading={<CartIcon />}
          onPress={() => {
            navigate('cart')
            onClose()
          }}
        >
          Carrinho
        </ListMenuItem>
        <ListMenuItem 
          leading={<ProfileIcon />}
          onPress={() => {
            navigate('profile')
            onClose()
          }}
        >
          Perfil
        </ListMenuItem>
      </ListMenu>
    </YStack>
  )
}
```

## ♿ Acessibilidade

O ListMenu implementa práticas de acessibilidade:

### Roles Adequados

```tsx
// List (text, leading, trailing)
<ListMenu contentType="text">  // role="list"
  <ListMenuItem>Item</ListMenuItem>  // role="menuitem"
</ListMenu>

// Radio Group
<ListMenu contentType="radio">  // role="radiogroup"
  <ListMenuItem value="1">Item</ListMenuItem>  // role="radio"
</ListMenu>

// Checkbox Group
<ListMenu contentType="checkbox">  // role="group"
  <ListMenuItem value="1">Item</ListMenuItem>  // role="checkbox"
</ListMenu>
```

### Estados Comunicados

```tsx
// Radio/Checkbox comunicam estado checked
<ListMenu contentType="radio" value="1">
  <ListMenuItem value="1">  // accessibilityState={{ checked: true }}
    Item Selecionado
  </ListMenuItem>
</ListMenu>
```

## 🎨 Tokens Utilizados

O ListMenu usa tokens mínimos:

```tsx
listMenu: {
  gap: 0,      // Sem gap, ListMenuItem tem espaçamento próprio
  padding: 0,  // Sem padding externo
}
```

**Tokens delegados:**
- Estilos visuais vêm do `ListMenuItem`
- Radio/Checkbox usam seus próprios tokens
- Ícones usam tokens de ícones

## 🔧 Notas Técnicas

### Container Simples

O ListMenu é principalmente um **container/wrapper**:
- Não adiciona estilos visuais complexos
- Usa `flex-direction: column` para empilhar itens
- Delega renderização para ListMenuItem

### Delegação de Props

O ListMenu **injeta props** nos children:

```tsx
// Props propagadas para todos os children
- size (small/medium)
- accessibilityRole (menuitem/radio/checkbox)

// Props adicionais para radio/checkbox
- selected (boolean)
- onPress (handler)
- accessibilityState ({ checked })
```

### Gerenciamento de Estado

#### Radio (seleção única)
```tsx
value: string
onChange: (value: string) => void
```

#### Checkbox (seleção múltipla)
```tsx
value: string[]
onChange: (value: string[]) => void
```

## 🚀 Performance

- Container leve sem renderizações pesadas
- Delegação eficiente para children
- Props memoizadas quando possível
- Clones de elementos otimizados

## 🔗 Componentes Relacionados

- **[ListMenuItem](../ListMenuItem/README.md)** - Item individual da lista
- **RadioButton** (futuro) - Para content type radio
- **Checkbox** (futuro) - Para content type checkbox

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./ListMenu.stories.tsx) - Exemplos no Storybook
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/ListMenu-clean.md) - Design original

## 🐛 Troubleshooting

### Items não aparecem
Certifique-se de passar `ListMenuItem` como children:
```tsx
<ListMenu>
  <ListMenuItem>Item</ListMenuItem>  // ✅
  <Text>Item</Text>  // ❌ não funcionará
</ListMenu>
```

### Radio/Checkbox não funcionam
Verifique se `value` e `onChange` estão corretos:
```tsx
// Radio - valor único
const [value, setValue] = useState('1')  // ✅ string
<ListMenu value={value} onChange={setValue} contentType="radio">

// Checkbox - array de valores
const [values, setValues] = useState(['1'])  // ✅ string[]
<ListMenu value={values} onChange={setValues} contentType="checkbox">
```

### Tamanho não propaga
Certifique-se de que `size` está no ListMenu, não nos items:
```tsx
<ListMenu size="small">  // ✅ propaga para todos
  <ListMenuItem>Item</ListMenuItem>
</ListMenu>
```

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé  
**Depende de:** ListMenuItem, RadioButton, Checkbox

