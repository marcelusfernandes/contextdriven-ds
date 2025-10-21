# Button - Componente

Componente Button do Design System Zé com suporte completo a 48 variantes conforme especificação do Figma.

## Características

- ✅ 4 variantes visuais: Primary, Secondary, Tertiary, Destructive
- ✅ 2 tamanhos: Small (36px), Medium (48px)
- ✅ 6 estados: Normal, Hover, Focus, Active, Loading, Disabled
- ✅ Suporte a ícones com cores automáticas por estado
- ✅ Animações suaves entre estados
- ✅ Totalmente acessível
- ✅ Funciona em Web e React Native

## Uso Básico

```tsx
import { Button } from './components/Button'

// Botão simples
<Button variant="primary" size="medium" onPress={() => console.log('Clicked!')}>
  Clique aqui
</Button>

// Botão com loading
<Button variant="primary" loading>
  Processando...
</Button>

// Botão desabilitado
<Button variant="secondary" disabled>
  Desabilitado
</Button>
```

## Variantes

### Primary (Amarelo Zé)
Ação principal, destaque máximo.
```tsx
<Button variant="primary">Comprar agora</Button>
```

### Secondary (Contorno escuro)
Ação secundária, menos destaque.
```tsx
<Button variant="secondary">Ver detalhes</Button>
```

### Tertiary (Sem borda)
Ação terciária, mínimo de destaque.
```tsx
<Button variant="tertiary">Cancelar</Button>
```

### Destructive (Vermelho)
Ações destrutivas como excluir, remover.
```tsx
<Button variant="destructive">Excluir conta</Button>
```

## Tamanhos

### Medium (48px de altura)
Tamanho padrão para a maioria dos casos.
- Height: 48px
- Icon Size: 24px
- Font Size: 16px
- Padding: 12px × 16px

```tsx
<Button size="medium">Tamanho médio</Button>
```

### Small (36px de altura)
Para espaços reduzidos ou ações secundárias.
- Height: 36px
- Icon Size: 20px
- Font Size: 14px
- Padding: 8px × 16px

```tsx
<Button size="small">Tamanho pequeno</Button>
```

## Estados

### Normal
Estado padrão do botão.

### Hover
Ativado ao passar o mouse sobre o botão.

### Focus
Ativado ao focar o botão (Tab).

### Active/Pressed
Ativado ao clicar/pressionar o botão.

### Loading
Mostra um indicador de carregamento.
```tsx
<Button loading>Carregando...</Button>
```

### Disabled
Desabilita interações com o botão.
```tsx
<Button disabled>Desabilitado</Button>
```

## 🎨 Com Ícones

O componente oferece suporte completo a ícones com **gerenciamento automático de cores**.

### Importando Ícones

```tsx
import { Button } from './components/Button'
import { 
  Checkmarkfilled, 
  Arrowsfilledright, 
  Trashfilled,
  Addfilled 
} from '../icons'
```

### Ícone à esquerda (Leading)
```tsx
<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
>
  Confirmar
</Button>
```

### Ícone à direita (Trailing)
```tsx
<Button 
  variant="primary"
  trailingIcon={<Arrowsfilledright />}
>
  Continuar
</Button>
```

### Ambos os ícones
```tsx
<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
  trailingIcon={<Arrowsfilledright />}
>
  Salvar e Continuar
</Button>
```

### Botão Destrutivo com Ícone
```tsx
<Button 
  variant="destructive"
  leadingIcon={<Trashfilled />}
>
  Excluir
</Button>
```

### Gerenciamento Automático de Cores

Os ícones recebem **automaticamente** a cor correta baseada no estado e variante do botão:

| Variante | Estado | Cor do Ícone |
|----------|--------|--------------|
| Primary | Normal | `#000000` (preto) |
| Primary | Disabled | `#888888` (cinza) |
| Secondary | Normal | `#333333` (cinza escuro) |
| Secondary | Hover | `#ffffff` (branco) |
| Tertiary | Normal/Hover | `#333333` (cinza escuro) |
| Destructive | Normal | `#bc1229` (vermelho escuro) |
| Destructive | Hover | `#ffffff` (branco) |

**Você não precisa definir cores manualmente!**

```tsx
// ✅ Correto - cores automáticas
<Button variant="primary" leadingIcon={<Checkmarkfilled />}>
  Confirmar
</Button>

// ❌ Não é necessário fazer isso
<Button variant="primary" leadingIcon={<Checkmarkfilled color="#000" />}>
  Confirmar
</Button>
```

### Tamanhos Automáticos de Ícones

Os ícones são automaticamente redimensionados baseados no tamanho do botão:
- **Medium button**: ícones com 24px
- **Small button**: ícones com 20px

### Comportamento Durante Loading

Durante o estado de loading, os ícones são **automaticamente ocultados** e substituídos pelo indicador de carregamento.

```tsx
<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
  loading={true}  // ícone não será exibido
>
  Salvando...
</Button>
```

### Ícones Disponíveis

O sistema possui **585 ícones** disponíveis. Alguns exemplos comuns para botões:

**Ações:**
- `Checkmarkfilled`, `Checkmarkoutlined` - Confirmar
- `Dismissfilled`, `Dismissoutlined` - Fechar/Cancelar
- `Addfilled`, `Addoutlined` - Adicionar
- `Editfilled`, `Editoutlined` - Editar
- `Trashfilled`, `Trashoutlined` - Excluir
- `Savefilled`, `Saveoutlined` - Salvar

**Navegação:**
- `Arrowsfilledright`, `Arrowsfilledleft` - Setas
- `Arrowsfilledup`, `Arrowsfilleddown` - Setas verticais
- `Chevronfilledright`, `Chevronfilledleft` - Chevrons

