import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageOutlined.svg'

/**
 * Messageoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messageoutlined />
 * <Messageoutlined width="$6" height="$6" />
 * <Messageoutlined color="$color.primary" />
 * ```
 */
export const Messageoutlined = styled(Svg, {
  name: 'Messageoutlined',
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

export type MessageoutlinedProps = React.ComponentProps<typeof Messageoutlined>
