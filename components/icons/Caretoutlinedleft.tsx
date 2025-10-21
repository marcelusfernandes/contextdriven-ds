import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretOutlinedLeft.svg'

/**
 * Caretoutlinedleft Icon Component
 * 
 * @example
 * ```tsx
 * <Caretoutlinedleft />
 * <Caretoutlinedleft width="$6" height="$6" />
 * <Caretoutlinedleft color="$color.primary" />
 * ```
 */
export const Caretoutlinedleft = styled(Svg, {
  name: 'Caretoutlinedleft',
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

export type CaretoutlinedleftProps = React.ComponentProps<typeof Caretoutlinedleft>
