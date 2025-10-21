import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardAddFilled.svg'

/**
 * Clipboardaddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardaddfilled />
 * <Clipboardaddfilled width="$6" height="$6" />
 * <Clipboardaddfilled color="$color.primary" />
 * ```
 */
export const Clipboardaddfilled = styled(Svg, {
  name: 'Clipboardaddfilled',
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

export type ClipboardaddfilledProps = React.ComponentProps<typeof Clipboardaddfilled>
