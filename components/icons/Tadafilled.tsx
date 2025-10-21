import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TaDaFilled.svg'

/**
 * Tadafilled Icon Component
 * 
 * @example
 * ```tsx
 * <Tadafilled />
 * <Tadafilled width="$6" height="$6" />
 * <Tadafilled color="$color.primary" />
 * ```
 */
export const Tadafilled = styled(Svg, {
  name: 'Tadafilled',
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

export type TadafilledProps = React.ComponentProps<typeof Tadafilled>
