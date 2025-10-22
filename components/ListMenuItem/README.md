# ListMenuItem

Item individual de lista - componente base com 4 estados interativos.

## 📋 Visão Geral

**ListMenuItem** é o componente base para itens de lista. Gerencia automaticamente 4 estados interativos (normal, hover, active, focus) e suporta estrutura flexível com ícones leading e trailing opcionais.

### Características Principais

- ✨ **4 Estados Interativos:** Normal, Hover, Active, Focus
- ✨ **Estrutura Flexível:** Leading (opcional) + Text + Trailing (opcional)
- ✨ **Gap Consistente:** 8px entre elementos
- ✨ **2 Tamanhos:** Small (36px), Medium (48px)
- ✨ **Acessível:** Navegação via teclado e screen readers
- ✨ **Type-safe:** TypeScript com tipos completos
- ✨ **SEM Error/Disabled:** Estados não aplicáveis a listas

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de itens de menu de navegação
- Precisar de itens de lista clicáveis
- Precisar de opções de dropdown
- Precisar de itens de sidebar/drawer
- For base para ListMenu (container)

❌ **Não use quando:**
- Precisar de botão de ação primária (use Button)
- Precisar de input de formulário (use Input)
- Precisar de estado disabled (componente não suporta)
- Precisar de estado error (componente não suporta)

## 📦 Instalação

```tsx
import { ListMenuItem } from '@/components/ListMenuItem'
```

## 🚀 Uso Básico

```tsx
import { ListMenuItem } from '@/components/ListMenuItem'

function MyComponent() {
  return (
    <ListMenuItem onPress={() => console.log('Clicou')}>
      Minha opção
    </ListMenuItem>
  )
}
```

## 🎨 Estados Interativos

O ListMenuItem gerencia automaticamente **4 estados visuais**:

### Normal (Padrão)

Estado inicial quando não há interação.

```tsx
<ListMenuItem>Item normal</ListMenuItem>
```

**Aparência:**
- Background: `transparent`
- Cores: `gray800`
- Borda: `transparent` (0px)

### Hover (Mouse Sobre)

Quando o mouse está sobre o item.

```tsx
// Estado automático ao passar o mouse
<ListMenuItem>Passe o mouse</ListMenuItem>
```

**Aparência:**
- Background: `gray100`
- Cores: `gray850`
- Borda: `transparent` (0px)

### Active (Pressionado)

Quando o item está sendo clicado/pressionado.

```tsx
// Estado automático ao clicar e segurar
<ListMenuItem>Clique e segure</ListMenuItem>
```

**Aparência:**
- Background: `gray200`
- Cores: `gray850`
- Borda: `transparent` (0px)

### Focus (Focado via Teclado)

Quando o item está focado via navegação por teclado.

```tsx
// Estado automático ao focar com Tab
<ListMenuItem>Use Tab para focar</ListMenuItem>
```

**Aparência:**
- Background: `gray200`
- Cores: `gray850`
- Borda: `gray300` (2px)

## 📐 3 Configurações Possíveis

### 1. Apenas Texto

Item simples sem ícones.

```tsx
<ListMenuItem onPress={handleClick}>
  Texto do item
</ListMenuItem>
```

### 2. Leading (Ícone à Esquerda)

Item com ícone à esquerda do texto.

```tsx
<ListMenuItem 
  leading={<HomeIcon />}
  onPress={() => navigate('home')}
>
  Início
</ListMenuItem>
```

**Ícone Leading:**
- Small: 20px × 20px
- Medium: 24px × 24px
- Gap do texto: 8px

### 3. Leading + Trailing (Ambos os Ícones)

Item com ícone à esquerda e ícone à direita.

```tsx
<ListMenuItem 
  leading={<SettingsIcon />}
  trailing={<ChevronRightIcon />}
  onPress={() => navigate('settings')}
>
  Configurações
</ListMenuItem>
```

**Trailing Icon:**
- Geralmente usado para indicar navegação (chevron-right)
- Ou ações secundárias (more, info)
- Small: 20px × 20px
- Medium: 24px × 24px
- Gap do texto: 8px

## 🎨 Tamanhos

### Medium (48px altura)

Tamanho padrão para a maioria dos casos.

```tsx
<ListMenuItem size="medium">
  Item de tamanho médio
</ListMenuItem>
```

**Dimensões:**
- Altura: 48px
- Padding: 12px (vertical e horizontal)
- BorderRadius: 12px
- Ícones: 24px × 24px
- Fonte: 16px / 24px

### Small (36px altura)

Tamanho compacto para listas densas.

