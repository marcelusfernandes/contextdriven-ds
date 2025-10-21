import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SendOutlined.svg'

/**
 * Sendoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Sendoutlined />
 * <Sendoutlined width="$6" height="$6" />
 * <Sendoutlined color="$color.primary" />
 * ```
 */
export const Sendoutlined = styled(Svg, {
  name: 'Sendoutlined',
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

export type SendoutlinedProps = React.ComponentProps<typeof Sendoutlined>
