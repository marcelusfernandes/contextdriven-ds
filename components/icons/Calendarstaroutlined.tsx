import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarStarOutlined.svg'

/**
 * Calendarstaroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calendarstaroutlined />
 * <Calendarstaroutlined width="$6" height="$6" />
 * <Calendarstaroutlined color="$color.primary" />
 * ```
 */
export const Calendarstaroutlined = styled(Svg, {
  name: 'Calendarstaroutlined',
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

export type CalendarstaroutlinedProps = React.ComponentProps<typeof Calendarstaroutlined>
