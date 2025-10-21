import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallOffFilled.svg'

/**
 * Callofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Callofffilled />
 * <Callofffilled width="$6" height="$6" />
 * <Callofffilled color="$color.primary" />
 * ```
 */
export const Callofffilled = styled(Svg, {
  name: 'Callofffilled',
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

export type CallofffilledProps = React.ComponentProps<typeof Callofffilled>
