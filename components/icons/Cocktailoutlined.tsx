import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CocktailOutlined.svg'

/**
 * Cocktailoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Cocktailoutlined />
 * <Cocktailoutlined width="$6" height="$6" />
 * <Cocktailoutlined color="$color.primary" />
 * ```
 */
export const Cocktailoutlined = styled(Svg, {
  name: 'Cocktailoutlined',
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

export type CocktailoutlinedProps = React.ComponentProps<typeof Cocktailoutlined>
