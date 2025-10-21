import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayOffOutlined.svg'

/**
 * Rayoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Rayoffoutlined />
 * <Rayoffoutlined width="$6" height="$6" />
 * <Rayoffoutlined color="$color.primary" />
 * ```
 */
export const Rayoffoutlined = styled(Svg, {
  name: 'Rayoffoutlined',
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

export type RayoffoutlinedProps = React.ComponentProps<typeof Rayoffoutlined>
