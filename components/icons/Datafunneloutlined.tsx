import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataFunnelOutlined.svg'

/**
 * Datafunneloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Datafunneloutlined />
 * <Datafunneloutlined width="$6" height="$6" />
 * <Datafunneloutlined color="$color.primary" />
 * ```
 */
export const Datafunneloutlined = styled(Svg, {
  name: 'Datafunneloutlined',
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

export type DatafunneloutlinedProps = React.ComponentProps<typeof Datafunneloutlined>
