import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DismissCircleOutlined.svg'

/**
 * Dismisscircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Dismisscircleoutlined />
 * <Dismisscircleoutlined width="$6" height="$6" />
 * <Dismisscircleoutlined color="$color.primary" />
 * ```
 */
export const Dismisscircleoutlined = styled(Svg, {
  name: 'Dismisscircleoutlined',
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

export type DismisscircleoutlinedProps = React.ComponentProps<typeof Dismisscircleoutlined>
