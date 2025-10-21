import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataHistogramFilled.svg'

/**
 * Datahistogramfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Datahistogramfilled />
 * <Datahistogramfilled width="$6" height="$6" />
 * <Datahistogramfilled color="$color.primary" />
 * ```
 */
export const Datahistogramfilled = styled(Svg, {
  name: 'Datahistogramfilled',
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

export type DatahistogramfilledProps = React.ComponentProps<typeof Datahistogramfilled>
