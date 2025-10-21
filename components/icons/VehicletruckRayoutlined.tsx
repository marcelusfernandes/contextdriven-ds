import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck RayOutlined.svg'

/**
 * VehicletruckRayoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckRayoutlined />
 * <VehicletruckRayoutlined width="$6" height="$6" />
 * <VehicletruckRayoutlined color="$color.primary" />
 * ```
 */
export const VehicletruckRayoutlined = styled(Svg, {
  name: 'VehicletruckRayoutlined',
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

export type VehicletruckRayoutlinedProps = React.ComponentProps<typeof VehicletruckRayoutlined>
