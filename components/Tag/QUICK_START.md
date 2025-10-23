# Tag - Quick Start Guide

Guia rápido para começar a usar o componente Tag.

## ⚡ Instalação

```bash
# O componente já está incluído no projeto
```

## 🎯 Uso Básico

```tsx
import { Tag } from './components/Tag'

function App() {
  return (
    <Tag color="success">
      Entregue
    </Tag>
  )
}
```

## 📋 Casos de Uso Comuns

### 1. Status de Pedido

```tsx
// Pedido confirmado
<Tag hierarchy="solid" color="success">
  Confirmado
</Tag>

// Aguardando pagamento
<Tag hierarchy="weak" color="warning">
  Aguardando
</Tag>

// Pedido cancelado
<Tag hierarchy="solid" color="danger">
  Cancelado
</Tag>
```

### 2. Categorias de Produto

```tsx
// Promoção
<Tag hierarchy="solid" color="primary" radius="pill">
  Promoção
</Tag>

// Novo produto
<Tag hierarchy="weak" color="cold" radius="pill">
  Novo
</Tag>

// Edição limitada
<Tag hierarchy="solid" color="rewards" radius="pill">
  Limitado
</Tag>
```

### 3. Lista de Tags (Múltiplas)

```tsx
import { XStack } from 'tamagui'

<XStack gap="$2" flexWrap="wrap">
  <Tag color="success" size="small">Ativo</Tag>
  <Tag color="cold" size="small">Gelada</Tag>
  <Tag color="rewards" size="small">Premium</Tag>
</XStack>
```

### 4. Temperatura de Bebida

```tsx
// Gelada
<Tag hierarchy="solid" color="cold" size="extraSmall">
  Gelada
</Tag>

// Temperatura ambiente
<Tag hierarchy="weak" color="secondary" size="extraSmall">
  Ambiente
</Tag>
```

### 5. Pontos e Recompensas

```tsx
// Pontos ganhos
<Tag hierarchy="solid" color="rewards" size="large">
  +50 pontos
</Tag>

// Nível do usuário
<Tag hierarchy="weak" color="rewards" radius="pill">
  Gold
</Tag>
```

### 6. Em Tabelas/Listas Compactas

```tsx
import { YStack, XStack, Text } from 'tamagui'

<YStack gap="$1">
  {data.map((item) => (
    <XStack
      key={item.id}
      justifyContent="space-between"
      padding="$2"
    >
      <Text>{item.name}</Text>
      <Tag 
        color={item.active ? 'success' : 'danger'}
        size="extraSmall"
        radius="pill"
      >
        {item.active ? 'Ativo' : 'Inativo'}
      </Tag>
    </XStack>
  ))}
</YStack>
```

### 7. Com Ícone (Opcional)

```tsx
import { IconStar } from './components/icons'

<Tag
  hierarchy="solid"
  color="rewards"
  iconShow
  icon={<IconStar />}
>
  VIP
</Tag>
```

## 🎨 Variantes Principais

### Hierarchy (Contraste)

```tsx
// Solid - Alto contraste, fundo sólido
<Tag hierarchy="solid" color="success">Solid</Tag>

// Weak - Baixo contraste, fundo suave
<Tag hierarchy="weak" color="success">Weak</Tag>
```

### Colors (7 cores)

```tsx
<Tag color="success">Success</Tag>   // Verde - Positivo
<Tag color="cold">Cold</Tag>         // Azul - Informação/Frio
<Tag color="warning">Warning</Tag>   // Laranja - Atenção
<Tag color="danger">Danger</Tag>     // Vermelho - Erro/Crítico
<Tag color="primary">Primary</Tag>   // Roxo - Destaque
<Tag color="secondary">Secondary</Tag> // Cinza - Neutro
<Tag color="rewards">Rewards</Tag>   // Dourado - Recompensas
```

### Sizes (5 tamanhos)

```tsx
<Tag size="extraSmall">XS</Tag>  // 16px - Tabelas densas
<Tag size="small">Small</Tag>    // 20px - Cards pequenos
<Tag size="medium">Medium</Tag>  // 24px - Padrão
<Tag size="large">Large</Tag>    // 28px - Headers
<Tag size="extraLarge">XL</Tag>  // 32px - Hero sections
```

### Radius (Formato)

```tsx
// Rounded - Cantos arredondados (8px)
<Tag radius="rounded">Rounded</Tag>

// Pill - Totalmente arredondado (9999px)
<Tag radius="pill">Pill</Tag>
```

## 🎯 Props Principais

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `string` | - | Texto do tag (obrigatório) |
| `hierarchy` | `'solid' \| 'weak'` | `'solid'` | Contraste (solid/weak) |
| `color` | `TagColor` | `'primary'` | Cor do tag (7 opções) |
| `radius` | `'rounded' \| 'pill'` | `'rounded'` | Formato da borda |
| `size` | `TagSize` | `'medium'` | Tamanho (5 opções) |
| `iconShow` | `boolean` | `false` | Se exibe ícone |
| `icon` | `ReactNode` | - | Ícone customizado |

**TagColor:** `'success' | 'cold' | 'warning' | 'danger' | 'primary' | 'secondary' | 'rewards'`

**TagSize:** `'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'`

## 💡 Dicas

### Quando usar Solid vs Weak?

**Solid (Alto Contraste):**
- Status principais e críticos
- Informações que precisam de destaque
- Feedback importante para o usuário
- Exemplos: "Entregue", "Cancelado", "VIP"

