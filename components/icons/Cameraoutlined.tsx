import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CameraOutlined.svg'

/**
 * Cameraoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Cameraoutlined />
 * <Cameraoutlined width="$6" height="$6" />
 * <Cameraoutlined color="$color.primary" />
 * ```
 */
export const Cameraoutlined = styled(Svg, {
  name: 'Cameraoutlined',
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

export type CameraoutlinedProps = React.ComponentProps<typeof Cameraoutlined>
