import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReOrderOutlinedVertical.svg'

/**
 * Reorderoutlinedvertical Icon Component
 * 
 * @example
 * ```tsx
 * <Reorderoutlinedvertical />
 * <Reorderoutlinedvertical width="$6" height="$6" />
 * <Reorderoutlinedvertical color="$color.primary" />
 * ```
 */
export const Reorderoutlinedvertical = styled(Svg, {
  name: 'Reorderoutlinedvertical',
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

export type ReorderoutlinedverticalProps = React.ComponentProps<typeof Reorderoutlinedvertical>
