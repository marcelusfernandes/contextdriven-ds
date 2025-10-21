/**
 * RadioButton Stories - DSZé
 * 
 * Demonstra todas as 82 variantes do componente RadioButton
 */

import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { RadioButton } from './RadioButton'
import { Stack, YStack, XStack, Text } from 'tamagui'

// ================================================================================
// META
// ================================================================================

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# RadioButton - DSZé

Componente de radio button (seleção única) com 82 variantes possíveis.

## Características

- **2 Functions:** Input (com label), Single (apenas radio)
- **2 Types:** Unchecked, Checked (SEM indeterminate)
- **2 Sizes:** Small (36px), Medium (48px)
- **5 States:** Enabled, Hover, Focus, Active, Disabled
- **2 Error states:** Normal, Error
- **Border Radius:** CIRCULAR (ref(primitive.radius[16]))

## Diferenças em relação ao Checkbox

- ✅ Border radius CIRCULAR (sempre circular, não quadrado)
- ✅ Sem estado Indeterminate (apenas unchecked/checked)
- ✅ Ícones diferentes (círculos ao invés de checkboxes)
- ✅ Comportamento de seleção única (não múltipla)
- ✅ Radios com mesmo \`name\` funcionam como grupo

## Figma
- Node ID: 5555:39003
- [Ver no Figma](https://www.figma.com/design/tmTpuPqySUPu53Eqc16A76/branch/v5ngRFj2kaDlGD7wQDHvvK/Zé-Delivery---App-Components?node-id=5555-39003)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do radio button',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'small | medium' },
      },
    },
    function: {
      control: 'select',
      options: ['input', 'single'],
      description: 'Tipo de radio button (com ou sem label)',
      table: {
        defaultValue: { summary: 'input' },
        type: { summary: 'input | single' },
      },
    },
    label: {
      control: 'text',
      description: 'Label do radio button (apenas para function="input")',
    },
    checked: {
      control: 'boolean',
      description: 'Estado de seleção',
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
    value: {
      control: 'text',
      description: 'Valor do radio no grupo',
    },
    name: {
      control: 'text',
      description: 'Nome do grupo (para agrupar radios)',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioButton>

// ================================================================================
// STORIES - INTERATIVAS
// ================================================================================

/**
 * Story padrão com controles interativos
 */
export const Default: Story = {
  args: {
    size: 'medium',
    function: 'input',
    label: 'Aceito os termos',
    checked: false,
    error: false,
    disabled: false,
    value: 'terms',
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false)
    
    return (
      <RadioButton
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

/**
 * Radio Group - Demonstra comportamento de seleção única
 */
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1')
    
    return (
      <YStack gap="$4" padding="$4">
        <Text fontSize={18} fontWeight="600" marginBottom="$2">
          Escolha uma opção:
        </Text>
        
        <RadioButton
          size="medium"
          function="input"
          label="Opção 1"
          value="option1"
          name="group1"
          checked={selected === 'option1'}
          onChange={setSelected}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Opção 2"
          value="option2"
          name="group1"
          checked={selected === 'option2'}
          onChange={setSelected}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Opção 3"
          value="option3"
          name="group1"
          checked={selected === 'option3'}
          onChange={setSelected}
        />
        
        <Text marginTop="$4" color="$gray10">
          Selecionado: {selected}
        </Text>
      </YStack>
    )
  },
}

// ================================================================================
// STORIES - SIZES
// ================================================================================

/**
 * Demonstra os dois tamanhos disponíveis
 */
export const Sizes: Story = {
  render: () => {
    const [selected, setSelected] = useState('medium')
    
    return (
      <YStack gap="$6" padding="$4">
        {/* Small */}
        <YStack gap="$3">
          <Text fontSize={16} fontWeight="600">Small (36px)</Text>
          <XStack gap="$4" alignItems="center">
            <RadioButton
              size="small"
              function="input"
              label="Small com label"
              value="small"
              checked={selected === 'small'}
              onChange={setSelected}
            />
            <RadioButton
              size="small"
              function="single"
              value="small-single"
              checked={selected === 'small-single'}
              onChange={setSelected}
            />
          </XStack>
        </YStack>
        
        {/* Medium */}
        <YStack gap="$3">
          <Text fontSize={16} fontWeight="600">Medium (48px)</Text>
          <XStack gap="$4" alignItems="center">
            <RadioButton
              size="medium"
              function="input"
              label="Medium com label"
              value="medium"
              checked={selected === 'medium'}
              onChange={setSelected}
            />
            <RadioButton
              size="medium"
              function="single"
              value="medium-single"
              checked={selected === 'medium-single'}
              onChange={setSelected}
            />
          </XStack>
        </YStack>
      </YStack>
    )
  },
}

// ================================================================================
// STORIES - FUNCTIONS
// ================================================================================

/**
 * Function: Input (com label)
 */
export const FunctionInput: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('')
    
    return (
      <YStack gap="$4" padding="$4">
        <Text fontSize={18} fontWeight="600" marginBottom="$2">
          Function: Input (com label)
        </Text>
        
        <RadioButton
          size="medium"
          function="input"
          label="Unchecked"
          value="unchecked"
          checked={selected === 'unchecked'}
          onChange={setSelected}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Checked"
          value="checked"
          checked={selected === 'checked'}
          onChange={setSelected}
        />
      </YStack>
    )
  },
}

/**
 * Function: Single (apenas radio)
 */
export const FunctionSingle: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('')
    
    return (
      <XStack gap="$4" padding="$4" alignItems="center">
        <YStack gap="$2">
          <Text fontSize={16}>Unchecked</Text>
          <RadioButton
            size="medium"
            function="single"
            value="unchecked"
            checked={selected === 'unchecked'}
            onChange={setSelected}
          />
        </YStack>
        
        <YStack gap="$2">
          <Text fontSize={16}>Checked</Text>
          <RadioButton
            size="medium"
            function="single"
            value="checked"
            checked={selected === 'checked'}
            onChange={setSelected}
          />
        </YStack>
      </XStack>
    )
  },
}

// ================================================================================
// STORIES - STATES
// ================================================================================

/**
 * Demonstra todos os estados interativos
 */
export const States: Story = {
  render: () => (
    <YStack gap="$6" padding="$4">
      {/* Normal States */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="600">Estados Normais</Text>
        
        <RadioButton
          size="medium"
          function="input"
          label="Enabled (padrão)"
          checked={false}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Hover (passe o mouse)"
          checked={false}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Focus (clique para focar)"
          checked={false}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Active (mantenha pressionado)"
          checked={false}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Disabled"
          checked={false}
          disabled={true}
        />
      </YStack>
      
      {/* Checked States */}
      <YStack gap="$3">
        <Text fontSize={18} fontWeight="600">Estados Selecionados</Text>
        
        <RadioButton
          size="medium"
          function="input"
          label="Checked + Enabled"
          checked={true}
        />
        
        <RadioButton
          size="medium"
          function="input"
          label="Checked + Disabled"
          checked={true}
          disabled={true}
        />
      </YStack>
    </YStack>
  ),
}

/**
 * Estados de erro
 */
export const ErrorStates: Story = {
  render: () => {
    const [selected, setSelected] = useState<string>('')
    
    return (
      <YStack gap="$6" padding="$4">
        <YStack gap="$3">
          <Text fontSize={18} fontWeight="600">Estados de Erro</Text>
          
          <RadioButton
            size="medium"
            function="input"
            label="Error + Unchecked"
            value="error-unchecked"
            checked={selected === 'error-unchecked'}
            onChange={setSelected}
            error={true}
          />
          
          <RadioButton
            size="medium"
            function="input"
            label="Error + Checked"
            value="error-checked"
            checked={selected === 'error-checked'}
            onChange={setSelected}
            error={true}
          />
          
          <RadioButton
            size="medium"
            function="input"
            label="Error + Disabled"
            checked={false}
            error={true}
            disabled={true}
          />
        </YStack>
      </YStack>
    )
  },
}

// ================================================================================
// STORIES - TODAS AS VARIANTES
// ================================================================================

/**
 * Matriz completa: Size × Function × Type × State × Error
 * 82 variantes totais
 */
export const AllVariants: Story = {
  render: () => {
    const [selectedSmallInput, setSelectedSmallInput] = useState<string>('')
    const [selectedMediumInput, setSelectedMediumInput] = useState<string>('')
    const [selectedSmallSingle, setSelectedSmallSingle] = useState<string>('')
    const [selectedMediumSingle, setSelectedMediumSingle] = useState<string>('')
    
    return (
      <YStack gap="$8" padding="$4">
        {/* Small + Input */}
        <YStack gap="$4">
          <Text fontSize={20} fontWeight="700">Small + Input (com label)</Text>
          
          {/* Normal States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Normal</Text>
            <XStack gap="$4" flexWrap="wrap">
              <RadioButton size="small" function="input" label="Unchecked Enabled" value="s-i-n-u-e" checked={selectedSmallInput === 's-i-n-u-e'} onChange={setSelectedSmallInput} />
              <RadioButton size="small" function="input" label="Checked Enabled" value="s-i-n-c-e" checked={selectedSmallInput === 's-i-n-c-e'} onChange={setSelectedSmallInput} />
              <RadioButton size="small" function="input" label="Unchecked Disabled" checked={false} disabled />
              <RadioButton size="small" function="input" label="Checked Disabled" checked={true} disabled />
            </XStack>
          </YStack>
          
          {/* Error States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Error</Text>
            <XStack gap="$4" flexWrap="wrap">
              <RadioButton size="small" function="input" label="Unchecked Enabled" value="s-i-e-u-e" checked={selectedSmallInput === 's-i-e-u-e'} onChange={setSelectedSmallInput} error />
              <RadioButton size="small" function="input" label="Checked Enabled" value="s-i-e-c-e" checked={selectedSmallInput === 's-i-e-c-e'} onChange={setSelectedSmallInput} error />
              <RadioButton size="small" function="input" label="Unchecked Disabled" checked={false} error disabled />
              <RadioButton size="small" function="input" label="Checked Disabled" checked={true} error disabled />
            </XStack>
          </YStack>
        </YStack>
        
        {/* Medium + Input */}
        <YStack gap="$4">
          <Text fontSize={20} fontWeight="700">Medium + Input (com label)</Text>
          
          {/* Normal States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Normal</Text>
            <XStack gap="$4" flexWrap="wrap">
              <RadioButton size="medium" function="input" label="Unchecked Enabled" value="m-i-n-u-e" checked={selectedMediumInput === 'm-i-n-u-e'} onChange={setSelectedMediumInput} />
              <RadioButton size="medium" function="input" label="Checked Enabled" value="m-i-n-c-e" checked={selectedMediumInput === 'm-i-n-c-e'} onChange={setSelectedMediumInput} />
              <RadioButton size="medium" function="input" label="Unchecked Disabled" checked={false} disabled />
              <RadioButton size="medium" function="input" label="Checked Disabled" checked={true} disabled />
            </XStack>
          </YStack>
          
          {/* Error States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Error</Text>
            <XStack gap="$4" flexWrap="wrap">
              <RadioButton size="medium" function="input" label="Unchecked Enabled" value="m-i-e-u-e" checked={selectedMediumInput === 'm-i-e-u-e'} onChange={setSelectedMediumInput} error />
              <RadioButton size="medium" function="input" label="Checked Enabled" value="m-i-e-c-e" checked={selectedMediumInput === 'm-i-e-c-e'} onChange={setSelectedMediumInput} error />
              <RadioButton size="medium" function="input" label="Unchecked Disabled" checked={false} error disabled />
              <RadioButton size="medium" function="input" label="Checked Disabled" checked={true} error disabled />
            </XStack>
          </YStack>
        </YStack>
        
        {/* Small + Single */}
        <YStack gap="$4">
          <Text fontSize={20} fontWeight="700">Small + Single (apenas radio)</Text>
          
          {/* Normal States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Normal</Text>
            <XStack gap="$4" flexWrap="wrap" alignItems="center">
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Unchecked</Text>
                <RadioButton size="small" function="single" value="s-s-n-u-e" checked={selectedSmallSingle === 's-s-n-u-e'} onChange={setSelectedSmallSingle} />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked</Text>
                <RadioButton size="small" function="single" value="s-s-n-c-e" checked={selectedSmallSingle === 's-s-n-c-e'} onChange={setSelectedSmallSingle} />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Disabled</Text>
                <RadioButton size="small" function="single" checked={false} disabled />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked+Disabled</Text>
                <RadioButton size="small" function="single" checked={true} disabled />
              </YStack>
            </XStack>
          </YStack>
          
          {/* Error States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Error</Text>
            <XStack gap="$4" flexWrap="wrap" alignItems="center">
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Unchecked</Text>
                <RadioButton size="small" function="single" value="s-s-e-u-e" checked={selectedSmallSingle === 's-s-e-u-e'} onChange={setSelectedSmallSingle} error />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked</Text>
                <RadioButton size="small" function="single" value="s-s-e-c-e" checked={selectedSmallSingle === 's-s-e-c-e'} onChange={setSelectedSmallSingle} error />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Disabled</Text>
                <RadioButton size="small" function="single" checked={false} error disabled />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked+Disabled</Text>
                <RadioButton size="small" function="single" checked={true} error disabled />
              </YStack>
            </XStack>
          </YStack>
        </YStack>
        
        {/* Medium + Single */}
        <YStack gap="$4">
          <Text fontSize={20} fontWeight="700">Medium + Single (apenas radio)</Text>
          
          {/* Normal States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Normal</Text>
            <XStack gap="$4" flexWrap="wrap" alignItems="center">
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Unchecked</Text>
                <RadioButton size="medium" function="single" value="m-s-n-u-e" checked={selectedMediumSingle === 'm-s-n-u-e'} onChange={setSelectedMediumSingle} />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked</Text>
                <RadioButton size="medium" function="single" value="m-s-n-c-e" checked={selectedMediumSingle === 'm-s-n-c-e'} onChange={setSelectedMediumSingle} />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Disabled</Text>
                <RadioButton size="medium" function="single" checked={false} disabled />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked+Disabled</Text>
                <RadioButton size="medium" function="single" checked={true} disabled />
              </YStack>
            </XStack>
          </YStack>
          
          {/* Error States */}
          <YStack gap="$3">
            <Text fontSize={16} fontWeight="600">Error</Text>
            <XStack gap="$4" flexWrap="wrap" alignItems="center">
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Unchecked</Text>
                <RadioButton size="medium" function="single" value="m-s-e-u-e" checked={selectedMediumSingle === 'm-s-e-u-e'} onChange={setSelectedMediumSingle} error />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked</Text>
                <RadioButton size="medium" function="single" value="m-s-e-c-e" checked={selectedMediumSingle === 'm-s-e-c-e'} onChange={setSelectedMediumSingle} error />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Disabled</Text>
                <RadioButton size="medium" function="single" checked={false} error disabled />
              </YStack>
              <YStack gap="$2" alignItems="center">
                <Text fontSize={12}>Checked+Disabled</Text>
                <RadioButton size="medium" function="single" checked={true} error disabled />
              </YStack>
            </XStack>
          </YStack>
        </YStack>
      </YStack>
    )
  },
}

// ================================================================================
// STORIES - USE CASES
// ================================================================================

/**
 * Formulário de exemplo
 */
export const FormExample: Story = {
  render: () => {
    const [delivery, setDelivery] = useState('standard')
    const [payment, setPayment] = useState('credit')
    
    return (
      <YStack gap="$6" padding="$4" maxWidth={400}>
        <Text fontSize={20} fontWeight="700">Finalizar Pedido</Text>
        
        {/* Entrega */}
        <YStack gap="$3">
          <Text fontSize={16} fontWeight="600">Tipo de Entrega</Text>
          <RadioButton
            size="medium"
            function="input"
            label="Entrega Padrão (Grátis)"
            value="standard"
            name="delivery"
            checked={delivery === 'standard'}
            onChange={setDelivery}
          />
          <RadioButton
            size="medium"
            function="input"
            label="Entrega Express (+R$ 10,00)"
            value="express"
            name="delivery"
            checked={delivery === 'express'}
            onChange={setDelivery}
          />
        </YStack>
        
        {/* Pagamento */}
        <YStack gap="$3">
          <Text fontSize={16} fontWeight="600">Forma de Pagamento</Text>
          <RadioButton
            size="medium"
            function="input"
            label="Cartão de Crédito"
            value="credit"
            name="payment"
            checked={payment === 'credit'}
            onChange={setPayment}
          />
          <RadioButton
            size="medium"
            function="input"
            label="PIX"
            value="pix"
            name="payment"
            checked={payment === 'pix'}
            onChange={setPayment}
          />
          <RadioButton
            size="medium"
            function="input"
            label="Dinheiro"
            value="cash"
            name="payment"
            checked={payment === 'cash'}
            onChange={setPayment}
          />
        </YStack>
        
        <YStack gap="$2" marginTop="$4" padding="$3" backgroundColor="$gray2" borderRadius="$4">
          <Text fontSize={14} color="$gray11">
            Entrega: {delivery === 'standard' ? 'Padrão' : 'Express'}
          </Text>
          <Text fontSize={14} color="$gray11">
            Pagamento: {payment === 'credit' ? 'Cartão' : payment === 'pix' ? 'PIX' : 'Dinheiro'}
          </Text>
        </YStack>
      </YStack>
    )
  },
}

