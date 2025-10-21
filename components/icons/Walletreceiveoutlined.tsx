import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletReceiveOutlined.svg'

/**
 * Walletreceiveoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Walletreceiveoutlined />
 * <Walletreceiveoutlined width="$6" height="$6" />
 * <Walletreceiveoutlined color="$color.primary" />
 * ```
 */
export const Walletreceiveoutlined = styled(Svg, {
  name: 'Walletreceiveoutlined',
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

export type WalletreceiveoutlinedProps = React.ComponentProps<typeof Walletreceiveoutlined>
