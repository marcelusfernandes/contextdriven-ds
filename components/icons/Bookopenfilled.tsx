import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookOpenFilled.svg'

/**
 * Bookopenfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bookopenfilled />
 * <Bookopenfilled width="$6" height="$6" />
 * <Bookopenfilled color="$color.primary" />
 * ```
 */
export const Bookopenfilled = styled(Svg, {
  name: 'Bookopenfilled',
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

export type BookopenfilledProps = React.ComponentProps<typeof Bookopenfilled>
