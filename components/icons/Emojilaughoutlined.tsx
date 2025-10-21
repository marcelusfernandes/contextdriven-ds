import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiLaughOutlined.svg'

/**
 * Emojilaughoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojilaughoutlined />
 * <Emojilaughoutlined width="$6" height="$6" />
 * <Emojilaughoutlined color="$color.primary" />
 * ```
 */
export const Emojilaughoutlined = styled(Svg, {
  name: 'Emojilaughoutlined',
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

export type EmojilaughoutlinedProps = React.ComponentProps<typeof Emojilaughoutlined>
