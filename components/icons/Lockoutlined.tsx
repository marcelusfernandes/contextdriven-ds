import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LockOutlined.svg'

/**
 * Lockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Lockoutlined />
 * <Lockoutlined width="$6" height="$6" />
 * <Lockoutlined color="$color.primary" />
 * ```
 */
export const Lockoutlined = styled(Svg, {
  name: 'Lockoutlined',
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

export type LockoutlinedProps = React.ComponentProps<typeof Lockoutlined>
