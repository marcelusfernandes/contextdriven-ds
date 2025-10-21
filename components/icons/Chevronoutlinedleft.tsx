import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChevronOutlinedLeft.svg'

/**
 * Chevronoutlinedleft Icon Component
 * 
 * @example
 * ```tsx
 * <Chevronoutlinedleft />
 * <Chevronoutlinedleft width="$6" height="$6" />
 * <Chevronoutlinedleft color="$color.primary" />
 * ```
 */
export const Chevronoutlinedleft = styled(Svg, {
  name: 'Chevronoutlinedleft',
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

export type ChevronoutlinedleftProps = React.ComponentProps<typeof Chevronoutlinedleft>
