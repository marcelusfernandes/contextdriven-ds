import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSelect } from './InputSelect'
import { YStack, XStack } from '@tamagui/stacks'

// Opções de exemplo para os stories
const sampleOptions = [
  { label: 'Opção 1', value: '1' },
  { label: 'Opção 2', value: '2' },
  { label: 'Opção 3', value: '3' },
]

const countryOptions = [
  { label: 'Brasil', value: 'br' },
  { label: 'Estados Unidos', value: 'us' },
  { label: 'Argentina', value: 'ar' },
  { label: 'Chile', value: 'cl' },
]

/**
 * # InputSelect
 * 
 * Campo de seleção dropdown - baseado no InputSingle com trailing icon obrigatório.
 * 
 * ## Estados Complexos
 * 
 * O InputSelect gerencia automaticamente 4 dimensões de estados:
 * - **Tamanho:** Small (36px), Medium (48px)
 * - **Preenchimento:** Normal (sem seleção), Filled (com seleção), Disabled
 * - **Foco:** Blurred (sem foco), Focused (com foco)
 * - **Feedback:** Normal, Error
 * 
 * Total de **24 combinações possíveis** (2 × 3 × 2 × 2).
 * 
 * ## Diferenças do InputSingle
 * 
 * - **Trailing Icon:** ChevronDown sempre presente
 * - **Não editável:** Campo de seleção, não input de texto
 * - **Comportamento:** Abre menu dropdown ao clicar
 * - **Cores:** Reutiliza 95% dos tokens do InputSingle
 * 
 * ## Quando usar
 * 
 * - Seleção de opção única em formulários
 * - Dropdown de categorias, países, estados
 * - Qualquer campo que precise escolher entre opções
 */
const meta = {
  title: 'Forms/InputSelect',
  component: InputSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de seleção dropdown com gerenciamento automático de estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do select',
    },
    value: {
      control: 'text',
      description: 'Valor selecionado',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder quando nada selecionado',
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro (feedback)',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320}>
        <Story />
      </YStack>
    ),
  ],
} satisfies Meta<typeof InputSelect>

export default meta
type Story = StoryObj<typeof meta>

// ================================================================================
// STORIES - MEDIUM SIZE, NORMAL FEEDBACK, BLURRED
// ================================================================================

/**
 * Medium - Normal (sem seleção) - Blurred - Normal
 */
