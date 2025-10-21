import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoffeeFilled.svg'

/**
 * Coffeefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Coffeefilled />
 * <Coffeefilled width="$6" height="$6" />
 * <Coffeefilled color="$color.primary" />
 * ```
 */
export const Coffeefilled = styled(Svg, {
  name: 'Coffeefilled',
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

export type CoffeefilledProps = React.ComponentProps<typeof Coffeefilled>
