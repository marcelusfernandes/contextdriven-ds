import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TeaFilled.svg'

/**
 * Teafilled Icon Component
 * 
 * @example
 * ```tsx
 * <Teafilled />
 * <Teafilled width="$6" height="$6" />
 * <Teafilled color="$color.primary" />
 * ```
 */
export const Teafilled = styled(Svg, {
  name: 'Teafilled',
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

export type TeafilledProps = React.ComponentProps<typeof Teafilled>
