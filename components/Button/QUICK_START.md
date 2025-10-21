# Button - Guia Rápido

## Instalação

O componente já está incluído no projeto. Basta importar:

```tsx
import { Button } from './components/Button'
```

## Uso Básico

```tsx
<Button onPress={() => console.log('Clicked')}>
  Meu Botão
</Button>
```

## Variantes (4 tipos)

```tsx
{/* Ação principal (amarelo Zé) */}
<Button variant="primary">Comprar</Button>

{/* Ação secundária (contorno) */}
<Button variant="secondary">Ver mais</Button>

{/* Ação terciária (sem borda) */}
<Button variant="tertiary">Cancelar</Button>

{/* Ação destrutiva (vermelho) */}
<Button variant="destructive">Excluir</Button>
```

## Tamanhos (2 opções)

```tsx
{/* Padrão - 48px de altura */}
<Button size="medium">Médio</Button>

{/* Compacto - 36px de altura */}
<Button size="small">Pequeno</Button>
```

## Estados

```tsx
{/* Normal */}
<Button>Normal</Button>

{/* Loading (mostra animação) */}
<Button loading>Salvando...</Button>

{/* Disabled (sem interação) */}
<Button disabled>Desabilitado</Button>
```

## Com Ícones

```tsx
import { CartIcon, ArrowIcon } from './icons'

{/* Ícone à esquerda */}
<Button leadingIcon={<CartIcon />}>
  Carrinho
</Button>

{/* Ícone à direita */}
<Button trailingIcon={<ArrowIcon />}>
  Avançar
</Button>

{/* Ambos */}
<Button 
  leadingIcon={<CartIcon />}
  trailingIcon={<ArrowIcon />}
>
  Adicionar
</Button>
```

## Exemplo Completo

```tsx
import { useState } from 'react'
import { Button } from './components/Button'

function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      await processCheckout()
      alert('Pedido realizado!')
    } catch (error) {
      alert('Erro ao processar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button 
      variant="primary"
      size="medium"
      loading={loading}
      onPress={handleCheckout}
    >
      {loading ? 'Processando...' : 'Finalizar compra'}
    </Button>
  )
}
```

## Props Principais

| Prop | Valores | Padrão |
|------|---------|--------|
| `variant` | `primary` `secondary` `tertiary` `destructive` | `primary` |
| `size` | `small` `medium` | `medium` |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `onPress` | `() => void` | - |

## Quando Usar Cada Variante?

### Primary (Amarelo)
✅ Ação principal da tela  
✅ Call-to-action principal  
✅ "Comprar", "Adicionar", "Enviar"

### Secondary (Contorno)
✅ Ação secundária  
✅ Alternativa à ação principal  
✅ "Ver mais", "Detalhes", "Editar"

### Tertiary (Sem borda)
✅ Ação terciária  
✅ Menos destaque  
✅ "Cancelar", "Voltar", "Fechar"

### Destructive (Vermelho)
✅ Ações destrutivas  
✅ Requer confirmação  
✅ "Excluir", "Remover", "Descartar"

## Combinações Recomendadas

### Formulário
```tsx
<Button variant="tertiary" size="small">Cancelar</Button>
<Button variant="primary" size="medium">Salvar</Button>
```

### Modal
```tsx
<Button variant="tertiary">Fechar</Button>
<Button variant="primary">Confirmar</Button>
```

### Lista de itens
```tsx
<Button variant="secondary" size="small">Ver</Button>
<Button variant="tertiary" size="small">Editar</Button>
<Button variant="destructive" size="small">Excluir</Button>
```

## Dicas

✅ **Use loading durante operações assíncronas**
```tsx
<Button loading={isSaving}>Salvar</Button>
```

✅ **Desabilite durante loading**
```tsx
<Button disabled={loading} loading={loading}>
  Processar
</Button>
```

✅ **Adicione feedback visual**
```tsx
<Button onPress={() => {
  // Feedback visual
  alert('Sucesso!')
}}>
  Clique aqui
</Button>
```

❌ **Evite múltiplos botões primary na mesma tela**
```tsx
{/* Ruim */}
<Button variant="primary">Ação 1</Button>
<Button variant="primary">Ação 2</Button>

{/* Bom */}
<Button variant="primary">Ação Principal</Button>
<Button variant="secondary">Ação Secundária</Button>
```

❌ **Evite textos muito longos**
```tsx
{/* Ruim */}
<Button>Clique aqui para processar o pagamento e finalizar</Button>

{/* Bom */}
<Button>Finalizar compra</Button>
```

## Ver Mais

- [README.md](./README.md) - Documentação completa
- [Button.stories.tsx](./Button.stories.tsx) - Exemplos no Storybook
- [IMPLEMENTATION.md](../../IMPLEMENTATION.md) - Detalhes técnicos

## Suporte

Para dúvidas ou problemas, consulte a documentação completa ou abra uma issue.

