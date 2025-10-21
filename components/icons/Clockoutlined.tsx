import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClockOutlined.svg'

/**
 * Clockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Clockoutlined />
 * <Clockoutlined width="$6" height="$6" />
 * <Clockoutlined color="$color.primary" />
 * ```
 */
export const Clockoutlined = styled(Svg, {
  name: 'Clockoutlined',
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

export type ClockoutlinedProps = React.ComponentProps<typeof Clockoutlined>
