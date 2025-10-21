import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CallInboundOutlined.svg'

/**
 * Callinboundoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Callinboundoutlined />
 * <Callinboundoutlined width="$6" height="$6" />
 * <Callinboundoutlined color="$color.primary" />
 * ```
 */
export const Callinboundoutlined = styled(Svg, {
  name: 'Callinboundoutlined',
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

export type CallinboundoutlinedProps = React.ComponentProps<typeof Callinboundoutlined>