```tsx
<ListMenuItem size="small">
  Item de tamanho pequeno
</ListMenuItem>
```

**Dimensões:**
- Altura: 36px
- Padding: 8px (vertical), 12px (horizontal)
- BorderRadius: 8px
- Ícones: 20px × 20px
- Fonte: 14px / 20px

## 📐 Props

### Básicas

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Texto do item |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do item |

### Ícones

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `leading` | `React.ReactNode` | - | Ícone/elemento à esquerda |
| `trailing` | `React.ReactNode` | - | Ícone/elemento à direita |

### Callbacks

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `onPress` | `() => void` | - | Callback ao clicar |
| `onFocus` | `() => void` | - | Callback ao focar |
| `onBlur` | `() => void` | - | Callback ao desfocar |

### Acessibilidade

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `accessibilityLabel` | `string` | `children` | Label para screen readers |
| `accessibilityHint` | `string` | - | Hint para screen readers |
| `accessibilityRole` | `'button' \| 'menuitem'` | `'button'` | Role de acessibilidade |
| `testID` | `string` | - | ID para testes |

## 💡 Exemplos Avançados

### Menu de Navegação

```tsx
function NavigationMenu() {
  const navigate = useNavigate()
  
  return (
    <YStack gap="$0">
      <ListMenuItem 
        size="medium"
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('home')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<ProfileIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('profile')}
      >
        Perfil
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<OrdersIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('orders')}
      >
        Meus Pedidos
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('settings')}
      >
        Configurações
      </ListMenuItem>
    </YStack>
  )
}
```

### Lista de Configurações

```tsx
function SettingsList() {
  return (
    <YStack gap="$0">
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('notifications')}
      >
        Notificações
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('privacy')}
      >
        Privacidade e Segurança
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('account')}
      >
        Gerenciar Conta
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('help')}
      >
        Ajuda e Suporte
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('about')}
      >
        Sobre o App
      </ListMenuItem>
    </YStack>
  )
}
```

### Dropdown Menu

```tsx
function DropdownMenu({ onSelect, onClose }: DropdownProps) {
  return (
    <YStack 
      gap="$0"
      backgroundColor="white"
      borderRadius="$3"
      padding="$2"
      shadowColor="rgba(0,0,0,0.1)"
      shadowRadius={8}
    >
      <ListMenuItem 
        size="small"
        onPress={() => {
          onSelect('edit')
          onClose()
        }}
      >
        Editar
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        onPress={() => {
          onSelect('duplicate')
          onClose()
        }}
      >
        Duplicar
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        onPress={() => {
          onSelect('share')
          onClose()
        }}
      >
        Compartilhar
      </ListMenuItem>
      <ListMenuItem 
        size="small"
        onPress={() => {
          onSelect('delete')
          onClose()
        }}
      >
        Excluir
      </ListMenuItem>
    </YStack>
  )
}
```

### Sidebar/Drawer Menu

```tsx
function DrawerMenu({ onClose }: DrawerProps) {
  return (
    <YStack 
      flex={1}
      backgroundColor="white"
      paddingTop="$6"
    >
      {/* User Info */}
      <XStack padding="$4" gap="$3" alignItems="center">
        <Avatar size="large" />
        <YStack>
          <Text fontSize={18} fontWeight="600">Nome do Usuário</Text>
          <Text fontSize={14} color="$gray">usuario@email.com</Text>
        </YStack>
      </XStack>
      
      {/* Menu Items */}
      <YStack gap="$0" marginTop="$4">
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
          leading={<SettingsIcon />}
          onPress={() => {
            navigate('settings')
            onClose()
          }}
        >
          Configurações
        </ListMenuItem>
      </YStack>
    </YStack>
  )
}
```

### Action Sheet

```tsx
function ActionSheet({ onSelect, onCancel }: ActionSheetProps) {
  return (
    <YStack 
      gap="$0"
      backgroundColor="white"
      borderTopLeftRadius="$4"
      borderTopRightRadius="$4"
      padding="$2"
    >
      <ListMenuItem 
        size="medium"
        leading={<CameraIcon />}
        onPress={() => onSelect('camera')}
      >
        Tirar Foto
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<GalleryIcon />}
        onPress={() => onSelect('gallery')}
      >
        Escolher da Galeria
      </ListMenuItem>
      <ListMenuItem 
        size="medium"
        leading={<FileIcon />}
        onPress={() => onSelect('file')}
      >
        Escolher Arquivo
      </ListMenuItem>
      
      {/* Cancel */}
      <ListMenuItem 
        size="medium"
        onPress={onCancel}
      >
        Cancelar
      </ListMenuItem>
    </YStack>
  )
}
```

