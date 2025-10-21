import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MinusCircleOutlined.svg'

/**
 * Minuscircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Minuscircleoutlined />
 * <Minuscircleoutlined width="$6" height="$6" />
 * <Minuscircleoutlined color="$color.primary" />
 * ```
 */
export const Minuscircleoutlined = styled(Svg, {
  name: 'Minuscircleoutlined',
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

export type MinuscircleoutlinedProps = React.ComponentProps<typeof Minuscircleoutlined>
