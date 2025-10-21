import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PixFilled.svg'

/**
 * Pixfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Pixfilled />
 * <Pixfilled width="$6" height="$6" />
 * <Pixfilled color="$color.primary" />
 * ```
 */
export const Pixfilled = styled(Svg, {
  name: 'Pixfilled',
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

export type PixfilledProps = React.ComponentProps<typeof Pixfilled>
