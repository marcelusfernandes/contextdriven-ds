import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CashbackOutlined.svg'

/**
 * Cashbackoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Cashbackoutlined />
 * <Cashbackoutlined width="$6" height="$6" />
 * <Cashbackoutlined color="$color.primary" />
 * ```
 */
export const Cashbackoutlined = styled(Svg, {
  name: 'Cashbackoutlined',
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

export type CashbackoutlinedProps = React.ComponentProps<typeof Cashbackoutlined>
