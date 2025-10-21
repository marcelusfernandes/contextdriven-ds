import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZoomInFilled.svg'

/**
 * Zoominfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Zoominfilled />
 * <Zoominfilled width="$6" height="$6" />
 * <Zoominfilled color="$color.primary" />
 * ```
 */
export const Zoominfilled = styled(Svg, {
  name: 'Zoominfilled',
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

export type ZoominfilledProps = React.ComponentProps<typeof Zoominfilled>
