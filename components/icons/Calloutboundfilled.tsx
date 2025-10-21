import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallOutboundFilled.svg'

/**
 * Calloutboundfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Calloutboundfilled />
 * <Calloutboundfilled width="$6" height="$6" />
 * <Calloutboundfilled color="$color.primary" />
 * ```
 */
export const Calloutboundfilled = styled(Svg, {
  name: 'Calloutboundfilled',
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

export type CalloutboundfilledProps = React.ComponentProps<typeof Calloutboundfilled>
