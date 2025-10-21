import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarTaDaFilled.svg'

/**
 * Startadafilled Icon Component
 * 
 * @example
 * ```tsx
 * <Startadafilled />
 * <Startadafilled width="$6" height="$6" />
 * <Startadafilled color="$color.primary" />
 * ```
 */
export const Startadafilled = styled(Svg, {
  name: 'Startadafilled',
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

export type StartadafilledProps = React.ComponentProps<typeof Startadafilled>
