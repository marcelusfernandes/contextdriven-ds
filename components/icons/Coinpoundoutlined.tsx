import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinPoundOutlined.svg'

/**
 * Coinpoundoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Coinpoundoutlined />
 * <Coinpoundoutlined width="$6" height="$6" />
 * <Coinpoundoutlined color="$color.primary" />
 * ```
 */
export const Coinpoundoutlined = styled(Svg, {
  name: 'Coinpoundoutlined',
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

export type CoinpoundoutlinedProps = React.ComponentProps<typeof Coinpoundoutlined>
