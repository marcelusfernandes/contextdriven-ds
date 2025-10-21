/**
 * Checkbox Stories - DSZé
 * 
 * Demonstra todas as 108 variantes do componente Checkbox
 */

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { Stack, YStack, XStack, Text } from 'tamagui'

// ================================================================================
// META
// ================================================================================

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Checkbox - DSZé

Componente de checkbox com 108 variantes possíveis.

## Características

- **2 Functions:** Input (com label), Single (apenas checkbox)
- **3 Types:** Unchecked, Checked, Indeterminate
- **2 Sizes:** Small (36px), Medium (48px)
- **5 States:** Enabled, Hover, Focus, Active, Disabled
- **2 Error states:** Normal, Error

## Figma
- Node ID: 22:612
- [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=22-612)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do checkbox',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'small | medium' },
      },
    },
    function: {
      control: 'select',
      options: ['input', 'single'],
      description: 'Tipo de checkbox (com ou sem label)',
      table: {
        defaultValue: { summary: 'input' },
        type: { summary: 'input | single' },
      },
    },
    label: {
      control: 'text',
      description: 'Label do checkbox (apenas para function="input")',
    },
    checked: {
      control: 'boolean',
      description: 'Estado de seleção',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado (parcialmente selecionado)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

// ================================================================================
// STORIES
// ================================================================================

/**
 * Checkbox padrão com label
 */
export const Default: Story = {
  args: {
    size: 'medium',
    function: 'input',
    label: 'Aceito os termos e condições',
    checked: false,
  },
}

/**
 * Exemplo interativo - demonstra onChange
 */
export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false)
    
    return (
      <YStack gap="$4">
        <Checkbox
          {...args}
          checked={checked}
          onChange={setChecked}
          label="Checkbox interativo"
        />
        <Text fontSize="$3" color="$gray500">
          Estado: {checked ? 'Selecionado' : 'Não selecionado'}
        </Text>
      </YStack>
    )
  },
}

/**
 * Estados do Checkbox
 */
