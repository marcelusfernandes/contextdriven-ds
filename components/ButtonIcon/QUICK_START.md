# ButtonIcon - Início Rápido

Botão com apenas ícone (sem texto) - ideal para ações compactas e toolbars.

## Uso Básico

```tsx
import { ButtonIcon } from './components/ButtonIcon'
import { Checkmarkfilled } from './components/icons'

// Botão simples
<ButtonIcon 
  icon={<Checkmarkfilled />} 
  onPress={() => console.log('Clicou!')} 
/>
```

## Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `icon` | `ReactNode` | **obrigatório** | Ícone a ser exibido |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do botão |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | Hierarquia visual |
| `loading` | `boolean` | `false` | Exibe spinner |
| `disabled` | `boolean` | `false` | Desabilita interação |
| `onPress` | `() => void` | - | Callback de clique |
| `accessibilityLabel` | `string` | - | Label para acessibilidade |

## Exemplos Rápidos

### Tamanhos

```tsx
// Medium (48×48px) - padrão
<ButtonIcon size="medium" icon={<Editfilled />} />

// Small (36×36px) - compacto
<ButtonIcon size="small" icon={<Editfilled />} />
```

### Hierarquias

```tsx
// Primary (amarelo) - ação principal
<ButtonIcon variant="primary" icon={<Checkmarkfilled />} />

// Secondary (borda cinza) - ação secundária
<ButtonIcon variant="secondary" icon={<Searchfilled />} />

// Tertiary (sem borda) - ação terciária
<ButtonIcon variant="tertiary" icon={<Editfilled />} />

// Destructive (vermelho) - ações destrutivas
<ButtonIcon variant="destructive" icon={<Trashfilled />} />
```

### Estados

```tsx
// Loading
<ButtonIcon loading icon={<Checkmarkfilled />} />

// Disabled
<ButtonIcon disabled icon={<Checkmarkfilled />} />
```

## Casos de Uso Comuns

### 1. Barra de Ferramentas (Toolbar)

```tsx
<Stack flexDirection="row" gap={8}>
  <ButtonIcon 
    variant="tertiary" 
    icon={<Editfilled />} 
    accessibilityLabel="Editar"
  />
  <ButtonIcon 
    variant="tertiary" 
    icon={<Searchfilled />}
    accessibilityLabel="Buscar" 
  />
  <ButtonIcon 
    variant="tertiary" 
    icon={<Filterfilled />}
    accessibilityLabel="Filtrar" 
  />
  <ButtonIcon 
    variant="destructive" 
    icon={<Trashfilled />}
    accessibilityLabel="Excluir" 
  />
</Stack>
```

### 2. Botão Fechar (Modal/Dialog)

```tsx
<ButtonIcon 
  variant="tertiary" 
  size="small" 
  icon={<Closefilled />}
  accessibilityLabel="Fechar"
  onPress={() => setModalOpen(false)}
/>
```

### 3. Floating Action Button (FAB)

```tsx
<ButtonIcon 
  variant="primary" 
  size="medium" 
  icon={<Addfilled />}
  accessibilityLabel="Adicionar novo item"
  onPress={() => openNewItemModal()}
/>
```

### 4. Ações em Cards/Listas

```tsx
<Stack flexDirection="row" gap={4}>
  <ButtonIcon 
    variant="tertiary" 
    size="small" 
    icon={<Heartfilled />}
    accessibilityLabel="Favoritar"
  />
  <ButtonIcon 
    variant="tertiary" 
    size="small" 
    icon={<Starratingfilled />}
    accessibilityLabel="Avaliar"
  />
</Stack>
```

## Acessibilidade

⚠️ **Sempre forneça `accessibilityLabel`** - Como ButtonIcon não tem texto visível, é essencial fornecer um label descritivo para leitores de tela.

```tsx
// ✅ BOM
<ButtonIcon 
  icon={<Trashfilled />} 
  accessibilityLabel="Excluir item"
/>

// ❌ RUIM (sem label)
<ButtonIcon icon={<Trashfilled />} />
```

## Dimensões

| Tamanho | Container | Ícone | Padding | Border Radius |
|---------|-----------|-------|---------|---------------|
| Small | 36×36px | 20×20px | 8px | 12px |
| Medium | 48×48px | 24×24px | 12px | 16px |

## Quando Usar ButtonIcon vs Button

**Use ButtonIcon quando:**
- ✅ Espaço limitado (toolbars, headers)
- ✅ Ícone é autoexplicativo
- ✅ Precisa de botão compacto
- ✅ Ações rápidas em contexto

**Use Button quando:**
- ✅ Ação precisa de clareza textual
- ✅ Botões principais de formulários
- ✅ Call-to-actions importantes
- ✅ Primeira vez que usuário vê a ação

## Estados Interativos

Os estados são gerenciados automaticamente:

- **Normal** - Estado padrão
- **Hover** - Ao passar o mouse
- **Focus** - Ao focar com teclado (Tab)
- **Active** - Ao pressionar
- **Loading** - Durante carregamento assíncrono
- **Disabled** - Quando desabilitado

## Integração com Sistema de Ícones

ButtonIcon funciona com qualquer ícone do sistema:

```tsx
import { 
  Checkmarkfilled, 
  Editfilled, 
  Trashfilled, 
  Searchfilled,
  // ... mais de 580 ícones disponíveis
} from './components/icons'

<ButtonIcon icon={<Checkmarkfilled />} />
```

Ver `ICONS_GUIDE.md` para lista completa de ícones disponíveis.

## Dúvidas Comuns

**Q: Como mudar a cor do ícone?**  
A: A cor é controlada automaticamente pelo variant e estado. Não é possível customizar diretamente.

**Q: Posso usar ButtonIcon com texto?**  
A: Não. Para botão com texto e ícone, use o componente `Button` com as props `leadingIcon` ou `trailingIcon`.

**Q: Como centralizar o ícone perfeitamente?**  
A: O ícone é centralizado automaticamente. O ButtonIcon é um quadrado perfeito com padding uniforme.

**Q: O ButtonIcon funciona em React Native?**  
A: Sim! ButtonIcon foi construído com Tamagui e funciona em Web e React Native.

## Próximos Passos

- Ver `README.md` para documentação completa
- Ver `ButtonIcon.stories.tsx` para todos os exemplos visuais
- Ver especificação do Figma em `_context/component_data/ButtonIcon-clean.md`

