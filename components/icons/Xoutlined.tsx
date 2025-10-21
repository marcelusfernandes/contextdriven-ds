import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/XOutlined.svg'

/**
 * Xoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Xoutlined />
 * <Xoutlined width="$6" height="$6" />
 * <Xoutlined color="$color.primary" />
 * ```
 */
export const Xoutlined = styled(Svg, {
  name: 'Xoutlined',
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

export type XoutlinedProps = React.ComponentProps<typeof Xoutlined>
