import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletReceiveFilled.svg'

/**
 * Walletreceivefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Walletreceivefilled />
 * <Walletreceivefilled width="$6" height="$6" />
 * <Walletreceivefilled color="$color.primary" />
 * ```
 */
export const Walletreceivefilled = styled(Svg, {
  name: 'Walletreceivefilled',
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

export type WalletreceivefilledProps = React.ComponentProps<typeof Walletreceivefilled>
