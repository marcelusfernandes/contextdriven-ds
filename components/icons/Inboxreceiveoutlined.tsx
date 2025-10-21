import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InboxReceiveOutlined.svg'

/**
 * Inboxreceiveoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Inboxreceiveoutlined />
 * <Inboxreceiveoutlined width="$6" height="$6" />
 * <Inboxreceiveoutlined color="$color.primary" />
 * ```
 */
export const Inboxreceiveoutlined = styled(Svg, {
  name: 'Inboxreceiveoutlined',
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

export type InboxreceiveoutlinedProps = React.ComponentProps<typeof Inboxreceiveoutlined>
