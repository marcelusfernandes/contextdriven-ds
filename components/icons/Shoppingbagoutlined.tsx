import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShoppingBagOutlined.svg'

/**
 * Shoppingbagoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shoppingbagoutlined />
 * <Shoppingbagoutlined width="$6" height="$6" />
 * <Shoppingbagoutlined color="$color.primary" />
 * ```
 */
export const Shoppingbagoutlined = styled(Svg, {
  name: 'Shoppingbagoutlined',
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

export type ShoppingbagoutlinedProps = React.ComponentProps<typeof Shoppingbagoutlined>
