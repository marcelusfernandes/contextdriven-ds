# Tag - DSZé

Componente de etiqueta/badge de status com suporte completo a múltiplas cores, tamanhos e formatos, implementando todas as variantes do Design System Zé Delivery.

## 📊 Visão Geral

O Tag é um componente de exibição de status e categorias que permite comunicar visualmente informações importantes ao usuário. Implementa 140 variantes possíveis conforme especificação do Figma.

### Características Principais

- ✅ **140 variantes** (2 Hierarchies × 7 Colors × 2 Radius × 5 Sizes)
- ✅ **Não-interativo** - Por padrão, tags são apenas informativos
- ✅ **7 cores semânticas** - Success, Cold, Warning, Danger, Primary, Secondary, Rewards
- ✅ **2 hierarquias** - Solid (alto contraste) e Weak (baixo contraste)
- ✅ **5 tamanhos** - ExtraSmall (16px) até ExtraLarge (32px)
- ✅ **2 formatos** - Rounded (8px) e Pill (9999px)
- ✅ **Ícone opcional** - Suporte a ícones customizados
- ✅ **Text truncation** - Texto longo é truncado automaticamente
- ✅ **Acessibilidade** - ARIA completo para screen readers
- ✅ **Type-safe** - TypeScript com inferência de tipos
- ✅ **Design System** - Tokens do DSZé

## 🎯 Figma

- **Node ID:** 6943:46686
- **Frame:** Tag New 🟠
- **URL:** [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)

## 📦 Instalação

```bash
# O componente já está incluído no projeto
import { Tag } from '@/components/Tag'
```

## 🚀 Uso Básico

```tsx
import { Tag } from '@/components/Tag'

function MyComponent() {
  return (
    <Tag color="success">
      Entregue
    </Tag>
  )
}
```

### Com Múltiplas Variantes

```tsx
import { Tag } from '@/components/Tag'
import { XStack } from 'tamagui'

function StatusList() {
  return (
    <XStack gap="$2">
      <Tag hierarchy="solid" color="success" size="medium">
        Entregue
      </Tag>
      <Tag hierarchy="weak" color="warning" size="medium">
        Aguardando
      </Tag>
      <Tag hierarchy="solid" color="danger" size="medium">
        Cancelado
      </Tag>
    </XStack>
  )
}
```

## 🎨 Variantes

### 1. Hierarchy (Hierarquia Visual)

A hierarchy controla o contraste visual do tag.

```tsx
// Solid - Alto contraste, fundo sólido
<Tag hierarchy="solid" color="success">
  Solid
</Tag>

// Weak - Baixo contraste, fundo suave
<Tag hierarchy="weak" color="success">
  Weak
</Tag>
```

**Diferenças:**

| Hierarchy | Background | Text | Contraste | Uso |
|-----------|------------|------|-----------|-----|
| `solid` | Cor vibrante | Branco/Preto | Alto | Status críticos, destaque principal |
| `weak` | Cor clara | Cor escura | Baixo | Status secundários, informativo |

**Quando usar:**

**Solid:**
- ✅ Status principais (Entregue, Cancelado)
- ✅ Feedback importante
- ✅ Informações críticas
- ✅ Destaque e promoções

**Weak:**
- ✅ Status secundários (Pendente, Rascunho)
- ✅ Categorias de produto
- ✅ Informações complementares
- ✅ Tags de metadados

### 2. Color (Esquema de Cores)

7 cores semânticas disponíveis:

```tsx
// Success - Verde (feedback positivo)
<Tag color="success">Success</Tag>

// Cold - Azul (informação, temperatura fria)
<Tag color="cold">Cold</Tag>

// Warning - Laranja (atenção, alerta)
<Tag color="warning">Warning</Tag>

// Danger - Vermelho (erro, crítico)
<Tag color="danger">Danger</Tag>

// Primary - Roxo (destaque principal)
<Tag color="primary">Primary</Tag>

// Secondary - Cinza/Preto (neutro)
<Tag color="secondary">Secondary</Tag>

// Rewards - Dourado (recompensas, pontos)
<Tag color="rewards">Rewards</Tag>
```

