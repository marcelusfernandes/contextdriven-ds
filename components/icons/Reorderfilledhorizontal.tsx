import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReOrderFilledHorizontal.svg'

/**
 * Reorderfilledhorizontal Icon Component
 * 
 * @example
 * ```tsx
 * <Reorderfilledhorizontal />
 * <Reorderfilledhorizontal width="$6" height="$6" />
 * <Reorderfilledhorizontal color="$color.primary" />
 * ```
 */
export const Reorderfilledhorizontal = styled(Svg, {
  name: 'Reorderfilledhorizontal',
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

export type ReorderfilledhorizontalProps = React.ComponentProps<typeof Reorderfilledhorizontal>
