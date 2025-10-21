import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ImageOffOutlined.svg'

/**
 * Imageoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Imageoffoutlined />
 * <Imageoffoutlined width="$6" height="$6" />
 * <Imageoffoutlined color="$color.primary" />
 * ```
 */
export const Imageoffoutlined = styled(Svg, {
  name: 'Imageoffoutlined',
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

export type ImageoffoutlinedProps = React.ComponentProps<typeof Imageoffoutlined>
