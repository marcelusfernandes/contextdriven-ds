import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldLockOutlined.svg'

/**
 * Shieldlockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldlockoutlined />
 * <Shieldlockoutlined width="$6" height="$6" />
 * <Shieldlockoutlined color="$color.primary" />
 * ```
 */
export const Shieldlockoutlined = styled(Svg, {
  name: 'Shieldlockoutlined',
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

export type ShieldlockoutlinedProps = React.ComponentProps<typeof Shieldlockoutlined>
