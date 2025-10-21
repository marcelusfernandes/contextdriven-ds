import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PinFilled.svg'

/**
 * Pinfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Pinfilled />
 * <Pinfilled width="$6" height="$6" />
 * <Pinfilled color="$color.primary" />
 * ```
 */
export const Pinfilled = styled(Svg, {
  name: 'Pinfilled',
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

export type PinfilledProps = React.ComponentProps<typeof Pinfilled>
