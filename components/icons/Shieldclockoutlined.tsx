import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldClockOutlined.svg'

/**
 * Shieldclockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldclockoutlined />
 * <Shieldclockoutlined width="$6" height="$6" />
 * <Shieldclockoutlined color="$color.primary" />
 * ```
 */
export const Shieldclockoutlined = styled(Svg, {
  name: 'Shieldclockoutlined',
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

export type ShieldclockoutlinedProps = React.ComponentProps<typeof Shieldclockoutlined>
