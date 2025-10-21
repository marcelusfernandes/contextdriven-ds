import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BellNotificationFilled.svg'

/**
 * Bellnotificationfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bellnotificationfilled />
 * <Bellnotificationfilled width="$6" height="$6" />
 * <Bellnotificationfilled color="$color.primary" />
 * ```
 */
export const Bellnotificationfilled = styled(Svg, {
  name: 'Bellnotificationfilled',
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

export type BellnotificationfilledProps = React.ComponentProps<typeof Bellnotificationfilled>
