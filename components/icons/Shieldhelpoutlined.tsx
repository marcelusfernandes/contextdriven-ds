import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldHelpOutlined.svg'

/**
 * Shieldhelpoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldhelpoutlined />
 * <Shieldhelpoutlined width="$6" height="$6" />
 * <Shieldhelpoutlined color="$color.primary" />
 * ```
 */
export const Shieldhelpoutlined = styled(Svg, {
  name: 'Shieldhelpoutlined',
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

export type ShieldhelpoutlinedProps = React.ComponentProps<typeof Shieldhelpoutlined>
