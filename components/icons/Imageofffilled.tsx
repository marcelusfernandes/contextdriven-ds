import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ImageOffFilled.svg'

/**
 * Imageofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Imageofffilled />
 * <Imageofffilled width="$6" height="$6" />
 * <Imageofffilled color="$color.primary" />
 * ```
 */
export const Imageofffilled = styled(Svg, {
  name: 'Imageofffilled',
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

export type ImageofffilledProps = React.ComponentProps<typeof Imageofffilled>
