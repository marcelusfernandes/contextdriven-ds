import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Wi-FiOffFilled.svg'

/**
 * WiFiofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <WiFiofffilled />
 * <WiFiofffilled width="$6" height="$6" />
 * <WiFiofffilled color="$color.primary" />
 * ```
 */
export const WiFiofffilled = styled(Svg, {
  name: 'WiFiofffilled',
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

export type WiFiofffilledProps = React.ComponentProps<typeof WiFiofffilled>
