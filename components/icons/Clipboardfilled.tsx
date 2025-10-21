import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardFilled.svg'

/**
 * Clipboardfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardfilled />
 * <Clipboardfilled width="$6" height="$6" />
 * <Clipboardfilled color="$color.primary" />
 * ```
 */
export const Clipboardfilled = styled(Svg, {
  name: 'Clipboardfilled',
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

export type ClipboardfilledProps = React.ComponentProps<typeof Clipboardfilled>
