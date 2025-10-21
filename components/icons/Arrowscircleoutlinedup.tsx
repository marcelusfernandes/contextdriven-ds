import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsCircleOutlinedUp.svg'

/**
 * Arrowscircleoutlinedup Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowscircleoutlinedup />
 * <Arrowscircleoutlinedup width="$6" height="$6" />
 * <Arrowscircleoutlinedup color="$color.primary" />
 * ```
 */
export const Arrowscircleoutlinedup = styled(Svg, {
  name: 'Arrowscircleoutlinedup',
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

export type ArrowscircleoutlinedupProps = React.ComponentProps<typeof Arrowscircleoutlinedup>
