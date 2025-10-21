import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinEuroFilled.svg'

/**
 * Coineurofilled Icon Component
 * 
 * @example
 * ```tsx
 * <Coineurofilled />
 * <Coineurofilled width="$6" height="$6" />
 * <Coineurofilled color="$color.primary" />
 * ```
 */
export const Coineurofilled = styled(Svg, {
  name: 'Coineurofilled',
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

export type CoineurofilledProps = React.ComponentProps<typeof Coineurofilled>
