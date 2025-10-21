import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookFilled.svg'

/**
 * Bookfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bookfilled />
 * <Bookfilled width="$6" height="$6" />
 * <Bookfilled color="$color.primary" />
 * ```
 */
export const Bookfilled = styled(Svg, {
  name: 'Bookfilled',
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

export type BookfilledProps = React.ComponentProps<typeof Bookfilled>
