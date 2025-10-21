import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InboxSendOutlined.svg'

/**
 * Inboxsendoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Inboxsendoutlined />
 * <Inboxsendoutlined width="$6" height="$6" />
 * <Inboxsendoutlined color="$color.primary" />
 * ```
 */
export const Inboxsendoutlined = styled(Svg, {
  name: 'Inboxsendoutlined',
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

export type InboxsendoutlinedProps = React.ComponentProps<typeof Inboxsendoutlined>
