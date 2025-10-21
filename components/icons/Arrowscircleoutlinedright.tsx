import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleOutlinedRight.svg'

/**
 * Arrowscircleoutlinedright Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscircleoutlinedright />
 * <Arrowscircleoutlinedright width="$6" height="$6" />
 * <Arrowscircleoutlinedright color="$color.primary" />
 * ```
 */
export const Arrowscircleoutlinedright = styled(Svg, {
  name: 'Arrowscircleoutlinedright',
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

export type ArrowscircleoutlinedrightProps = React.ComponentProps<typeof Arrowscircleoutlinedright>
