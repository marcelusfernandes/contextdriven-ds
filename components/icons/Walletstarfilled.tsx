import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletStarFilled.svg'

/**
 * Walletstarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Walletstarfilled />
 * <Walletstarfilled width="$6" height="$6" />
 * <Walletstarfilled color="$color.primary" />
 * ```
 */
export const Walletstarfilled = styled(Svg, {
  name: 'Walletstarfilled',
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

export type WalletstarfilledProps = React.ComponentProps<typeof Walletstarfilled>
