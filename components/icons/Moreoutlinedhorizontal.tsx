import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreOutlinedHorizontal.svg'

/**
 * Moreoutlinedhorizontal Icon Component
 * 
 * @example
 * ```tsx
 * <Moreoutlinedhorizontal />
 * <Moreoutlinedhorizontal width="$6" height="$6" />
 * <Moreoutlinedhorizontal color="$color.primary" />
 * ```
 */
export const Moreoutlinedhorizontal = styled(Svg, {
  name: 'Moreoutlinedhorizontal',
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

export type MoreoutlinedhorizontalProps = React.ComponentProps<typeof Moreoutlinedhorizontal>
