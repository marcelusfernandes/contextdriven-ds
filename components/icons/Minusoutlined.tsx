import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MinusOutlined.svg'

/**
 * Minusoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Minusoutlined />
 * <Minusoutlined width="$6" height="$6" />
 * <Minusoutlined color="$color.primary" />
 * ```
 */
export const Minusoutlined = styled(Svg, {
  name: 'Minusoutlined',
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

export type MinusoutlinedProps = React.ComponentProps<typeof Minusoutlined>
