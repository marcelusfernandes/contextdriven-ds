import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck ErrorFilled.svg'

/**
 * VehicletruckErrorfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckErrorfilled />
 * <VehicletruckErrorfilled width="$6" height="$6" />
 * <VehicletruckErrorfilled color="$color.primary" />
 * ```
 */
export const VehicletruckErrorfilled = styled(Svg, {
  name: 'VehicletruckErrorfilled',
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

export type VehicletruckErrorfilledProps = React.ComponentProps<typeof VehicletruckErrorfilled>
