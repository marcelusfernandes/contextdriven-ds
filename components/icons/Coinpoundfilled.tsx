import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinPoundFilled.svg'

/**
 * Coinpoundfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Coinpoundfilled />
 * <Coinpoundfilled width="$6" height="$6" />
 * <Coinpoundfilled color="$color.primary" />
 * ```
 */
export const Coinpoundfilled = styled(Svg, {
  name: 'Coinpoundfilled',
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

export type CoinpoundfilledProps = React.ComponentProps<typeof Coinpoundfilled>
