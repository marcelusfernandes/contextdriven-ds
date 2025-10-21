import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreCircleOutlinedHorizontal.svg'

/**
 * Morecircleoutlinedhorizontal Icon Component
 * 
 * @example
 * ```tsx
 * <Morecircleoutlinedhorizontal />
 * <Morecircleoutlinedhorizontal width="$6" height="$6" />
 * <Morecircleoutlinedhorizontal color="$color.primary" />
 * ```
 */
export const Morecircleoutlinedhorizontal = styled(Svg, {
  name: 'Morecircleoutlinedhorizontal',
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

export type MorecircleoutlinedhorizontalProps = React.ComponentProps<typeof Morecircleoutlinedhorizontal>
