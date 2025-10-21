import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreOutlinedVertical.svg'

/**
 * Moreoutlinedvertical Icon Component
 * 
 * @example
 * ```tsx
 * <Moreoutlinedvertical />
 * <Moreoutlinedvertical width="$6" height="$6" />
 * <Moreoutlinedvertical color="$color.primary" />
 * ```
 */
export const Moreoutlinedvertical = styled(Svg, {
  name: 'Moreoutlinedvertical',
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

export type MoreoutlinedverticalProps = React.ComponentProps<typeof Moreoutlinedvertical>
