import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReOrderOutlinedHorizontal.svg'

/**
 * Reorderoutlinedhorizontal Icon Component
 * 
 * @example
 * ```tsx
 * <Reorderoutlinedhorizontal />
 * <Reorderoutlinedhorizontal width="$6" height="$6" />
 * <Reorderoutlinedhorizontal color="$color.primary" />
 * ```
 */
export const Reorderoutlinedhorizontal = styled(Svg, {
  name: 'Reorderoutlinedhorizontal',
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

export type ReorderoutlinedhorizontalProps = React.ComponentProps<typeof Reorderoutlinedhorizontal>
