import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallOutlined.svg'

/**
 * Calloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calloutlined />
 * <Calloutlined width="$6" height="$6" />
 * <Calloutlined color="$color.primary" />
 * ```
 */
export const Calloutlined = styled(Svg, {
  name: 'Calloutlined',
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

export type CalloutlinedProps = React.ComponentProps<typeof Calloutlined>
