import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarStarFilled.svg'

/**
 * Calendarstarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendarstarfilled />
 * <Calendarstarfilled width="$6" height="$6" />
 * <Calendarstarfilled color="$color.primary" />
 * ```
 */
export const Calendarstarfilled = styled(Svg, {
  name: 'Calendarstarfilled',
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

export type CalendarstarfilledProps = React.ComponentProps<typeof Calendarstarfilled>
