import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck ClockFilled.svg'

/**
 * VehicletruckClockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckClockfilled />
 * <VehicletruckClockfilled width="$6" height="$6" />
 * <VehicletruckClockfilled color="$color.primary" />
 * ```
 */
export const VehicletruckClockfilled = styled(Svg, {
  name: 'VehicletruckClockfilled',
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

export type VehicletruckClockfilledProps = React.ComponentProps<typeof VehicletruckClockfilled>
