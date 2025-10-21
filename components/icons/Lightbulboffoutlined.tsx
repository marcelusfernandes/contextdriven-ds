import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbOffOutlined.svg'

/**
 * Lightbulboffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulboffoutlined />
 * <Lightbulboffoutlined width="$6" height="$6" />
 * <Lightbulboffoutlined color="$color.primary" />
 * ```
 */
export const Lightbulboffoutlined = styled(Svg, {
  name: 'Lightbulboffoutlined',
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

export type LightbulboffoutlinedProps = React.ComponentProps<typeof Lightbulboffoutlined>
