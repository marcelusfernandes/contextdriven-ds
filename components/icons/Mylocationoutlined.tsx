import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MyLocationOutlined.svg'

/**
 * Mylocationoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Mylocationoutlined />
 * <Mylocationoutlined width="$6" height="$6" />
 * <Mylocationoutlined color="$color.primary" />
 * ```
 */
export const Mylocationoutlined = styled(Svg, {
  name: 'Mylocationoutlined',
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

export type MylocationoutlinedProps = React.ComponentProps<typeof Mylocationoutlined>
