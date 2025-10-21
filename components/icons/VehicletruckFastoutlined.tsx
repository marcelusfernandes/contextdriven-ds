import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck FastOutlined.svg'

/**
 * VehicletruckFastoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckFastoutlined />
 * <VehicletruckFastoutlined width="$6" height="$6" />
 * <VehicletruckFastoutlined color="$color.primary" />
 * ```
 */
export const VehicletruckFastoutlined = styled(Svg, {
  name: 'VehicletruckFastoutlined',
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

export type VehicletruckFastoutlinedProps = React.ComponentProps<typeof VehicletruckFastoutlined>
