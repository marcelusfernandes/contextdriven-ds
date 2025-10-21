import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleFilledRight.svg'

/**
 * Arrowscirclefilledright Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscirclefilledright />
 * <Arrowscirclefilledright width="$6" height="$6" />
 * <Arrowscirclefilledright color="$color.primary" />
 * ```
 */
export const Arrowscirclefilledright = styled(Svg, {
  name: 'Arrowscirclefilledright',
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

export type ArrowscirclefilledrightProps = React.ComponentProps<typeof Arrowscirclefilledright>