**Guia de Uso:**

| Cor | Significado | Uso Recomendado | Exemplos |
|-----|-------------|-----------------|----------|
| `success` | ✅ Positivo, aprovado | Status de sucesso | "Entregue", "Aprovado", "Ativo", "Confirmado" |
| `cold` | ❄️ Frio, informação | Temperatura, info neutra | "Gelada", "Informação", "Temperatura" |
| `warning` | ⚠️ Atenção, alerta | Status de atenção | "Aguardando", "Pendente", "Atenção" |
| `danger` | ❌ Erro, crítico | Status negativo | "Cancelado", "Erro", "Bloqueado", "Crítico" |
| `primary` | ⭐ Destaque principal | Promoções, premium | "Destaque", "Premium", "Promoção" |
| `secondary` | 🔘 Neutro, genérico | Status padrão | "Normal", "Padrão", "Neutro" |
| `rewards` | 🏆 Recompensas, pontos | Programa de pontos | "Pontos", "VIP", "Gold", "Recompensas" |

### 3. Radius (Formato da Borda)

```tsx
// Rounded - Cantos arredondados (8px)
<Tag radius="rounded">Rounded</Tag>

// Pill - Totalmente arredondado (9999px)
<Tag radius="pill">Pill</Tag>
```

**Diferenças:**

| Radius | Border Radius | Visual | Uso |
|--------|---------------|--------|-----|
| `rounded` | 8px | Cantos levemente arredondados | Tabelas, listas, status técnicos |
| `pill` | 9999px | Totalmente arredondado | Categorias, tags de produto, filtros |

**Quando usar:**

**Rounded:**
- ✅ Mais formal e tradicional
- ✅ Tabelas e listas de dados
- ✅ Status técnicos e informações precisas

**Pill:**
- ✅ Mais moderno e suave
- ✅ Tags de categoria e filtros
- ✅ Tags de produto e promoções

### 4. Size (Tamanho)

5 tamanhos disponíveis:

```tsx
// ExtraSmall (16px altura)
<Tag size="extraSmall">XS</Tag>

// Small (20px altura)
<Tag size="small">Small</Tag>

// Medium (24px altura) - Padrão
<Tag size="medium">Medium</Tag>

// Large (28px altura)
<Tag size="large">Large</Tag>

// ExtraLarge (32px altura)
<Tag size="extraLarge">XL</Tag>
```

**Especificações Técnicas:**

| Size | Height | Padding H | Padding V | Gap | Icon Size | Font Size | Line Height |
|------|--------|-----------|-----------|-----|-----------|-----------|-------------|
| `extraSmall` | 16px | 6px | 2px | 4px | 12px | 12px | 12px |
| `small` | 20px | 8px | 4px | 4px | 12px | 12px | 12px |
| `medium` | 24px | 10px | 4px | 6px | 16px | 14px | 16px |
| `large` | 28px | 12px | 6px | 6px | 20px | 16px | 20px |
| `extraLarge` | 32px | 16px | 8px | 8px | 24px | 20px | 24px |

**Guia de Contexto:**

| Contexto | Tamanho Recomendado | Motivo |
|----------|---------------------|--------|
| Tabelas densas | `extraSmall` | Economiza espaço vertical |
| Listas e cards pequenos | `small` | Compacto mas legível |
| Uso geral (padrão) | `medium` | Equilibrado para maioria dos casos |
| Headers, destaques | `large` | Maior visibilidade |
| Hero sections, banners | `extraLarge` | Máximo impacto visual |

### 5. Icon (Ícone Opcional)

```tsx
import { IconStar, IconCheck } from '@/components/icons'

// Com ícone customizado
<Tag 
  color="rewards"
  iconShow
  icon={<IconStar />}
>
  VIP
</Tag>

// Com ícone de check
<Tag 
  color="success"
  iconShow
  icon={<IconCheck />}
>
  Confirmado
</Tag>

// Sem ícone (padrão)
<Tag color="primary">
  Sem Ícone
</Tag>
```

