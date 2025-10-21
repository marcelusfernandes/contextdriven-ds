import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSad SlightOutlined.svg'

/**
 * EmojisadSlightoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <EmojisadSlightoutlined />
 * <EmojisadSlightoutlined width="$6" height="$6" />
 * <EmojisadSlightoutlined color="$color.primary" />
 * ```
 */
export const EmojisadSlightoutlined = styled(Svg, {
  name: 'EmojisadSlightoutlined',
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

export type EmojisadSlightoutlinedProps = React.ComponentProps<typeof EmojisadSlightoutlined>
