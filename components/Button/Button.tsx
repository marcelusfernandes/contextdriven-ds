import React from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { tokens } from '../../tokens'
import { Loading } from './Loading'

// Tipos
export type ButtonSize = 'small' | 'medium'
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'destructive'

export interface ButtonProps extends Omit<GetProps<typeof ButtonContainer>, 'size' | 'variant'> {
  /** Tamanho do botão */
  size?: ButtonSize
  /** Variante visual do botão */
  variant?: ButtonVariant
  /** Texto do botão */
  children: React.ReactNode
  /** Ícone à esquerda do texto */
  leadingIcon?: React.ReactNode
  /** Ícone à direita do texto */
  trailingIcon?: React.ReactNode
  /** Estado de loading */
  loading?: boolean
  /** Estado desabilitado */
  disabled?: boolean
  /** Callback ao pressionar */
  onPress?: () => void
  /** ID para testes */
  testID?: string
}

// Helper para renderizar ícones com props corretas
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

// Container principal do botão
const ButtonContainer = styled(Stack, {
  name: 'Button',
  flexDirection: 'row',
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
        height: tokens.button.size.small.height,
        paddingVertical: tokens.button.size.small.paddingVertical,
        paddingHorizontal: tokens.button.size.small.paddingHorizontal,
        borderRadius: tokens.button.size.small.borderRadius,
        gap: tokens.button.size.small.gap,
        minWidth: tokens.button.size.small.minWidth,
      },
      medium: {
        height: tokens.button.size.medium.height,
        paddingVertical: tokens.button.size.medium.paddingVertical,
        paddingHorizontal: tokens.button.size.medium.paddingHorizontal,
        borderRadius: tokens.button.size.medium.borderRadius,
        gap: tokens.button.size.medium.gap,
        minWidth: tokens.button.size.medium.minWidth,
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

// Texto do botão
const ButtonText = styled(TamaguiText, {
  name: 'ButtonText',
  fontFamily: tokens.typography.fontFamily.body,
  fontWeight: tokens.typography.fontWeight.semibold,
  textAlign: 'center',
  
  variants: {
    size: {
      small: {
        fontSize: tokens.button.size.small.fontSize,
        lineHeight: tokens.button.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.button.size.medium.fontSize,
        lineHeight: tokens.button.size.medium.lineHeight,
      },
    } as const,
  } as const,
})

// Container de conteúdo (para ícones + texto)
const ContentContainer = styled(Stack, {
  name: 'ButtonContent',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
})

// Obter estilos do botão baseado no variant e estado
const getButtonStyles = (
  variant: ButtonVariant,
  state: 'normal' | 'hover' | 'focus' | 'active' | 'disabled' | 'loading'
) => {
  return tokens.button.variant[variant][state]
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'medium',
      variant = 'primary',
      children,
      leadingIcon,
      trailingIcon,
      loading = false,
      disabled = false,
      onPress,
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

    const styles = getButtonStyles(variant, currentState)

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
      <ButtonContainer
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
        testID={testID}
        {...props}
      >
        {loading ? (
          <Loading size={size} />
        ) : (
          <ContentContainer gap={tokens.button.size[size].gap}>
            {leadingIcon && renderIconWithProps(
              leadingIcon,
              styles.iconColor,
              tokens.button.size[size].iconSize
            )}
            <ButtonText size={size} color={styles.color}>
              {children}
            </ButtonText>
            {trailingIcon && renderIconWithProps(
              trailingIcon,
              styles.iconColor,
              tokens.button.size[size].iconSize
            )}
          </ContentContainer>
        )}
      </ButtonContainer>
    )
  }
)

Button.displayName = 'Button'