**Props de Ícone:**

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `iconShow` | `boolean` | `false` | Se deve exibir o ícone |
| `icon` | `ReactNode` | - | Componente de ícone customizado |

**Ícones Sugeridos por Cor:**

| Color | Ícone Sugerido | Componente |
|-------|----------------|------------|
| `success` | ✅ Check | `IconCheckCircle` |
| `cold` | ❄️ Snowflake | `IconSnowflake` |
| `warning` | ⚠️ Alert | `IconAlertTriangle` |
| `danger` | ❌ X | `IconXCircle` |
| `primary` | ⭐ Star | `IconStar` |
| `secondary` | 🔘 Circle | `IconCircle` |
| `rewards` | 🏆 Trophy | `IconTrophy` |

## 📋 API

### Props

```typescript
export interface TagProps {
  /**
   * Hierarquia visual do tag
   * @default 'solid'
   */
  hierarchy?: 'solid' | 'weak'
  
  /**
   * Esquema de cor do tag
   * @default 'primary'
   */
  color?: 'success' | 'cold' | 'warning' | 'danger' | 'primary' | 'secondary' | 'rewards'
  
  /**
   * Formato do border radius
   * @default 'rounded'
   */
  radius?: 'rounded' | 'pill'
  
  /**
   * Tamanho do tag
   * @default 'medium'
   */
  size?: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'
  
  /**
   * Se deve exibir o ícone
   * @default false
   */
  iconShow?: boolean
  
  /**
   * Ícone customizado (componente)
   */
  icon?: React.ReactNode
  
  /**
   * Texto do label (obrigatório)
   */
  children: string
  
  /**
   * ID para testes
   */
  testID?: string
  
  // + todas as props de Stack do Tamagui
  // (maxWidth, padding, margin, etc)
}
```

### Valores Padrão

```tsx
<Tag
  hierarchy="solid"
  color="primary"
  radius="rounded"
  size="medium"
  iconShow={false}
>
  Label
</Tag>
```

## 💡 Casos de Uso

### 1. Status de Pedido

```tsx
import { Tag } from '@/components/Tag'
import { YStack, XStack, Text } from 'tamagui'

function OrderStatusCard({ order }) {
  const getStatusTag = (status: string) => {
    switch (status) {
      case 'delivered':
        return <Tag hierarchy="solid" color="success" size="small">Entregue</Tag>
      case 'pending':
        return <Tag hierarchy="weak" color="warning" size="small">Aguardando</Tag>
      case 'cancelled':
        return <Tag hierarchy="solid" color="danger" size="small">Cancelado</Tag>
      case 'processing':
        return <Tag hierarchy="weak" color="primary" size="small">Processando</Tag>
      default:
        return <Tag hierarchy="weak" color="secondary" size="small">Desconhecido</Tag>
    }
  }
  
  return (
    <YStack padding="$3" backgroundColor="$gray50" borderRadius="$2">
      <XStack justifyContent="space-between" alignItems="center">
        <Text fontSize="$4">Pedido #{order.id}</Text>
        {getStatusTag(order.status)}
      </XStack>
    </YStack>
  )
}
```

### 2. Categorias de Produto

```tsx
import { Tag } from '@/components/Tag'
import { XStack, YStack, Text } from 'tamagui'

function ProductCard({ product }) {
  return (
    <YStack gap="$3" padding="$4" backgroundColor="$gray50" borderRadius="$3">
      <Text fontSize="$5" fontWeight="600">{product.name}</Text>
      
      {/* Tags de categoria */}
      <XStack gap="$2" flexWrap="wrap">
        {product.isPromotion && (
          <Tag hierarchy="solid" color="primary" size="small" radius="pill">
            Promoção
          </Tag>
        )}
        
        {product.isNew && (
          <Tag hierarchy="weak" color="cold" size="small" radius="pill">
            Novo
          </Tag>
        )}
        
        {product.isCold && (
          <Tag hierarchy="solid" color="cold" size="small" radius="pill">
            Gelada
          </Tag>
        )}
        
        {product.isLimited && (
          <Tag hierarchy="solid" color="rewards" size="small" radius="pill">
            Edição Limitada
          </Tag>
        )}
      </XStack>
    </YStack>
  )
}
```

