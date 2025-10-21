import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageNotificationFilled.svg'

/**
 * Messagenotificationfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Messagenotificationfilled />
 * <Messagenotificationfilled width="$6" height="$6" />
 * <Messagenotificationfilled color="$color.primary" />
 * ```
 */
export const Messagenotificationfilled = styled(Svg, {
  name: 'Messagenotificationfilled',
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

export type MessagenotificationfilledProps = React.ComponentProps<typeof Messagenotificationfilled>
