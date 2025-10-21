import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SparklingFilled.svg'

/**
 * Sparklingfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Sparklingfilled />
 * <Sparklingfilled width="$6" height="$6" />
 * <Sparklingfilled color="$color.primary" />
 * ```
 */
export const Sparklingfilled = styled(Svg, {
  name: 'Sparklingfilled',
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

export type SparklingfilledProps = React.ComponentProps<typeof Sparklingfilled>
