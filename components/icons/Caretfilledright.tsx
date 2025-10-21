import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretFilledRight.svg'

/**
 * Caretfilledright Icon Component
 * 
 * @example
 * ```tsx
 * <Caretfilledright />
 * <Caretfilledright width="$6" height="$6" />
 * <Caretfilledright color="$color.primary" />
 * ```
 */
export const Caretfilledright = styled(Svg, {
  name: 'Caretfilledright',
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

export type CaretfilledrightProps = React.ComponentProps<typeof Caretfilledright>
