import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MicrophoneOutlined.svg'

/**
 * Microphoneoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Microphoneoutlined />
 * <Microphoneoutlined width="$6" height="$6" />
 * <Microphoneoutlined color="$color.primary" />
 * ```
 */
export const Microphoneoutlined = styled(Svg, {
  name: 'Microphoneoutlined',
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

export type MicrophoneoutlinedProps = React.ComponentProps<typeof Microphoneoutlined>
