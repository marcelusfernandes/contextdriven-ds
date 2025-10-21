import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletSendFilled.svg'

/**
 * Walletsendfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Walletsendfilled />
 * <Walletsendfilled width="$6" height="$6" />
 * <Walletsendfilled color="$color.primary" />
 * ```
 */
export const Walletsendfilled = styled(Svg, {
  name: 'Walletsendfilled',
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

export type WalletsendfilledProps = React.ComponentProps<typeof Walletsendfilled>
