import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { TextArea } from 'tamagui'
import { tokens } from '../../tokens'

// ================================================================================
// TIPOS
// ================================================================================

export type InputTextareaSize = 'small' | 'medium'

export interface InputTextareaProps extends Omit<GetProps<typeof TextareaContainer>, 'size'> {
  /** Tamanho do textarea */
  size?: InputTextareaSize
  
  /** Valor do textarea */
  value?: string
  
  /** Callback quando o valor muda */
  onChangeText?: (text: string) => void
  
  /** Placeholder */
  placeholder?: string
  
  /** Estado de erro (feedback error) */
  error?: boolean
  
  /** Estado desabilitado */
  disabled?: boolean
  
  /** Número de linhas visíveis (altura inicial) */
  numberOfLines?: number
  
  /** Label flutuante (placeholder que vira label) */
  label?: string
  
  /** Mostrar ícone de redimensionamento */
  showResizeIcon?: boolean
  
  /** Label de acessibilidade */
  accessibilityLabel?: string
  
  /** Hint de acessibilidade */
  accessibilityHint?: string
  
  /** ID para testes */
  testID?: string
  
  /** Callback ao focar */
  onFocus?: () => void
  
  /** Callback ao desfocar */
  onBlur?: () => void
}

// ================================================================================
// HELPER FUNCTIONS
// ================================================================================

/**
 * Determina o estado de preenchimento baseado no valor
 */
const getFillState = (value: string, disabled: boolean): 'normal' | 'filled' | 'disabled' => {
  if (disabled) return 'disabled'
  return value ? 'filled' : 'normal'
}

/**
 * Obtém os tokens de estilo baseado nos estados atuais
 * Reutiliza os tokens do InputSingle
 */
const getStateTokens = (
  feedback: 'normal' | 'error',
  focused: boolean,
  fillState: 'normal' | 'filled' | 'disabled'
) => {
  const focusState = focused ? 'focused' : 'blurred'
  return tokens.inputSingle.state[feedback][focusState][fillState]
}

/**
 * Obtém a cor do ícone de resize
 */
