import type { Meta, StoryObj } from '@storybook/react'
import { InputTextarea } from './InputTextarea'
import { YStack, XStack } from '@tamagui/stacks'

/**
 * # InputTextarea
 * 
 * Campo de texto multilinhas - baseado no InputSingle com altura variável.
 * 
 * ## Estados Complexos
 * 
 * O InputTextarea gerencia automaticamente 4 dimensões de estados:
 * - **Tamanho:** Small (56px min), Medium (72px min)
 * - **Preenchimento:** Normal (vazio), Filled (preenchido), Disabled
 * - **Foco:** Blurred (sem foco), Focused (com foco)
 * - **Feedback:** Normal, Error
 * 
 * Total de **24 combinações possíveis** (2 × 3 × 2 × 2).
 * 
 * ## Diferenças do InputSingle
 * 
 * - **Altura mínima:** Não fixa, cresce com o conteúdo
 * - **Múltiplas linhas:** Suporta texto em múltiplas linhas
 * - **Ícone de resize:** Canto inferior direito
 * - **Cores:** Reutiliza 100% dos tokens do InputSingle
 * 
 * ## Quando usar
 * 
 * - Input de múltiplas linhas para formulários
 * - Campo de descrição ou comentários
 * - Mensagens longas
 * - Base para InputField com type="textarea"
 */
const meta = {
  title: 'Forms/InputTextarea',
  component: InputTextarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de texto multilinhas com gerenciamento automático de estados.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
      description: 'Tamanho do textarea',
    },
    value: {
      control: 'text',
      description: 'Valor do textarea',
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
    numberOfLines: {
      control: 'number',
      description: 'Número de linhas visíveis',
    },
    showResizeIcon: {
      control: 'boolean',
      description: 'Mostrar ícone de redimensionamento',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320}>
        <Story />
      </YStack>
    ),
  ],
} satisfies Meta<typeof InputTextarea>

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
    placeholder: 'Digite sua mensagem...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Filled (preenchido) - Blurred - Normal
 */
