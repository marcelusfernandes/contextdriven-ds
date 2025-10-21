import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InboxReceiveFilled.svg'

/**
 * Inboxreceivefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Inboxreceivefilled />
 * <Inboxreceivefilled width="$6" height="$6" />
 * <Inboxreceivefilled color="$color.primary" />
 * ```
 */
export const Inboxreceivefilled = styled(Svg, {
  name: 'Inboxreceivefilled',
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

export type InboxreceivefilledProps = React.ComponentProps<typeof Inboxreceivefilled>
