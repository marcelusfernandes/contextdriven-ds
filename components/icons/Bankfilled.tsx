import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BankFilled.svg'

/**
 * Bankfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bankfilled />
 * <Bankfilled width="$6" height="$6" />
 * <Bankfilled color="$color.primary" />
 * ```
 */
export const Bankfilled = styled(Svg, {
  name: 'Bankfilled',
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

export type BankfilledProps = React.ComponentProps<typeof Bankfilled>
