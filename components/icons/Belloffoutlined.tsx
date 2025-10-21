import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BellOffOutlined.svg'

/**
 * Belloffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Belloffoutlined />
 * <Belloffoutlined width="$6" height="$6" />
 * <Belloffoutlined color="$color.primary" />
 * ```
 */
export const Belloffoutlined = styled(Svg, {
  name: 'Belloffoutlined',
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

export type BelloffoutlinedProps = React.ComponentProps<typeof Belloffoutlined>
