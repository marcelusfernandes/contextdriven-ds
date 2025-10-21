import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarOffOutlined.svg'

/**
 * Calendaroffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calendaroffoutlined />
 * <Calendaroffoutlined width="$6" height="$6" />
 * <Calendaroffoutlined color="$color.primary" />
 * ```
 */
export const Calendaroffoutlined = styled(Svg, {
  name: 'Calendaroffoutlined',
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

export type CalendaroffoutlinedProps = React.ComponentProps<typeof Calendaroffoutlined>
