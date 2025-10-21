import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreCircleFilledVertical.svg'

/**
 * Morecirclefilledvertical Icon Component
 * 
 * @example
 * ```tsx
 * <Morecirclefilledvertical />
 * <Morecirclefilledvertical width="$6" height="$6" />
 * <Morecirclefilledvertical color="$color.primary" />
 * ```
 */
export const Morecirclefilledvertical = styled(Svg, {
  name: 'Morecirclefilledvertical',
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

export type MorecirclefilledverticalProps = React.ComponentProps<typeof Morecirclefilledvertical>
