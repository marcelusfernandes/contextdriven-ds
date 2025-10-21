import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinFilled.svg'

/**
 * Coinfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Coinfilled />
 * <Coinfilled width="$6" height="$6" />
 * <Coinfilled color="$color.primary" />
 * ```
 */
export const Coinfilled = styled(Svg, {
  name: 'Coinfilled',
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

export type CoinfilledProps = React.ComponentProps<typeof Coinfilled>
