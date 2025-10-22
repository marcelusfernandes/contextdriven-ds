import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { XStack } from '@tamagui/stacks'
import { Input } from 'tamagui'
import { tokens } from '../../tokens'

// ================================================================================
// TIPOS
// ================================================================================

export type InputSingleSize = 'small' | 'medium'

export interface InputSingleProps extends Omit<GetProps<typeof InputContainer>, 'size'> {
  /** Tamanho do input */
  size?: InputSingleSize
  
  /** Valor do input */
  value?: string
  
  /** Callback quando o valor muda */
  onChangeText?: (text: string) => void
  
  /** Placeholder */
  placeholder?: string
  
  /** Estado de erro (feedback error) */
  error?: boolean
  
  /** Estado desabilitado */
  disabled?: boolean
  
  /** Ícone à esquerda */
  leadingIcon?: React.ReactNode
  
  /** Ícone à direita */
  trailingIcon?: React.ReactNode
  
  /** Label flutuante (placeholder que vira label) */
  label?: string
  
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
 * Helper para renderizar ícones com props corretas
 */
const renderIconWithProps = (icon: React.ReactNode, color: string, size: number) => {
  if (!icon) return null
  
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<any>, {
      color,
      width: size,
      height: size,
    })
  }
  
  return (
    <Stack width={size} height={size}>
      {icon}
    </Stack>
  )
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do input
 */
const InputContainer = styled(XStack, {
  name: 'InputSingleContainer',
  alignItems: 'center',
  position: 'relative',
  borderStyle: 'solid',
  
  variants: {
    size: {
      small: {
        height: tokens.inputSingle.size.small.height,
        paddingVertical: tokens.inputSingle.size.small.paddingVertical,
        paddingHorizontal: tokens.inputSingle.size.small.paddingHorizontal,
        borderRadius: tokens.inputSingle.size.small.borderRadius,
        gap: tokens.inputSingle.size.small.gap,
      },
      medium: {
        height: tokens.inputSingle.size.medium.height,
        paddingVertical: tokens.inputSingle.size.medium.paddingVertical,
        paddingHorizontal: tokens.inputSingle.size.medium.paddingHorizontal,
        borderRadius: tokens.inputSingle.size.medium.borderRadius,
        gap: tokens.inputSingle.size.medium.gap,
      },
    } as const,
  } as const,
  
  defaultVariants: {
    size: 'medium',
  },
})

/**
 * Campo de input nativo (sem borda, o container que tem borda)
 */
const NativeInput = styled(Input, {
  name: 'InputSingleNative',
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
        fontSize: tokens.inputSingle.size.small.fontSize,
        lineHeight: tokens.inputSingle.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.inputSingle.size.medium.fontSize,
        lineHeight: tokens.inputSingle.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

/**
 * Label flutuante (se usar esse padrão)
 */
const FloatingLabel = styled(TamaguiText, {
  name: 'InputSingleLabel',
  position: 'absolute',
  pointerEvents: 'none',
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.inputSingle.size.small.fontSize,
        lineHeight: tokens.inputSingle.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.inputSingle.size.medium.fontSize,
        lineHeight: tokens.inputSingle.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * InputSingle - Campo de entrada de texto de linha única
 * 
 * Componente base para todos os inputs do sistema. Gerencia automaticamente
 * 4 dimensões de estados: tamanho, preenchimento, foco e feedback.
 * 
 * @example
 * Uso básico:
 * ```tsx
 * <InputSingle
 *   value={name}
 *   onChangeText={setName}
 *   placeholder="Digite seu nome"
 * />
 * ```
 * 
 * @example
 * Com erro:
 * ```tsx
 * <InputSingle
 *   value={email}
 *   onChangeText={setEmail}
 *   placeholder="Email"
 *   error
 * />
 * ```
 * 
 * @example
 * Com ícones:
 * ```tsx
 * <InputSingle
 *   value={search}
 *   onChangeText={setSearch}
 *   placeholder="Buscar"
 *   leadingIcon={<SearchIcon />}
 *   trailingIcon={<ClearIcon />}
 * />
 * ```
 * 
 * @example
 * Tamanho small:
 * ```tsx
 * <InputSingle
 *   size="small"
 *   value={code}
 *   onChangeText={setCode}
 *   placeholder="Código"
 * />
 * ```
 */
export const InputSingle = React.forwardRef<any, InputSingleProps>(
  (
    {
      size = 'medium',
      value = '',
      onChangeText,
      placeholder,
      error = false,
      disabled = false,
      leadingIcon,
      trailingIcon,
      label,
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
    
    // Tamanho do ícone baseado no tamanho do input
    const iconSize = size === 'small' ? 16 : 20
    
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
      <InputContainer
        ref={ref}
        size={size}
        backgroundColor={stateTokens.bg}
        borderColor={stateTokens.borderColor}
        borderWidth={stateTokens.borderWidth}
        disabled={disabled}
        testID={testID}
        {...props}
      >
        {/* Leading Icon */}
        {leadingIcon && renderIconWithProps(
          leadingIcon,
          stateTokens.labelColor,
          iconSize
        )}
        
        {/* Input Field */}
        <NativeInput
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
          accessibilityLabel={accessibilityLabel || label || placeholder}
          accessibilityHint={accessibilityHint}
          testID={testID ? `${testID}-input` : undefined}
        />
        
        {/* Trailing Icon */}
        {trailingIcon && renderIconWithProps(
          trailingIcon,
          stateTokens.labelColor,
          iconSize
        )}
        
        {/* Floating Label (se implementar esse padrão) */}
        {label && (
          <FloatingLabel
            size={size}
            color={stateTokens.labelColor}
          >
            {label}
          </FloatingLabel>
        )}
      </InputContainer>
    )
  }
)

InputSingle.displayName = 'InputSingle'

