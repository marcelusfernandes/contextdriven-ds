import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiSmile SlightOutlined.svg'

/**
 * EmojismileSlightoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <EmojismileSlightoutlined />
 * <EmojismileSlightoutlined width="$6" height="$6" />
 * <EmojismileSlightoutlined color="$color.primary" />
 * ```
 */
export const EmojismileSlightoutlined = styled(Svg, {
  name: 'EmojismileSlightoutlined',
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

export type EmojismileSlightoutlinedProps = React.ComponentProps<typeof EmojismileSlightoutlined>
