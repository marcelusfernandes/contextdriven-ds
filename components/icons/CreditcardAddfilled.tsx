import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CreditCard AddFilled.svg'

/**
 * CreditcardAddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <CreditcardAddfilled />
 * <CreditcardAddfilled width="$6" height="$6" />
 * <CreditcardAddfilled color="$color.primary" />
 * ```
 */
export const CreditcardAddfilled = styled(Svg, {
  name: 'CreditcardAddfilled',
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

export type CreditcardAddfilledProps = React.ComponentProps<typeof CreditcardAddfilled>
