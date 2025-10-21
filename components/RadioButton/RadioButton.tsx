/**
 * RadioButton Component - DSZé
 * 
 * Componente de radio button com 82 variantes possíveis:
 * - 2 Functions: Input (com label), Single (apenas radio)
 * - 2 Types: Unchecked, Checked (SEM indeterminate)
 * - 2 Sizes: Small (36px), Medium (48px)
 * - 5 States: Enabled, Hover, Focus, Active, Disabled
 * - 2 Error states: Normal, Error
 * 
 * Extraído do Figma: node-id 5555:39003
 */

import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, type GetProps } from 'tamagui'
import { tokens } from '../../tokens'

// Importar ícones do design system
import { 
  Radiobuttonsoutlinedunselected as IconUnchecked,
  Radiobuttonsfilledselected as IconChecked
} from '@icons'

// ================================================================================
// TYPES
// ================================================================================

export type RadioButtonSize = 'small' | 'medium'
export type RadioButtonFunction = 'input' | 'single'
export type RadioButtonState = 'enabled' | 'hover' | 'focus' | 'active' | 'disabled'

export interface RadioButtonProps {
  // Visual
  size?: RadioButtonSize
  function?: RadioButtonFunction
  label?: string
  
  // Estado do radio (seleção única)
  checked?: boolean
  value?: string  // Valor do radio no grupo
  name?: string   // Nome do grupo (para agrupar radios)
  
  // Callbacks
  onChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  
  // Estados
  error?: boolean
  disabled?: boolean
  
  // Acessibilidade
  accessibilityLabel?: string
  testID?: string
  
  // Props adicionais
  id?: string
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do radio button
 */
const RadioButtonContainer = styled(Stack, {
  name: 'RadioButtonContainer',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  
  variants: {
    size: {
      small: {},
      medium: {},
    },
    function: {
      input: {},
      single: {},
    },
    disabled: {
      true: {
        cursor: 'not-allowed',
      },
    },
  } as const,
})

/**
 * Icon Plate - Container visual do ícone (CIRCULAR!)
 */
const IconPlate = styled(Stack, {
  name: 'IconPlate',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  
  variants: {
    size: {
      small: {
        width: tokens.radioButton.size.small.input.iconPlateSize,
        height: tokens.radioButton.size.small.input.iconPlateSize,
        borderRadius: tokens.radioButton.size.small.input.iconPlateBorderRadius, // CIRCULAR!
      },
      medium: {
        width: tokens.radioButton.size.medium.input.iconPlateSize,
        height: tokens.radioButton.size.medium.input.iconPlateSize,
        borderRadius: tokens.radioButton.size.medium.input.iconPlateBorderRadius, // CIRCULAR!
      },
    },
  } as const,
})

/**
 * Label Text
 */
const Label = styled(TamaguiText, {
  name: 'RadioButtonLabel',
  fontFamily: tokens.typography.fontFamily.body,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.radioButton.size.small.input.fontSize,
        lineHeight: tokens.radioButton.size.small.input.lineHeight,
      },
      medium: {
        fontSize: tokens.radioButton.size.medium.input.fontSize,
        lineHeight: tokens.radioButton.size.medium.input.lineHeight,
      },
    },
  } as const,
})

// ================================================================================
// HELPER FUNCTIONS
// ================================================================================

/**
 * Retorna o estado visual baseado nas props
 */
function getVisualState(
  disabled: boolean,
  isHovered: boolean,
  isFocused: boolean,
  isActive: boolean
): RadioButtonState {
  if (disabled) return 'disabled'
  if (isActive) return 'active'
  if (isFocused) return 'focus'
  if (isHovered) return 'hover'
  return 'enabled'
}

/**
 * Retorna os estilos baseados no estado
 */
