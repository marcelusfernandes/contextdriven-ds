# Button - Componente

Componente Button do Design System Zé com suporte completo a 48 variantes conforme especificação do Figma.

## Características

- ✅ 4 variantes visuais: Primary, Secondary, Tertiary, Destructive
- ✅ 2 tamanhos: Small (36px), Medium (48px)
- ✅ 6 estados: Normal, Hover, Focus, Active, Loading, Disabled
- ✅ Suporte a ícones (leading e trailing)
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
```tsx
<Button size="medium">Tamanho médio</Button>
```

### Small (36px de altura)
Para espaços reduzidos ou ações secundárias.
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

## Com Ícones

### Ícone à esquerda (Leading)
```tsx
<Button leadingIcon={<IconComponent />}>
  Com ícone à esquerda
</Button>
```

### Ícone à direita (Trailing)
```tsx
<Button trailingIcon={<IconComponent />}>
  Com ícone à direita
</Button>
```

### Ambos os ícones
```tsx
<Button 
  leadingIcon={<IconComponent />}
  trailingIcon={<IconComponent />}
>
  Com ambos ícones
</Button>
```

## Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary' \| 'destructive'` | `'primary'` | Variante visual |
| `size` | `'small' \| 'medium'` | `'medium'` | Tamanho do botão |
| `children` | `React.ReactNode` | - | Texto ou conteúdo do botão |
| `leadingIcon` | `React.ReactNode` | - | Ícone à esquerda |
| `trailingIcon` | `React.ReactNode` | - | Ícone à direita |
| `loading` | `boolean` | `false` | Estado de carregamento |
| `disabled` | `boolean` | `false` | Estado desabilitado |
| `onPress` | `() => void` | - | Callback ao pressionar |
| `testID` | `string` | - | ID para testes |

## Tokens

O componente utiliza tokens do Design System definidos em `/tokens.ts`:

- `tokens.button.size.*` - Dimensões e espaçamentos
- `tokens.button.variant.*` - Cores por variante e estado
- `tokens.button.loading.*` - Configurações do loading

## Acessibilidade

- Suporte completo a navegação por teclado (Tab + Enter)
- Estados visuais claros (focus, hover, active)
- Área mínima de toque de 44px (WCAG)
- Cores com contraste adequado

## Exemplo Completo

```tsx
import { Button } from './components/Button'
import { CartIcon, ArrowRightIcon } from './icons'

function MyComponent() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      await checkout()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Button
        variant="primary"
        size="medium"
        leadingIcon={<CartIcon />}
        trailingIcon={<ArrowRightIcon />}
        loading={loading}
        onPress={handleCheckout}
      >
        Finalizar compra
      </Button>
    </div>
  )
}
```

## Notas Técnicas

1. O componente usa Tamagui para estilização
2. Animações suaves entre estados (300ms)
3. Estados gerenciados internamente via hooks
4. Suporte a hover apenas em plataformas que suportam (Web)
5. O estado loading substitui todo o conteúdo do botão

## Especificação Completa

Para detalhes completos da especificação do Figma, veja `_context/component_data/Button.md`.

