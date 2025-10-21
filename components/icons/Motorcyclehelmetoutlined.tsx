import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MotorcycleHelmetOutlined.svg'

/**
 * Motorcyclehelmetoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Motorcyclehelmetoutlined />
 * <Motorcyclehelmetoutlined width="$6" height="$6" />
 * <Motorcyclehelmetoutlined color="$color.primary" />
 * ```
 */
export const Motorcyclehelmetoutlined = styled(Svg, {
  name: 'Motorcyclehelmetoutlined',
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

export type MotorcyclehelmetoutlinedProps = React.ComponentProps<typeof Motorcyclehelmetoutlined>
