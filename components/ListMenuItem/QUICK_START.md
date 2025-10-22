# ListMenuItem - Quick Start

## 🚀 Uso Básico

```tsx
import { ListMenuItem } from '@/components/ListMenuItem'

function MyList() {
  return (
    <ListMenuItem onPress={() => console.log('Clicou')}>
      Minha opção
    </ListMenuItem>
  )
}
```

## 📦 Props Essenciais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Texto do item |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do item |
| `leading` | `React.ReactNode` | - | Ícone à esquerda (opcional) |
| `trailing` | `React.ReactNode` | - | Ícone à direita (opcional) |
| `onPress` | `() => void` | - | Callback ao clicar |

## 🎨 Estados Interativos

O ListMenuItem gerencia **4 estados automáticos**:

| Estado | Quando | Aparência |
|--------|--------|-----------|
| **Normal** | Padrão | Background transparente |
| **Hover** | Mouse sobre | Background gray100 |
| **Active** | Clicado/pressionado | Background gray200 |
| **Focus** | Focado (Tab) | Background gray200 + borda gray300 |

**Nota:** Este componente **NÃO tem** estados `error` ou `disabled`.

## 💡 3 Configurações Possíveis

### 1. Apenas Texto

```tsx
<ListMenuItem onPress={handleClick}>
  Minha opção
</ListMenuItem>
```

### 2. Leading (ícone à esquerda)

```tsx
<ListMenuItem 
  leading={<HomeIcon />}
  onPress={() => navigate('home')}
>
  Início
</ListMenuItem>
```

### 3. Leading + Trailing (ambos os ícones)

```tsx
<ListMenuItem 
  leading={<SettingsIcon />}
  trailing={<ChevronRightIcon />}
  onPress={() => navigate('settings')}
>
  Configurações
</ListMenuItem>
```

## 📐 Tamanhos

### Medium (48px altura)
```tsx
<ListMenuItem size="medium">Item Medium</ListMenuItem>
```

### Small (36px altura)
```tsx
<ListMenuItem size="small">Item Small</ListMenuItem>
```

## 🔄 Casos de Uso Comuns

### Menu de Navegação

```tsx
function NavigationMenu() {
  return (
    <>
      <ListMenuItem 
        leading={<HomeIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('home')}
      >
        Início
      </ListMenuItem>
      <ListMenuItem 
        leading={<SettingsIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('settings')}
      >
        Configurações
      </ListMenuItem>
      <ListMenuItem 
        leading={<HelpIcon />}
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('help')}
      >
        Ajuda
      </ListMenuItem>
    </>
  )
}
```

### Lista de Configurações

```tsx
function SettingsList() {
  return (
    <>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('notifications')}
      >
        Notificações
      </ListMenuItem>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('privacy')}
      >
        Privacidade
      </ListMenuItem>
      <ListMenuItem 
        trailing={<ChevronRightIcon />}
        onPress={() => navigate('account')}
      >
        Conta
      </ListMenuItem>
    </>
  )
}
```

### Lista Simples (Dropdown)

```tsx
function SimpleDropdown() {
  return (
    <>
      <ListMenuItem onPress={() => handleSelect('1')}>
        Opção 1
      </ListMenuItem>
      <ListMenuItem onPress={() => handleSelect('2')}>
        Opção 2
      </ListMenuItem>
      <ListMenuItem onPress={() => handleSelect('3')}>
        Opção 3
      </ListMenuItem>
    </>
  )
}
```

### Com ListMenu (Container)

```tsx
import { ListMenu } from '@/components/ListMenu'
import { ListMenuItem } from '@/components/ListMenuItem'

function MenuWithContainer() {
  return (
    <ListMenu contentType="leading">
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
    </ListMenu>
  )
}
```

## ⚠️ Notas Importantes

1. **Item Individual** - Este é o componente base, use com ListMenu para listas
2. **Gap 8px** - Gap interno consistente entre leading, text e trailing
3. **Estados Automáticos** - Hover, active e focus são gerenciados automaticamente
4. **Ícones Customizáveis** - Leading e trailing aceitam qualquer ReactNode
5. **Tamanhos de Ícone:**
   - Small: 20px × 20px
   - Medium: 24px × 24px
6. **Sem Error/Disabled** - Estes estados não se aplicam a itens de lista
7. **Acessibilidade** - Suporta navegação via teclado (Tab, Enter, Space)

## 🎯 Quando Usar

✅ **Use quando:**
- Precisar de itens de menu
- Precisar de itens de lista clicáveis
- Precisar de opções de dropdown
- Precisar de itens de sidebar

❌ **Não use quando:**
- Precisar de botão de ação primária (use Button)
- Precisar de input de formulário (use Input)
- Precisar de estado disabled (use Button)

## 🔗 Links Úteis

- [README completo](./README.md)
- [Stories no Storybook](./ListMenuItem.stories.tsx)
- [Especificação Figma](../../_context/component_data/ListMenuItem-clean.md)
- [ListMenu](../ListMenu/README.md) - Container de lista
- [Documentação de tokens](../../tokens.ts)

