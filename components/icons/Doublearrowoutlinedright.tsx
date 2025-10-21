import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowOutlinedRight.svg'

/**
 * Doublearrowoutlinedright Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowoutlinedright />
 * <Doublearrowoutlinedright width="$6" height="$6" />
 * <Doublearrowoutlinedright color="$color.primary" />
 * ```
 */
export const Doublearrowoutlinedright = styled(Svg, {
  name: 'Doublearrowoutlinedright',
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

export type DoublearrowoutlinedrightProps = React.ComponentProps<typeof Doublearrowoutlinedright>
