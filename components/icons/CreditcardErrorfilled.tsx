import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CreditCard ErrorFilled.svg'

/**
 * CreditcardErrorfilled Icon Component
 * 
 * @example
 * ```tsx
 * <CreditcardErrorfilled />
 * <CreditcardErrorfilled width="$6" height="$6" />
 * <CreditcardErrorfilled color="$color.primary" />
 * ```
 */
export const CreditcardErrorfilled = styled(Svg, {
  name: 'CreditcardErrorfilled',
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

export type CreditcardErrorfilledProps = React.ComponentProps<typeof CreditcardErrorfilled>
