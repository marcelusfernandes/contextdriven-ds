import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretOutlinedRight.svg'

/**
 * Caretoutlinedright Icon Component
 * 
 * @example
 * ```tsx
 * <Caretoutlinedright />
 * <Caretoutlinedright width="$6" height="$6" />
 * <Caretoutlinedright color="$color.primary" />
 * ```
 */
export const Caretoutlinedright = styled(Svg, {
  name: 'Caretoutlinedright',
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

export type CaretoutlinedrightProps = React.ComponentProps<typeof Caretoutlinedright>
