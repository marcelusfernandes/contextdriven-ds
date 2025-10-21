import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageCheckmarkFilled.svg'

/**
 * Messagecheckmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Messagecheckmarkfilled />
 * <Messagecheckmarkfilled width="$6" height="$6" />
 * <Messagecheckmarkfilled color="$color.primary" />
 * ```
 */
export const Messagecheckmarkfilled = styled(Svg, {
  name: 'Messagecheckmarkfilled',
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

export type MessagecheckmarkfilledProps = React.ComponentProps<typeof Messagecheckmarkfilled>
