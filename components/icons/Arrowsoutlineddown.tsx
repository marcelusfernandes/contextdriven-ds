import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsOutlinedDown.svg'

/**
 * Arrowsoutlineddown Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsoutlineddown />
 * <Arrowsoutlineddown width="$6" height="$6" />
 * <Arrowsoutlineddown color="$color.primary" />
 * ```
 */
export const Arrowsoutlineddown = styled(Svg, {
  name: 'Arrowsoutlineddown',
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

export type ArrowsoutlineddownProps = React.ComponentProps<typeof Arrowsoutlineddown>
