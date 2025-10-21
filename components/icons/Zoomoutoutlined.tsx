import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZoomOutOutlined.svg'

/**
 * Zoomoutoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Zoomoutoutlined />
 * <Zoomoutoutlined width="$6" height="$6" />
 * <Zoomoutoutlined color="$color.primary" />
 * ```
 */
export const Zoomoutoutlined = styled(Svg, {
  name: 'Zoomoutoutlined',
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

export type ZoomoutoutlinedProps = React.ComponentProps<typeof Zoomoutoutlined>
