import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleTruck ErrorOutlined.svg'

/**
 * VehicletruckErroroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <VehicletruckErroroutlined />
 * <VehicletruckErroroutlined width="$6" height="$6" />
 * <VehicletruckErroroutlined color="$color.primary" />
 * ```
 */
export const VehicletruckErroroutlined = styled(Svg, {
  name: 'VehicletruckErroroutlined',
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

export type VehicletruckErroroutlinedProps = React.ComponentProps<typeof VehicletruckErroroutlined>
