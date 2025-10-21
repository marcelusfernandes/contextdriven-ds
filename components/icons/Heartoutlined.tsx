import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HeartOutlined.svg'

/**
 * Heartoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Heartoutlined />
 * <Heartoutlined width="$6" height="$6" />
 * <Heartoutlined color="$color.primary" />
 * ```
 */
export const Heartoutlined = styled(Svg, {
  name: 'Heartoutlined',
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

export type HeartoutlinedProps = React.ComponentProps<typeof Heartoutlined>
