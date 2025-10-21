import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowSwap HorizontalOutlined.svg'

/**
 * ArrowswapHorizontaloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <ArrowswapHorizontaloutlined />
 * <ArrowswapHorizontaloutlined width="$6" height="$6" />
 * <ArrowswapHorizontaloutlined color="$color.primary" />
 * ```
 */
export const ArrowswapHorizontaloutlined = styled(Svg, {
  name: 'ArrowswapHorizontaloutlined',
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

export type ArrowswapHorizontaloutlinedProps = React.ComponentProps<typeof ArrowswapHorizontaloutlined>