export const States: Story = {
  render: () => (
    <YStack gap="$6">
      <YStack gap="$3">
        <Text fontSize="$4" fontWeight="600">Normal States</Text>
        <YStack gap="$2">
          <Checkbox label="Enabled (Unchecked)" checked={false} />
          <Checkbox label="Enabled (Checked)" checked={true} />
          <Checkbox label="Indeterminate" indeterminate={true} />
          <Checkbox label="Disabled (Unchecked)" checked={false} disabled />
          <Checkbox label="Disabled (Checked)" checked={true} disabled />
        </YStack>
      </YStack>
      
      <YStack gap="$3">
        <Text fontSize="$4" fontWeight="600">Error States</Text>
        <YStack gap="$2">
          <Checkbox label="Error (Unchecked)" checked={false} error />
          <Checkbox label="Error (Checked)" checked={true} error />
          <Checkbox label="Error Indeterminate" indeterminate={true} error />
          <Checkbox label="Error Disabled" checked={false} error disabled />
        </YStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Tamanhos
 */
export const Sizes: Story = {
  render: () => (
    <YStack gap="$4">
      <YStack gap="$2">
        <Text fontSize="$4" fontWeight="600">Medium (48px)</Text>
        <Checkbox size="medium" label="Medium size checkbox" />
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize="$4" fontWeight="600">Small (36px)</Text>
        <Checkbox size="small" label="Small size checkbox" />
      </YStack>
    </YStack>
  ),
}

/**
 * Functions - Input vs Single
 */
export const Functions: Story = {
  render: () => (
    <YStack gap="$4" alignItems="flex-start">
      <YStack gap="$2">
        <Text fontSize="$4" fontWeight="600">Input (com label)</Text>
        <Checkbox function="input" label="Checkbox com label" />
      </YStack>
      
      <YStack gap="$2">
        <Text fontSize="$4" fontWeight="600">Single (apenas checkbox)</Text>
        <XStack gap="$2" alignItems="center">
          <Checkbox function="single" size="medium" />
          <Checkbox function="single" size="small" />
        </XStack>
      </YStack>
    </YStack>
  ),
}

/**
 * Estado Indeterminate
 */
export const Indeterminate: Story = {
  render: () => {
    const [items, setItems] = useState([false, false, false])
    
    const allChecked = items.every(Boolean)
    const someChecked = items.some(Boolean) && !allChecked
    
    const handleToggleAll = () => {
      const newValue = !allChecked
      setItems([newValue, newValue, newValue])
    }
    
    const handleToggleItem = (index: number) => {
      const newItems = [...items]
      newItems[index] = !newItems[index]
      setItems(newItems)
    }
    
    return (
      <YStack gap="$4">
        <Text fontSize="$4" fontWeight="600">
          Exemplo de "Selecionar Todos"
        </Text>
        
        <YStack gap="$2" paddingLeft="$0">
          <Checkbox
            label="Selecionar todos"
            checked={allChecked}
            indeterminate={someChecked}
            onChange={handleToggleAll}
          />
        </YStack>
        
        <YStack gap="$2" paddingLeft="$6">
          <Checkbox
            label="Item 1"
            checked={items[0]}
            onChange={() => handleToggleItem(0)}
          />
          <Checkbox
            label="Item 2"
            checked={items[1]}
            onChange={() => handleToggleItem(1)}
          />
          <Checkbox
            label="Item 3"
            checked={items[2]}
            onChange={() => handleToggleItem(2)}
          />
        </YStack>
        
        <Text fontSize="$3" color="$gray500">
          {allChecked && 'Todos selecionados'}
          {someChecked && 'Alguns selecionados'}
          {!allChecked && !someChecked && 'Nenhum selecionado'}
        </Text>
      </YStack>
    )
  },
}

/**
 * Comparação de Sizes
 */
export const SizeComparison: Story = {
  render: () => (
    <YStack gap="$4">
      <Text fontSize="$5" fontWeight="600">Comparação de Tamanhos</Text>
      
      <XStack gap="$8" alignItems="flex-start">
        {/* Medium */}
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Medium</Text>
          <YStack gap="$2">
            <Checkbox size="medium" label="Unchecked" checked={false} />
            <Checkbox size="medium" label="Checked" checked={true} />
            <Checkbox size="medium" label="Indeterminate" indeterminate={true} />
            <Checkbox size="medium" label="Disabled" disabled />
            <Checkbox size="medium" label="Error" error />
          </YStack>
          
          <Text fontSize="$3" color="$gray500" marginTop="$2">
            Single:
          </Text>
          <XStack gap="$2">
            <Checkbox size="medium" function="single" checked={false} />
            <Checkbox size="medium" function="single" checked={true} />
            <Checkbox size="medium" function="single" indeterminate={true} />
          </XStack>
        </YStack>
        
        {/* Small */}
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Small</Text>
          <YStack gap="$2">
            <Checkbox size="small" label="Unchecked" checked={false} />
            <Checkbox size="small" label="Checked" checked={true} />
            <Checkbox size="small" label="Indeterminate" indeterminate={true} />
            <Checkbox size="small" label="Disabled" disabled />
            <Checkbox size="small" label="Error" error />
          </YStack>
          
          <Text fontSize="$3" color="$gray500" marginTop="$2">
            Single:
          </Text>
          <XStack gap="$2">
            <Checkbox size="small" function="single" checked={false} />
            <Checkbox size="small" function="single" checked={true} />
            <Checkbox size="small" function="single" indeterminate={true} />
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  ),
}

/**
 * Lista de Checkboxes
 */
export const CheckboxList: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    
    const options = [
      { id: 'refrigerante', label: 'Refrigerante' },
      { id: 'cerveja', label: 'Cerveja' },
      { id: 'agua', label: 'Água' },
      { id: 'suco', label: 'Suco' },
      { id: 'energetico', label: 'Energético' },
    ]
    
    const handleToggle = (id: string) => {
      setSelected(prev =>
        prev.includes(id)
          ? prev.filter(item => item !== id)
          : [...prev, id]
      )
    }
    
    return (
      <YStack gap="$4" width={300}>
        <Text fontSize="$5" fontWeight="600">
          Selecione suas bebidas
        </Text>
        
        <YStack gap="$2">
          {options.map(option => (
            <Checkbox
              key={option.id}
              label={option.label}
              checked={selected.includes(option.id)}
              onChange={() => handleToggle(option.id)}
            />
          ))}
        </YStack>
        
        <Text fontSize="$3" color="$gray500" marginTop="$2">
          Selecionados: {selected.length > 0 ? selected.join(', ') : 'Nenhum'}
        </Text>
      </YStack>
    )
  },
}

