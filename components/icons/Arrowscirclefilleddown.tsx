import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleFilledDown.svg'

/**
 * Arrowscirclefilleddown Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscirclefilleddown />
 * <Arrowscirclefilleddown width="$6" height="$6" />
 * <Arrowscirclefilleddown color="$color.primary" />
 * ```
 */
export const Arrowscirclefilleddown = styled(Svg, {
  name: 'Arrowscirclefilleddown',
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

export type ArrowscirclefilleddownProps = React.ComponentProps<typeof Arrowscirclefilleddown>
