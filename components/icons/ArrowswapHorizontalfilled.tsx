import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowSwap HorizontalFilled.svg'

/**
 * ArrowswapHorizontalfilled Icon Component
 * 
 * @example
 * ```tsx
 * <ArrowswapHorizontalfilled />
 * <ArrowswapHorizontalfilled width="$6" height="$6" />
 * <ArrowswapHorizontalfilled color="$color.primary" />
 * ```
 */
export const ArrowswapHorizontalfilled = styled(Svg, {
  name: 'ArrowswapHorizontalfilled',
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

export type ArrowswapHorizontalfilledProps = React.ComponentProps<typeof ArrowswapHorizontalfilled>
