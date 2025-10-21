import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretFilledUp.svg'

/**
 * Caretfilledup Icon Component
 * 
 * @example
 * ```tsx
 * <Caretfilledup />
 * <Caretfilledup width="$6" height="$6" />
 * <Caretfilledup color="$color.primary" />
 * ```
 */
export const Caretfilledup = styled(Svg, {
  name: 'Caretfilledup',
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

export type CaretfilledupProps = React.ComponentProps<typeof Caretfilledup>
