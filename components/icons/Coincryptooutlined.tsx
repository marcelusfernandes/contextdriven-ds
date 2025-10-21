import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinCryptoOutlined.svg'

/**
 * Coincryptooutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Coincryptooutlined />
 * <Coincryptooutlined width="$6" height="$6" />
 * <Coincryptooutlined color="$color.primary" />
 * ```
 */
export const Coincryptooutlined = styled(Svg, {
  name: 'Coincryptooutlined',
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

export type CoincryptooutlinedProps = React.ComponentProps<typeof Coincryptooutlined>
