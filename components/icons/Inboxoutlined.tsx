import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InboxOutlined.svg'

/**
 * Inboxoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Inboxoutlined />
 * <Inboxoutlined width="$6" height="$6" />
 * <Inboxoutlined color="$color.primary" />
 * ```
 */
export const Inboxoutlined = styled(Svg, {
  name: 'Inboxoutlined',
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

export type InboxoutlinedProps = React.ComponentProps<typeof Inboxoutlined>
