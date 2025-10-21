import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CashbackFilled.svg'

/**
 * Cashbackfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Cashbackfilled />
 * <Cashbackfilled width="$6" height="$6" />
 * <Cashbackfilled color="$color.primary" />
 * ```
 */
export const Cashbackfilled = styled(Svg, {
  name: 'Cashbackfilled',
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

export type CashbackfilledProps = React.ComponentProps<typeof Cashbackfilled>