**Comércio:**
- `Shoppingbagfilled`, `Shoppingbagoutlined` - Carrinho
- `Creditcardfilled`, `Creditcardoutlined` - Pagamento
- `Moneyfilled`, `Moneyoutlined` - Dinheiro

Veja todos os ícones em: `/components/icons/index.ts`

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Texto ou conteúdo do botão (**obrigatório**) |
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | Variante visual |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do botão |
| `leadingIcon` | `React.ReactNode` | - | Ícone à esquerda (componente de ícone) |
| `trailingIcon` | `React.ReactNode` | - | Ícone à direita (componente de ícone) |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `onPress` | `() => void` | - | Callback ao pressionar |
| `testID` | `string` | - | ID para testes |

## Exemplos Práticos

### Formulário de Checkout
```tsx
import { Button } from './components/Button'
import { Checkmarkfilled, Arrowsfilledright } from '../icons'

function CheckoutForm() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    await processPayment()
    setLoading(false)
  }

  return (
    <Stack gap={16}>
      <Button
        variant="primary"
        size="medium"
        leadingIcon={<Checkmarkfilled />}
        trailingIcon={<Arrowsfilledright />}
        loading={loading}
        onPress={handleCheckout}
      >
        Finalizar Compra
      </Button>
      
      <Button
        variant="tertiary"
        size="medium"
        onPress={handleCancel}
      >
        Cancelar
      </Button>
    </Stack>
  )
}
```

### Ações de Edição
```tsx
import { Button } from './components/Button'
import { Editfilled, Trashfilled } from '../icons'

<Stack flexDirection="row" gap={12}>
  <Button
    variant="secondary"
    size="small"
    leadingIcon={<Editfilled />}
    onPress={handleEdit}
  >
    Editar
  </Button>
  
  <Button
    variant="destructive"
    size="small"
    leadingIcon={<Trashfilled />}
    onPress={handleDelete}
  >
    Excluir
  </Button>
</Stack>
```

### Navegação
```tsx
import { Button } from './components/Button'
import { Arrowsfilledleft, Arrowsfilledright } from '../icons'

<Stack flexDirection="row" gap={12} justifyContent="space-between">
  <Button
    variant="tertiary"
    leadingIcon={<Arrowsfilledleft />}
    onPress={handlePrevious}
  >
    Anterior
  </Button>
  
  <Button
    variant="primary"
    trailingIcon={<Arrowsfilledright />}
    onPress={handleNext}
  >
    Próximo
  </Button>
</Stack>
```

## Tokens

O componente utiliza tokens do Design System definidos em `/tokens.ts`:

### Cores por Variante
- `tokens.button.variant.primary.*` - Amarelo Zé
- `tokens.button.variant.secondary.*` - Cinza com borda
- `tokens.button.variant.tertiary.*` - Cinza sem borda
- `tokens.button.variant.destructive.*` - Vermelho

Cada variante possui tokens para:
- `bg` - Cor de fundo
- `color` - Cor do texto
- `borderColor` - Cor da borda
- `borderWidth` - Largura da borda
- `iconColor` - Cor dos ícones (🆕)

### Tamanhos
- `tokens.button.size.small.*` - Dimensões para botões pequenos
- `tokens.button.size.medium.*` - Dimensões para botões médios

Incluem: `height`, `paddingVertical`, `paddingHorizontal`, `borderRadius`, `fontSize`, `lineHeight`, `iconSize`, `gap`, `minWidth`

### Loading
- `tokens.button.loading.*` - Configurações do indicador de carregamento

## Acessibilidade

- ✅ Suporte completo a navegação por teclado (Tab + Enter)
- ✅ Estados visuais claros (focus, hover, active)
- ✅ Área mínima de toque de 44px (WCAG 2.1 - Nível AA)
- ✅ Cores com contraste adequado
- ✅ Cores dos ícones seguem contraste em todos os estados
- ✅ Cursor `not-allowed` quando desabilitado
- ⚠️ Adicionar `aria-label` quando usar botões só com ícones (sem texto)

## Storybook

Visualize todas as variantes no Storybook:

```bash
yarn storybook
```

Navegue até: **Components > Button**

Stories disponíveis:
- **IconsShowcase** - Demonstra ícones em todas as variantes
- **AllVariants** - Todas as variantes básicas
- **AllSizes** - Comparação de tamanhos
- **InteractiveStates** - Estados interativos
- **CompleteMatrix** - Matriz completa com 48 variantes

## Notas Técnicas

1. Componente implementado com Tamagui para suporte Web + React Native
2. Animações suaves entre estados (200ms)
3. Estados gerenciados internamente via hooks React
4. Suporte a hover apenas em plataformas que suportam (Web)
5. Estado loading substitui todo o conteúdo do botão
6. **Ícones são clonados com props automáticas** (color, width, height)
7. Sistema de cores dos ícones baseado em tokens do design system

## Especificação Completa

Para detalhes completos da especificação do Figma e implementação técnica, veja:
- `_context/component_data/Button.md` - Especificação extraída do Figma
- `/tokens.ts` - Tokens do Design System
- `/components/icons/` - Biblioteca de ícones

## Status de Implementação

- [x] Componente base
- [x] 48 variantes (4 hierarquias × 2 tamanhos × 6 estados)
- [x] Estados interativos
- [x] Suporte a ícones com cores automáticas
- [x] Loading state
- [x] Disabled state
- [x] TypeScript types
- [x] Storybook stories completas
- [ ] Testes unitários
- [ ] Testes de acessibilidade
- [ ] Documentação de acessibilidade completa

---

**Última atualização:** Outubro 2025  
**Versão:** 1.0.0
