import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck ClockOutlined.svg'

/**
 * VehicletruckClockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckClockoutlined />
 * <VehicletruckClockoutlined width="$6" height="$6" />
 * <VehicletruckClockoutlined color="$color.primary" />
 * ```
 */
export const VehicletruckClockoutlined = styled(Svg, {
  name: 'VehicletruckClockoutlined',
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

export type VehicletruckClockoutlinedProps = React.ComponentProps<typeof VehicletruckClockoutlined>