export const MediumNormalBlurredNormal: Story = {
  name: 'Medium / Normal / Blurred / Normal',
  args: {
    size: 'medium',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Filled (com seleção) - Blurred - Normal
 */
export const MediumFilledBlurredNormal: Story = {
  name: 'Medium / Filled / Blurred / Normal',
  args: {
    size: 'medium',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Disabled - Blurred - Normal
 */
export const MediumDisabledBlurredNormal: Story = {
  name: 'Medium / Disabled / Blurred / Normal',
  args: {
    size: 'medium',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, NORMAL FEEDBACK, BLURRED
// ================================================================================

/**
 * Small - Normal (sem seleção) - Blurred - Normal
 */
export const SmallNormalBlurredNormal: Story = {
  name: 'Small / Normal / Blurred / Normal',
  args: {
    size: 'small',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Selecione',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Filled (com seleção) - Blurred - Normal
 */
export const SmallFilledBlurredNormal: Story = {
  name: 'Small / Filled / Blurred / Normal',
  args: {
    size: 'small',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Disabled - Blurred - Normal
 */
export const SmallDisabledBlurredNormal: Story = {
  name: 'Small / Disabled / Blurred / Normal',
  args: {
    size: 'small',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, ERROR FEEDBACK, BLURRED
// ================================================================================

/**
 * Medium - Normal (sem seleção) - Blurred - Error
 */
export const MediumNormalBlurredError: Story = {
  name: 'Medium / Normal / Blurred / Error',
  args: {
    size: 'medium',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Campo obrigatório',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Filled (com seleção) - Blurred - Error
 */
export const MediumFilledBlurredError: Story = {
  name: 'Medium / Filled / Blurred / Error',
  args: {
    size: 'medium',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Disabled - Blurred - Error
 */
export const MediumDisabledBlurredError: Story = {
  name: 'Medium / Disabled / Blurred / Error',
  args: {
    size: 'medium',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, ERROR FEEDBACK, BLURRED
// ================================================================================

/**
 * Small - Normal (sem seleção) - Blurred - Error
 */
export const SmallNormalBlurredError: Story = {
  name: 'Small / Normal / Blurred / Error',
  args: {
    size: 'small',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Obrigatório',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Filled (com seleção) - Blurred - Error
 */
export const SmallFilledBlurredError: Story = {
  name: 'Small / Filled / Blurred / Error',
  args: {
    size: 'small',
    value: '3',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Disabled - Blurred - Error
 */
export const SmallDisabledBlurredError: Story = {
  name: 'Small / Disabled / Blurred / Error',
  args: {
    size: 'small',
    value: '3',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, NORMAL FEEDBACK, FOCUSED
// ================================================================================

/**
 * Medium - Normal (sem seleção) - Focused - Normal
 * 
 * Nota: No Storybook, o foco é simulado. Na aplicação real,
 * o foco é gerenciado automaticamente.
 */
export const MediumNormalFocusedNormal: Story = {
  name: 'Medium / Normal / Focused / Normal',
  args: {
    size: 'medium',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Clique para abrir',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Filled (com seleção) - Focused - Normal
 */
export const MediumFilledFocusedNormal: Story = {
  name: 'Medium / Filled / Focused / Normal',
  args: {
    size: 'medium',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Disabled - Focused - Normal
 * 
 * Nota: Disabled não responde a foco, mantém borda de 1px
 */
export const MediumDisabledFocusedNormal: Story = {
  name: 'Medium / Disabled / Focused / Normal',
  args: {
    size: 'medium',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, NORMAL FEEDBACK, FOCUSED
// ================================================================================

/**
 * Small - Normal (sem seleção) - Focused - Normal
 */
export const SmallNormalFocusedNormal: Story = {
  name: 'Small / Normal / Focused / Normal',
  args: {
    size: 'small',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Clique para abrir',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Filled (com seleção) - Focused - Normal
 */
export const SmallFilledFocusedNormal: Story = {
  name: 'Small / Filled / Focused / Normal',
  args: {
    size: 'small',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Disabled - Focused - Normal
 */
export const SmallDisabledFocusedNormal: Story = {
  name: 'Small / Disabled / Focused / Normal',
  args: {
    size: 'small',
    value: '1',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, ERROR FEEDBACK, FOCUSED
// ================================================================================

/**
 * Medium - Normal (sem seleção) - Focused - Error
 */
export const MediumNormalFocusedError: Story = {
  name: 'Medium / Normal / Focused / Error',
  args: {
    size: 'medium',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Campo obrigatório',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Filled (com seleção) - Focused - Error
 */
export const MediumFilledFocusedError: Story = {
  name: 'Medium / Filled / Focused / Error',
  args: {
    size: 'medium',
    value: '3',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Disabled - Focused - Error
 */
export const MediumDisabledFocusedError: Story = {
  name: 'Medium / Disabled / Focused / Error',
  args: {
    size: 'medium',
    value: '3',
    options: sampleOptions,
    placeholder: 'Selecione uma opção',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, ERROR FEEDBACK, FOCUSED
// ================================================================================

/**
 * Small - Normal (sem seleção) - Focused - Error
 */
export const SmallNormalFocusedError: Story = {
  name: 'Small / Normal / Focused / Error',
  args: {
    size: 'small',
    value: undefined,
    options: sampleOptions,
    placeholder: 'Obrigatório',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Filled (com seleção) - Focused - Error
 */
export const SmallFilledFocusedError: Story = {
  name: 'Small / Filled / Focused / Error',
  args: {
    size: 'small',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Disabled - Focused - Error
 */
export const SmallDisabledFocusedError: Story = {
  name: 'Small / Disabled / Focused / Error',
  args: {
    size: 'small',
    value: '2',
    options: sampleOptions,
    placeholder: 'Selecione',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - CASOS DE USO COMUNS
// ================================================================================

/**
 * Caso de uso: Seleção de país
 */
export const CountrySelect: Story = {
  name: 'Uso: Seleção de País',
  args: {
    size: 'medium',
    options: countryOptions,
    placeholder: 'Selecione o país',
    value: undefined,
  },
}

/**
 * Caso de uso: País selecionado
 */
export const CountrySelected: Story = {
  name: 'Uso: País Selecionado',
  args: {
    size: 'medium',
    options: countryOptions,
    placeholder: 'Selecione o país',
    value: 'br',
  },
}

/**
 * Caso de uso: Seleção obrigatória com erro
 */
export const RequiredWithError: Story = {
  name: 'Uso: Campo Obrigatório (erro)',
  args: {
    size: 'medium',
    options: countryOptions,
    placeholder: 'Campo obrigatório',
    value: undefined,
    error: true,
  },
}

/**
 * Caso de uso: Campo disabled
 */
export const DisabledSelect: Story = {
  name: 'Uso: Campo Desabilitado',
  args: {
    size: 'medium',
    options: countryOptions,
    value: 'br',
    disabled: true,
  },
}

// ================================================================================
// STORIES - COMPARAÇÃO
// ================================================================================

/**
 * Comparação: Todos os tamanhos
 */
export const AllSizes: Story = {
  name: 'Comparação: Tamanhos',
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320} gap="$4">
        <InputSelect
          size="small"
          options={countryOptions}
          placeholder="Small (36px)"
          value="br"
        />
        <InputSelect
          size="medium"
          options={countryOptions}
          placeholder="Medium (48px)"
          value="us"
        />
      </YStack>
    ),
  ],
  args: {},
}

/**
 * Comparação: Todos os estados
 */
export const AllStates: Story = {
  name: 'Comparação: Estados',
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320} gap="$4">
        <InputSelect
          options={sampleOptions}
          placeholder="Normal (sem seleção)"
          value={undefined}
        />
        <InputSelect
          options={sampleOptions}
          placeholder="Filled (com seleção)"
          value="1"
        />
        <InputSelect
          options={sampleOptions}
          placeholder="Error"
          value={undefined}
          error
        />
        <InputSelect
          options={sampleOptions}
          placeholder="Disabled"
          value="2"
          disabled
        />
      </YStack>
    ),
  ],
  args: {},
}

/**
 * Comparação: Grid completo
 */
export const CompleteGrid: Story = {
  name: 'Comparação: Grid Completo',
  decorators: [
    (Story) => (
      <YStack padding="$4" gap="$6">
        <YStack gap="$2">
          <XStack gap="$2">
            <YStack gap="$2" width={320}>
              <InputSelect size="medium" options={sampleOptions} placeholder="Medium / Normal / Normal" />
              <InputSelect size="medium" options={sampleOptions} value="1" placeholder="Medium / Filled / Normal" />
              <InputSelect size="medium" options={sampleOptions} value="1" disabled placeholder="Medium / Disabled / Normal" />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputSelect size="medium" options={sampleOptions} placeholder="Medium / Normal / Error" error />
              <InputSelect size="medium" options={sampleOptions} value="1" error placeholder="Medium / Filled / Error" />
              <InputSelect size="medium" options={sampleOptions} value="1" error disabled placeholder="Medium / Disabled / Error" />
            </YStack>
          </XStack>
        </YStack>
        
        <YStack gap="$2">
          <XStack gap="$2">
            <YStack gap="$2" width={320}>
              <InputSelect size="small" options={sampleOptions} placeholder="Small / Normal / Normal" />
              <InputSelect size="small" options={sampleOptions} value="2" placeholder="Small / Filled / Normal" />
              <InputSelect size="small" options={sampleOptions} value="2" disabled placeholder="Small / Disabled / Normal" />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputSelect size="small" options={sampleOptions} placeholder="Small / Normal / Error" error />
              <InputSelect size="small" options={sampleOptions} value="2" error placeholder="Small / Filled / Error" />
              <InputSelect size="small" options={sampleOptions} value="2" error disabled placeholder="Small / Disabled / Error" />
            </YStack>
          </XStack>
        </YStack>
      </YStack>
    ),
  ],
  args: {},
}

// ================================================================================
// STORIES - PLAYGROUND
// ================================================================================

/**
 * Playground interativo
 */
export const Playground: Story = {
  name: 'Playground',
  args: {
    size: 'medium',
    options: countryOptions,
    placeholder: 'Selecione...',
    value: undefined,
    error: false,
    disabled: false,
  },
}

