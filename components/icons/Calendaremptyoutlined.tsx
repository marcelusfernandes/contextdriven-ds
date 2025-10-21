import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarEmptyOutlined.svg'

/**
 * Calendaremptyoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calendaremptyoutlined />
 * <Calendaremptyoutlined width="$6" height="$6" />
 * <Calendaremptyoutlined color="$color.primary" />
 * ```
 */
export const Calendaremptyoutlined = styled(Svg, {
  name: 'Calendaremptyoutlined',
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

export type CalendaremptyoutlinedProps = React.ComponentProps<typeof Calendaremptyoutlined>
