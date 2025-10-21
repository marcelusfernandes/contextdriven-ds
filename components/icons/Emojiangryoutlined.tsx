import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiAngryOutlined.svg'

/**
 * Emojiangryoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojiangryoutlined />
 * <Emojiangryoutlined width="$6" height="$6" />
 * <Emojiangryoutlined color="$color.primary" />
 * ```
 */
export const Emojiangryoutlined = styled(Svg, {
  name: 'Emojiangryoutlined',
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

export type EmojiangryoutlinedProps = React.ComponentProps<typeof Emojiangryoutlined>
