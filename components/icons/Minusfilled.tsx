import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MinusFilled.svg'

/**
 * Minusfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Minusfilled />
 * <Minusfilled width="$6" height="$6" />
 * <Minusfilled color="$color.primary" />
 * ```
 */
export const Minusfilled = styled(Svg, {
  name: 'Minusfilled',
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

export type MinusfilledProps = React.ComponentProps<typeof Minusfilled>