/**
 * Showcase Completo - Todas as variantes
 */
export const Showcase: Story = {
  render: () => (
    <YStack gap="$6" padding="$4">
      <Text fontSize="$6" fontWeight="700">
        Checkbox Showcase - 108 Variantes
      </Text>
      
      {/* Function: Input */}
      <YStack gap="$4">
        <Text fontSize="$5" fontWeight="600">Function: Input (com label)</Text>
        
        {/* Medium Size */}
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Size: Medium</Text>
          
          <YStack gap="$2">
            <Text fontSize="$3" color="$gray500">Normal States:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="medium" label="Unchecked" checked={false} />
              <Checkbox size="medium" label="Checked" checked={true} />
              <Checkbox size="medium" label="Indeterminate" indeterminate={true} />
            </XStack>
            
            <Text fontSize="$3" color="$gray500" marginTop="$2">Disabled:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="medium" label="Disabled Unchecked" checked={false} disabled />
              <Checkbox size="medium" label="Disabled Checked" checked={true} disabled />
            </XStack>
            
            <Text fontSize="$3" color="$gray500" marginTop="$2">Error States:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="medium" label="Error Unchecked" checked={false} error />
              <Checkbox size="medium" label="Error Checked" checked={true} error />
              <Checkbox size="medium" label="Error Indeterminate" indeterminate={true} error />
            </XStack>
          </YStack>
        </YStack>
        
        {/* Small Size */}
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Size: Small</Text>
          
          <YStack gap="$2">
            <Text fontSize="$3" color="$gray500">Normal States:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="small" label="Unchecked" checked={false} />
              <Checkbox size="small" label="Checked" checked={true} />
              <Checkbox size="small" label="Indeterminate" indeterminate={true} />
            </XStack>
            
            <Text fontSize="$3" color="$gray500" marginTop="$2">Disabled:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="small" label="Disabled Unchecked" checked={false} disabled />
              <Checkbox size="small" label="Disabled Checked" checked={true} disabled />
            </XStack>
            
            <Text fontSize="$3" color="$gray500" marginTop="$2">Error States:</Text>
            <XStack gap="$4" flexWrap="wrap">
              <Checkbox size="small" label="Error Unchecked" checked={false} error />
              <Checkbox size="small" label="Error Checked" checked={true} error />
              <Checkbox size="small" label="Error Indeterminate" indeterminate={true} error />
            </XStack>
          </YStack>
        </YStack>
      </YStack>
      
      {/* Function: Single */}
      <YStack gap="$4">
        <Text fontSize="$5" fontWeight="600">Function: Single (apenas checkbox)</Text>
        
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Size: Medium (24px)</Text>
          <XStack gap="$2" alignItems="center">
            <Checkbox size="medium" function="single" checked={false} />
            <Checkbox size="medium" function="single" checked={true} />
            <Checkbox size="medium" function="single" indeterminate={true} />
            <Checkbox size="medium" function="single" checked={false} disabled />
            <Checkbox size="medium" function="single" checked={true} disabled />
            <Checkbox size="medium" function="single" checked={false} error />
            <Checkbox size="medium" function="single" checked={true} error />
          </XStack>
        </YStack>
        
        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">Size: Small (20px)</Text>
          <XStack gap="$2" alignItems="center">
            <Checkbox size="small" function="single" checked={false} />
            <Checkbox size="small" function="single" checked={true} />
            <Checkbox size="small" function="single" indeterminate={true} />
            <Checkbox size="small" function="single" checked={false} disabled />
            <Checkbox size="small" function="single" checked={true} disabled />
            <Checkbox size="small" function="single" checked={false} error />
            <Checkbox size="small" function="single" checked={true} error />
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  ),
}

