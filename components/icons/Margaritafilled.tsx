import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MargaritaFilled.svg'

/**
 * Margaritafilled Icon Component
 * 
 * @example
 * ```tsx
 * <Margaritafilled />
 * <Margaritafilled width="$6" height="$6" />
 * <Margaritafilled color="$color.primary" />
 * ```
 */
export const Margaritafilled = styled(Svg, {
  name: 'Margaritafilled',
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

export type MargaritafilledProps = React.ComponentProps<typeof Margaritafilled>
