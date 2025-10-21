import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReceiptOutlined.svg'

/**
 * Receiptoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Receiptoutlined />
 * <Receiptoutlined width="$6" height="$6" />
 * <Receiptoutlined color="$color.primary" />
 * ```
 */
export const Receiptoutlined = styled(Svg, {
  name: 'Receiptoutlined',
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

export type ReceiptoutlinedProps = React.ComponentProps<typeof Receiptoutlined>
