import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MoreFilledVertical.svg'

/**
 * Morefilledvertical Icon Component
 * 
 * @example
 * ```tsx
 * <Morefilledvertical />
 * <Morefilledvertical width="$6" height="$6" />
 * <Morefilledvertical color="$color.primary" />
 * ```
 */
export const Morefilledvertical = styled(Svg, {
  name: 'Morefilledvertical',
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

export type MorefilledverticalProps = React.ComponentProps<typeof Morefilledvertical>
