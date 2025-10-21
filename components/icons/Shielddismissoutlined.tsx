import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldDismissOutlined.svg'

/**
 * Shielddismissoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shielddismissoutlined />
 * <Shielddismissoutlined width="$6" height="$6" />
 * <Shielddismissoutlined color="$color.primary" />
 * ```
 */
export const Shielddismissoutlined = styled(Svg, {
  name: 'Shielddismissoutlined',
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

export type ShielddismissoutlinedProps = React.ComponentProps<typeof Shielddismissoutlined>
