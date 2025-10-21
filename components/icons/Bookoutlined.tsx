import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookOutlined.svg'

/**
 * Bookoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Bookoutlined />
 * <Bookoutlined width="$6" height="$6" />
 * <Bookoutlined color="$color.primary" />
 * ```
 */
export const Bookoutlined = styled(Svg, {
  name: 'Bookoutlined',
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

export type BookoutlinedProps = React.ComponentProps<typeof Bookoutlined>
