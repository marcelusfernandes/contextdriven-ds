import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldOutlined.svg'

/**
 * Shieldoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldoutlined />
 * <Shieldoutlined width="$6" height="$6" />
 * <Shieldoutlined color="$color.primary" />
 * ```
 */
export const Shieldoutlined = styled(Svg, {
  name: 'Shieldoutlined',
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

export type ShieldoutlinedProps = React.ComponentProps<typeof Shieldoutlined>
