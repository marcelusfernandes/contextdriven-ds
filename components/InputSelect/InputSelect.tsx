import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { XStack } from '@tamagui/stacks'
import { tokens } from '../../tokens'

// ================================================================================
// TIPOS
// ================================================================================

export type InputSelectSize = 'small' | 'medium'

export interface InputSelectOption {
  label: string
  value: string
}

export interface InputSelectProps extends Omit<GetProps<typeof SelectContainer>, 'size'> {
  /** Tamanho do select */
  size?: InputSelectSize
  
  /** Valor selecionado */
  value?: string
  
  /** Opções do select */
  options: InputSelectOption[]
  
  /** Callback quando o valor muda */
  onChange?: (value: string) => void
  
  /** Placeholder quando nenhuma opção selecionada */
  placeholder?: string
  
  /** Estado de erro (feedback error) */
  error?: boolean
  
  /** Estado desabilitado */
  disabled?: boolean
  
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
const getFillState = (value: string | undefined, disabled: boolean): 'normal' | 'filled' | 'disabled' => {
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
 * Obtém a cor do trailing icon (ChevronDown)
 */
const getTrailingIconColor = (
  feedback: 'normal' | 'error',
  focused: boolean,
  fillState: 'normal' | 'filled' | 'disabled'
) => {
  const focusState = focused ? 'focused' : 'blurred'
  return tokens.inputSelect.trailingIcon[feedback][focusState][fillState === 'disabled' ? 'disabled' : fillState]
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do select
 */
const SelectContainer = styled(XStack, {
  name: 'InputSelectContainer',
  alignItems: 'center',
  position: 'relative',
  borderStyle: 'solid',
  cursor: 'pointer',
  
  variants: {
    size: {
      small: {
        height: tokens.inputSelect.size.small.height,
        paddingVertical: tokens.inputSelect.size.small.paddingVertical,
        paddingHorizontal: tokens.inputSelect.size.small.paddingHorizontal,
        borderRadius: tokens.inputSelect.size.small.borderRadius,
        gap: tokens.inputSelect.size.small.gap,
      },
      medium: {
        height: tokens.inputSelect.size.medium.height,
        paddingVertical: tokens.inputSelect.size.medium.paddingVertical,
        paddingHorizontal: tokens.inputSelect.size.medium.paddingHorizontal,
        borderRadius: tokens.inputSelect.size.medium.borderRadius,
        gap: tokens.inputSelect.size.medium.gap,
      },
    } as const,
    
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    } as const,
  } as const,
  
  defaultVariants: {
    size: 'medium',
  },
})

/**
 * Texto do select (valor selecionado ou placeholder)
 */
const SelectText = styled(TamaguiText, {
  name: 'InputSelectText',
  flex: 1,
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  userSelect: 'none',
  
  variants: {
    size: {
      small: {
        fontSize: tokens.inputSelect.size.small.fontSize,
        lineHeight: tokens.inputSelect.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.inputSelect.size.medium.fontSize,
        lineHeight: tokens.inputSelect.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

/**
 * Label flutuante (se usar esse padrão)
 */
const FloatingLabel = styled(TamaguiText, {
  name: 'InputSelectLabel',
  position: 'absolute',
  pointerEvents: 'none',
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.inputSelect.size.small.fontSize,
        lineHeight: tokens.inputSelect.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.inputSelect.size.medium.fontSize,
        lineHeight: tokens.inputSelect.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

/**
 * Ícone ChevronDown (trailing icon)
 */
const ChevronIcon = styled(Stack, {
  name: 'InputSelectChevronIcon',
  width: tokens.inputSelect.size.medium.iconSize,
  height: tokens.inputSelect.size.medium.iconSize,
})

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * InputSelect - Campo de seleção dropdown
 * 
 * Baseado no InputSingle, reutiliza 95% dos tokens de cores.
 * Diferença principal: trailing icon (ChevronDown) obrigatório e comportamento de seleção.
 * 
 * @example
 * Uso básico:
 * ```tsx
 * <InputSelect
 *   value={country}
 *   onChange={setCountry}
 *   options={[
 *     { label: 'Brasil', value: 'br' },
 *     { label: 'Estados Unidos', value: 'us' },
 *   ]}
 *   placeholder="Selecione o país"
 * />
 * ```
 * 
 * @example
 * Com erro:
 * ```tsx
 * <InputSelect
 *   value={state}
 *   onChange={setState}
 *   options={stateOptions}
 *   placeholder="Selecione o estado"
 *   error
 * />
 * ```
 * 
 * @example
 * Tamanho small:
 * ```tsx
 * <InputSelect
 *   size="small"
 *   value={category}
 *   onChange={setCategory}
 *   options={categories}
 *   placeholder="Categoria"
 * />
 * ```
 * 
 * @example
 * Desabilitado:
 * ```tsx
 * <InputSelect
 *   value={fixedValue}
 *   options={options}
 *   disabled
 * />
 * ```
 */
export const InputSelect = React.forwardRef<any, InputSelectProps>(
  (
    {
      size = 'medium',
      value,
      options = [],
      onChange,
      placeholder = 'Selecione...',
      error = false,
      disabled = false,
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
    const [isOpen, setIsOpen] = useState(false)
    
    // Determinar estados
    const feedback = error ? 'error' : 'normal'
    const fillState = getFillState(value, disabled)
    const stateTokens = getStateTokens(feedback, isFocused, fillState)
    const iconColor = getTrailingIconColor(feedback, isFocused, fillState)
    
    // Encontrar label da opção selecionada
    const selectedOption = options.find(opt => opt.value === value)
    const displayText = selectedOption?.label || placeholder
    const isPlaceholder = !selectedOption
    
    // Handlers
    const handlePress = () => {
      if (!disabled) {
        setIsOpen(!isOpen)
        setIsFocused(true)
        onFocus?.()
        // Aqui você implementaria a lógica de abrir o menu dropdown
        // Por enquanto, vamos simular com console.log
        console.log('Select pressed - implementar dropdown menu')
      }
    }
    
    const handleBlur = () => {
      setIsFocused(false)
      setIsOpen(false)
      onBlur?.()
    }
    
    const handleSelectOption = (optionValue: string) => {
      if (!disabled) {
        onChange?.(optionValue)
        setIsOpen(false)
        handleBlur()
      }
    }
    
    return (
      <SelectContainer
        ref={ref}
        size={size}
        disabled={disabled}
        backgroundColor={stateTokens.bg}
        borderColor={stateTokens.borderColor}
        borderWidth={stateTokens.borderWidth}
        onPress={handlePress}
        testID={testID}
        accessibilityRole="combobox"
        accessibilityState={{ expanded: isOpen, disabled }}
        accessibilityLabel={accessibilityLabel || label || placeholder}
        accessibilityHint={accessibilityHint}
        {...props}
      >
        {/* Selected Value or Placeholder */}
        <SelectText
          size={size}
          color={isPlaceholder ? stateTokens.placeholderColor : stateTokens.textColor}
        >
          {displayText}
        </SelectText>
        
        {/* Floating Label (se implementar esse padrão) */}
        {label && !value && !isFocused && (
          <FloatingLabel
            size={size}
            color={stateTokens.labelColor}
          >
            {label}
          </FloatingLabel>
        )}
        
        {/* Trailing Icon - ChevronDown */}
        <ChevronIcon>
          {/* Ícone SVG ChevronDown */}
          <svg
            width={tokens.inputSelect.size[size].iconSize}
            height={tokens.inputSelect.size[size].iconSize}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke={iconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ChevronIcon>
        
        {/* TODO: Implementar dropdown menu com as opções
            Aqui você pode usar uma biblioteca como @radix-ui/react-select
            ou implementar um menu customizado */}
      </SelectContainer>
    )
  }
)

InputSelect.displayName = 'InputSelect'

