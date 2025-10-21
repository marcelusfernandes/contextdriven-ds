import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsOutlinedRight.svg'

/**
 * Arrowsoutlinedright Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsoutlinedright />
 * <Arrowsoutlinedright width="$6" height="$6" />
 * <Arrowsoutlinedright color="$color.primary" />
 * ```
 */
export const Arrowsoutlinedright = styled(Svg, {
  name: 'Arrowsoutlinedright',
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

export type ArrowsoutlinedrightProps = React.ComponentProps<typeof Arrowsoutlinedright>
