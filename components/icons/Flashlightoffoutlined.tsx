import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightOffOutlined.svg'

/**
 * Flashlightoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightoffoutlined />
 * <Flashlightoffoutlined width="$6" height="$6" />
 * <Flashlightoffoutlined color="$color.primary" />
 * ```
 */
export const Flashlightoffoutlined = styled(Svg, {
  name: 'Flashlightoffoutlined',
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

export type FlashlightoffoutlinedProps = React.ComponentProps<typeof Flashlightoffoutlined>
