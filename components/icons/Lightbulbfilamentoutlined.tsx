import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbFilamentOutlined.svg'

/**
 * Lightbulbfilamentoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbfilamentoutlined />
 * <Lightbulbfilamentoutlined width="$6" height="$6" />
 * <Lightbulbfilamentoutlined color="$color.primary" />
 * ```
 */
export const Lightbulbfilamentoutlined = styled(Svg, {
  name: 'Lightbulbfilamentoutlined',
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

export type LightbulbfilamentoutlinedProps = React.ComponentProps<typeof Lightbulbfilamentoutlined>
