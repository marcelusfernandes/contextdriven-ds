import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoneyOutlined.svg'

/**
 * Moneyoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Moneyoutlined />
 * <Moneyoutlined width="$6" height="$6" />
 * <Moneyoutlined color="$color.primary" />
 * ```
 */
export const Moneyoutlined = styled(Svg, {
  name: 'Moneyoutlined',
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

export type MoneyoutlinedProps = React.ComponentProps<typeof Moneyoutlined>
