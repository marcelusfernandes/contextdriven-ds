import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BankOutlined.svg'

/**
 * Bankoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Bankoutlined />
 * <Bankoutlined width="$6" height="$6" />
 * <Bankoutlined color="$color.primary" />
 * ```
 */
export const Bankoutlined = styled(Svg, {
  name: 'Bankoutlined',
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

export type BankoutlinedProps = React.ComponentProps<typeof Bankoutlined>