### Com ListMenu (Container)

```tsx
import { ListMenu } from '@/components/ListMenu'
import { ListMenuItem } from '@/components/ListMenuItem'

function MenuWithContainer() {
  return (
    <ListMenu contentType="leading" size="medium">
      <ListMenuItem 
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
      >
        Configurações
      </ListMenuItem>
      <ListMenuItem 
        leading={<HelpIcon />}
        trailing={<ChevronRightIcon />}
      >
        Ajuda
      </ListMenuItem>
    </ListMenu>
  )
}
```

## ♿ Acessibilidade

O ListMenuItem implementa práticas de acessibilidade:

### Roles

```tsx
// Button role (padrão)
<ListMenuItem>Item</ListMenuItem>  // accessibilityRole="button"

// Menu item role
<ListMenuItem accessibilityRole="menuitem">
  Item de menu
</ListMenuItem>
```

### Navegação por Teclado

- **Tab:** Focar próximo item
- **Shift + Tab:** Focar item anterior
- **Enter:** Ativar item focado
- **Space:** Ativar item focado

### Labels

```tsx
<ListMenuItem
  accessibilityLabel="Ir para configurações"
  accessibilityHint="Abre a tela de configurações"
>
  Configurações
</ListMenuItem>
```

## 🎨 Tokens Utilizados

O ListMenuItem usa tokens do design system:

### Spacing
- `listMenuItem.size.{size}.height`
- `listMenuItem.size.{size}.paddingVertical/Horizontal`
- `listMenuItem.size.{size}.gap`

### Typography
- `listMenuItem.size.{size}.fontSize`
- `listMenuItem.size.{size}.lineHeight`
- `listMenuItem.size.{size}.fontWeight`

### Colors
- `listMenuItem.state.{state}.leadingColor`
- `listMenuItem.state.{state}.textColor`
- `listMenuItem.state.{state}.trailingColor`
- `listMenuItem.state.{state}.bgColor`
- `listMenuItem.state.{state}.borderColor`

### Icons
- `listMenuItem.size.{size}.leadingIconSize`
- `listMenuItem.size.{size}.trailingIconSize`

### Border
- `listMenuItem.size.{size}.borderRadius`
- `listMenuItem.state.{state}.borderWidth`

## 🔧 Notas Técnicas

### Estados Automáticos

Os estados hover, active e focus são gerenciados automaticamente pelo Tamagui:

```tsx
// Estados definidos no styled component
hoverStyle: { /* ... */ }
pressStyle: { /* ... */ }  // active
focusStyle: { /* ... */ }
```

### Gap Interno

O gap de 8px entre elementos é consistente:
- Leading → Text: 8px
- Text → Trailing: 8px

### SEM Error/Disabled

Este componente **não suporta** estados error ou disabled pois:
- Items de lista não têm conceito de "erro"
- Items de lista não são "desabilitados", são removidos ou não mostrados
- Use Button se precisar destes estados

## 🚀 Performance

- Styled components memoizados
- Estados gerenciados nativamente pelo Tamagui
- Renderizações otimizadas
- Sem re-renders desnecessários

## 🔗 Componentes Relacionados

- **[ListMenu](../ListMenu/README.md)** - Container que agrupa múltiplos ListMenuItem

## 📚 Recursos Adicionais

- [Quick Start](./QUICK_START.md) - Guia rápido de uso
- [Stories](./ListMenuItem.stories.tsx) - 8 variantes + exemplos
- [Tokens](../../tokens.ts) - Design tokens utilizados
- [Especificação Figma](../../_context/component_data/ListMenuItem-clean.md) - Design original

## 🐛 Troubleshooting

### Estados não mudam
Certifique-se de que há interação (mouse, teclado):
```tsx
<ListMenuItem>  // ✅ hover/active/focus funcionam
  Item interativo
</ListMenuItem>
```

### Ícones não aparecem
Certifique-se de passar ReactNode válido:
```tsx
<ListMenuItem leading={<HomeIcon />}>  // ✅
  Com ícone
</ListMenuItem>
```

### Gap incorreto
O gap de 8px é automático, não adicione espaçamento manual:
```tsx
<ListMenuItem leading={<Icon />}>  // ✅ gap automático
  Texto
</ListMenuItem>
```

### Preciso de disabled
Este componente não suporta disabled. Considere:
- Não renderizar o item
- Usar Button se precisar de disabled
- Remover onPress para tornar não-clicável (mas ainda focável)

---

**Versão:** 1.0.0  
**Última atualização:** 21/10/2025  
**Componente de:** Design System DSZé  
**Base para:** ListMenu

