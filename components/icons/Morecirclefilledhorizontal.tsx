import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreCircleFilledHorizontal.svg'

/**
 * Morecirclefilledhorizontal Icon Component
 * 
 * @example
 * ```tsx
 * <Morecirclefilledhorizontal />
 * <Morecirclefilledhorizontal width="$6" height="$6" />
 * <Morecirclefilledhorizontal color="$color.primary" />
 * ```
 */
export const Morecirclefilledhorizontal = styled(Svg, {
  name: 'Morecirclefilledhorizontal',
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

export type MorecirclefilledhorizontalProps = React.ComponentProps<typeof Morecirclefilledhorizontal>
