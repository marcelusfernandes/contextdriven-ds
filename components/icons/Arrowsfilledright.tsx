import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsFilledRight.svg'

/**
 * Arrowsfilledright Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsfilledright />
 * <Arrowsfilledright width="$6" height="$6" />
 * <Arrowsfilledright color="$color.primary" />
 * ```
 */
export const Arrowsfilledright = styled(Svg, {
  name: 'Arrowsfilledright',
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

export type ArrowsfilledrightProps = React.ComponentProps<typeof Arrowsfilledright>
