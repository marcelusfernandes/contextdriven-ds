import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TicketFilled.svg'

/**
 * Ticketfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Ticketfilled />
 * <Ticketfilled width="$6" height="$6" />
 * <Ticketfilled color="$color.primary" />
 * ```
 */
export const Ticketfilled = styled(Svg, {
  name: 'Ticketfilled',
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

export type TicketfilledProps = React.ComponentProps<typeof Ticketfilled>
