import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InboxFilled.svg'

/**
 * Inboxfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Inboxfilled />
 * <Inboxfilled width="$6" height="$6" />
 * <Inboxfilled color="$color.primary" />
 * ```
 */
export const Inboxfilled = styled(Svg, {
  name: 'Inboxfilled',
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

export type InboxfilledProps = React.ComponentProps<typeof Inboxfilled>
