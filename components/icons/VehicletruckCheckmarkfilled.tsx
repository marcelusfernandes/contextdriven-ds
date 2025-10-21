import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck CheckmarkFilled.svg'

/**
 * VehicletruckCheckmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckCheckmarkfilled />
 * <VehicletruckCheckmarkfilled width="$6" height="$6" />
 * <VehicletruckCheckmarkfilled color="$color.primary" />
 * ```
 */
export const VehicletruckCheckmarkfilled = styled(Svg, {
  name: 'VehicletruckCheckmarkfilled',
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

export type VehicletruckCheckmarkfilledProps = React.ComponentProps<typeof VehicletruckCheckmarkfilled>
