import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BellFilled.svg'

/**
 * Bellfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bellfilled />
 * <Bellfilled width="$6" height="$6" />
 * <Bellfilled color="$color.primary" />
 * ```
 */
export const Bellfilled = styled(Svg, {
  name: 'Bellfilled',
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

export type BellfilledProps = React.ComponentProps<typeof Bellfilled>
