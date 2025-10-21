import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThumbUpOutlined.svg'

/**
 * Thumbupoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Thumbupoutlined />
 * <Thumbupoutlined width="$6" height="$6" />
 * <Thumbupoutlined color="$color.primary" />
 * ```
 */
export const Thumbupoutlined = styled(Svg, {
  name: 'Thumbupoutlined',
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

export type ThumbupoutlinedProps = React.ComponentProps<typeof Thumbupoutlined>
