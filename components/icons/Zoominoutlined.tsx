import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZoomInOutlined.svg'

/**
 * Zoominoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Zoominoutlined />
 * <Zoominoutlined width="$6" height="$6" />
 * <Zoominoutlined color="$color.primary" />
 * ```
 */
export const Zoominoutlined = styled(Svg, {
  name: 'Zoominoutlined',
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

export type ZoominoutlinedProps = React.ComponentProps<typeof Zoominoutlined>
