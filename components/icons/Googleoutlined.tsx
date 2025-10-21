import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/GoogleOutlined.svg'

/**
 * Googleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Googleoutlined />
 * <Googleoutlined width="$6" height="$6" />
 * <Googleoutlined color="$color.primary" />
 * ```
 */
export const Googleoutlined = styled(Svg, {
  name: 'Googleoutlined',
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

export type GoogleoutlinedProps = React.ComponentProps<typeof Googleoutlined>
