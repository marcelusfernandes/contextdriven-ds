import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WhatsAppOutlined.svg'

/**
 * Whatsappoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Whatsappoutlined />
 * <Whatsappoutlined width="$6" height="$6" />
 * <Whatsappoutlined color="$color.primary" />
 * ```
 */
export const Whatsappoutlined = styled(Svg, {
  name: 'Whatsappoutlined',
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

export type WhatsappoutlinedProps = React.ComponentProps<typeof Whatsappoutlined>
