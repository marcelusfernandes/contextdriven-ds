import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiMehFilled.svg'

/**
 * Emojimehfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojimehfilled />
 * <Emojimehfilled width="$6" height="$6" />
 * <Emojimehfilled color="$color.primary" />
 * ```
 */
export const Emojimehfilled = styled(Svg, {
  name: 'Emojimehfilled',
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

export type EmojimehfilledProps = React.ComponentProps<typeof Emojimehfilled>
