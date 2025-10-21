import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZoomOutFilled.svg'

/**
 * Zoomoutfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Zoomoutfilled />
 * <Zoomoutfilled width="$6" height="$6" />
 * <Zoomoutfilled color="$color.primary" />
 * ```
 */
export const Zoomoutfilled = styled(Svg, {
  name: 'Zoomoutfilled',
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

export type ZoomoutfilledProps = React.ComponentProps<typeof Zoomoutfilled>
