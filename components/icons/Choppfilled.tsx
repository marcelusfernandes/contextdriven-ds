import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChoppFilled.svg'

/**
 * Choppfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Choppfilled />
 * <Choppfilled width="$6" height="$6" />
 * <Choppfilled color="$color.primary" />
 * ```
 */
export const Choppfilled = styled(Svg, {
  name: 'Choppfilled',
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

export type ChoppfilledProps = React.ComponentProps<typeof Choppfilled>
