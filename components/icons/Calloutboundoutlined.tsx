import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallOutboundOutlined.svg'

/**
 * Calloutboundoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calloutboundoutlined />
 * <Calloutboundoutlined width="$6" height="$6" />
 * <Calloutboundoutlined color="$color.primary" />
 * ```
 */
export const Calloutboundoutlined = styled(Svg, {
  name: 'Calloutboundoutlined',
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

export type CalloutboundoutlinedProps = React.ComponentProps<typeof Calloutboundoutlined>
