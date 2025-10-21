import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleMotorcycleOutlined.svg'

/**
 * Vehiclemotorcycleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Vehiclemotorcycleoutlined />
 * <Vehiclemotorcycleoutlined width="$6" height="$6" />
 * <Vehiclemotorcycleoutlined color="$color.primary" />
 * ```
 */
export const Vehiclemotorcycleoutlined = styled(Svg, {
  name: 'Vehiclemotorcycleoutlined',
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

export type VehiclemotorcycleoutlinedProps = React.ComponentProps<typeof Vehiclemotorcycleoutlined>
