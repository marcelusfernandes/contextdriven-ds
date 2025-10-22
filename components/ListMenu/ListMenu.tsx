import React, { Children, cloneElement, isValidElement } from 'react'
import { styled, GetProps } from '@tamagui/core'
import { YStack } from '@tamagui/stacks'
import { tokens } from '../../tokens'

// ================================================================================
// TIPOS
// ================================================================================

export type ListMenuContentType = 'text' | 'leading' | 'trailing' | 'radio' | 'checkbox'
export type ListMenuSize = 'small' | 'medium'

export interface ListMenuProps extends Omit<GetProps<typeof MenuContainer>, 'children'> {
  /** Tipo de conteúdo da lista */
  contentType?: ListMenuContentType
  
  /** Tamanho dos itens (propagado para ListMenuItem) */
  size?: ListMenuSize
  
  /** Itens da lista (ListMenuItem children) */
  children: React.ReactNode
  
  /** Valor selecionado (apenas para radio/checkbox) */
  value?: string | string[]
  
  /** Callback quando valor muda (apenas para radio/checkbox) */
  onChange?: (value: string | string[]) => void
  
  /** Nome do grupo (apenas para radio) */
  name?: string
  
  /** Label de acessibilidade */
  accessibilityLabel?: string
  
  /** Hint de acessibilidade */
  accessibilityHint?: string
  
  /** ID para testes */
  testID?: string
}

// ================================================================================
// HELPER FUNCTIONS
// ================================================================================

/**
 * Determina o role de acessibilidade baseado no content type
 */
const getAccessibilityRole = (contentType: ListMenuContentType) => {
  switch (contentType) {
    case 'radio':
      return 'radiogroup'
    case 'checkbox':
      return 'group'
    default:
      return 'list'
  }
}

/**
 * Verifica se um valor está selecionado (para radio/checkbox)
 */
const isSelected = (itemValue: string, selectedValue?: string | string[]) => {
  if (!selectedValue) return false
  if (Array.isArray(selectedValue)) {
    return selectedValue.includes(itemValue)
  }
  return selectedValue === itemValue
}

// ================================================================================
// STYLED COMPONENTS
// ================================================================================

/**
 * Container principal do menu
 */
const MenuContainer = styled(YStack, {
  name: 'ListMenuContainer',
  gap: tokens.listMenu.gap,
  padding: tokens.listMenu.padding,
  width: '100%',
})

// ================================================================================
// COMPONENTE PRINCIPAL
// ================================================================================

/**
 * ListMenu - Container de lista com 5 variantes de conteúdo
 * 
 * Container que agrupa múltiplos ListMenuItem e suporta diferentes tipos de conteúdo:
 * - **text:** Itens simples apenas com texto
 * - **leading:** Itens com ícone à esquerda
 * - **trailing:** Itens com ícone à direita (seta)
 * - **radio:** Lista com seleção única (RadioButton)
 * - **checkbox:** Lista com seleção múltipla (Checkbox)
 * 
 * @example
 * Menu simples com texto:
 * ```tsx
 * <ListMenu contentType="text">
 *   <ListMenuItem>Opção 1</ListMenuItem>
 *   <ListMenuItem>Opção 2</ListMenuItem>
 *   <ListMenuItem>Opção 3</ListMenuItem>
 * </ListMenu>
 * ```
 * 
 * @example
 * Menu com ícones à esquerda:
 * ```tsx
 * <ListMenu contentType="leading">
 *   <ListMenuItem leading={<HomeIcon />}>Início</ListMenuItem>
 *   <ListMenuItem leading={<SettingsIcon />}>Configurações</ListMenuItem>
 * </ListMenu>
 * ```
 * 
 * @example
 * Menu de navegação com setas:
 * ```tsx
 * <ListMenu contentType="trailing">
 *   <ListMenuItem trailing={<ChevronRight />}>Ver detalhes</ListMenuItem>
 *   <ListMenuItem trailing={<ChevronRight />}>Ver mais</ListMenuItem>
 * </ListMenu>
 * ```
 * 
 * @example
 * Seleção única (radio):
 * ```tsx
 * <ListMenu 
 *   contentType="radio"
 *   value={selected}
 *   onChange={setSelected}
 * >
 *   <ListMenuItem value="1">Opção 1</ListMenuItem>
 *   <ListMenuItem value="2">Opção 2</ListMenuItem>
 * </ListMenu>
 * ```
 * 
 * @example
 * Seleção múltipla (checkbox):
 * ```tsx
 * <ListMenu 
 *   contentType="checkbox"
 *   value={selected}
 *   onChange={setSelected}
 * >
 *   <ListMenuItem value="1">Opção 1</ListMenuItem>
 *   <ListMenuItem value="2">Opção 2</ListMenuItem>
 * </ListMenu>
 * ```
 */
export const ListMenu = React.forwardRef<any, ListMenuProps>(
  (
    {
      contentType = 'text',
      size = 'medium',
      children,
      value,
      onChange,
      name,
      accessibilityLabel,
      accessibilityHint,
      testID,
      ...props
    },
    ref
  ) => {
    // Handlers para radio/checkbox
    const handleRadioChange = (itemValue: string) => {
      if (contentType === 'radio' && onChange) {
        onChange(itemValue)
      }
    }
    
    const handleCheckboxChange = (itemValue: string) => {
      if (contentType === 'checkbox' && onChange) {
        const currentValues = (value as string[]) || []
        const newValues = currentValues.includes(itemValue)
          ? currentValues.filter(v => v !== itemValue)
          : [...currentValues, itemValue]
        onChange(newValues)
      }
    }
    
    // Processar children e injetar props
    const processedChildren = Children.map(children, (child, index) => {
      if (!isValidElement(child)) return child
      
      // Props comuns para todos os itens
      const commonProps: any = {
        size,
        key: child.key || index,
      }
      
      // Props específicas por content type
      switch (contentType) {
        case 'radio':
          if (child.props.value) {
            commonProps.selected = isSelected(child.props.value, value)
            commonProps.onPress = () => handleRadioChange(child.props.value)
            commonProps.accessibilityRole = 'radio'
            commonProps.accessibilityState = {
              checked: isSelected(child.props.value, value)
            }
            if (name) commonProps.name = name
          }
          break
          
        case 'checkbox':
          if (child.props.value) {
            commonProps.selected = isSelected(child.props.value, value)
            commonProps.onPress = () => handleCheckboxChange(child.props.value)
            commonProps.accessibilityRole = 'checkbox'
            commonProps.accessibilityState = {
              checked: isSelected(child.props.value, value)
            }
          }
          break
          
        case 'leading':
        case 'trailing':
        case 'text':
        default:
          commonProps.accessibilityRole = 'menuitem'
          break
      }
      
      // Clone child com props injetadas
      return cloneElement(child, commonProps)
    })
    
    return (
      <MenuContainer
        ref={ref}
        accessibilityRole={getAccessibilityRole(contentType)}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        testID={testID}
        {...props}
      >
        {processedChildren}
      </MenuContainer>
    )
  }
)

ListMenu.displayName = 'ListMenu'

