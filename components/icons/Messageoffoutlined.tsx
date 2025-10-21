import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageOffOutlined.svg'

/**
 * Messageoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Messageoffoutlined />
 * <Messageoffoutlined width="$6" height="$6" />
 * <Messageoffoutlined color="$color.primary" />
 * ```
 */
export const Messageoffoutlined = styled(Svg, {
  name: 'Messageoffoutlined',
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

export type MessageoffoutlinedProps = React.ComponentProps<typeof Messageoffoutlined>
