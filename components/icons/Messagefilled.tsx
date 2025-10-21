import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageFilled.svg'

/**
 * Messagefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Messagefilled />
 * <Messagefilled width="$6" height="$6" />
 * <Messagefilled color="$color.primary" />
 * ```
 */
export const Messagefilled = styled(Svg, {
  name: 'Messagefilled',
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

export type MessagefilledProps = React.ComponentProps<typeof Messagefilled>
