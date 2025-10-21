import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PinOutlined.svg'

/**
 * Pinoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Pinoutlined />
 * <Pinoutlined width="$6" height="$6" />
 * <Pinoutlined color="$color.primary" />
 * ```
 */
export const Pinoutlined = styled(Svg, {
  name: 'Pinoutlined',
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

export type PinoutlinedProps = React.ComponentProps<typeof Pinoutlined>
