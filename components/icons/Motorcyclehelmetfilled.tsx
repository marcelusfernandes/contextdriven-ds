import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MotorcycleHelmetFilled.svg'

/**
 * Motorcyclehelmetfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Motorcyclehelmetfilled />
 * <Motorcyclehelmetfilled width="$6" height="$6" />
 * <Motorcyclehelmetfilled color="$color.primary" />
 * ```
 */
export const Motorcyclehelmetfilled = styled(Svg, {
  name: 'Motorcyclehelmetfilled',
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

export type MotorcyclehelmetfilledProps = React.ComponentProps<typeof Motorcyclehelmetfilled>
