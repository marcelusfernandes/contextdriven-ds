import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/GlobeOutlined.svg'

/**
 * Globeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Globeoutlined />
 * <Globeoutlined width="$6" height="$6" />
 * <Globeoutlined color="$color.primary" />
 * ```
 */
export const Globeoutlined = styled(Svg, {
  name: 'Globeoutlined',
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

export type GlobeoutlinedProps = React.ComponentProps<typeof Globeoutlined>