const getResizeIconColor = (
  feedback: 'normal' | 'error',
  focused: boolean,
  fillState: 'normal' | 'filled' | 'disabled'
) => {
  const focusState = focused ? 'focused' : 'blurred'
  return tokens.inputTextarea.resizingIcon[feedback][focusState][fillState === 'disabled' ? 'normal' : fillState]
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do textarea
 */
const TextareaContainer = styled(Stack, {
  name: 'InputTextareaContainer',
  position: 'relative',
  borderStyle: 'solid',
  
  variants: {
    size: {
      small: {
        minHeight: tokens.inputTextarea.size.small.minHeight,
        paddingVertical: tokens.inputTextarea.size.small.paddingVertical,
        paddingHorizontal: tokens.inputTextarea.size.small.paddingHorizontal,
        borderRadius: tokens.inputTextarea.size.small.borderRadius,
      },
      medium: {
        minHeight: tokens.inputTextarea.size.medium.minHeight,
        paddingVertical: tokens.inputTextarea.size.medium.paddingVertical,
        paddingHorizontal: tokens.inputTextarea.size.medium.paddingHorizontal,
        borderRadius: tokens.inputTextarea.size.medium.borderRadius,
      },
    } as const,
  } as const,
  
  defaultVariants: {
    size: 'medium',
  },
})

/**
 * Campo de textarea nativo (sem borda, o container que tem borda)
 */
const NativeTextArea = styled(TextArea, {
  name: 'InputTextareaNative',
  flex: 1,
  borderWidth: 0,
  backgroundColor: 'transparent',
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  outlineWidth: 0,
  padding: 0,
  
  // Remove estilos padrão do browser
  focusStyle: {
    outlineWidth: 0,
    borderWidth: 0,
  },
  
  variants: {
    size: {
      small: {
        fontSize: tokens.inputTextarea.size.small.fontSize,
        lineHeight: tokens.inputTextarea.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.inputTextarea.size.medium.fontSize,
        lineHeight: tokens.inputTextarea.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

/**
 * Label flutuante (se usar esse padrão)
 */
const FloatingLabel = styled(TamaguiText, {
  name: 'InputTextareaLabel',
  position: 'absolute',
  top: 12,
  left: 16,
  pointerEvents: 'none',
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.inputTextarea.size.small.fontSize,
        lineHeight: tokens.inputTextarea.size.small.lineHeight,
        top: 8,
        left: 12,
      },
      medium: {
        fontSize: tokens.inputTextarea.size.medium.fontSize,
        lineHeight: tokens.inputTextarea.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

/**
 * Ícone de redimensionamento (canto inferior direito)
 * Simples SVG ou pode usar componente de ícone
 */
const ResizeIcon = styled(Stack, {
  name: 'InputTextareaResizeIcon',
  position: 'absolute',
  bottom: 4,
  right: 4,
  width: tokens.inputTextarea.resizingIcon.size,
  height: tokens.inputTextarea.resizingIcon.size,
  pointerEvents: 'none',
})

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * InputTextarea - Campo de texto multilinhas
 * 
 * Baseado no InputSingle, reutiliza todos os tokens de cores.
 * Diferenças principais: altura mínima (variável), suporte a múltiplas linhas,
 * e ícone de redimensionamento.
 * 
 * @example
 * Uso básico:
 * ```tsx
 * <InputTextarea
 *   value={message}
 *   onChangeText={setMessage}
 *   placeholder="Digite sua mensagem"
 * />
 * ```
 * 
 * @example
 * Com erro:
 * ```tsx
 * <InputTextarea
 *   value={description}
 *   onChangeText={setDescription}
 *   placeholder="Descrição"
 *   error
 * />
 * ```
 * 
 * @example
 * Tamanho small com 3 linhas:
 * ```tsx
 * <InputTextarea
 *   size="small"
 *   numberOfLines={3}
 *   value={notes}
 *   onChangeText={setNotes}
 *   placeholder="Observações"
 * />
 * ```
 * 
 * @example
 * Sem ícone de resize:
 * ```tsx
 * <InputTextarea
 *   value={text}
 *   onChangeText={setText}
 *   showResizeIcon={false}
 * />
 * ```
 */
export const InputTextarea = React.forwardRef<any, InputTextareaProps>(
  (
    {
      size = 'medium',
      value = '',
      onChangeText,
      placeholder,
      error = false,
      disabled = false,
      numberOfLines = 3,
      label,
      showResizeIcon = true,
      accessibilityLabel,
      accessibilityHint,
      testID,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    // Estado de foco
    const [isFocused, setIsFocused] = useState(false)
    
    // Determinar estados
    const feedback = error ? 'error' : 'normal'
    const fillState = getFillState(value, disabled)
    const stateTokens = getStateTokens(feedback, isFocused, fillState)
    const resizeIconColor = getResizeIconColor(feedback, isFocused, fillState)
    
    // Handlers
    const handleFocus = () => {
      if (!disabled) {
        setIsFocused(true)
        onFocus?.()
      }
    }
    
    const handleBlur = () => {
      setIsFocused(false)
      onBlur?.()
    }
    
    const handleChangeText = (text: string) => {
      if (!disabled) {
        onChangeText?.(text)
      }
    }
    
    return (
      <TextareaContainer
        ref={ref}
        size={size}
        backgroundColor={stateTokens.bg}
        borderColor={stateTokens.borderColor}
        borderWidth={stateTokens.borderWidth}
        disabled={disabled}
        testID={testID}
        {...props}
      >
        {/* Textarea Field */}
        <NativeTextArea
          size={size}
          value={value}
          onChangeText={handleChangeText}
          placeholder={placeholder}
          placeholderTextColor={stateTokens.placeholderColor}
          color={stateTokens.textColor}
          disabled={disabled}
          editable={!disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          numberOfLines={numberOfLines}
          multiline
          accessibilityLabel={accessibilityLabel || label || placeholder}
          accessibilityHint={accessibilityHint}
          testID={testID ? `${testID}-textarea` : undefined}
        />
        
        {/* Floating Label (se implementar esse padrão) */}
        {label && !value && !isFocused && (
          <FloatingLabel
            size={size}
            color={stateTokens.labelColor}
          >
            {label}
          </FloatingLabel>
        )}
        
        {/* Resize Icon (canto inferior direito) */}
        {showResizeIcon && (
          <ResizeIcon>
            {/* Ícone de resize SVG simples */}
            <svg
              width={tokens.inputTextarea.resizingIcon.size}
              height={tokens.inputTextarea.resizingIcon.size}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 10L10 14M14 6L6 14"
                stroke={resizeIconColor}
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </ResizeIcon>
        )}
      </TextareaContainer>
    )
  }
)

InputTextarea.displayName = 'InputTextarea'

