import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarOutlined.svg'

/**
 * Calendaroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calendaroutlined />
 * <Calendaroutlined width="$6" height="$6" />
 * <Calendaroutlined color="$color.primary" />
 * ```
 */
export const Calendaroutlined = styled(Svg, {
  name: 'Calendaroutlined',
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

export type CalendaroutlinedProps = React.ComponentProps<typeof Calendaroutlined>
