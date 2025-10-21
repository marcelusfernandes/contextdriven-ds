import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TeaOutlined.svg'

/**
 * Teaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Teaoutlined />
 * <Teaoutlined width="$6" height="$6" />
 * <Teaoutlined color="$color.primary" />
 * ```
 */
export const Teaoutlined = styled(Svg, {
  name: 'Teaoutlined',
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

export type TeaoutlinedProps = React.ComponentProps<typeof Teaoutlined>
