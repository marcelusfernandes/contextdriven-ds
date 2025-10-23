import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputSingle } from './InputSingle'
import { YStack, XStack } from '@tamagui/stacks'

/**
 * # InputSingle
 * 
 * Campo de entrada de texto de linha única - componente base do sistema de inputs.
 * 
 * ## Estados Complexos
 * 
 * O InputSingle gerencia automaticamente 4 dimensões de estados:
 * - **Tamanho:** Small (36px), Medium (48px)
 * - **Preenchimento:** Normal (vazio), Filled (preenchido), Disabled
 * - **Foco:** Blurred (sem foco), Focused (com foco)
 * - **Feedback:** Normal, Error
 * 
 * Total de **24 combinações possíveis** (2 × 3 × 2 × 2).
 * 
 * ## Características
 * 
 * - **Automático:** Estados de preenchimento detectados automaticamente
 * - **Borda dinâmica:** Aumenta de 1px para 2px quando focado
 * - **Cores contextuais:** Mudam baseadas em feedback e preenchimento
 * - **Disabled consistente:** Não responde a foco quando desabilitado
 * - **Suporte a ícones:** Leading e trailing icons
 * 
 * ## Quando usar
 * 
 * - Input de linha única para formulários
 * - Campo de busca
 * - Campo de texto com validação
 * - Base para inputs mais complexos (InputField, InputSelect)
 */
const meta = {
  title: 'Forms/InputSingle',
  component: InputSingle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de entrada de texto de linha única com gerenciamento automático de estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do input',
    },
    value: {
      control: 'text',
      description: 'Valor do input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder',
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
} satisfies Meta<typeof InputSingle>

export default meta
type Story = StoryObj<typeof meta>

// ================================================================================
// STORIES - MEDIUM SIZE, NORMAL FEEDBACK, BLURRED
// ================================================================================

/**
 * Medium - Normal (vazio) - Blurred - Normal
 */
