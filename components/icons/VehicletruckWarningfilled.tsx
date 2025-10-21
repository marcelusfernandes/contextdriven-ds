import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck WarningFilled.svg'

/**
 * VehicletruckWarningfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckWarningfilled />
 * <VehicletruckWarningfilled width="$6" height="$6" />
 * <VehicletruckWarningfilled color="$color.primary" />
 * ```
 */
export const VehicletruckWarningfilled = styled(Svg, {
  name: 'VehicletruckWarningfilled',
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

export type VehicletruckWarningfilledProps = React.ComponentProps<typeof VehicletruckWarningfilled>
