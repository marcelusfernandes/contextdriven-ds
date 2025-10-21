import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PinOffOutlined.svg'

/**
 * Pinoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Pinoffoutlined />
 * <Pinoffoutlined width="$6" height="$6" />
 * <Pinoffoutlined color="$color.primary" />
 * ```
 */
export const Pinoffoutlined = styled(Svg, {
  name: 'Pinoffoutlined',
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

export type PinoffoutlinedProps = React.ComponentProps<typeof Pinoffoutlined>
