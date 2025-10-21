import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/QRCodeOutlined.svg'

/**
 * Qrcodeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Qrcodeoutlined />
 * <Qrcodeoutlined width="$6" height="$6" />
 * <Qrcodeoutlined color="$color.primary" />
 * ```
 */
export const Qrcodeoutlined = styled(Svg, {
  name: 'Qrcodeoutlined',
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

export type QrcodeoutlinedProps = React.ComponentProps<typeof Qrcodeoutlined>
