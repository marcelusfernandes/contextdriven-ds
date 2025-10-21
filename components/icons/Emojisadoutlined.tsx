import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSadOutlined.svg'

/**
 * Emojisadoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojisadoutlined />
 * <Emojisadoutlined width="$6" height="$6" />
 * <Emojisadoutlined color="$color.primary" />
 * ```
 */
export const Emojisadoutlined = styled(Svg, {
  name: 'Emojisadoutlined',
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

export type EmojisadoutlinedProps = React.ComponentProps<typeof Emojisadoutlined>