export const MediumFilledBlurredNormal: Story = {
  name: 'Medium / Filled / Blurred / Normal',
  args: {
    size: 'medium',
    value: 'Este é um texto preenchido que ocupa múltiplas linhas no campo de textarea.',
    placeholder: 'Digite sua mensagem...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Disabled - Blurred - Normal
 */
export const MediumDisabledBlurredNormal: Story = {
  name: 'Medium / Disabled / Blurred / Normal',
  args: {
    size: 'medium',
    value: 'Texto desabilitado que não pode ser editado.',
    placeholder: 'Digite sua mensagem...',
    error: false,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Digite observações...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Filled (preenchido) - Blurred - Normal
 */
export const SmallFilledBlurredNormal: Story = {
  name: 'Small / Filled / Blurred / Normal',
  args: {
    size: 'small',
    value: 'Texto preenchido no tamanho small.',
    placeholder: 'Digite observações...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Disabled - Blurred - Normal
 */
export const SmallDisabledBlurredNormal: Story = {
  name: 'Small / Disabled / Blurred / Normal',
  args: {
    size: 'small',
    value: 'Texto desabilitado small.',
    placeholder: 'Digite observações...',
    error: false,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Campo obrigatório...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Filled (preenchido) - Blurred - Error
 */
export const MediumFilledBlurredError: Story = {
  name: 'Medium / Filled / Blurred / Error',
  args: {
    size: 'medium',
    value: 'Texto inválido ou muito curto.',
    placeholder: 'Digite sua mensagem...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Disabled - Blurred - Error
 */
export const MediumDisabledBlurredError: Story = {
  name: 'Medium / Disabled / Blurred / Error',
  args: {
    size: 'medium',
    value: 'Texto desabilitado.',
    placeholder: 'Digite sua mensagem...',
    error: true,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Campo obrigatório...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Filled (preenchido) - Blurred - Error
 */
export const SmallFilledBlurredError: Story = {
  name: 'Small / Filled / Blurred / Error',
  args: {
    size: 'small',
    value: 'Texto com erro.',
    placeholder: 'Digite observações...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Disabled - Blurred - Error
 */
export const SmallDisabledBlurredError: Story = {
  name: 'Small / Disabled / Blurred / Error',
  args: {
    size: 'small',
    value: 'Texto desabilitado.',
    placeholder: 'Digite observações...',
    error: true,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Clique para focar...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Filled (preenchido) - Focused - Normal
 */
export const MediumFilledFocusedNormal: Story = {
  name: 'Medium / Filled / Focused / Normal',
  args: {
    size: 'medium',
    value: 'Texto focado em edição.',
    placeholder: 'Digite sua mensagem...',
    error: false,
    disabled: false,
    numberOfLines: 3,
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
    value: 'Texto desabilitado.',
    placeholder: 'Digite sua mensagem...',
    error: false,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Clique para focar...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Filled (preenchido) - Focused - Normal
 */
export const SmallFilledFocusedNormal: Story = {
  name: 'Small / Filled / Focused / Normal',
  args: {
    size: 'small',
    value: 'Texto focado small.',
    placeholder: 'Digite observações...',
    error: false,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Disabled - Focused - Normal
 */
export const SmallDisabledFocusedNormal: Story = {
  name: 'Small / Disabled / Focused / Normal',
  args: {
    size: 'small',
    value: 'Texto desabilitado.',
    placeholder: 'Digite observações...',
    error: false,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Campo obrigatório...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Filled (preenchido) - Focused - Error
 */
export const MediumFilledFocusedError: Story = {
  name: 'Medium / Filled / Focused / Error',
  args: {
    size: 'medium',
    value: 'Texto com erro focado.',
    placeholder: 'Digite sua mensagem...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Medium - Disabled - Focused - Error
 */
export const MediumDisabledFocusedError: Story = {
  name: 'Medium / Disabled / Focused / Error',
  args: {
    size: 'medium',
    value: 'Texto desabilitado.',
    placeholder: 'Digite sua mensagem...',
    error: true,
    disabled: true,
    numberOfLines: 3,
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
    placeholder: 'Campo obrigatório...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Filled (preenchido) - Focused - Error
 */
export const SmallFilledFocusedError: Story = {
  name: 'Small / Filled / Focused / Error',
  args: {
    size: 'small',
    value: 'Texto com erro small.',
    placeholder: 'Digite observações...',
    error: true,
    disabled: false,
    numberOfLines: 3,
  },
}

/**
 * Small - Disabled - Focused - Error
 */
export const SmallDisabledFocusedError: Story = {
  name: 'Small / Disabled / Focused / Error',
  args: {
    size: 'small',
    value: 'Texto desabilitado.',
    placeholder: 'Digite observações...',
    error: true,
    disabled: true,
    numberOfLines: 3,
  },
}

// ================================================================================
// STORIES - CASOS DE USO COMUNS
// ================================================================================

/**
 * Caso de uso: Mensagem ou comentário
 */
export const MessageField: Story = {
  name: 'Uso: Campo de Mensagem',
  args: {
    size: 'medium',
    placeholder: 'Digite sua mensagem...',
    value: '',
    numberOfLines: 4,
  },
}

/**
 * Caso de uso: Descrição com validação
 */
export const DescriptionField: Story = {
  name: 'Uso: Descrição (válida)',
  args: {
    size: 'medium',
    placeholder: 'Descreva o problema...',
    value: 'Esta é uma descrição detalhada do problema que estou enfrentando.',
    error: false,
    numberOfLines: 3,
  },
}

/**
 * Caso de uso: Descrição inválida (muito curta)
 */
export const DescriptionFieldError: Story = {
  name: 'Uso: Descrição (inválida)',
  args: {
    size: 'medium',
    placeholder: 'Descreva o problema...',
    value: 'Muito curto',
    error: true,
    numberOfLines: 3,
  },
}

/**
 * Caso de uso: Campo disabled
 */
export const ReadOnlyField: Story = {
  name: 'Uso: Campo Somente Leitura',
  args: {
    size: 'medium',
    value: 'Termos e condições do serviço que não podem ser editados pelo usuário.',
    disabled: true,
    numberOfLines: 3,
  },
}

/**
 * Caso de uso: Sem ícone de resize
 */
export const WithoutResizeIcon: Story = {
  name: 'Uso: Sem Ícone de Resize',
  args: {
    size: 'medium',
    value: 'Campo sem ícone de redimensionamento.',
    showResizeIcon: false,
    numberOfLines: 3,
  },
}

// ================================================================================
// STORIES - COMPARAÇÃO
// ================================================================================

/**
 * Comparação: Todos os tamanhos lado a lado
 */
export const AllSizes: Story = {
  name: 'Comparação: Tamanhos',
  decorators: [
    (Story) => (
      <YStack padding="$4" width={320} gap="$4">
        <InputTextarea
          size="small"
          placeholder="Small (56px min)"
          value="Texto small"
          numberOfLines={3}
        />
        <InputTextarea
          size="medium"
          placeholder="Medium (72px min)"
          value="Texto medium"
          numberOfLines={3}
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
        <InputTextarea
          placeholder="Normal (vazio)"
          value=""
          numberOfLines={2}
        />
        <InputTextarea
          placeholder="Filled (preenchido)"
          value="Texto preenchido em múltiplas linhas."
          numberOfLines={2}
        />
        <InputTextarea
          placeholder="Error"
          value="Texto com erro"
          error
          numberOfLines={2}
        />
        <InputTextarea
          placeholder="Disabled"
          value="Texto desabilitado"
          disabled
          numberOfLines={2}
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
              <InputTextarea size="medium" placeholder="Medium / Normal / Normal" numberOfLines={2} />
              <InputTextarea size="medium" value="Medium / Filled / Normal" numberOfLines={2} />
              <InputTextarea size="medium" value="Medium / Disabled / Normal" disabled numberOfLines={2} />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputTextarea size="medium" placeholder="Medium / Normal / Error" error numberOfLines={2} />
              <InputTextarea size="medium" value="Medium / Filled / Error" error numberOfLines={2} />
              <InputTextarea size="medium" value="Medium / Disabled / Error" error disabled numberOfLines={2} />
            </YStack>
          </XStack>
        </YStack>
        
        <YStack gap="$2">
          <XStack gap="$2">
            <YStack gap="$2" width={320}>
              <InputTextarea size="small" placeholder="Small / Normal / Normal" numberOfLines={2} />
              <InputTextarea size="small" value="Small / Filled / Normal" numberOfLines={2} />
              <InputTextarea size="small" value="Small / Disabled / Normal" disabled numberOfLines={2} />
            </YStack>
            <YStack gap="$2" width={320}>
              <InputTextarea size="small" placeholder="Small / Normal / Error" error numberOfLines={2} />
              <InputTextarea size="small" value="Small / Filled / Error" error numberOfLines={2} />
              <InputTextarea size="small" value="Small / Disabled / Error" error disabled numberOfLines={2} />
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
    numberOfLines: 4,
    showResizeIcon: true,
  },
}

