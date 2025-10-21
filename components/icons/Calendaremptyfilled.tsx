import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarEmptyFilled.svg'

/**
 * Calendaremptyfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendaremptyfilled />
 * <Calendaremptyfilled width="$6" height="$6" />
 * <Calendaremptyfilled color="$color.primary" />
 * ```
 */
export const Calendaremptyfilled = styled(Svg, {
  name: 'Calendaremptyfilled',
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

export type CalendaremptyfilledProps = React.ComponentProps<typeof Calendaremptyfilled>
