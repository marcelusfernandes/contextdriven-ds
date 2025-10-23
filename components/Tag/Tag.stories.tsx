/**
 * Tag Stories - DSZé
 * 
 * Demonstra todas as 140 variantes do componente Tag
 */

import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './Tag'
import { Stack, YStack, XStack, Text } from 'tamagui'

// ================================================================================
// META
// ================================================================================

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tag - DSZé

Componente de etiqueta/badge de status com 140 variantes possíveis.

## Características

- **2 Hierarchies:** Solid (fundo sólido), Weak (fundo suave)
- **7 Colors:** Success, Cold, Warning, Danger, Primary, Secondary, Rewards
- **2 Radius:** Rounded (8px), Pill (9999px)
- **5 Sizes:** ExtraSmall, Small, Medium, Large, ExtraLarge
- **Ícone Opcional:** iconShow (true/false) + icon customizável

## Total de Variantes
2 × 7 × 2 × 5 = **140 variantes**

## Uso

Tags são geralmente **não-interativos** (apenas exibem informação).
Se precisar de interatividade, envolva em \`Pressable\` ou \`Button\`.

## Figma
- Node ID: 6943:46686
- [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/Zé-Delivery---App-Components?node-id=6943-46686&m=dev)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    hierarchy: {
      control: 'select',
      options: ['solid', 'weak'],
      description: 'Hierarquia visual (contraste)',
      table: {
        defaultValue: { summary: 'solid' },
        type: { summary: 'solid | weak' },
      },
    },
    color: {
      control: 'select',
      options: ['success', 'cold', 'warning', 'danger', 'primary', 'secondary', 'rewards'],
      description: 'Esquema de cor',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'success | cold | warning | danger | primary | secondary | rewards' },
      },
    },
    radius: {
      control: 'select',
      options: ['rounded', 'pill'],
      description: 'Formato do border radius',
      table: {
        defaultValue: { summary: 'rounded' },
        type: { summary: 'rounded | pill' },
      },
    },
    size: {
      control: 'select',
      options: ['extraSmall', 'small', 'medium', 'large', 'extraLarge'],
      description: 'Tamanho do tag',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'extraSmall | small | medium | large | extraLarge' },
      },
    },
    iconShow: {
      control: 'boolean',
      description: 'Se deve exibir o ícone',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      control: 'text',
      description: 'Texto do label',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

// ================================================================================
// STORIES INTERATIVAS
// ================================================================================

/**
 * Tag padrão (Primary Solid Medium Rounded)
 */
export const Default: Story = {
  args: {
    children: 'Label',
    hierarchy: 'solid',
    color: 'primary',
    radius: 'rounded',
    size: 'medium',
    iconShow: false,
  },
}

/**
 * Tag interativo no Storybook - ajuste todas as props
 */
export const Playground: Story = {
  args: {
    children: 'Label',
    hierarchy: 'solid',
    color: 'success',
    radius: 'rounded',
    size: 'medium',
    iconShow: false,
  },
}

// ================================================================================
// VARIANTES POR HIERARCHY
// ================================================================================

/**
 * Hierarchy: Solid (fundo sólido, alto contraste)
 */
export const HierarchySolid: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Solid - Todas as cores</Text>
      <XStack gap="$2" flexWrap="wrap">
        <Tag hierarchy="solid" color="success">Success</Tag>
        <Tag hierarchy="solid" color="cold">Cold</Tag>
        <Tag hierarchy="solid" color="warning">Warning</Tag>
        <Tag hierarchy="solid" color="danger">Danger</Tag>
        <Tag hierarchy="solid" color="primary">Primary</Tag>
        <Tag hierarchy="solid" color="secondary">Secondary</Tag>
        <Tag hierarchy="solid" color="rewards">Rewards</Tag>
      </XStack>
    </YStack>
  ),
}

/**
 * Hierarchy: Weak (fundo suave, baixo contraste)
 */
export const HierarchyWeak: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Weak - Todas as cores</Text>
      <XStack gap="$2" flexWrap="wrap">
        <Tag hierarchy="weak" color="success">Success</Tag>
        <Tag hierarchy="weak" color="cold">Cold</Tag>
        <Tag hierarchy="weak" color="warning">Warning</Tag>
        <Tag hierarchy="weak" color="danger">Danger</Tag>
        <Tag hierarchy="weak" color="primary">Primary</Tag>
        <Tag hierarchy="weak" color="secondary">Secondary</Tag>
        <Tag hierarchy="weak" color="rewards">Rewards</Tag>
      </XStack>
    </YStack>
  ),
}

// ================================================================================
// VARIANTES POR COR
// ================================================================================

/**
 * Color: Success (verde) - usado para feedback positivo
 */
export const ColorSuccess: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Success</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="success">Solid</Tag>
        <Tag hierarchy="weak" color="success">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Entregue, Aprovado, Ativo, Confirmado</Text>
    </YStack>
  ),
}

/**
 * Color: Cold (azul) - informação neutra, frio
 */
export const ColorCold: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Cold</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="cold">Solid</Tag>
        <Tag hierarchy="weak" color="cold">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Gelada, Informação, Temperatura</Text>
    </YStack>
  ),
}

/**
 * Color: Warning (laranja) - atenção, alerta
 */
export const ColorWarning: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Warning</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="warning">Solid</Tag>
        <Tag hierarchy="weak" color="warning">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Aguardando, Pendente, Atenção</Text>
    </YStack>
  ),
}

/**
 * Color: Danger (vermelho) - erro, crítico
 */
export const ColorDanger: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Danger</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="danger">Solid</Tag>
        <Tag hierarchy="weak" color="danger">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Cancelado, Erro, Bloqueado, Crítico</Text>
    </YStack>
  ),
}

/**
 * Color: Primary (roxo/primário) - destaque principal
 */
export const ColorPrimary: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Primary</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="primary">Solid</Tag>
        <Tag hierarchy="weak" color="primary">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Destaque, Premium, Promoção</Text>
    </YStack>
  ),
}

/**
 * Color: Secondary (cinza/preto) - neutro
 */
export const ColorSecondary: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Secondary</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="secondary">Solid</Tag>
        <Tag hierarchy="weak" color="secondary">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Normal, Padrão, Neutro</Text>
    </YStack>
  ),
}

/**
 * Color: Rewards (dourado) - recompensas, pontos
 */
export const ColorRewards: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Rewards</Text>
      <XStack gap="$2">
        <Tag hierarchy="solid" color="rewards">Solid</Tag>
        <Tag hierarchy="weak" color="rewards">Weak</Tag>
      </XStack>
      <Text fontSize="$4" color="$gray500">Uso: Pontos, VIP, Gold, Recompensas</Text>
    </YStack>
  ),
}

// ================================================================================
// VARIANTES POR TAMANHO
// ================================================================================

/**
 * Size: Todos os 5 tamanhos (ExtraSmall → ExtraLarge)
 */
export const AllSizes: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Todos os Tamanhos</Text>
      <YStack gap="$3">
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">ExtraSmall (16px) - Tabelas densas</Text>
          <Tag size="extraSmall" color="success">Label</Tag>
        </YStack>
        
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">Small (20px) - Cards pequenos</Text>
          <Tag size="small" color="success">Label</Tag>
        </YStack>
        
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">Medium (24px) - Uso padrão</Text>
          <Tag size="medium" color="success">Label</Tag>
        </YStack>
        
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">Large (28px) - Headers</Text>
          <Tag size="large" color="success">Label</Tag>
        </YStack>
        
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">ExtraLarge (32px) - Hero sections</Text>
          <Tag size="extraLarge" color="success">Label</Tag>
        </YStack>
      </YStack>
    </YStack>
  ),
}

// ================================================================================
// VARIANTES POR RADIUS
// ================================================================================

/**
 * Radius: Rounded (8px) vs Pill (9999px)
 */
export const AllRadius: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Border Radius</Text>
      <YStack gap="$3">
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">Rounded (8px) - Cantos arredondados padrão</Text>
          <Tag radius="rounded" color="primary">Label Rounded</Tag>
        </YStack>
        
        <YStack gap="$1">
          <Text fontSize="$3" color="$gray500">Pill (9999px) - Totalmente arredondado</Text>
          <Tag radius="pill" color="primary">Label Pill</Tag>
        </YStack>
      </YStack>
    </YStack>
  ),
}

// ================================================================================
// CASOS DE USO
// ================================================================================

/**
 * Caso de Uso: Status de Pedido
 */
export const UseCaseOrderStatus: Story = {
  render: () => (
    <YStack gap="$4" maxWidth={400}>
      <Text fontSize="$6" fontWeight="bold">Status de Pedido</Text>
      
      <YStack gap="$2" padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Pedido #12345</Text>
          <Tag hierarchy="solid" color="success" size="small">Entregue</Tag>
        </XStack>
      </YStack>
      
      <YStack gap="$2" padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Pedido #12346</Text>
          <Tag hierarchy="weak" color="warning" size="small">Aguardando</Tag>
        </XStack>
      </YStack>
      
      <YStack gap="$2" padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Pedido #12347</Text>
          <Tag hierarchy="solid" color="danger" size="small">Cancelado</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Caso de Uso: Categorias de Produto
 */
export const UseCaseProductCategories: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Categorias de Produto</Text>
      
      <YStack gap="$3" padding="$4" backgroundColor="$gray50" borderRadius="$3">
        <Text fontSize="$5" fontWeight="600">Cerveja Artesanal IPA</Text>
        <XStack gap="$2" flexWrap="wrap">
          <Tag hierarchy="solid" color="primary" size="small" radius="pill">Promoção</Tag>
          <Tag hierarchy="weak" color="cold" size="small" radius="pill">Gelada</Tag>
          <Tag hierarchy="solid" color="rewards" size="small" radius="pill">Edição Limitada</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Caso de Uso: Pontos e Recompensas
 */
export const UseCaseRewards: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Pontos e Recompensas</Text>
      
      <YStack gap="$2" padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Compra realizada</Text>
          <Tag hierarchy="solid" color="rewards" size="medium">+50 pontos</Tag>
        </XStack>
      </YStack>
      
      <YStack gap="$2" padding="$3" backgroundColor="$gray50" borderRadius="$2">
        <XStack justifyContent="space-between" alignItems="center">
          <Text fontSize="$4">Nível do usuário</Text>
          <Tag hierarchy="weak" color="rewards" size="medium" radius="pill">Gold</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Caso de Uso: Temperatura de Bebida
 */
export const UseCaseTemperature: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Temperatura</Text>
      
      <XStack gap="$2" flexWrap="wrap">
        <Tag hierarchy="solid" color="cold" size="extraSmall">Gelada</Tag>
        <Tag hierarchy="weak" color="secondary" size="extraSmall">Ambiente</Tag>
      </XStack>
    </YStack>
  ),
}

/**
 * Caso de Uso: Tabela Compacta
 */
export const UseCaseTable: Story = {
  render: () => (
    <YStack gap="$4" maxWidth={600}>
      <Text fontSize="$6" fontWeight="bold">Lista/Tabela Compacta</Text>
      
      <YStack gap="$1">
        {[
          { name: 'Usuário 1', status: 'Ativo', color: 'success' as const },
          { name: 'Usuário 2', status: 'Inativo', color: 'danger' as const },
          { name: 'Usuário 3', status: 'Pendente', color: 'warning' as const },
          { name: 'Usuário 4', status: 'Ativo', color: 'success' as const },
        ].map((item, index) => (
          <XStack
            key={index}
            justifyContent="space-between"
            alignItems="center"
            padding="$2"
            backgroundColor={index % 2 === 0 ? '$gray50' : 'transparent'}
          >
            <Text fontSize="$3">{item.name}</Text>
            <Tag hierarchy="weak" color={item.color} size="extraSmall" radius="pill">
              {item.status}
            </Tag>
          </XStack>
        ))}
      </YStack>
    </YStack>
  ),
}

// ================================================================================
// MATRIZ COMPLETA DE VARIANTES
// ================================================================================

/**
 * Matriz: Solid + Success (todos os tamanhos e radius)
 */
export const MatrixSolidSuccess: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Solid Success - Todos os tamanhos × radius</Text>
      
      <YStack gap="$3">
        <Text fontSize="$4" fontWeight="600">Rounded</Text>
        <XStack gap="$2" flexWrap="wrap" alignItems="center">
          <Tag hierarchy="solid" color="success" radius="rounded" size="extraSmall">XS</Tag>
          <Tag hierarchy="solid" color="success" radius="rounded" size="small">Small</Tag>
          <Tag hierarchy="solid" color="success" radius="rounded" size="medium">Medium</Tag>
          <Tag hierarchy="solid" color="success" radius="rounded" size="large">Large</Tag>
          <Tag hierarchy="solid" color="success" radius="rounded" size="extraLarge">XL</Tag>
        </XStack>
        
        <Text fontSize="$4" fontWeight="600">Pill</Text>
        <XStack gap="$2" flexWrap="wrap" alignItems="center">
          <Tag hierarchy="solid" color="success" radius="pill" size="extraSmall">XS</Tag>
          <Tag hierarchy="solid" color="success" radius="pill" size="small">Small</Tag>
          <Tag hierarchy="solid" color="success" radius="pill" size="medium">Medium</Tag>
          <Tag hierarchy="solid" color="success" radius="pill" size="large">Large</Tag>
          <Tag hierarchy="solid" color="success" radius="pill" size="extraLarge">XL</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Matriz: Weak + Primary (todos os tamanhos e radius)
 */
export const MatrixWeakPrimary: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$6" fontWeight="bold">Weak Primary - Todos os tamanhos × radius</Text>
      
      <YStack gap="$3">
        <Text fontSize="$4" fontWeight="600">Rounded</Text>
        <XStack gap="$2" flexWrap="wrap" alignItems="center">
          <Tag hierarchy="weak" color="primary" radius="rounded" size="extraSmall">XS</Tag>
          <Tag hierarchy="weak" color="primary" radius="rounded" size="small">Small</Tag>
          <Tag hierarchy="weak" color="primary" radius="rounded" size="medium">Medium</Tag>
          <Tag hierarchy="weak" color="primary" radius="rounded" size="large">Large</Tag>
          <Tag hierarchy="weak" color="primary" radius="rounded" size="extraLarge">XL</Tag>
        </XStack>
        
        <Text fontSize="$4" fontWeight="600">Pill</Text>
        <XStack gap="$2" flexWrap="wrap" alignItems="center">
          <Tag hierarchy="weak" color="primary" radius="pill" size="extraSmall">XS</Tag>
          <Tag hierarchy="weak" color="primary" radius="pill" size="small">Small</Tag>
          <Tag hierarchy="weak" color="primary" radius="pill" size="medium">Medium</Tag>
          <Tag hierarchy="weak" color="primary" radius="pill" size="large">Large</Tag>
          <Tag hierarchy="weak" color="primary" radius="pill" size="extraLarge">XL</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Matriz: Todas as cores × hierarchies (size medium)
 */
export const MatrixAllColors: Story = {
  render: () => (
    <YStack gap="$4" maxWidth={800}>
      <Text fontSize="$6" fontWeight="bold">Todas as Cores × Hierarchies (Medium)</Text>
      
      <YStack gap="$3">
        <Text fontSize="$4" fontWeight="600">Solid</Text>
        <XStack gap="$2" flexWrap="wrap">
          <Tag hierarchy="solid" color="success">Success</Tag>
          <Tag hierarchy="solid" color="cold">Cold</Tag>
          <Tag hierarchy="solid" color="warning">Warning</Tag>
          <Tag hierarchy="solid" color="danger">Danger</Tag>
          <Tag hierarchy="solid" color="primary">Primary</Tag>
          <Tag hierarchy="solid" color="secondary">Secondary</Tag>
          <Tag hierarchy="solid" color="rewards">Rewards</Tag>
        </XStack>
        
        <Text fontSize="$4" fontWeight="600">Weak</Text>
        <XStack gap="$2" flexWrap="wrap">
          <Tag hierarchy="weak" color="success">Success</Tag>
          <Tag hierarchy="weak" color="cold">Cold</Tag>
          <Tag hierarchy="weak" color="warning">Warning</Tag>
          <Tag hierarchy="weak" color="danger">Danger</Tag>
          <Tag hierarchy="weak" color="primary">Primary</Tag>
          <Tag hierarchy="weak" color="secondary">Secondary</Tag>
          <Tag hierarchy="weak" color="rewards">Rewards</Tag>
        </XStack>
      </YStack>
    </YStack>
  ),
}

