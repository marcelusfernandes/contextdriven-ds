import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowOpenOutlined.svg'

/**
 * Arrowopenoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowopenoutlined />
 * <Arrowopenoutlined width="$6" height="$6" />
 * <Arrowopenoutlined color="$color.primary" />
 * ```
 */
export const Arrowopenoutlined = styled(Svg, {
  name: 'Arrowopenoutlined',
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

export type ArrowopenoutlinedProps = React.ComponentProps<typeof Arrowopenoutlined>
