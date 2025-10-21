import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClockFastOutlined.svg'

/**
 * Clockfastoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Clockfastoutlined />
 * <Clockfastoutlined width="$6" height="$6" />
 * <Clockfastoutlined color="$color.primary" />
 * ```
 */
export const Clockfastoutlined = styled(Svg, {
  name: 'Clockfastoutlined',
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

export type ClockfastoutlinedProps = React.ComponentProps<typeof Clockfastoutlined>
