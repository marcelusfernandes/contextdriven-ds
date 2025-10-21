import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarClockFilled.svg'

/**
 * Calendarclockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendarclockfilled />
 * <Calendarclockfilled width="$6" height="$6" />
 * <Calendarclockfilled color="$color.primary" />
 * ```
 */
export const Calendarclockfilled = styled(Svg, {
  name: 'Calendarclockfilled',
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

export type CalendarclockfilledProps = React.ComponentProps<typeof Calendarclockfilled>
