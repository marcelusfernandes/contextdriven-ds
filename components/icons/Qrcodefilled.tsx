import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/QRCodeFilled.svg'

/**
 * Qrcodefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Qrcodefilled />
 * <Qrcodefilled width="$6" height="$6" />
 * <Qrcodefilled color="$color.primary" />
 * ```
 */
export const Qrcodefilled = styled(Svg, {
  name: 'Qrcodefilled',
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

export type QrcodefilledProps = React.ComponentProps<typeof Qrcodefilled>
