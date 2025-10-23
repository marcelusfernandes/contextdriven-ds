import React from 'react'
import { styled, Stack, Text as TamaguiText, GetProps } from '@tamagui/core'
import { tokens } from '../../tokens'

/**
 * Tipos de Props do Tag
 */
export type TagHierarchy = 'solid' | 'weak'
export type TagColor = 'success' | 'cold' | 'warning' | 'danger' | 'primary' | 'secondary' | 'rewards'
export type TagRadius = 'rounded' | 'pill'
export type TagSize = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge'

export interface TagProps extends Omit<GetProps<typeof TagContainer>, 'size' | 'hierarchy' | 'color' | 'radius'> {
  /**
   * Hierarquia visual do tag
   * @default 'solid'
   */
  hierarchy?: TagHierarchy
  
  /**
   * Esquema de cor do tag
   * @default 'primary'
   */
  color?: TagColor
  
  /**
   * Formato do border radius
   * @default 'rounded'
   */
  radius?: TagRadius
  
  /**
   * Tamanho do tag
   * @default 'medium'
   */
  size?: TagSize
  
  /**
   * Se deve exibir o ícone
   * @default false
   */
  iconShow?: boolean
  
  /**
   * Ícone customizado (componente)
   * Se não fornecido e iconShow=true, nenhum ícone é exibido
   */
  icon?: React.ReactNode
  
  /**
   * Texto do label
   * @required
   */
  children: string
  
  /**
   * ID para testes
   */
  testID?: string
}

/**
 * Helper para renderizar ícone com props corretas
 */
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
    <Stack width={size} height={size}>
      {icon}
    </Stack>
  )
}

/**
 * Container principal do Tag
 */
const TagContainer = styled(Stack, {
  name: 'Tag',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  
  variants: {
    size: {
      extraSmall: {
        height: tokens.tag.size.extraSmall.height,
        paddingVertical: tokens.tag.size.extraSmall.paddingVertical,
        paddingHorizontal: tokens.tag.size.extraSmall.paddingHorizontal,
        gap: tokens.tag.size.extraSmall.gap,
      },
      small: {
        height: tokens.tag.size.small.height,
        paddingVertical: tokens.tag.size.small.paddingVertical,
        paddingHorizontal: tokens.tag.size.small.paddingHorizontal,
        gap: tokens.tag.size.small.gap,
      },
      medium: {
        height: tokens.tag.size.medium.height,
        paddingVertical: tokens.tag.size.medium.paddingVertical,
        paddingHorizontal: tokens.tag.size.medium.paddingHorizontal,
        gap: tokens.tag.size.medium.gap,
      },
      large: {
        height: tokens.tag.size.large.height,
        paddingVertical: tokens.tag.size.large.paddingVertical,
        paddingHorizontal: tokens.tag.size.large.paddingHorizontal,
        gap: tokens.tag.size.large.gap,
      },
      extraLarge: {
        height: tokens.tag.size.extraLarge.height,
        paddingVertical: tokens.tag.size.extraLarge.paddingVertical,
        paddingHorizontal: tokens.tag.size.extraLarge.paddingHorizontal,
        gap: tokens.tag.size.extraLarge.gap,
      },
    } as const,
    
    hierarchy: {
      solid: {},
      weak: {},
    } as const,
    
    color: {
      success: {},
      cold: {},
      warning: {},
      danger: {},
      primary: {},
      secondary: {},
      rewards: {},
    } as const,
    
    radius: {
      rounded: {
        borderRadius: tokens.tag.radius.rounded,
      },
      pill: {
        borderRadius: tokens.tag.radius.pill,
      },
    } as const,
  },
  
  defaultVariants: {
    size: 'medium',
    hierarchy: 'solid',
    color: 'primary',
    radius: 'rounded',
  },
})

/**
 * Texto do Tag
 */
const TagText = styled(TamaguiText, {
  name: 'TagText',
  fontFamily: tokens.tag.fontFamily,
  fontWeight: '600',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flexShrink: 1,
  
  variants: {
    size: {
      extraSmall: {
        fontSize: tokens.tag.size.extraSmall.fontSize,
        lineHeight: tokens.tag.size.extraSmall.lineHeight,
      },
      small: {
        fontSize: tokens.tag.size.small.fontSize,
        lineHeight: tokens.tag.size.small.lineHeight,
      },
      medium: {
        fontSize: tokens.tag.size.medium.fontSize,
        lineHeight: tokens.tag.size.medium.lineHeight,
      },
      large: {
        fontSize: tokens.tag.size.large.fontSize,
        lineHeight: tokens.tag.size.large.lineHeight,
      },
      extraLarge: {
        fontSize: tokens.tag.size.extraLarge.fontSize,
        lineHeight: tokens.tag.size.extraLarge.lineHeight,
      },
    } as const,
  },
  
  defaultVariants: {
    size: 'medium',
  },
})

/**
 * Componente Tag
 * 
 * Etiqueta/badge de status com múltiplas variantes de cor, tamanho e formato.
 * Tags são geralmente não-interativos (usados apenas para exibir informação).
 * 
 * @example
 * ```tsx
 * // Tag de sucesso básica
 * <Tag hierarchy="solid" color="success" size="medium">
 *   Entregue
 * </Tag>
 * 
 * // Tag com ícone
 * <Tag hierarchy="solid" color="primary" size="large" iconShow icon={<IconStar />}>
 *   VIP
 * </Tag>
 * 
 * // Tag em formato pill
 * <Tag hierarchy="weak" color="warning" radius="pill">
 *   Aguardando
 * </Tag>
 * ```
 */
export const Tag = React.forwardRef<typeof TagContainer, TagProps>(({
  hierarchy = 'solid',
  color = 'primary',
  radius = 'rounded',
  size = 'medium',
  iconShow = false,
  icon,
  children,
  testID,
  ...rest
}, ref) => {
  // Determina as cores baseado em hierarchy e color
  const colorTokens = tokens.tag.hierarchy[hierarchy][color]
  const bgColor = colorTokens.bg
  const textColor = colorTokens.text
  const iconColor = colorTokens.icon
  
  // Determina tamanho do ícone baseado no size
  const iconSize = tokens.tag.size[size].iconSize
  
  return (
    <TagContainer
      // @ts-ignore - ref typing issue
      ref={ref}
      size={size}
      hierarchy={hierarchy}
      color={color}
      radius={radius}
      backgroundColor={bgColor}
      testID={testID}
      {...rest}
    >
      {/* Ícone (opcional) */}
      {iconShow && icon && renderIconWithProps(icon, iconColor, iconSize)}
      
      {/* Texto */}
      <TagText
        size={size}
        color={textColor}
      >
        {children}
      </TagText>
    </TagContainer>
  )
})

Tag.displayName = 'Tag'

