import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardAddOutlined.svg'

/**
 * Clipboardaddoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardaddoutlined />
 * <Clipboardaddoutlined width="$6" height="$6" />
 * <Clipboardaddoutlined color="$color.primary" />
 * ```
 */
export const Clipboardaddoutlined = styled(Svg, {
  name: 'Clipboardaddoutlined',
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

export type ClipboardaddoutlinedProps = React.ComponentProps<typeof Clipboardaddoutlined>