### 3. Programa de Pontos e Recompensas

```tsx
import { Tag } from '@/components/Tag'
import { XStack, YStack, Text } from 'tamagui'
import { IconTrophy } from '@/components/icons'

function RewardsSection({ user }) {
  return (
    <YStack gap="$3">
      {/* Pontos ganhos */}
      <YStack padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Compra realizada</Text>
          <Tag hierarchy="solid" color="rewards" size="medium">
            +50 pontos
          </Tag>
        </XStack>
      </YStack>
      
      {/* Nível do usuário */}
      <YStack padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Seu nível</Text>
          <Tag 
            hierarchy="weak" 
            color="rewards" 
            size="medium" 
            radius="pill"
            iconShow
            icon={<IconTrophy />}
          >
            Gold
          </Tag>
        </XStack>
      </YStack>
    </YStack>
  )
}
```

### 4. Temperatura de Bebida

```tsx
import { Tag } from '@/components/Tag'
import { XStack } from 'tamagui'

function TemperatureTag({ temperature }: { temperature: 'cold' | 'ambient' }) {
  return (
    <XStack gap="$2">
      {temperature === 'cold' ? (
        <Tag hierarchy="solid" color="cold" size="extraSmall">
          Gelada
        </Tag>
      ) : (
        <Tag hierarchy="weak" color="secondary" size="extraSmall">
          Ambiente
        </Tag>
      )}
    </XStack>
  )
}
```

### 5. Tabela/Lista Compacta

```tsx
import { Tag } from '@/components/Tag'
import { YStack, XStack, Text } from 'tamagui'

function UserTable({ users }) {
  return (
    <YStack gap="$1">
      {users.map((user, index) => (
        <XStack
          key={user.id}
          justifyContent="space-between"
          alignItems="center"
          padding="$2"
          backgroundColor={index % 2 === 0 ? '$gray50' : 'transparent'}
        >
          <Text fontSize="$3">{user.name}</Text>
          <Tag
            hierarchy="weak"
            color={user.active ? 'success' : 'danger'}
            size="extraSmall"
            radius="pill"
          >
            {user.active ? 'Ativo' : 'Inativo'}
          </Tag>
        </XStack>
      ))}
    </YStack>
  )
}
```

### 6. Filtros de Busca

```tsx
import { Tag } from '@/components/Tag'
import { XStack, Pressable } from 'tamagui'
import { useState } from 'react'

function SearchFilters() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  
  const filters = ['Promoção', 'Novo', 'Gelada', 'Premium']
  
  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }
  
  return (
    <XStack gap="$2" flexWrap="wrap">
      {filters.map(filter => (
        <Pressable key={filter} onPress={() => toggleFilter(filter)}>
          <Tag
            hierarchy={selectedFilters.includes(filter) ? 'solid' : 'weak'}
            color="primary"
            radius="pill"
            size="small"
          >
            {filter}
          </Tag>
        </Pressable>
      ))}
    </XStack>
  )
}
```

## 🎯 Padrões de Design

### Text Overflow e Truncation

Tags automaticamente truncam texto longo:

```tsx
// Texto será truncado com "..." se ultrapassar maxWidth
<Tag maxWidth={150} color="success">
  Este é um texto muito longo que será truncado
</Tag>

// Output visual: "Este é um texto..."
```

**Dica:** Sempre defina uma `maxWidth` razoável para evitar tags muito largos.

### Múltiplas Tags em Linha

Use `XStack` com `flexWrap` para tags que podem quebrar linha:

```tsx
<XStack gap="$2" flexWrap="wrap" maxWidth={400}>
  <Tag color="success">Tag 1</Tag>
  <Tag color="cold">Tag 2</Tag>
  <Tag color="warning">Tag 3</Tag>
  <Tag color="danger">Tag 4</Tag>
  <Tag color="primary">Tag 5</Tag>
  {/* Mais tags... */}
</XStack>
```

### Alinhamento Vertical

Use `alignItems="center"` para alinhar tags com outros elementos:

