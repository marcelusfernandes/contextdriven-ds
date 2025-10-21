import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChevronFilledRight.svg'

/**
 * Chevronfilledright Icon Component
 * 
 * @example
 * ```tsx
 * <Chevronfilledright />
 * <Chevronfilledright width="$6" height="$6" />
 * <Chevronfilledright color="$color.primary" />
 * ```
 */
export const Chevronfilledright = styled(Svg, {
  name: 'Chevronfilledright',
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

export type ChevronfilledrightProps = React.ComponentProps<typeof Chevronfilledright>
