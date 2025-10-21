import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinOutlined.svg'

/**
 * Coinoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Coinoutlined />
 * <Coinoutlined width="$6" height="$6" />
 * <Coinoutlined color="$color.primary" />
 * ```
 */
export const Coinoutlined = styled(Svg, {
  name: 'Coinoutlined',
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

export type CoinoutlinedProps = React.ComponentProps<typeof Coinoutlined>
