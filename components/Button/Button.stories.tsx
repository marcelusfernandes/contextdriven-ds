import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@tamagui/core'
import { Button } from './Button'
import { Checkmarkfilled, Arrowsfilledright, Trashfilled, Addfilled } from '../icons'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do botão',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'destructive'],
      description: 'Variante visual do botão',
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
    onPress: { action: 'pressed' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Stories básicas

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'medium',
  },
}

export const Tertiary: Story = {
  args: {
    children: 'Button',
    variant: 'tertiary',
    size: 'medium',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    size: 'medium',
  },
}

// Tamanhos

export const Small: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
}

// Estados

export const Loading: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}

// Com ícones

export const WithLeadingIcon: Story = {
  args: {
    children: 'Confirmar',
    variant: 'primary',
    size: 'medium',
    leadingIcon: <Checkmarkfilled />,
  },
}

export const WithTrailingIcon: Story = {
  args: {
    children: 'Continuar',
    variant: 'primary',
    size: 'medium',
    trailingIcon: <Arrowsfilledright />,
  },
}

export const WithBothIcons: Story = {
  args: {
    children: 'Adicionar',
    variant: 'primary',
    size: 'medium',
    leadingIcon: <Addfilled />,
    trailingIcon: <Arrowsfilledright />,
  },
}

export const DestructiveWithIcon: Story = {
  args: {
    children: 'Excluir',
    variant: 'destructive',
    size: 'medium',
    leadingIcon: <Trashfilled />,
  },
}

// Showcase de todas as variantes

export const AllVariants: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="primary" size="medium">Normal</Button>
          <Button variant="primary" size="medium" loading>Loading</Button>
          <Button variant="primary" size="medium" disabled>Disabled</Button>
          <Button variant="primary" size="small">Small</Button>
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="secondary" size="medium">Normal</Button>
          <Button variant="secondary" size="medium" loading>Loading</Button>
          <Button variant="secondary" size="medium" disabled>Disabled</Button>
          <Button variant="secondary" size="small">Small</Button>
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="tertiary" size="medium">Normal</Button>
          <Button variant="tertiary" size="medium" loading>Loading</Button>
          <Button variant="tertiary" size="medium" disabled>Disabled</Button>
          <Button variant="tertiary" size="small">Small</Button>
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="destructive" size="medium">Normal</Button>
          <Button variant="destructive" size="medium" loading>Loading</Button>
          <Button variant="destructive" size="medium" disabled>Disabled</Button>
          <Button variant="destructive" size="small">Small</Button>
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase de todos os tamanhos