```tsx
<XStack gap="$2" alignItems="center">
  <Text fontSize="$4">Status:</Text>
  <Tag color="success" size="small">Ativo</Tag>
</XStack>
```

### Espaçamento Consistente

Mantenha gaps consistentes entre tags:

```tsx
// ✅ Bom - gap consistente
<XStack gap="$2">
  <Tag>Tag 1</Tag>
  <Tag>Tag 2</Tag>
</XStack>

// ❌ Evitar - espaçamentos irregulares
<XStack>
  <Tag marginRight="$1">Tag 1</Tag>
  <Tag marginLeft="$3">Tag 2</Tag>
</XStack>
```

## ♿ Acessibilidade

### ARIA Labels

```tsx
// Tag básico - automaticamente acessível
<Tag color="success">Entregue</Tag>

// Com label descritivo
<Tag
  color="danger"
  accessibilityLabel="Status: Pedido cancelado"
>
  Cancelado
</Tag>

// Com role explícito
<Tag
  color="warning"
  accessibilityRole="text"
  accessibilityLiveRegion="polite"
>
  Processando
</Tag>
```

### Screen Readers

Tags são anunciados como texto por screen readers. Use `accessibilityLabel` para contexto adicional:

```tsx
// Bom
<Tag color="success" accessibilityLabel="Status do pedido: Entregue">
  Entregue
</Tag>

// Melhor ainda - contexto claro
<XStack gap="$2">
  <Text accessibilityRole="label">Status:</Text>
  <Tag color="success">Entregue</Tag>
</XStack>
```

### Contraste de Cores

Todas as combinações de hierarchy + color atendem WCAG AA:

- **Solid:** Alto contraste automático (≥ 4.5:1)
- **Weak:** Contraste adequado para texto grande (≥ 3:1)

## 🎨 Temas e Customização

### Usando Tokens Personalizados

Tags usam tokens do sistema, mas podem ser customizados:

```tsx
// Override de background
<Tag
  color="primary"
  backgroundColor="$customColor"
>
  Custom
</Tag>

// Override de text color
<Tag
  color="success"
  // Note: override de color do texto requer styled component
>
  Custom Text
</Tag>
```

### Variações Personalizadas

Para criar variações consistentes, crie wrappers:

```tsx
// StatusTag.tsx
export const StatusTag = ({ status, ...props }) => {
  const statusMap = {
    active: { color: 'success', hierarchy: 'solid' },
    inactive: { color: 'danger', hierarchy: 'weak' },
    pending: { color: 'warning', hierarchy: 'weak' },
  } as const
  
  const config = statusMap[status] || statusMap.inactive
  
  return (
    <Tag {...config} {...props}>
      {status}
    </Tag>
  )
}

// Uso
<StatusTag status="active" size="small" />
```

## 🔧 Performance

### Renderização

Tags são componentes leves e performáticos:

```tsx
// ✅ Bom - renderização otimizada
<XStack gap="$2">
  {items.map(item => (
    <Tag key={item.id} color="primary">
      {item.label}
    </Tag>
  ))}
</XStack>
```

### Memoization

Para listas grandes, considere memoization:

```tsx
import { memo } from 'react'

const MemoizedTag = memo(Tag)

// Uso em lista grande
<XStack gap="$2" flexWrap="wrap">
  {largeList.map(item => (
    <MemoizedTag key={item.id} color={item.color}>
      {item.label}
    </MemoizedTag>
  ))}
</XStack>
```

## 🧪 Testes

### Testing Library

```tsx
import { render, screen } from '@testing-library/react'
import { Tag } from './Tag'

describe('Tag', () => {
  it('renders with text', () => {
    render(<Tag testID="my-tag">Label</Tag>)
    expect(screen.getByText('Label')).toBeInTheDocument()
  })
  
  it('renders with correct color', () => {
    render(<Tag color="success">Success</Tag>)
    const tag = screen.getByText('Success')
    // Verificar estilo aplicado...
  })
  
  it('renders with icon when iconShow is true', () => {
    render(
      <Tag iconShow icon={<MockIcon testID="icon" />}>
        With Icon
      </Tag>
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
```

### Snapshot Testing

