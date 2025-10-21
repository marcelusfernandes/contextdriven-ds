import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiLaughFilled.svg'

/**
 * Emojilaughfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojilaughfilled />
 * <Emojilaughfilled width="$6" height="$6" />
 * <Emojilaughfilled color="$color.primary" />
 * ```
 */
export const Emojilaughfilled = styled(Svg, {
  name: 'Emojilaughfilled',
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

export type EmojilaughfilledProps = React.ComponentProps<typeof Emojilaughfilled>
