import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardCheckmarkFilled.svg'

/**
 * Clipboardcheckmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardcheckmarkfilled />
 * <Clipboardcheckmarkfilled width="$6" height="$6" />
 * <Clipboardcheckmarkfilled color="$color.primary" />
 * ```
 */
export const Clipboardcheckmarkfilled = styled(Svg, {
  name: 'Clipboardcheckmarkfilled',
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

export type ClipboardcheckmarkfilledProps = React.ComponentProps<typeof Clipboardcheckmarkfilled>
