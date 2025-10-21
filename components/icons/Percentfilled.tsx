import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PercentFilled.svg'

/**
 * Percentfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Percentfilled />
 * <Percentfilled width="$6" height="$6" />
 * <Percentfilled color="$color.primary" />
 * ```
 */
export const Percentfilled = styled(Svg, {
  name: 'Percentfilled',
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

export type PercentfilledProps = React.ComponentProps<typeof Percentfilled>