function getStateStyles(
  state: RadioButtonState,
  error: boolean,
  size: RadioButtonSize,
  functionType: RadioButtonFunction
) {
  const stateMode = error ? 'error' : 'normal'
  const stateData = tokens.radioButton.state[stateMode][state]
  const sizeData = tokens.radioButton.size[size][functionType]
  
  return {
    container: {
      backgroundColor: stateData.bgColor,
      borderColor: stateData.borderColor,
      borderWidth: stateData.borderWidth,
      borderRadius: 'borderRadius' in sizeData ? sizeData.borderRadius : tokens.radioButton.size[size].input.borderRadius,
      paddingVertical: 'paddingVertical' in sizeData ? sizeData.paddingVertical : 0,
      paddingHorizontal: 'paddingHorizontal' in sizeData ? sizeData.paddingHorizontal : 0,
      gap: 'gap' in sizeData ? sizeData.gap : 0,
      height: 'height' in sizeData ? sizeData.height : 'size' in sizeData ? sizeData.size : undefined,
    },
    iconPlate: {
      borderColor: stateData.iconPlateBorderColor,
      borderWidth: stateData.iconPlateBorderWidth,
    },
    icon: {
      color: stateData.iconPlateIconColor,
    },
    text: {
      color: stateData.textColor,
    },
  }
}

/**
 * Retorna o ícone baseado no estado (apenas 2 estados: checked/unchecked)
 */
function getIcon(checked: boolean) {
  return checked ? IconChecked : IconUnchecked
}

// ================================================================================
// COMPONENT
// ================================================================================

export const RadioButton = React.forwardRef<HTMLDivElement, RadioButtonProps>(
  (
    {
      size = 'medium',
      function: functionType = 'input',
      label,
      checked = false,
      value = '',
      name,
      onChange,
      onFocus,
      onBlur,
      error = false,
      disabled = false,
      accessibilityLabel,
      testID,
      id,
    },
    ref
  ) => {
    // Estados internos
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState(false)
    const [isActive, setIsActive] = useState(false)
    
    // Estado visual atual
    const visualState = getVisualState(disabled, isHovered, isFocused, isActive)
    
    // Estilos baseados no estado
    const styles = getStateStyles(visualState, error, size, functionType)
    
    // Ícone baseado no estado
    const Icon = getIcon(checked)
    const iconSize = size === 'small' 
      ? tokens.radioButton.size.small.input.iconPlateSize 
      : tokens.radioButton.size.medium.input.iconPlateSize
    
    // Handlers
    const handleClick = () => {
      if (disabled) return
      onChange?.(value)
    }
    
    const handleMouseEnter = () => !disabled && setIsHovered(true)
    const handleMouseLeave = () => {
      setIsHovered(false)
      setIsActive(false)
    }
    
    const handleMouseDown = () => !disabled && setIsActive(true)
    const handleMouseUp = () => setIsActive(false)
    
    const handleFocus = () => {
      if (disabled) return
      setIsFocused(true)
      onFocus?.()
    }
    
    const handleBlur = () => {
      setIsFocused(false)
      onBlur?.()
    }
    
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        onChange?.(value)
      }
    }
    
    return (
      <RadioButtonContainer
        ref={ref}
        size={size}
        function={functionType}
        disabled={disabled}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="radio"
        aria-checked={checked}
        aria-label={accessibilityLabel || label}
        aria-disabled={disabled}
        aria-invalid={error}
        data-testid={testID}
        data-state={visualState}
        data-checked={checked}
        data-error={error}
        id={id}
        // @ts-ignore
        name={name}
        {...styles.container}
      >
        <IconPlate
          size={size}
          borderColor={styles.iconPlate.borderColor}
          borderWidth={styles.iconPlate.borderWidth}
        >
          <Icon
            width={iconSize}
            height={iconSize}
            color={styles.icon.color}
          />
        </IconPlate>
        
        {functionType === 'input' && label && (
          <Label
            size={size}
            color={styles.text.color}
          >
            {label}
          </Label>
        )}
      </RadioButtonContainer>
    )
  }
)

RadioButton.displayName = 'RadioButton'

// ================================================================================
// EXPORTS
// ================================================================================

export type RadioButtonPropsWithRef = GetProps<typeof RadioButton>

