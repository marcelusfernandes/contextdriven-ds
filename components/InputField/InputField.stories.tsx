import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputField } from './InputField'
import { YStack } from '@tamagui/stacks'

/**
 * # InputField
 * 
 * Componente de campo de formulário completo que combina:
 * - Label (cabeçalho do campo)
 * - Tag "Opcional" (se aplicável)
 * - Input (linha única ou textarea)
 * - Notificação (mensagem de ajuda/erro)
 * - Contador de caracteres
 * 
 * ## Quando usar
 * 
 * - Para qualquer campo de formulário que precisa de label e contexto adicional
 * - Quando precisa mostrar mensagens de ajuda ou erro
 * - Quando precisa limitar e mostrar contagem de caracteres
 * - Para campos opcionais que precisam indicar isso visualmente
 * 
 * ## Características
 * 
 * - **Composição:** Wrapper que adiciona metadados aos inputs
 * - **Dois tipos:** Linha única (single) e múltiplas linhas (textarea)
 * - **Estados:** Normal, Error, Disabled
 * - **Acessibilidade:** Labels associados, hints para screen readers
 * - **Responsivo:** Adapta-se a diferentes tamanhos de tela
 */
const meta = {
  title: 'Forms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Campo de formulário completo com label, input, notificação e contador.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label do campo (obrigatório)',
    },
    optional: {
      control: 'boolean',
      description: 'Se o campo é opcional',
    },
    optionalText: {
      control: 'text',
      description: 'Texto customizado para tag opcional',
    },
    notification: {
      control: 'text',
      description: 'Mensagem de ajuda ou erro',
    },
    type: {
      control: 'select',
      options: ['single', 'textarea'],
      description: 'Tipo de input',
    },
    value: {
      control: 'text',
      description: 'Valor do input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do input',
    },
    showCounter: {
      control: 'boolean',
      description: 'Mostrar contador de caracteres',
    },
    maxLength: {
      control: 'number',
      description: 'Limite máximo de caracteres',
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
    },
  },
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400}>
        <Story />
      </YStack>
    ),
  ],
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

// ================================================================================
// STORIES - ESTADO NORMAL
// ================================================================================

/**
 * Campo básico em estado normal
 */
export const Normal: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
    notification: 'Digite seu nome completo como aparece no documento',
  },
}

/**
 * Campo com valor preenchido
 */
export const Filled: Story = {
  args: {
    label: 'Email',
    value: 'usuario@exemplo.com',
    placeholder: 'Digite seu email',
  },
}

/**
 * Campo opcional
 */
export const Optional: Story = {
  args: {
    label: 'Observações',
    optional: true,
    placeholder: 'Adicione observações (opcional)',
    notification: 'Campo opcional para comentários adicionais',
  },
}

/**
 * Campo opcional com texto customizado
 */
export const OptionalCustomText: Story = {
  args: {
    label: 'Referência',
    optional: true,
    optionalText: 'Não obrigatório',
    placeholder: 'Digite uma referência',
  },
}

// ================================================================================
// STORIES - ESTADO ERROR
// ================================================================================

/**
 * Campo em estado de erro
 */
export const Error: Story = {
  args: {
    label: 'Email',
    value: 'email-invalido',
    error: true,
    notification: 'Email inválido. Digite um email válido',
  },
}

/**
 * Campo obrigatório vazio com erro
 */
export const ErrorEmpty: Story = {
  args: {
    label: 'Nome completo',
    error: true,
    notification: 'Este campo é obrigatório',
  },
}

/**
 * Campo opcional com erro
 */
export const ErrorOptional: Story = {
  args: {
    label: 'Telefone',
    optional: true,
    value: '123',
    error: true,
    notification: 'Telefone inválido. Digite um número completo',
  },
}

// ================================================================================
// STORIES - ESTADO DISABLED
// ================================================================================

/**
 * Campo desabilitado vazio
 */
export const Disabled: Story = {
  args: {
    label: 'CPF',
    disabled: true,
    notification: 'Este campo não pode ser editado',
  },
}

/**
 * Campo desabilitado preenchido
 */
export const DisabledFilled: Story = {
  args: {
    label: 'Identificador',
    value: 'USR-123456',
    disabled: true,
    notification: 'Identificador único não editável',
  },
}

/**
 * Campo opcional desabilitado
 */
export const DisabledOptional: Story = {
  args: {
    label: 'Código promocional',
    optional: true,
    disabled: true,
    notification: 'Promoção não disponível no momento',
  },
}

