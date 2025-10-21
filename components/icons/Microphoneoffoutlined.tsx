import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MicrophoneOffOutlined.svg'

/**
 * Microphoneoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Microphoneoffoutlined />
 * <Microphoneoffoutlined width="$6" height="$6" />
 * <Microphoneoffoutlined color="$color.primary" />
 * ```
 */
export const Microphoneoffoutlined = styled(Svg, {
  name: 'Microphoneoffoutlined',
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

export type MicrophoneoffoutlinedProps = React.ComponentProps<typeof Microphoneoffoutlined>
