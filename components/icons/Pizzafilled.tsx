import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PizzaFilled.svg'

/**
 * Pizzafilled Icon Component
 * 
 * @example
 * ```tsx
 * <Pizzafilled />
 * <Pizzafilled width="$6" height="$6" />
 * <Pizzafilled color="$color.primary" />
 * ```
 */
export const Pizzafilled = styled(Svg, {
  name: 'Pizzafilled',
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

export type PizzafilledProps = React.ComponentProps<typeof Pizzafilled>
