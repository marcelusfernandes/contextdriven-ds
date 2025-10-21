import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DesktopFilled.svg'

/**
 * Desktopfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Desktopfilled />
 * <Desktopfilled width="$6" height="$6" />
 * <Desktopfilled color="$color.primary" />
 * ```
 */
export const Desktopfilled = styled(Svg, {
  name: 'Desktopfilled',
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

export type DesktopfilledProps = React.ComponentProps<typeof Desktopfilled>
