import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayOffFilled.svg'

/**
 * Rayofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Rayofffilled />
 * <Rayofffilled width="$6" height="$6" />
 * <Rayofffilled color="$color.primary" />
 * ```
 */
export const Rayofffilled = styled(Svg, {
  name: 'Rayofffilled',
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

export type RayofffilledProps = React.ComponentProps<typeof Rayofffilled>
