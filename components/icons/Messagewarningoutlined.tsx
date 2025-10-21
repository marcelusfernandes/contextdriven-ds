import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageWarningOutlined.svg'

/**
 * Messagewarningoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messagewarningoutlined />
 * <Messagewarningoutlined width="$6" height="$6" />
 * <Messagewarningoutlined color="$color.primary" />
 * ```
 */
export const Messagewarningoutlined = styled(Svg, {
  name: 'Messagewarningoutlined',
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

export type MessagewarningoutlinedProps = React.ComponentProps<typeof Messagewarningoutlined>
