import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardEmptyOutlined.svg'

/**
 * Clipboardemptyoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardemptyoutlined />
 * <Clipboardemptyoutlined width="$6" height="$6" />
 * <Clipboardemptyoutlined color="$color.primary" />
 * ```
 */
export const Clipboardemptyoutlined = styled(Svg, {
  name: 'Clipboardemptyoutlined',
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

export type ClipboardemptyoutlinedProps = React.ComponentProps<typeof Clipboardemptyoutlined>
