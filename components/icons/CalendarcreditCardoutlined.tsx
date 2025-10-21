import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CalendarCredit CardOutlined.svg'

/**
 * CalendarcreditCardoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <CalendarcreditCardoutlined />
 * <CalendarcreditCardoutlined width="$6" height="$6" />
 * <CalendarcreditCardoutlined color="$color.primary" />
 * ```
 */
export const CalendarcreditCardoutlined = styled(Svg, {
  name: 'CalendarcreditCardoutlined',
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

export type CalendarcreditCardoutlinedProps = React.ComponentProps<typeof CalendarcreditCardoutlined>
