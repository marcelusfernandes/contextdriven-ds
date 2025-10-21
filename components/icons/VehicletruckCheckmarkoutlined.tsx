import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck CheckmarkOutlined.svg'

/**
 * VehicletruckCheckmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckCheckmarkoutlined />
 * <VehicletruckCheckmarkoutlined width="$6" height="$6" />
 * <VehicletruckCheckmarkoutlined color="$color.primary" />
 * ```
 */
export const VehicletruckCheckmarkoutlined = styled(Svg, {
  name: 'VehicletruckCheckmarkoutlined',
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

export type VehicletruckCheckmarkoutlinedProps = React.ComponentProps<typeof VehicletruckCheckmarkoutlined>
