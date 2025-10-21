import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSurpriseOutlined.svg'

/**
 * Emojisurpriseoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojisurpriseoutlined />
 * <Emojisurpriseoutlined width="$6" height="$6" />
 * <Emojisurpriseoutlined color="$color.primary" />
 * ```
 */
export const Emojisurpriseoutlined = styled(Svg, {
  name: 'Emojisurpriseoutlined',
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

export type EmojisurpriseoutlinedProps = React.ComponentProps<typeof Emojisurpriseoutlined>
