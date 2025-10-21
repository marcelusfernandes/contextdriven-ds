import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowMaximizeOutlined.svg'

/**
 * Arrowmaximizeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowmaximizeoutlined />
 * <Arrowmaximizeoutlined width="$6" height="$6" />
 * <Arrowmaximizeoutlined color="$color.primary" />
 * ```
 */
export const Arrowmaximizeoutlined = styled(Svg, {
  name: 'Arrowmaximizeoutlined',
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

export type ArrowmaximizeoutlinedProps = React.ComponentProps<typeof Arrowmaximizeoutlined>