// ================================================================================
// STORIES - TIPO TEXTAREA
// ================================================================================

/**
 * Textarea para múltiplas linhas
 */
export const Textarea: Story = {
  args: {
    label: 'Mensagem',
    type: 'textarea',
    placeholder: 'Digite sua mensagem',
    notification: 'Escreva uma mensagem detalhada',
  },
}

/**
 * Textarea com valor preenchido
 */
export const TextareaFilled: Story = {
  args: {
    label: 'Descrição',
    type: 'textarea',
    value: 'Esta é uma descrição mais longa que ocupa múltiplas linhas no campo de texto.',
    notification: 'Descreva os detalhes do problema',
  },
}

/**
 * Textarea com erro
 */
export const TextareaError: Story = {
  args: {
    label: 'Comentários',
    type: 'textarea',
    error: true,
    notification: 'Campo obrigatório',
  },
}

/**
 * Textarea desabilitado
 */
export const TextareaDisabled: Story = {
  args: {
    label: 'Termos de uso',
    type: 'textarea',
    value: 'Termos e condições do serviço...',
    disabled: true,
  },
}

// ================================================================================
// STORIES - COM CONTADOR
// ================================================================================

/**
 * Campo com contador de caracteres
 */
export const WithCounter: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    showCounter: true,
    maxLength: 50,
    notification: 'Máximo de 50 caracteres',
  },
}

/**
 * Campo próximo ao limite
 */
export const CounterNearLimit: Story = {
  args: {
    label: 'Título',
    value: 'Este é um título que está próximo do limite',
    showCounter: true,
    maxLength: 50,
  },
}

/**
 * Textarea com contador
 */
export const TextareaWithCounter: Story = {
  args: {
    label: 'Mensagem',
    type: 'textarea',
    placeholder: 'Digite sua mensagem',
    showCounter: true,
    maxLength: 150,
    notification: 'Máximo de 150 caracteres',
  },
}

/**
 * Textarea com contador e erro
 */
export const TextareaCounterError: Story = {
  args: {
    label: 'Feedback',
    type: 'textarea',
    value: 'Texto curto',
    showCounter: true,
    maxLength: 150,
    error: true,
    notification: 'Por favor, forneça mais detalhes (mínimo 20 caracteres)',
  },
}

// ================================================================================
// STORIES - CASOS COMPLEXOS
// ================================================================================

/**
 * Formulário completo exemplo
 */
export const FormExample: Story = {
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400} gap="$4">
        <InputField
          label="Nome completo"
          placeholder="Digite seu nome"
          notification="Digite seu nome como aparece no documento"
        />
        <InputField
          label="Email"
          placeholder="seu@email.com"
          notification="Enviaremos um email de confirmação"
        />
        <InputField
          label="Telefone"
          optional
          placeholder="(00) 00000-0000"
        />
        <InputField
          label="Mensagem"
          type="textarea"
          placeholder="Como podemos ajudar?"
          showCounter
          maxLength={150}
        />
      </YStack>
    ),
  ],
  args: {},
}

/**
 * Estados lado a lado
 */
export const AllStates: Story = {
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400} gap="$4">
        <InputField
          label="Normal"
          placeholder="Estado normal"
          notification="Campo em estado normal"
        />
        <InputField
          label="Preenchido"
          value="Conteúdo preenchido"
          notification="Campo com valor"
        />
        <InputField
          label="Erro"
          value="valor-invalido"
          error
          notification="Erro de validação"
        />
        <InputField
          label="Desabilitado"
          value="Não editável"
          disabled
          notification="Campo desabilitado"
        />
      </YStack>
    ),
  ],
  args: {},
}

/**
 * Tipos lado a lado
 */
export const AllTypes: Story = {
  decorators: [
    (Story) => (
      <YStack padding="$4" width={400} gap="$4">
        <InputField
          label="Input Single"
          placeholder="Linha única"
          notification="Campo de linha única"
        />
        <InputField
          label="Textarea"
          type="textarea"
          placeholder="Múltiplas linhas"
          notification="Campo de múltiplas linhas"
        />
      </YStack>
    ),
  ],
  args: {},
}

// ================================================================================
// STORIES - INTERATIVAS
// ================================================================================

/**
 * Campo interativo (playground)
 */
export const Playground: Story = {
  args: {
    label: 'Campo de teste',
    placeholder: 'Digite algo...',
    notification: 'Este é um campo para teste',
    showCounter: true,
    maxLength: 100,
  },
}

