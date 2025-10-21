import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataFunnelFilled.svg'

/**
 * Datafunnelfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Datafunnelfilled />
 * <Datafunnelfilled width="$6" height="$6" />
 * <Datafunnelfilled color="$color.primary" />
 * ```
 */
export const Datafunnelfilled = styled(Svg, {
  name: 'Datafunnelfilled',
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

export type DatafunnelfilledProps = React.ComponentProps<typeof Datafunnelfilled>
