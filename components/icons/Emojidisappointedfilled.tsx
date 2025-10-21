import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiDisappointedFilled.svg'

/**
 * Emojidisappointedfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Emojidisappointedfilled />
 * <Emojidisappointedfilled width="$6" height="$6" />
 * <Emojidisappointedfilled color="$color.primary" />
 * ```
 */
export const Emojidisappointedfilled = styled(Svg, {
  name: 'Emojidisappointedfilled',
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

export type EmojidisappointedfilledProps = React.ComponentProps<typeof Emojidisappointedfilled>