**Weak (Baixo Contraste):**
- Status secundários e informativos
- Tags de categorização
- Informações complementares
- Exemplos: "Novo", "Pendente", "Normal"

```tsx
// ✅ Solid para status críticos
<Tag hierarchy="solid" color="danger">Cancelado</Tag>

// ✅ Weak para informações secundárias
<Tag hierarchy="weak" color="secondary">Rascunho</Tag>
```

### Quando usar Rounded vs Pill?

**Rounded:**
- Mais formal e tradicional
- Ideal para tabelas e listas
- Status e informações técnicas

**Pill:**
- Mais moderno e suave
- Ideal para categorias e filtros
- Tags de produto e promoções

```tsx
// ✅ Rounded para status
<Tag radius="rounded" color="success">Aprovado</Tag>

// ✅ Pill para categorias
<Tag radius="pill" color="primary">Promoção</Tag>
```

### Escolhendo o Tamanho Correto

| Contexto | Tamanho Recomendado | Motivo |
|----------|---------------------|--------|
| Tabelas densas | `extraSmall` | Economiza espaço |
| Listas e cards | `small` | Compacto mas legível |
| Uso geral | `medium` | Padrão, equilibrado |
| Headers | `large` | Mais visibilidade |
| Hero sections | `extraLarge` | Máximo destaque |

### Tags são Não-Interativos

Por padrão, tags **não têm eventos de click**. Eles são apenas informativos.

Se precisar de interatividade:

```tsx
import { Pressable } from 'tamagui'

// Envolver em Pressable
<Pressable onPress={() => handleRemove(item.id)}>
  <Tag color="primary">Remover</Tag>
</Pressable>
```

### Múltiplas Tags em Linha

Use `XStack` com `flexWrap` para tags que quebram linha:

```tsx
<XStack gap="$2" flexWrap="wrap">
  <Tag color="success">Tag 1</Tag>
  <Tag color="cold">Tag 2</Tag>
  <Tag color="warning">Tag 3</Tag>
  {/* mais tags... */}
</XStack>
```

### Text Overflow

Tags automaticamente truncam texto longo:

```tsx
// Texto muito longo será truncado com "..."
<Tag maxWidth={200}>
  Este é um texto muito longo que será truncado
</Tag>
```

## 🎨 Combinações Recomendadas

### Status de Sistema

```tsx
// Sucesso/Positivo
<Tag hierarchy="solid" color="success">✅</Tag>

// Erro/Negativo  
<Tag hierarchy="solid" color="danger">❌</Tag>

// Atenção/Aviso
<Tag hierarchy="solid" color="warning">⚠️</Tag>

// Informação
<Tag hierarchy="weak" color="cold">ℹ️</Tag>
```

### Temperatura (Bebidas)

```tsx
// Gelada
<Tag hierarchy="solid" color="cold" size="extraSmall">
  🧊 Gelada
</Tag>

// Natural
<Tag hierarchy="weak" color="secondary" size="extraSmall">
  Ambiente
</Tag>
```

### Programa de Pontos

```tsx
// Pontos ganhos
<Tag hierarchy="solid" color="rewards" size="medium">
  +100 pts
</Tag>

// Nível
<Tag hierarchy="weak" color="rewards" size="medium" radius="pill">
  🏆 Platinum
</Tag>
```

## 🐛 Troubleshooting

### Tag muito largo

```tsx
// ❌ Problema - Tag expande demais
<Tag>Texto muito longo que faz o tag ficar muito largo</Tag>

// ✅ Solução 1 - Limitar largura
<Tag maxWidth={150}>Texto muito longo...</Tag>

// ✅ Solução 2 - Texto mais curto
<Tag>Resumo</Tag>
```

### Ícone não aparece

```tsx
// ❌ Errado - falta icon prop
<Tag iconShow color="rewards">VIP</Tag>

// ✅ Correto
<Tag iconShow icon={<IconStar />} color="rewards">VIP</Tag>

// ✅ Alternativa - sem ícone
<Tag color="rewards">VIP</Tag>
```

### Cores não batem com o design

```tsx
// ❌ Errado - hardcode de cores
<Tag backgroundColor="#00ff00">Sucesso</Tag>

// ✅ Correto - usar color prop
<Tag color="success">Sucesso</Tag>
```

### Tags desalinhadas

```tsx
// ❌ Problema - tags de diferentes tamanhos desalinhadas
<XStack gap="$2">
  <Tag size="small">Tag 1</Tag>
  <Tag size="large">Tag 2</Tag>
</XStack>

// ✅ Solução - mesmo tamanho + alinhamento
<XStack gap="$2" alignItems="center">
  <Tag size="medium">Tag 1</Tag>
  <Tag size="medium">Tag 2</Tag>
</XStack>
```

## 📚 Próximos Passos

- Ver todos os exemplos no [Storybook](./Tag.stories.tsx)
- Ler a [documentação completa](./README.md)
- Conferir a [especificação técnica do Figma](../../_context/component_data/Tag-clean.md)

## 🔗 Links Úteis

- [Figma Design](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)
- [Código do Componente](./Tag.tsx)
- [Stories do Storybook](./Tag.stories.tsx)
- [Tokens do Tag](../../tokens.ts) (linha ~1841)

---

**💡 Dica Final:** Tags são simples e diretos! Use-os para comunicar status e categorias de forma visual e rápida.

