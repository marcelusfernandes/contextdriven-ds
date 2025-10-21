import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck FastFilled.svg'

/**
 * VehicletruckFastfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckFastfilled />
 * <VehicletruckFastfilled width="$6" height="$6" />
 * <VehicletruckFastfilled color="$color.primary" />
 * ```
 */
export const VehicletruckFastfilled = styled(Svg, {
  name: 'VehicletruckFastfilled',
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

export type VehicletruckFastfilledProps = React.ComponentProps<typeof VehicletruckFastfilled>
