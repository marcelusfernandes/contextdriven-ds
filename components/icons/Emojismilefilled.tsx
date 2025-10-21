import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSmileFilled.svg'

/**
 * Emojismilefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojismilefilled />
 * <Emojismilefilled width="$6" height="$6" />
 * <Emojismilefilled color="$color.primary" />
 * ```
 */
export const Emojismilefilled = styled(Svg, {
  name: 'Emojismilefilled',
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

export type EmojismilefilledProps = React.ComponentProps<typeof Emojismilefilled>
