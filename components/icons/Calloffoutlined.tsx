import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallOffOutlined.svg'

/**
 * Calloffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calloffoutlined />
 * <Calloffoutlined width="$6" height="$6" />
 * <Calloffoutlined color="$color.primary" />
 * ```
 */
export const Calloffoutlined = styled(Svg, {
  name: 'Calloffoutlined',
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

export type CalloffoutlinedProps = React.ComponentProps<typeof Calloffoutlined>
