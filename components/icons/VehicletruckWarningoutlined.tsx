import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck WarningOutlined.svg'

/**
 * VehicletruckWarningoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckWarningoutlined />
 * <VehicletruckWarningoutlined width="$6" height="$6" />
 * <VehicletruckWarningoutlined color="$color.primary" />
 * ```
 */
export const VehicletruckWarningoutlined = styled(Svg, {
  name: 'VehicletruckWarningoutlined',
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

export type VehicletruckWarningoutlinedProps = React.ComponentProps<typeof VehicletruckWarningoutlined>
