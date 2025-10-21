import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CreditCardOutlined.svg'

/**
 * Creditcardoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Creditcardoutlined />
 * <Creditcardoutlined width="$6" height="$6" />
 * <Creditcardoutlined color="$color.primary" />
 * ```
 */
export const Creditcardoutlined = styled(Svg, {
  name: 'Creditcardoutlined',
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

export type CreditcardoutlinedProps = React.ComponentProps<typeof Creditcardoutlined>
