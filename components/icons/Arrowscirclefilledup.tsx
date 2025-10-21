import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleFilledUp.svg'

/**
 * Arrowscirclefilledup Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscirclefilledup />
 * <Arrowscirclefilledup width="$6" height="$6" />
 * <Arrowscirclefilledup color="$color.primary" />
 * ```
 */
export const Arrowscirclefilledup = styled(Svg, {
  name: 'Arrowscirclefilledup',
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

export type ArrowscirclefilledupProps = React.ComponentProps<typeof Arrowscirclefilledup>