```tsx
import renderer from 'react-test-renderer'
import { Tag } from './Tag'

it('matches snapshot', () => {
  const tree = renderer.create(
    <Tag color="success" size="medium">
      Snapshot Test
    </Tag>
  ).toJSON()
  
  expect(tree).toMatchSnapshot()
})
```

## 📐 Tokens de Design

Tags utilizam os seguintes tokens:

### Cores

```typescript
// Solid hierarchy
tokens.tag.hierarchy.solid.success.bg      // Background verde
tokens.tag.hierarchy.solid.success.text    // Texto branco
tokens.tag.hierarchy.solid.success.icon    // Ícone branco

// Weak hierarchy
tokens.tag.hierarchy.weak.success.bg       // Background verde claro
tokens.tag.hierarchy.weak.success.text     // Texto verde escuro
tokens.tag.hierarchy.weak.success.icon     // Ícone verde escuro
```

### Tamanhos

```typescript
tokens.tag.size.medium.height              // 24px
tokens.tag.size.medium.paddingHorizontal   // 10px
tokens.tag.size.medium.paddingVertical     // 4px
tokens.tag.size.medium.gap                 // 6px
tokens.tag.size.medium.iconSize            // 16px
tokens.tag.size.medium.fontSize            // 14px
tokens.tag.size.medium.lineHeight          // 16px
```

### Border Radius

```typescript
tokens.tag.radius.rounded                  // 8px
tokens.tag.radius.pill                     // 9999px
```

## 🐛 Troubleshooting

### Tag Muito Largo

**Problema:** Tag expande demais horizontalmente

```tsx
// ❌ Problema
<Tag>Texto muito longo que faz o tag ficar excessivamente largo</Tag>
```

**Solução:**

```tsx
// ✅ Limitar largura
<Tag maxWidth={200}>Texto muito longo...</Tag>

// ✅ Ou texto mais curto
<Tag>Resumido</Tag>
```

### Ícone Não Aparece

**Problema:** Ícone não é exibido

```tsx
// ❌ Falta icon prop
<Tag iconShow color="rewards">VIP</Tag>
```

**Solução:**

```tsx
// ✅ Adicionar icon prop
<Tag iconShow icon={<IconStar />} color="rewards">VIP</Tag>

// ✅ Ou remover iconShow
<Tag color="rewards">VIP</Tag>
```

### Cores Não Batem com Design

**Problema:** Cores customizadas não seguem design system

```tsx
// ❌ Hardcode
<Tag backgroundColor="#00ff00">Sucesso</Tag>
```

**Solução:**

```tsx
// ✅ Usar color prop
<Tag color="success">Sucesso</Tag>
```

### Tags Desalinhadas

**Problema:** Tags de tamanhos diferentes desalinham

```tsx
// ❌ Tamanhos misturados
<XStack gap="$2">
  <Tag size="small">Tag 1</Tag>
  <Tag size="large">Tag 2</Tag>
</XStack>
```

**Solução:**

```tsx
// ✅ Mesmo tamanho + alinhamento
<XStack gap="$2" alignItems="center">
  <Tag size="medium">Tag 1</Tag>
  <Tag size="medium">Tag 2</Tag>
</XStack>
```

### Text Não Trunca

**Problema:** Texto longo não é truncado

```tsx
// ❌ Sem maxWidth
<Tag>Texto extremamente longo sem limite</Tag>
```

**Solução:**

```tsx
// ✅ Definir maxWidth
<Tag maxWidth={150}>Texto extremamente longo sem limite</Tag>
```

## 🔄 Migração

### De Badge/Label Antigo

Se estava usando componente Badge ou Label antigo:

```tsx
// ❌ Antigo
<Badge variant="success">Entregue</Badge>

// ✅ Novo
<Tag color="success">Entregue</Tag>
```

### Props Mapeadas

| Prop Antiga | Prop Nova | Notas |
|-------------|-----------|-------|
| `variant` | `color` | Mesmo conceito, nome diferente |
| `type` | `hierarchy` | solid/weak ao invés de filled/outlined |
| `rounded` | `radius` | "rounded" ou "pill" explícitos |
| `compact` | `size` | Use "extraSmall" ou "small" |

