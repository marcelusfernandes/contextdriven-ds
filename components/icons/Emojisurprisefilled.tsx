import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSurpriseFilled.svg'

/**
 * Emojisurprisefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojisurprisefilled />
 * <Emojisurprisefilled width="$6" height="$6" />
 * <Emojisurprisefilled color="$color.primary" />
 * ```
 */
export const Emojisurprisefilled = styled(Svg, {
  name: 'Emojisurprisefilled',
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

export type EmojisurprisefilledProps = React.ComponentProps<typeof Emojisurprisefilled>
