import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletOffFilled.svg'

/**
 * Walletofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Walletofffilled />
 * <Walletofffilled width="$6" height="$6" />
 * <Walletofffilled color="$color.primary" />
 * ```
 */
export const Walletofffilled = styled(Svg, {
  name: 'Walletofffilled',
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

export type WalletofffilledProps = React.ComponentProps<typeof Walletofffilled>
