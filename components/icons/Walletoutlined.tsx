import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WalletOutlined.svg'

/**
 * Walletoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Walletoutlined />
 * <Walletoutlined width="$6" height="$6" />
 * <Walletoutlined color="$color.primary" />
 * ```
 */
export const Walletoutlined = styled(Svg, {
  name: 'Walletoutlined',
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

export type WalletoutlinedProps = React.ComponentProps<typeof Walletoutlined>
