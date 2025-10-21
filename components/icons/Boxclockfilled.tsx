import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxClockFilled.svg'

/**
 * Boxclockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxclockfilled />
 * <Boxclockfilled width="$6" height="$6" />
 * <Boxclockfilled color="$color.primary" />
 * ```
 */
export const Boxclockfilled = styled(Svg, {
  name: 'Boxclockfilled',
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

export type BoxclockfilledProps = React.ComponentProps<typeof Boxclockfilled>