export const MediumNormalBlurredNormal: Story = {
  name: 'Medium / Normal / Blurred / Normal',
  args: {
    size: 'medium',
    value: '',
    placeholder: 'Placeholder',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Filled (preenchido) - Blurred - Normal
 */
export const MediumFilledBlurredNormal: Story = {
  name: 'Medium / Filled / Blurred / Normal',
  args: {
    size: 'medium',
    value: 'Texto preenchido',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, NORMAL FEEDBACK, BLURRED
// ================================================================================

/**
 * Small - Normal (vazio) - Blurred - Normal
 */
export const SmallNormalBlurredNormal: Story = {
  name: 'Small / Normal / Blurred / Normal',
  args: {
    size: 'small',
    value: '',
    placeholder: 'Placeholder',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Filled (preenchido) - Blurred - Normal
 */
export const SmallFilledBlurredNormal: Story = {
  name: 'Small / Filled / Blurred / Normal',
  args: {
    size: 'small',
    value: 'Texto preenchido',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, ERROR FEEDBACK, BLURRED
// ================================================================================

/**
 * Medium - Normal (vazio) - Blurred - Error
 */
export const MediumNormalBlurredError: Story = {
  name: 'Medium / Normal / Blurred / Error',
  args: {
    size: 'medium',
    value: '',
    placeholder: 'Placeholder',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Filled (preenchido) - Blurred - Error
 */
export const MediumFilledBlurredError: Story = {
  name: 'Medium / Filled / Blurred / Error',
  args: {
    size: 'medium',
    value: 'Texto com erro',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, ERROR FEEDBACK, BLURRED
// ================================================================================

/**
 * Small - Normal (vazio) - Blurred - Error
 */
export const SmallNormalBlurredError: Story = {
  name: 'Small / Normal / Blurred / Error',
  args: {
    size: 'small',
    value: '',
    placeholder: 'Placeholder',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Filled (preenchido) - Blurred - Error
 */
export const SmallFilledBlurredError: Story = {
  name: 'Small / Filled / Blurred / Error',
  args: {
    size: 'small',
    value: 'Texto com erro',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, NORMAL FEEDBACK, FOCUSED
// ================================================================================

/**
 * Medium - Normal (vazio) - Focused - Normal
 * 
 * Nota: No Storybook, o foco é simulado. Na aplicação real,
 * o foco é gerenciado automaticamente.
 */
export const MediumNormalFocusedNormal: Story = {
  name: 'Medium / Normal / Focused / Normal',
  args: {
    size: 'medium',
    value: '',
    placeholder: 'Placeholder (clique para focar)',
    error: false,
    disabled: false,
  },
}

/**
 * Medium - Filled (preenchido) - Focused - Normal
 */
export const MediumFilledFocusedNormal: Story = {
  name: 'Medium / Filled / Focused / Normal',
  args: {
    size: 'medium',
    value: 'Texto focado',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, NORMAL FEEDBACK, FOCUSED
// ================================================================================

/**
 * Small - Normal (vazio) - Focused - Normal
 */
export const SmallNormalFocusedNormal: Story = {
  name: 'Small / Normal / Focused / Normal',
  args: {
    size: 'small',
    value: '',
    placeholder: 'Placeholder (clique para focar)',
    error: false,
    disabled: false,
  },
}

/**
 * Small - Filled (preenchido) - Focused - Normal
 */
export const SmallFilledFocusedNormal: Story = {
  name: 'Small / Filled / Focused / Normal',
  args: {
    size: 'small',
    value: 'Texto focado',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: false,
    disabled: true,
  },
}

// ================================================================================
// STORIES - MEDIUM SIZE, ERROR FEEDBACK, FOCUSED
// ================================================================================

/**
 * Medium - Normal (vazio) - Focused - Error
 */
export const MediumNormalFocusedError: Story = {
  name: 'Medium / Normal / Focused / Error',
  args: {
    size: 'medium',
    value: '',
    placeholder: 'Placeholder (clique para focar)',
    error: true,
    disabled: false,
  },
}

/**
 * Medium - Filled (preenchido) - Focused - Error
 */
export const MediumFilledFocusedError: Story = {
  name: 'Medium / Filled / Focused / Error',
  args: {
    size: 'medium',
    value: 'Texto com erro focado',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - SMALL SIZE, ERROR FEEDBACK, FOCUSED
// ================================================================================

/**
 * Small - Normal (vazio) - Focused - Error
 */
export const SmallNormalFocusedError: Story = {
  name: 'Small / Normal / Focused / Error',
  args: {
    size: 'small',
    value: '',
    placeholder: 'Placeholder (clique para focar)',
    error: true,
    disabled: false,
  },
}

/**
 * Small - Filled (preenchido) - Focused - Error
 */
export const SmallFilledFocusedError: Story = {
  name: 'Small / Filled / Focused / Error',
  args: {
    size: 'small',
    value: 'Texto com erro focado',
    placeholder: 'Placeholder',
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
    value: 'Texto desabilitado',
    placeholder: 'Placeholder',
    error: true,
    disabled: true,
  },
}

// ================================================================================
// STORIES - CASOS DE USO COMUNS
// ================================================================================

/**
 * Caso de uso: Busca simples
 */
export const SearchField: Story = {
  name: 'Uso: Campo de Busca',
  args: {
    size: 'medium',
    placeholder: 'Buscar...',
    value: '',
  },
}

/**
 * Caso de uso: Email com validação
 */
export const EmailField: Story = {
  name: 'Uso: Email (válido)',
  args: {
    size: 'medium',
    placeholder: 'seu@email.com',
    value: 'usuario@exemplo.com',
    error: false,
  },
}

/**
 * Caso de uso: Email inválido
 */
export const EmailFieldError: Story = {
  name: 'Uso: Email (inválido)',
  args: {
    size: 'medium',
    placeholder: 'seu@email.com',
    value: 'email-invalido',
    error: true,
  },
}

/**
 * Caso de uso: Campo disabled
 */
export const ReadOnlyField: Story = {
  name: 'Uso: Campo Somente Leitura',
  args: {
    size: 'medium',
    value: 'CPF: 123.456.789-00',
    disabled: true,
  },
}

// ================================================================================
// STORIES - COMPARAÇÃO DE TAMANHOS
// ================================================================================

/**
 * Comparação: Todos os tamanhos lado a lado
 */
export const AllSizes: Story = {
  name: 'Comparação: Tamanhos',
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320} gap="$4">
        <InputSingle
          size="small"
          placeholder="Small (36px)"
          value="Texto small"
        />
        <InputSingle
          size="medium"
          placeholder="Medium (48px)"
          value="Texto medium"
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
        <InputSingle
          placeholder="Normal (vazio)"
          value=""
        />
        <InputSingle
          placeholder="Filled (preenchido)"
          value="Texto preenchido"
        />
        <InputSingle
          placeholder="Error"
          value="Texto com erro"
          error
        />
        <InputSingle
          placeholder="Disabled"
          value="Texto desabilitado"
          disabled
        />
      </YStack>
    ),
  ],
  args: {},
}

/**
 * Comparação: Grid completo de variantes
 */
export const CompleteGrid: Story = {
  name: 'Comparação: Grid Completo',
  decorators: [
    (Story) => (
      <YStack padding="$4" gap="$6">
        <YStack gap="$2">
          <XStack gap="$2">
            <YStack gap="$2" width={320}>
              <InputSingle size="medium" placeholder="Medium / Normal / Normal" />
              <InputSingle size="medium" value="Medium / Filled / Normal" />
              <InputSingle size="medium" value="Medium / Disabled / Normal" disabled />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputSingle size="medium" placeholder="Medium / Normal / Error" error />
              <InputSingle size="medium" value="Medium / Filled / Error" error />
              <InputSingle size="medium" value="Medium / Disabled / Error" error disabled />
            </YStack>
          </XStack>
        </YStack>
        
        <YStack gap="$2">
          <XStack gap="$2">
            <YStack gap="$2" width={320}>
              <InputSingle size="small" placeholder="Small / Normal / Normal" />
              <InputSingle size="small" value="Small / Filled / Normal" />
              <InputSingle size="small" value="Small / Disabled / Normal" disabled />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputSingle size="small" placeholder="Small / Normal / Error" error />
              <InputSingle size="small" value="Small / Filled / Error" error />
              <InputSingle size="small" value="Small / Disabled / Error" error disabled />
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
    placeholder: 'Digite algo...',
    value: '',
    error: false,
    disabled: false,
  },
}

