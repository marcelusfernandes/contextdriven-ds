import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardEmptyFilled.svg'

/**
 * Clipboardemptyfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardemptyfilled />
 * <Clipboardemptyfilled width="$6" height="$6" />
 * <Clipboardemptyfilled color="$color.primary" />
 * ```
 */
export const Clipboardemptyfilled = styled(Svg, {
  name: 'Clipboardemptyfilled',
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

export type ClipboardemptyfilledProps = React.ComponentProps<typeof Clipboardemptyfilled>
