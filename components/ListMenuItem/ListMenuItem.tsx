import React from 'react'
import { styled, Text as TamaguiText, Stack, GetProps } from '@tamagui/core'
import { XStack } from '@tamagui/stacks'
import { tokens } from '../../tokens'

// ================================================================================
// TIPOS
// ================================================================================

export type ListMenuItemSize = 'small' | 'medium'

export interface ListMenuItemProps extends Omit<GetProps<typeof ItemContainer>, 'size'> {
  /** Tamanho do item */
  size?: ListMenuItemSize
  
  /** Conteúdo do item (texto) */
  children: React.ReactNode
  
  /** Ícone ou elemento à esquerda (opcional) */
  leading?: React.ReactNode
  
  /** Ícone ou elemento à direita (opcional) */
  trailing?: React.ReactNode
  
  /** Callback ao clicar */
  onPress?: () => void
  
  /** Callback ao focar */
  onFocus?: () => void
  
  /** Callback ao desfocar */
  onBlur?: () => void
  
  /** Label de acessibilidade */
  accessibilityLabel?: string
  
  /** Hint de acessibilidade */
  accessibilityHint?: string
  
  /** Role de acessibilidade */
  accessibilityRole?: 'button' | 'menuitem'
  
  /** ID para testes */
  testID?: string
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do item
 * Gerencia os 4 estados interativos: normal, hover, active, focus
 */
const ItemContainer = styled(XStack, {
  name: 'ListMenuItemContainer',
  alignItems: 'center',
  cursor: 'pointer',
  borderStyle: 'solid',
  
  variants: {
    size: {
      small: {
        height: tokens.listMenuItem.size.small.height,
        paddingVertical: tokens.listMenuItem.size.small.paddingVertical,
        paddingHorizontal: tokens.listMenuItem.size.small.paddingHorizontal,
        borderRadius: tokens.listMenuItem.size.small.borderRadius,
        gap: tokens.listMenuItem.size.small.gap,
      },
      medium: {
        height: tokens.listMenuItem.size.medium.height,
        paddingVertical: tokens.listMenuItem.size.medium.paddingVertical,
        paddingHorizontal: tokens.listMenuItem.size.medium.paddingHorizontal,
        borderRadius: tokens.listMenuItem.size.medium.borderRadius,
        gap: tokens.listMenuItem.size.medium.gap,
      },
    } as const,
  } as const,
  
  // Estado Normal (padrão)
  backgroundColor: tokens.listMenuItem.state.normal.bgColor,
  borderColor: tokens.listMenuItem.state.normal.borderColor,
  borderWidth: tokens.listMenuItem.state.normal.borderWidth,
  
  // Estado Hover
  hoverStyle: {
    backgroundColor: tokens.listMenuItem.state.hover.bgColor,
    borderColor: tokens.listMenuItem.state.hover.borderColor,
    borderWidth: tokens.listMenuItem.state.hover.borderWidth,
  },
  
  // Estado Active (pressed)
  pressStyle: {
    backgroundColor: tokens.listMenuItem.state.active.bgColor,
    borderColor: tokens.listMenuItem.state.active.borderColor,
    borderWidth: tokens.listMenuItem.state.active.borderWidth,
  },
  
  // Estado Focus
  focusStyle: {
    backgroundColor: tokens.listMenuItem.state.focus.bgColor,
    borderColor: tokens.listMenuItem.state.focus.borderColor,
    borderWidth: tokens.listMenuItem.state.focus.borderWidth,
  },
  
  defaultVariants: {
    size: 'medium',
  },
})

/**
 * Container do ícone/elemento leading
 */
const LeadingContainer = styled(Stack, {
  name: 'ListMenuItemLeading',
  justifyContent: 'center',
  alignItems: 'center',
  
  variants: {
    size: {
      small: {
        width: tokens.listMenuItem.size.small.leadingIconSize,
        height: tokens.listMenuItem.size.small.leadingIconSize,
      },
      medium: {
        width: tokens.listMenuItem.size.medium.leadingIconSize,
        height: tokens.listMenuItem.size.medium.leadingIconSize,
      },
    } as const,
  } as const,
})

/**
 * Texto do item
 */
const ItemText = styled(TamaguiText, {
  name: 'ListMenuItemText',
  flex: 1,
  fontFamily: tokens.typography.fontFamily.body,
  letterSpacing: tokens.typography.letterSpacing.regular,
  color: tokens.listMenuItem.state.normal.textColor,
  
  variants: {
    size: {
      small: {
        fontSize: tokens.listMenuItem.size.small.fontSize,
        lineHeight: tokens.listMenuItem.size.small.lineHeight,
        fontWeight: tokens.listMenuItem.size.small.fontWeight,
      },
      medium: {
        fontSize: tokens.listMenuItem.size.medium.fontSize,
        lineHeight: tokens.listMenuItem.size.medium.lineHeight,
        fontWeight: tokens.listMenuItem.size.medium.fontWeight,
      },
    } as const,
  } as const,
})

/**
 * Container do ícone/elemento trailing
 */
const TrailingContainer = styled(Stack, {
  name: 'ListMenuItemTrailing',
  justifyContent: 'center',
  alignItems: 'center',
  
  variants: {
    size: {
      small: {
        width: tokens.listMenuItem.size.small.trailingIconSize,
        height: tokens.listMenuItem.size.small.trailingIconSize,
      },
      medium: {
        width: tokens.listMenuItem.size.medium.trailingIconSize,
        height: tokens.listMenuItem.size.medium.trailingIconSize,
      },
    } as const,
  } as const,
})

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * ListMenuItem - Item individual de lista
 * 
 * Item base usado pelo ListMenu. Gerencia 4 estados interativos:
 * - **normal:** Background transparente
 * - **hover:** Background gray100
 * - **active:** Background gray200 (quando pressionado)
 * - **focus:** Background gray200 + borda gray300
 * 
 * Estrutura flexível:
 * - **leading:** Ícone à esquerda (opcional)
 * - **text:** Conteúdo principal (obrigatório)
 * - **trailing:** Ícone à direita (opcional, geralmente seta)
 * 
 * **Nota:** Este componente NÃO tem estados error ou disabled.
 * 
 * @example
 * Item simples:
 * ```tsx
 * <ListMenuItem onPress={() => console.log('Clicou')}>
 *   Minha opção
 * </ListMenuItem>
 * ```
 * 
 * @example
 * Com leading:
 * ```tsx
 * <ListMenuItem 
 *   leading={<HomeIcon />}
 *   onPress={() => navigate('home')}
 * >
 *   Início
 * </ListMenuItem>
 * ```
 * 
 * @example
 * Com leading e trailing:
 * ```tsx
 * <ListMenuItem 
 *   leading={<SettingsIcon />}
 *   trailing={<ChevronRightIcon />}
 *   onPress={() => navigate('settings')}
 * >
 *   Configurações
 * </ListMenuItem>
 * ```
 * 
 * @example
 * Tamanho small:
 * ```tsx
 * <ListMenuItem 
 *   size="small"
 *   leading={<Icon />}
 *   onPress={handleClick}
 * >
 *   Item compacto
 * </ListMenuItem>
 * ```
 */
export const ListMenuItem = React.forwardRef<any, ListMenuItemProps>(
  (
    {
      size = 'medium',
      children,
      leading,
      trailing,
      onPress,
      onFocus,
      onBlur,
      accessibilityLabel,
      accessibilityHint,
      accessibilityRole = 'button',
      testID,
      ...props
    },
    ref
  ) => {
    return (
      <ItemContainer
        ref={ref}
        size={size}
        onPress={onPress}
        onFocus={onFocus}
        onBlur={onBlur}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel || (typeof children === 'string' ? children : undefined)}
        accessibilityHint={accessibilityHint}
        testID={testID}
        {...props}
      >
        {/* Leading Icon/Element */}
        {leading && (
          <LeadingContainer size={size}>
            {leading}
          </LeadingContainer>
        )}
        
        {/* Text Content */}
        <ItemText size={size}>
          {children}
        </ItemText>
        
        {/* Trailing Icon/Element */}
        {trailing && (
          <TrailingContainer size={size}>
            {trailing}
          </TrailingContainer>
        )}
      </ItemContainer>
    )
  }
)

ListMenuItem.displayName = 'ListMenuItem'