## 📚 Recursos Adicionais

### Links Úteis

- [Figma Design](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)
- [Código do Componente](./Tag.tsx)
- [Stories do Storybook](./Tag.stories.tsx)
- [Quick Start Guide](./QUICK_START.md)
- [Especificação Técnica](../../_context/component_data/Tag-clean.md)
- [Tokens](../../tokens.ts)

### Exemplos Completos

Veja todos os exemplos interativos no Storybook:

```bash
npm run storybook
# Navegue para Components > Tag
```

### Contribuindo

Para adicionar novas variantes ou melhorias:

1. Atualize os tokens em `tokens.ts`
2. Implemente no componente `Tag.tsx`
3. Adicione stories em `Tag.stories.tsx`
4. Atualize esta documentação

## 📊 Variantes Completas

### Total: 140 Variantes

**Cálculo:** 2 hierarchies × 7 colors × 2 radius × 5 sizes = 140

**Hierarchies:** Solid, Weak
**Colors:** Success, Cold, Warning, Danger, Primary, Secondary, Rewards
**Radius:** Rounded, Pill
**Sizes:** ExtraSmall, Small, Medium, Large, ExtraLarge

### Matriz de Combinações

Todas as 140 variantes estão implementadas e testadas no Storybook. Exemplos:

```tsx
// Solid + Success + Rounded + Medium
<Tag hierarchy="solid" color="success" radius="rounded" size="medium">
  Label
</Tag>

// Weak + Primary + Pill + Large
<Tag hierarchy="weak" color="primary" radius="pill" size="large">
  Label
</Tag>

// Solid + Rewards + Rounded + ExtraSmall
<Tag hierarchy="solid" color="rewards" radius="rounded" size="extraSmall">
  Label
</Tag>
```

## 🎓 Best Practices

### ✅ Do

```tsx
// ✅ Use cores semânticas
<Tag color="success">Aprovado</Tag>

// ✅ Mantenha texto curto
<Tag>Novo</Tag>

// ✅ Use size apropriado ao contexto
<Tag size="extraSmall">Status</Tag> // em tabela
<Tag size="large">Promoção</Tag>    // em banner

// ✅ Agrupe tags relacionadas
<XStack gap="$2">
  <Tag color="primary">Tag 1</Tag>
  <Tag color="secondary">Tag 2</Tag>
</XStack>

// ✅ Defina maxWidth para controle
<Tag maxWidth={120}>Texto controlado</Tag>
```

### ❌ Don't

```tsx
// ❌ Não use cores hardcoded
<Tag backgroundColor="#ff0000">Erro</Tag>

// ❌ Não misture tamanhos sem alinhamento
<XStack>
  <Tag size="small">Pequeno</Tag>
  <Tag size="large">Grande</Tag>
</XStack>

// ❌ Não use texto muito longo sem limite
<Tag>Este é um texto extremamente longo sem qualquer limite definido</Tag>

// ❌ Não use tags para interação sem contexto
<Tag onPress={handleClick}>Clique aqui</Tag> // Use Button

// ❌ Não ignore hierarquia visual
<Tag color="danger">Informação secundária</Tag> // Use hierarchy="weak"
```

## 📝 Changelog

### Versão 1.0.0 (Atual)

- ✅ Implementação inicial com 140 variantes
- ✅ Suporte a 7 cores semânticas
- ✅ 5 tamanhos (ExtraSmall → ExtraLarge)
- ✅ 2 formatos (Rounded, Pill)
- ✅ Ícones opcionais
- ✅ Text truncation automático
- ✅ Acessibilidade completa
- ✅ Documentação completa
- ✅ Stories no Storybook

## 💬 Suporte

- **Dúvidas:** Consulte a [Quick Start](./QUICK_START.md)
- **Issues:** Verifique o código em [Tag.tsx](./Tag.tsx)
- **Design:** Consulte o [Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)

---

**Última atualização:** 23/10/2025  
**Versão:** 1.0.0  
**Autor:** Design System Team - Zé Delivery

