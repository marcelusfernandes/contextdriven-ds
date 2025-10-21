import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ImageOutlined.svg'

/**
 * Imageoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Imageoutlined />
 * <Imageoutlined width="$6" height="$6" />
 * <Imageoutlined color="$color.primary" />
 * ```
 */
export const Imageoutlined = styled(Svg, {
  name: 'Imageoutlined',
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

export type ImageoutlinedProps = React.ComponentProps<typeof Imageoutlined>
