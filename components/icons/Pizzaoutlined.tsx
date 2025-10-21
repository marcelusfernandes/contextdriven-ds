import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PizzaOutlined.svg'

/**
 * Pizzaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Pizzaoutlined />
 * <Pizzaoutlined width="$6" height="$6" />
 * <Pizzaoutlined color="$color.primary" />
 * ```
 */
export const Pizzaoutlined = styled(Svg, {
  name: 'Pizzaoutlined',
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

export type PizzaoutlinedProps = React.ComponentProps<typeof Pizzaoutlined>
