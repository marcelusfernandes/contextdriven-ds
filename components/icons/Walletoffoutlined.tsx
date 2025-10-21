import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletOffOutlined.svg'

/**
 * Walletoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Walletoffoutlined />
 * <Walletoffoutlined width="$6" height="$6" />
 * <Walletoffoutlined color="$color.primary" />
 * ```
 */
export const Walletoffoutlined = styled(Svg, {
  name: 'Walletoffoutlined',
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

export type WalletoffoutlinedProps = React.ComponentProps<typeof Walletoffoutlined>
