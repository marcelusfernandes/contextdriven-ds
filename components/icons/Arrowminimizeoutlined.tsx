import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowMinimizeOutlined.svg'

/**
 * Arrowminimizeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowminimizeoutlined />
 * <Arrowminimizeoutlined width="$6" height="$6" />
 * <Arrowminimizeoutlined color="$color.primary" />
 * ```
 */
export const Arrowminimizeoutlined = styled(Svg, {
  name: 'Arrowminimizeoutlined',
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

export type ArrowminimizeoutlinedProps = React.ComponentProps<typeof Arrowminimizeoutlined>
