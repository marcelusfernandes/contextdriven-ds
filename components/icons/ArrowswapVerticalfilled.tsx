import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowSwap VerticalFilled.svg'

/**
 * ArrowswapVerticalfilled Icon Component
 * 
 * @example
 * ```tsx
 * <ArrowswapVerticalfilled />
 * <ArrowswapVerticalfilled width="$6" height="$6" />
 * <ArrowswapVerticalfilled color="$color.primary" />
 * ```
 */
export const ArrowswapVerticalfilled = styled(Svg, {
  name: 'ArrowswapVerticalfilled',
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

export type ArrowswapVerticalfilledProps = React.ComponentProps<typeof ArrowswapVerticalfilled>
