import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruckOutlined.svg'

/**
 * Vehicletruckoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Vehicletruckoutlined />
 * <Vehicletruckoutlined width="$6" height="$6" />
 * <Vehicletruckoutlined color="$color.primary" />
 * ```
 */
export const Vehicletruckoutlined = styled(Svg, {
  name: 'Vehicletruckoutlined',
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

export type VehicletruckoutlinedProps = React.ComponentProps<typeof Vehicletruckoutlined>
