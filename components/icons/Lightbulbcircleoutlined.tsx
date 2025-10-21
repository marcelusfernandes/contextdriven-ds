import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbCircleOutlined.svg'

/**
 * Lightbulbcircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbcircleoutlined />
 * <Lightbulbcircleoutlined width="$6" height="$6" />
 * <Lightbulbcircleoutlined color="$color.primary" />
 * ```
 */
export const Lightbulbcircleoutlined = styled(Svg, {
  name: 'Lightbulbcircleoutlined',
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

export type LightbulbcircleoutlinedProps = React.ComponentProps<typeof Lightbulbcircleoutlined>
