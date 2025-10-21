# Button - Guia Rápido de Uso com Ícones

## 🚀 Uso Básico

```tsx
import { Button } from './components/Button'

<Button variant="primary" size="medium">
  Clique aqui
</Button>
```

## 🎨 Usando Ícones

### 1. Importar Ícones

```tsx
import { Button } from './components/Button'
import { 
  Checkmarkfilled,
  Arrowsfilledright,
  Trashfilled,
  Addfilled
} from '../icons'
```

### 2. Ícone à Esquerda (Leading)

```tsx
<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
>
  Confirmar
</Button>
```

### 3. Ícone à Direita (Trailing)

```tsx
<Button 
  variant="primary"
  trailingIcon={<Arrowsfilledright />}
>
  Continuar
</Button>
```

### 4. Ambos os Ícones

```tsx
<Button 
  variant="primary"
  leadingIcon={<Addfilled />}
  trailingIcon={<Arrowsfilledright />}
>
  Adicionar e Continuar
</Button>
```

## ✨ Cores Automáticas

**Você não precisa definir cores nos ícones!**

O componente aplica automaticamente a cor correta baseada em:
- Estado do botão (normal, hover, focus, active, disabled)
- Variante (primary, secondary, tertiary, destructive)

```tsx
// ✅ CORRETO - Cores aplicadas automaticamente
<Button variant="primary" leadingIcon={<Checkmarkfilled />}>
  Confirmar
</Button>

// ❌ NÃO FAÇA ISSO - Não é necessário definir cor
<Button variant="primary" leadingIcon={<Checkmarkfilled color="#000" />}>
  Confirmar
</Button>
```

## 📏 Tamanhos Automáticos

Os ícones são redimensionados automaticamente:
- **Button medium (48px)**: ícones com 24px
- **Button small (36px)**: ícones com 20px

```tsx
// Ícone com 24px automaticamente
<Button size="medium" leadingIcon={<Checkmarkfilled />}>
  Medium
</Button>

// Ícone com 20px automaticamente
<Button size="small" leadingIcon={<Checkmarkfilled />}>
  Small
</Button>
```

## 🎯 Exemplos por Variante

### Primary
```tsx
<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
>
  Confirmar Pedido
</Button>
```

### Secondary
```tsx
<Button 
  variant="secondary"
  leadingIcon={<Editfilled />}
>
  Editar
</Button>
```

### Tertiary
```tsx
<Button 
  variant="tertiary"
  trailingIcon={<Arrowsfilledright />}
>
  Ver mais
</Button>
```

### Destructive
```tsx
<Button 
  variant="destructive"
  leadingIcon={<Trashfilled />}
>
  Excluir
</Button>
```

## 🔄 Com Loading

Durante loading, os ícones são automaticamente ocultados:

```tsx
const [loading, setLoading] = useState(false)

<Button 
  variant="primary"
  leadingIcon={<Checkmarkfilled />}
  loading={loading}
  onPress={async () => {
    setLoading(true)
    await api.save()
    setLoading(false)
  }}
>
  Salvar
</Button>
```

## 🎨 Ícones Populares

### Ações Comuns
- `Checkmarkfilled` / `Checkmarkoutlined` - Confirmar
- `Dismissfilled` / `Dismissoutlined` - Fechar
- `Addfilled` / `Addoutlined` - Adicionar
- `Editfilled` / `Editoutlined` - Editar
- `Trashfilled` / `Trashoutlined` - Excluir
- `Savefilled` / `Saveoutlined` - Salvar

### Navegação
- `Arrowsfilledright` / `Arrowsfilledleft` - Setas
- `Chevronfilledright` / `Chevronfilledleft` - Chevrons
- `Arrowsfilledup` / `Arrowsfilleddown` - Setas verticais

### Comércio
- `Shoppingbagfilled` / `Shoppingbagoutlined` - Carrinho
- `Creditcardfilled` / `Creditcardoutlined` - Pagamento
- `Moneyfilled` / `Moneyoutlined` - Dinheiro

Ver todos os 585 ícones em: `/components/icons/index.ts`

## 💡 Dicas

1. **Prefira ícones filled** para botões primários e secundários
2. **Use ícones outlined** para botões terciários (opcional)
3. **Ícone à direita** → navegação/continuação
4. **Ícone à esquerda** → ação/confirmação
5. **Não misture** filled e outlined no mesmo botão

## 🔍 Ver Todos os Exemplos

Rode o Storybook para ver todos os ícones em ação:

```bash
yarn storybook
```

Navegue até: **Components > Button > IconsShowcase**

## 📖 Documentação Completa

Veja `README.md` para documentação completa do componente.
