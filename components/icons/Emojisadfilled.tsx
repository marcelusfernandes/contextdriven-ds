import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSadFilled.svg'

/**
 * Emojisadfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojisadfilled />
 * <Emojisadfilled width="$6" height="$6" />
 * <Emojisadfilled color="$color.primary" />
 * ```
 */
export const Emojisadfilled = styled(Svg, {
  name: 'Emojisadfilled',
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

export type EmojisadfilledProps = React.ComponentProps<typeof Emojisadfilled>
