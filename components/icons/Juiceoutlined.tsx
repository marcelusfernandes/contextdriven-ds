import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/JuiceOutlined.svg'

/**
 * Juiceoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Juiceoutlined />
 * <Juiceoutlined width="$6" height="$6" />
 * <Juiceoutlined color="$color.primary" />
 * ```
 */
export const Juiceoutlined = styled(Svg, {
  name: 'Juiceoutlined',
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

export type JuiceoutlinedProps = React.ComponentProps<typeof Juiceoutlined>
