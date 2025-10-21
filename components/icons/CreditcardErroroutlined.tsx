import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CreditCard ErrorOutlined.svg'

/**
 * CreditcardErroroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <CreditcardErroroutlined />
 * <CreditcardErroroutlined width="$6" height="$6" />
 * <CreditcardErroroutlined color="$color.primary" />
 * ```
 */
export const CreditcardErroroutlined = styled(Svg, {
  name: 'CreditcardErroroutlined',
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

export type CreditcardErroroutlinedProps = React.ComponentProps<typeof CreditcardErroroutlined>
