import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChevronOutlinedUp.svg'

/**
 * Chevronoutlinedup Icon Component
 * 
 * @example
 * ```tsx
 * <Chevronoutlinedup />
 * <Chevronoutlinedup width="$6" height="$6" />
 * <Chevronoutlinedup color="$color.primary" />
 * ```
 */
export const Chevronoutlinedup = styled(Svg, {
  name: 'Chevronoutlinedup',
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

export type ChevronoutlinedupProps = React.ComponentProps<typeof Chevronoutlinedup>
