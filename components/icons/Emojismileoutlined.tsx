import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSmileOutlined.svg'

/**
 * Emojismileoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojismileoutlined />
 * <Emojismileoutlined width="$6" height="$6" />
 * <Emojismileoutlined color="$color.primary" />
 * ```
 */
export const Emojismileoutlined = styled(Svg, {
  name: 'Emojismileoutlined',
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

export type EmojismileoutlinedProps = React.ComponentProps<typeof Emojismileoutlined>
