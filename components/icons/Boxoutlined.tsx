import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxOutlined.svg'

/**
 * Boxoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Boxoutlined />
 * <Boxoutlined width="$6" height="$6" />
 * <Boxoutlined color="$color.primary" />
 * ```
 */
export const Boxoutlined = styled(Svg, {
  name: 'Boxoutlined',
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

export type BoxoutlinedProps = React.ComponentProps<typeof Boxoutlined>
