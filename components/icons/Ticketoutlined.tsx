import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TicketOutlined.svg'

/**
 * Ticketoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Ticketoutlined />
 * <Ticketoutlined width="$6" height="$6" />
 * <Ticketoutlined color="$color.primary" />
 * ```
 */
export const Ticketoutlined = styled(Svg, {
  name: 'Ticketoutlined',
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

export type TicketoutlinedProps = React.ComponentProps<typeof Ticketoutlined>
