import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarOutlined.svg'

/**
 * Staroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Staroutlined />
 * <Staroutlined width="$6" height="$6" />
 * <Staroutlined color="$color.primary" />
 * ```
 */
export const Staroutlined = styled(Svg, {
  name: 'Staroutlined',
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

export type StaroutlinedProps = React.ComponentProps<typeof Staroutlined>
