import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayCircleOutlined.svg'

/**
 * Raycircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Raycircleoutlined />
 * <Raycircleoutlined width="$6" height="$6" />
 * <Raycircleoutlined color="$color.primary" />
 * ```
 */
export const Raycircleoutlined = styled(Svg, {
  name: 'Raycircleoutlined',
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

export type RaycircleoutlinedProps = React.ComponentProps<typeof Raycircleoutlined>
