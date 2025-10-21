import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageAddOutlined.svg'

/**
 * Messageaddoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messageaddoutlined />
 * <Messageaddoutlined width="$6" height="$6" />
 * <Messageaddoutlined color="$color.primary" />
 * ```
 */
export const Messageaddoutlined = styled(Svg, {
  name: 'Messageaddoutlined',
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

export type MessageaddoutlinedProps = React.ComponentProps<typeof Messageaddoutlined>
