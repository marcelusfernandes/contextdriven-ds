import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck RayFilled.svg'

/**
 * VehicletruckRayfilled Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckRayfilled />
 * <VehicletruckRayfilled width="$6" height="$6" />
 * <VehicletruckRayfilled color="$color.primary" />
 * ```
 */
export const VehicletruckRayfilled = styled(Svg, {
  name: 'VehicletruckRayfilled',
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

export type VehicletruckRayfilledProps = React.ComponentProps<typeof VehicletruckRayfilled>
