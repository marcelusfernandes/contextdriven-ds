import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiAngryFilled.svg'

/**
 * Emojiangryfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojiangryfilled />
 * <Emojiangryfilled width="$6" height="$6" />
 * <Emojiangryfilled color="$color.primary" />
 * ```
 */
export const Emojiangryfilled = styled(Svg, {
  name: 'Emojiangryfilled',
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

export type EmojiangryfilledProps = React.ComponentProps<typeof Emojiangryfilled>
