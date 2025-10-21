import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretFilledDown.svg'

/**
 * Caretfilleddown Icon Component
 * 
 * @example
 * ```tsx
 * <Caretfilleddown />
 * <Caretfilleddown width="$6" height="$6" />
 * <Caretfilleddown color="$color.primary" />
 * ```
 */
export const Caretfilleddown = styled(Svg, {
  name: 'Caretfilleddown',
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

export type CaretfilleddownProps = React.ComponentProps<typeof Caretfilleddown>
