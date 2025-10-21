import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PaymentWirelessOutlined.svg'

/**
 * Paymentwirelessoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Paymentwirelessoutlined />
 * <Paymentwirelessoutlined width="$6" height="$6" />
 * <Paymentwirelessoutlined color="$color.primary" />
 * ```
 */
export const Paymentwirelessoutlined = styled(Svg, {
  name: 'Paymentwirelessoutlined',
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

export type PaymentwirelessoutlinedProps = React.ComponentProps<typeof Paymentwirelessoutlined>
