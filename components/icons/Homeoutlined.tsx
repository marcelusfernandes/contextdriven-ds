import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HomeOutlined.svg'

/**
 * Homeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Homeoutlined />
 * <Homeoutlined width="$6" height="$6" />
 * <Homeoutlined color="$color.primary" />
 * ```
 */
export const Homeoutlined = styled(Svg, {
  name: 'Homeoutlined',
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

export type HomeoutlinedProps = React.ComponentProps<typeof Homeoutlined>
