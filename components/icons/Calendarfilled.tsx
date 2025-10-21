import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarFilled.svg'

/**
 * Calendarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendarfilled />
 * <Calendarfilled width="$6" height="$6" />
 * <Calendarfilled color="$color.primary" />
 * ```
 */
export const Calendarfilled = styled(Svg, {
  name: 'Calendarfilled',
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

export type CalendarfilledProps = React.ComponentProps<typeof Calendarfilled>