export const AllSizes: Story = {
  render: () => (
    <Stack gap={16} padding={24}>
      <Stack gap={8}>
        <h3 style={{ margin: 0 }}>Medium (48px)</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="primary" size="medium">Button</Button>
          <Button variant="secondary" size="medium">Button</Button>
          <Button variant="tertiary" size="medium">Button</Button>
          <Button variant="destructive" size="medium">Button</Button>
        </Stack>
      </Stack>

      <Stack gap={8}>
        <h3 style={{ margin: 0 }}>Small (36px)</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="primary" size="small">Button</Button>
          <Button variant="secondary" size="small">Button</Button>
          <Button variant="tertiary" size="small">Button</Button>
          <Button variant="destructive" size="small">Button</Button>
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase de estados interativos

export const InteractiveStates: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        Passe o mouse, clique ou use Tab + Enter para ver os estados interativos
      </p>
      <Stack gap={16}>
        <Stack flexDirection="row" gap={16} flexWrap="wrap">
          <Button variant="primary" size="medium">Hover me</Button>
          <Button variant="secondary" size="medium">Click me</Button>
          <Button variant="tertiary" size="medium">Focus me</Button>
          <Button variant="destructive" size="medium">Press me</Button>
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase de ícones com diferentes estados

export const IconsShowcase: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <h2 style={{ margin: 0 }}>Botões com Ícones - Todas as Variantes</h2>
      
      {/* Primary com ícones */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Button variant="primary" size="medium" leadingIcon={<Checkmarkfilled />}>
            Confirmar
          </Button>
          <Button variant="primary" size="medium" trailingIcon={<Arrowsfilledright />}>
            Continuar
          </Button>
          <Button variant="primary" size="medium" leadingIcon={<Addfilled />}>
            Adicionar
          </Button>
          <Button variant="primary" size="medium" leadingIcon={<Checkmarkfilled />} disabled>
            Disabled
          </Button>
        </Stack>
      </Stack>

      {/* Secondary com ícones */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Button variant="secondary" size="medium" leadingIcon={<Checkmarkfilled />}>
            Confirmar
          </Button>
          <Button variant="secondary" size="medium" trailingIcon={<Arrowsfilledright />}>
            Continuar
          </Button>
          <Button variant="secondary" size="medium" leadingIcon={<Addfilled />}>
            Adicionar
          </Button>
          <Button variant="secondary" size="medium" leadingIcon={<Checkmarkfilled />} disabled>
            Disabled
          </Button>
        </Stack>
      </Stack>

      {/* Tertiary com ícones */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Button variant="tertiary" size="medium" leadingIcon={<Checkmarkfilled />}>
            Confirmar
          </Button>
          <Button variant="tertiary" size="medium" trailingIcon={<Arrowsfilledright />}>
            Continuar
          </Button>
          <Button variant="tertiary" size="medium" leadingIcon={<Addfilled />}>
            Adicionar
          </Button>
          <Button variant="tertiary" size="medium" leadingIcon={<Checkmarkfilled />} disabled>
            Disabled
          </Button>
        </Stack>
      </Stack>

      {/* Destructive com ícones */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Button variant="destructive" size="medium" leadingIcon={<Trashfilled />}>
            Excluir
          </Button>
          <Button variant="destructive" size="medium" trailingIcon={<Arrowsfilledright />}>
            Remover
          </Button>
          <Button variant="destructive" size="medium" leadingIcon={<Trashfilled />}>
            Deletar
          </Button>
          <Button variant="destructive" size="medium" leadingIcon={<Trashfilled />} disabled>
            Disabled
          </Button>
        </Stack>
      </Stack>

      {/* Tamanhos com ícones */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Diferentes Tamanhos</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
          <Button variant="primary" size="small" leadingIcon={<Checkmarkfilled />}>
            Small
          </Button>
          <Button variant="primary" size="medium" leadingIcon={<Checkmarkfilled />}>
            Medium
          </Button>
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase completo (matriz de 48 variantes do Figma)

export const CompleteMatrix: Story = {
  render: () => (
    <Stack gap={24} padding={24} maxWidth={1200}>
      <h2 style={{ margin: 0 }}>Button - 48 Variantes (Figma)</h2>
      
      {/* Primary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium</span>
            <Button variant="primary" size="medium">Normal</Button>
            <Button variant="primary" size="medium">Hover</Button>
            <Button variant="primary" size="medium">Focus</Button>
            <Button variant="primary" size="medium">Active</Button>
            <Button variant="primary" size="medium" loading>Loading</Button>
            <Button variant="primary" size="medium" disabled>Disabled</Button>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small</span>
            <Button variant="primary" size="small">Normal</Button>
            <Button variant="primary" size="small">Hover</Button>
            <Button variant="primary" size="small">Focus</Button>
            <Button variant="primary" size="small">Active</Button>
            <Button variant="primary" size="small" loading>Loading</Button>
            <Button variant="primary" size="small" disabled>Disabled</Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Secondary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium</span>
            <Button variant="secondary" size="medium">Normal</Button>
            <Button variant="secondary" size="medium">Hover</Button>
            <Button variant="secondary" size="medium">Focus</Button>
            <Button variant="secondary" size="medium">Active</Button>
            <Button variant="secondary" size="medium" loading>Loading</Button>
            <Button variant="secondary" size="medium" disabled>Disabled</Button>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small</span>
            <Button variant="secondary" size="small">Normal</Button>
            <Button variant="secondary" size="small">Hover</Button>
            <Button variant="secondary" size="small">Focus</Button>
            <Button variant="secondary" size="small">Active</Button>
            <Button variant="secondary" size="small" loading>Loading</Button>
            <Button variant="secondary" size="small" disabled>Disabled</Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Tertiary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium</span>
            <Button variant="tertiary" size="medium">Normal</Button>
            <Button variant="tertiary" size="medium">Hover</Button>
            <Button variant="tertiary" size="medium">Focus</Button>
            <Button variant="tertiary" size="medium">Active</Button>
            <Button variant="tertiary" size="medium" loading>Loading</Button>
            <Button variant="tertiary" size="medium" disabled>Disabled</Button>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small</span>
            <Button variant="tertiary" size="small">Normal</Button>
            <Button variant="tertiary" size="small">Hover</Button>
            <Button variant="tertiary" size="small">Focus</Button>
            <Button variant="tertiary" size="small">Active</Button>
            <Button variant="tertiary" size="small" loading>Loading</Button>
            <Button variant="tertiary" size="small" disabled>Disabled</Button>
          </Stack>
        </Stack>
      </Stack>

      {/* Destructive */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium</span>
            <Button variant="destructive" size="medium">Normal</Button>
            <Button variant="destructive" size="medium">Hover</Button>
            <Button variant="destructive" size="medium">Focus</Button>
            <Button variant="destructive" size="medium">Active</Button>
            <Button variant="destructive" size="medium" loading>Loading</Button>
            <Button variant="destructive" size="medium" disabled>Disabled</Button>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small</span>
            <Button variant="destructive" size="small">Normal</Button>
            <Button variant="destructive" size="small">Hover</Button>
            <Button variant="destructive" size="small">Focus</Button>
            <Button variant="destructive" size="small">Active</Button>
            <Button variant="destructive" size="small" loading>Loading</Button>
            <Button variant="destructive" size="small" disabled>Disabled</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
}
