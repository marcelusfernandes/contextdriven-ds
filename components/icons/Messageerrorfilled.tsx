import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageErrorFilled.svg'

/**
 * Messageerrorfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Messageerrorfilled />
 * <Messageerrorfilled width="$6" height="$6" />
 * <Messageerrorfilled color="$color.primary" />
 * ```
 */
export const Messageerrorfilled = styled(Svg, {
  name: 'Messageerrorfilled',
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

export type MessageerrorfilledProps = React.ComponentProps<typeof Messageerrorfilled>
