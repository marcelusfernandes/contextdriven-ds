import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WarningTriangleOutlined.svg'

/**
 * Warningtriangleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Warningtriangleoutlined />
 * <Warningtriangleoutlined width="$6" height="$6" />
 * <Warningtriangleoutlined color="$color.primary" />
 * ```
 */
export const Warningtriangleoutlined = styled(Svg, {
  name: 'Warningtriangleoutlined',
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

export type WarningtriangleoutlinedProps = React.ComponentProps<typeof Warningtriangleoutlined>
