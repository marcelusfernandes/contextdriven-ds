import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReceiptFilled.svg'

/**
 * Receiptfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Receiptfilled />
 * <Receiptfilled width="$6" height="$6" />
 * <Receiptfilled color="$color.primary" />
 * ```
 */
export const Receiptfilled = styled(Svg, {
  name: 'Receiptfilled',
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

export type ReceiptfilledProps = React.ComponentProps<typeof Receiptfilled>
