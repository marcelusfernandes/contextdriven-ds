import React from 'react'
import { styled, Stack, GetProps } from '@tamagui/core'
import { tokens } from '../../tokens'
import { Loading } from '../Button/Loading'

// Tipos
export type ButtonIconSize = 'small' | 'medium'
export type ButtonIconVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'

export interface ButtonIconProps extends Omit<GetProps<typeof ButtonIconContainer>, 'size' | 'variant'> {
  /** Tamanho do botão */
  size?: ButtonIconSize
  /** Variante visual do botão */
  variant?: ButtonIconVariant
  /** Ícone do botão */
  icon: React.ReactNode
  /** Estado de loading */
  loading?: boolean
  /** Estado desabilitado */
  disabled?: boolean
  /** Callback ao pressionar */
  onPress?: () => void
  /** Texto para acessibilidade */
  accessibilityLabel?: string
  /** ID para testes */
  testID?: string
}

// Helper para renderizar ícone com props corretas
const renderIconWithProps = (icon: React.ReactNode, color: string, size: number) => {
  if (!icon) return null
  
  // Se o ícone é um elemento React válido, clone-o com as props corretas
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<any>, {
      color,
      width: size,
      height: size,
    })
  }
  
  // Se não for um elemento válido, apenas envolve em um container
  return (
    <Stack width={size} height={size} color={color}>
      {icon}
    </Stack>
  )
}

// Container principal do botão (quadrado perfeito)
const ButtonIconContainer = styled(Stack, {
  name: 'ButtonIcon',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  
  // Transições suaves
  animation: 'quick',
  
  variants: {
    size: {
      small: {
        width: tokens.buttonIcon.size.small.width,
        height: tokens.buttonIcon.size.small.height,
        padding: tokens.buttonIcon.size.small.padding,
        borderRadius: tokens.buttonIcon.size.small.borderRadius,
      },
      medium: {
        width: tokens.buttonIcon.size.medium.width,
        height: tokens.buttonIcon.size.medium.height,
        padding: tokens.buttonIcon.size.medium.padding,
        borderRadius: tokens.buttonIcon.size.medium.borderRadius,
      },
    } as const,
    
    variant: {
      primary: {},
      secondary: {},
      tertiary: {},
      destructive: {},
    } as const,
    
    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 1,
      },
    } as const,
    
    loading: {
      true: {},
    } as const,
  } as const,
  
  defaultVariants: {
    size: 'medium',
    variant: 'primary',
  },
})

// Obter estilos do botão baseado no variant e estado
const getButtonIconStyles = (
  variant: ButtonIconVariant,
  state: 'normal' | 'hover' | 'focus' | 'active' | 'disabled' | 'loading'
) => {
  return tokens.buttonIcon.variant[variant][state]
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      size = 'medium',
      variant = 'primary',
      icon,
      loading = false,
      disabled = false,
      onPress,
      accessibilityLabel,
      testID,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = React.useState(false)
    const [isFocused, setIsFocused] = React.useState(false)
    const [isHovered, setIsHovered] = React.useState(false)

    // Determinar o estado atual
    const currentState = disabled
      ? 'disabled'
      : loading
      ? 'loading'
      : isPressed
      ? 'active'
      : isFocused
      ? 'focus'
      : isHovered
      ? 'hover'
      : 'normal'

    const styles = getButtonIconStyles(variant, currentState)

    // Handlers
    const handlePress = () => {
      if (!disabled && !loading && onPress) {
        onPress()
      }
    }

    const handlePressIn = () => {
      if (!disabled && !loading) {
        setIsPressed(true)
      }
    }

    const handlePressOut = () => {
      setIsPressed(false)
    }

    const handleFocus = () => {
      if (!disabled && !loading) {
        setIsFocused(true)
      }
    }

    const handleBlur = () => {
      setIsFocused(false)
    }

    const handleMouseEnter = () => {
      if (!disabled && !loading) {
        setIsHovered(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      setIsPressed(false)
    }

    return (
      <ButtonIconContainer
        ref={ref}
        size={size}
        variant={variant}
        disabled={disabled}
        loading={loading}
        backgroundColor={styles.bg}
        borderColor={styles.borderColor}
        borderWidth={styles.borderWidth}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        testID={testID}
        {...props}
      >
        {loading ? (
          <Loading size={size} />
        ) : (
          renderIconWithProps(
            icon,
            styles.iconColor,
            tokens.buttonIcon.size[size].iconSize
          )
        )}
      </ButtonIconContainer>
    )
  }
)

ButtonIcon.displayName = 'ButtonIcon'

