import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@tamagui/core'
import { ButtonIcon } from './ButtonIcon'
import { 
  Checkmarkfilled, 
  Arrowsfilledright, 
  Trashfilled, 
  Addfilled,
  Dismissfilled,
  Editfilled,
  Searchfilled,
  Heartfilled,
  Starfilled,
  Filterfilled,
} from '../icons'

const meta = {
  title: 'Components/ButtonIcon',
  component: ButtonIcon,
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
} satisfies Meta<typeof ButtonIcon>

export default meta
type Story = StoryObj<typeof meta>

// Stories básicas

export const Primary: Story = {
  args: {
    icon: <Checkmarkfilled />,
    variant: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    icon: <Searchfilled />,
    variant: 'secondary',
    size: 'medium',
  },
}

export const Tertiary: Story = {
  args: {
    icon: <Editfilled />,
    variant: 'tertiary',
    size: 'medium',
  },
}

export const Destructive: Story = {
  args: {
    icon: <Trashfilled />,
    variant: 'destructive',
    size: 'medium',
  },
}

// Tamanhos

export const Small: Story = {
  args: {
    icon: <Checkmarkfilled />,
    variant: 'primary',
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    icon: <Checkmarkfilled />,
    variant: 'primary',
    size: 'medium',
  },
}

// Estados

export const Loading: Story = {
  args: {
    icon: <Checkmarkfilled />,
    variant: 'primary',
    size: 'medium',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    icon: <Checkmarkfilled />,
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
}

// Showcase de todas as variantes

export const AllVariants: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} loading />
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} disabled />
          <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} loading />
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} disabled />
          <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} loading />
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} disabled />
          <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
        </Stack>
      </Stack>

      <Stack gap={16}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} loading />
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} disabled />
          <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
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
        <h3 style={{ margin: 0 }}>Medium (48×48px)</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
        </Stack>
      </Stack>

      <Stack gap={8}>
        <h3 style={{ margin: 0 }}>Small (36×36px)</h3>
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
          <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
          <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
          <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
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
        <Stack flexDirection="row" gap={16} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase de diferentes ícones

export const IconVariety: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <h2 style={{ margin: 0 }}>Diferentes Ícones</h2>
      
      {/* Primary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Addfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Arrowsfilledright />} />
          <ButtonIcon variant="primary" size="medium" icon={<Heartfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Starfilled />} />
        </Stack>
      </Stack>

      {/* Secondary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Filterfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Addfilled />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Dismissfilled />} />
        </Stack>
      </Stack>

      {/* Tertiary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Filterfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Heartfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Dismissfilled />} />
        </Stack>
      </Stack>

      {/* Destructive */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap" alignItems="center">
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
          <ButtonIcon variant="destructive" size="medium" icon={<Dismissfilled />} />
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Showcase completo (matriz de 48 variantes do Figma)

export const CompleteMatrix: Story = {
  render: () => (
    <Stack gap={24} padding={24} maxWidth={1200}>
      <h2 style={{ margin: 0 }}>ButtonIcon - 48 Variantes (Figma)</h2>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        4 hierarquias × 2 tamanhos × 6 estados = 48 variantes
      </p>
      
      {/* Primary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Primary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium (48×48px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="medium" icon={<Checkmarkfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small (36×36px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="primary" size="small" icon={<Checkmarkfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Secondary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Secondary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium (48×48px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="medium" icon={<Searchfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small (36×36px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="secondary" size="small" icon={<Searchfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Tertiary */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Tertiary</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium (48×48px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small (36×36px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="tertiary" size="small" icon={<Editfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* Destructive */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Destructive</h3>
        <Stack flexDirection="row" gap={12} flexWrap="wrap">
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Medium (48×48px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
          <Stack gap={8}>
            <span style={{ fontSize: 12 }}>Small (36×36px)</span>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Normal</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Hover</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Focus</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} />
              <span style={{ fontSize: 10 }}>Active</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} loading />
              <span style={{ fontSize: 10 }}>Loading</span>
            </Stack>
            <Stack gap={4}>
              <ButtonIcon variant="destructive" size="small" icon={<Trashfilled />} disabled />
              <span style={{ fontSize: 10 }}>Disabled</span>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  ),
}

// Casos de uso prático

export const PracticalUseCases: Story = {
  render: () => (
    <Stack gap={24} padding={24}>
      <h2 style={{ margin: 0 }}>Casos de Uso Práticos</h2>
      
      {/* Barra de ações */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Barra de Ações</h3>
        <Stack flexDirection="row" gap={8} alignItems="center">
          <ButtonIcon variant="tertiary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Searchfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Filterfilled />} />
          <ButtonIcon variant="destructive" size="medium" icon={<Trashfilled />} />
        </Stack>
      </Stack>

      {/* Fechar modal/dialog */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Botão Fechar (Modal/Dialog)</h3>
        <Stack flexDirection="row" gap={8} alignItems="center">
          <ButtonIcon variant="tertiary" size="small" icon={<Dismissfilled />} />
          <ButtonIcon variant="tertiary" size="medium" icon={<Dismissfilled />} />
        </Stack>
      </Stack>

      {/* Ações rápidas */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Ações Rápidas (FAB-like)</h3>
        <Stack flexDirection="row" gap={8} alignItems="center">
          <ButtonIcon variant="primary" size="medium" icon={<Addfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Editfilled />} />
          <ButtonIcon variant="primary" size="medium" icon={<Heartfilled />} />
        </Stack>
      </Stack>

      {/* Navegação */}
      <Stack gap={12}>
        <h3 style={{ margin: 0 }}>Navegação</h3>
        <Stack flexDirection="row" gap={8} alignItems="center">
          <ButtonIcon variant="secondary" size="medium" icon={<Arrowsfilledright />} />
          <ButtonIcon variant="secondary" size="medium" icon={<Arrowsfilledright />} />
        </Stack>
      </Stack>
    </Stack>
  ),
}

