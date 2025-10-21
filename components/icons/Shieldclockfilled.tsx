import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldClockFilled.svg'

/**
 * Shieldclockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldclockfilled />
 * <Shieldclockfilled width="$6" height="$6" />
 * <Shieldclockfilled color="$color.primary" />
 * ```
 */
export const Shieldclockfilled = styled(Svg, {
  name: 'Shieldclockfilled',
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

export type ShieldclockfilledProps = React.ComponentProps<typeof Shieldclockfilled>
