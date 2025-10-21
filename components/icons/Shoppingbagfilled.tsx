import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShoppingBagFilled.svg'

/**
 * Shoppingbagfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shoppingbagfilled />
 * <Shoppingbagfilled width="$6" height="$6" />
 * <Shoppingbagfilled color="$color.primary" />
 * ```
 */
export const Shoppingbagfilled = styled(Svg, {
  name: 'Shoppingbagfilled',
  width: '$4',
  height: '$4',
  color: '$color.text',
  
  variants: {
    size: {
      xs: {
        width: '$3',
        height: '$3',
      },
      sm: {
        width: '$4',
        height: '$4',
      },
      md: {
        width: '$5',
        height: '$5',
      },
      lg: {
        width: '$6',
        height: '$6',
      },
      xl: {
        width: '$8',
        height: '$8',
      },
    },
  },
  
  defaultVariants: {
    size: 'md',
  },
})

export type ShoppingbagfilledProps = React.ComponentProps<typeof Shoppingbagfilled>
