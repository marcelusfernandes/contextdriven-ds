import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowFilledRight.svg'

/**
 * Doublearrowfilledright Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowfilledright />
 * <Doublearrowfilledright width="$6" height="$6" />
 * <Doublearrowfilledright color="$color.primary" />
 * ```
 */
export const Doublearrowfilledright = styled(Svg, {
  name: 'Doublearrowfilledright',
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

export type DoublearrowfilledrightProps = React.ComponentProps<typeof Doublearrowfilledright>
