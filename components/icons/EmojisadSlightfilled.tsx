import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSad SlightFilled.svg'

/**
 * EmojisadSlightfilled Icon Component
 * 
 * @example
 * ```tsx
 * <EmojisadSlightfilled />
 * <EmojisadSlightfilled width="$6" height="$6" />
 * <EmojisadSlightfilled color="$color.primary" />
 * ```
 */
export const EmojisadSlightfilled = styled(Svg, {
  name: 'EmojisadSlightfilled',
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

export type EmojisadSlightfilledProps = React.ComponentProps<typeof EmojisadSlightfilled>
