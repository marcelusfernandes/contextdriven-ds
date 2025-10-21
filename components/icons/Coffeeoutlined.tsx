import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoffeeOutlined.svg'

/**
 * Coffeeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Coffeeoutlined />
 * <Coffeeoutlined width="$6" height="$6" />
 * <Coffeeoutlined color="$color.primary" />
 * ```
 */
export const Coffeeoutlined = styled(Svg, {
  name: 'Coffeeoutlined',
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

export type CoffeeoutlinedProps = React.ComponentProps<typeof Coffeeoutlined>
