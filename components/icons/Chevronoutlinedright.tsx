import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChevronOutlinedRight.svg'

/**
 * Chevronoutlinedright Icon Component
 * 
 * @example
 * ```tsx
 * <Chevronoutlinedright />
 * <Chevronoutlinedright width="$6" height="$6" />
 * <Chevronoutlinedright color="$color.primary" />
 * ```
 */
export const Chevronoutlinedright = styled(Svg, {
  name: 'Chevronoutlinedright',
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

export type ChevronoutlinedrightProps = React.ComponentProps<typeof Chevronoutlinedright>
