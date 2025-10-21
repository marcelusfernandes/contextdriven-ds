import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageErrorOutlined.svg'

/**
 * Messageerroroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messageerroroutlined />
 * <Messageerroroutlined width="$6" height="$6" />
 * <Messageerroroutlined color="$color.primary" />
 * ```
 */
export const Messageerroroutlined = styled(Svg, {
  name: 'Messageerroroutlined',
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

export type MessageerroroutlinedProps = React.ComponentProps<typeof Messageerroroutlined>
