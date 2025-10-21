import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/VehicleMotorcycleFilled.svg'

/**
 * Vehiclemotorcyclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Vehiclemotorcyclefilled />
 * <Vehiclemotorcyclefilled width="$6" height="$6" />
 * <Vehiclemotorcyclefilled color="$color.primary" />
 * ```
 */
export const Vehiclemotorcyclefilled = styled(Svg, {
  name: 'Vehiclemotorcyclefilled',
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

export type VehiclemotorcyclefilledProps = React.ComponentProps<typeof Vehiclemotorcyclefilled>
