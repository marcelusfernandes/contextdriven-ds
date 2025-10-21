import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletFilled.svg'

/**
 * Walletfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Walletfilled />
 * <Walletfilled width="$6" height="$6" />
 * <Walletfilled color="$color.primary" />
 * ```
 */
export const Walletfilled = styled(Svg, {
  name: 'Walletfilled',
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

export type WalletfilledProps = React.ComponentProps<typeof Walletfilled>
