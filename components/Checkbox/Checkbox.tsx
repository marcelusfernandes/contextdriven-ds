/**
 * Checkbox Component - DSZé
 * 
 * Componente de checkbox com 108 variantes possíveis:
 * - 2 Functions: Input (com label), Single (apenas checkbox)
 * - 3 Types: Unchecked, Checked, Indeterminate
 * - 2 Sizes: Small (36px), Medium (48px)
 * - 5 States: Enabled, Hover, Focus, Active, Disabled
 * - 2 Error states: Normal, Error
 * 
 * Extraído do Figma: node-id 22:612
 */

import React, { useState } from 'react'
import { styled, Stack, Text as TamaguiText, type GetProps } from 'tamagui'
import { tokens } from '../../tokens'

// Importar ícones do design system
import { 
  Checkboxesoutlinedunchecked as IconUnchecked,
  Checkboxesfilledchecked as IconChecked,
  Checkboxesfilledindeterminate as IconIndeterminate
} from '@icons'

// ================================================================================
// TYPES
// ================================================================================

export type CheckboxSize = 'small' | 'medium'
export type CheckboxFunction = 'input' | 'single'
export type CheckboxState = 'enabled' | 'hover' | 'focus' | 'active' | 'disabled'

export interface CheckboxProps {
  // Visual
  size?: CheckboxSize
  function?: CheckboxFunction
  label?: string
  
  // Estado do checkbox
  checked?: boolean
  indeterminate?: boolean
  
  // Callbacks
  onChange?: (checked: boolean) => void
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
  name?: string
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do checkbox
 */
const CheckboxContainer = styled(Stack, {
  name: 'CheckboxContainer',
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
 * Icon Plate - Container visual do ícone
 */
const IconPlate = styled(Stack, {
  name: 'IconPlate',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  
  variants: {
    size: {
      small: {
        width: tokens.checkbox.size.small.input.iconPlateSize,
        height: tokens.checkbox.size.small.input.iconPlateSize,
        borderRadius: tokens.checkbox.size.small.input.iconPlateBorderRadius,
      },
      medium: {
        width: tokens.checkbox.size.medium.input.iconPlateSize,
        height: tokens.checkbox.size.medium.input.iconPlateSize,
        borderRadius: tokens.checkbox.size.medium.input.iconPlateBorderRadius,
      },
    },
  } as const,
})

/**
 * Label Text
 */
const Label = styled(TamaguiText, {
  name: 'CheckboxLabel',
  fontFamily: tokens.typography.fontFamily.body,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.checkbox.size.small.input.fontSize,
        lineHeight: tokens.checkbox.size.small.input.lineHeight,
      },
      medium: {
        fontSize: tokens.checkbox.size.medium.input.fontSize,
        lineHeight: tokens.checkbox.size.medium.input.lineHeight,
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
): CheckboxState {
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
  state: CheckboxState,
  error: boolean,
  size: CheckboxSize,
  functionType: CheckboxFunction
) {
  const stateMode = error ? 'error' : 'normal'
  const stateData = tokens.checkbox.state[stateMode][state]
  const sizeData = tokens.checkbox.size[size][functionType]
  
  return {
    container: {
      backgroundColor: stateData.bgColor,
      borderColor: stateData.borderColor,
      borderWidth: stateData.borderWidth,
      borderRadius: 'borderRadius' in sizeData ? sizeData.borderRadius : tokens.checkbox.size[size].input.borderRadius,
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
 * Retorna o ícone baseado no estado
 */
function getIcon(checked: boolean, indeterminate: boolean) {
  if (indeterminate) return IconIndeterminate
  if (checked) return IconChecked
  return IconUnchecked
}

// ================================================================================
// COMPONENT
// ================================================================================

export const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      size = 'medium',
      function: functionType = 'input',
      label,
      checked = false,
      indeterminate = false,
      onChange,
      onFocus,
      onBlur,
      error = false,
      disabled = false,
      accessibilityLabel,
      testID,
      id,
      name,
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
    const Icon = getIcon(checked, indeterminate)
    const iconSize = size === 'small' 
      ? tokens.checkbox.size.small.input.iconPlateSize 
      : tokens.checkbox.size.medium.input.iconPlateSize
    
    // Converter tamanho de número para string Tamagui token se necessário
    const iconSizeValue = typeof iconSize === 'number' ? iconSize : iconSize
    
    // Handlers
    const handleClick = () => {
      if (disabled) return
      onChange?.(!checked)
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
        onChange?.(!checked)
      }
    }
    
    // Acessibilidade
    const ariaChecked = indeterminate ? 'mixed' : checked
    
    return (
      <CheckboxContainer
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
        role="checkbox"
        aria-checked={ariaChecked}
        aria-label={accessibilityLabel || label}
        aria-disabled={disabled}
        aria-invalid={error}
        data-testid={testID}
        data-state={visualState}
        data-checked={checked}
        data-indeterminate={indeterminate}
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
      </CheckboxContainer>
    )
  }
)

Checkbox.displayName = 'Checkbox'

// ================================================================================
// EXPORTS
// ================================================================================

export type CheckboxPropsWithRef = GetProps<typeof Checkbox>

