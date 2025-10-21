import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowSwap VerticalOutlined.svg'

/**
 * ArrowswapVerticaloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <ArrowswapVerticaloutlined />
 * <ArrowswapVerticaloutlined width="$6" height="$6" />
 * <ArrowswapVerticaloutlined color="$color.primary" />
 * ```
 */
export const ArrowswapVerticaloutlined = styled(Svg, {
  name: 'ArrowswapVerticaloutlined',
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

export type ArrowswapVerticaloutlinedProps = React.ComponentProps<typeof ArrowswapVerticaloutlined>
