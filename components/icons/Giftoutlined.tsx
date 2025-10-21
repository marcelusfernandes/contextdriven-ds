import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/GiftOutlined.svg'

/**
 * Giftoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Giftoutlined />
 * <Giftoutlined width="$6" height="$6" />
 * <Giftoutlined color="$color.primary" />
 * ```
 */
export const Giftoutlined = styled(Svg, {
  name: 'Giftoutlined',
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

export type GiftoutlinedProps = React.ComponentProps<typeof Giftoutlined>
