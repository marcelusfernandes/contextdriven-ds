import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClipboardCheckmarkOutlined.svg'

/**
 * Clipboardcheckmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Clipboardcheckmarkoutlined />
 * <Clipboardcheckmarkoutlined width="$6" height="$6" />
 * <Clipboardcheckmarkoutlined color="$color.primary" />
 * ```
 */
export const Clipboardcheckmarkoutlined = styled(Svg, {
  name: 'Clipboardcheckmarkoutlined',
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

export type ClipboardcheckmarkoutlinedProps = React.ComponentProps<typeof Clipboardcheckmarkoutlined>
