import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThermometerMediumOutlined.svg'

/**
 * Thermometermediumoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Thermometermediumoutlined />
 * <Thermometermediumoutlined width="$6" height="$6" />
 * <Thermometermediumoutlined color="$color.primary" />
 * ```
 */
export const Thermometermediumoutlined = styled(Svg, {
  name: 'Thermometermediumoutlined',
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

export type ThermometermediumoutlinedProps = React.ComponentProps<typeof Thermometermediumoutlined>
