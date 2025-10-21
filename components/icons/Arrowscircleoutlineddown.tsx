import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleOutlinedDown.svg'

/**
 * Arrowscircleoutlineddown Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscircleoutlineddown />
 * <Arrowscircleoutlineddown width="$6" height="$6" />
 * <Arrowscircleoutlineddown color="$color.primary" />
 * ```
 */
export const Arrowscircleoutlineddown = styled(Svg, {
  name: 'Arrowscircleoutlineddown',
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

export type ArrowscircleoutlineddownProps = React.ComponentProps<typeof Arrowscircleoutlineddown>
