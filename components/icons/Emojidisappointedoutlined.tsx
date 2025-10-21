import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EmojiDisappointedOutlined.svg'

/**
 * Emojidisappointedoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Emojidisappointedoutlined />
 * <Emojidisappointedoutlined width="$6" height="$6" />
 * <Emojidisappointedoutlined color="$color.primary" />
 * ```
 */
export const Emojidisappointedoutlined = styled(Svg, {
  name: 'Emojidisappointedoutlined',
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

export type EmojidisappointedoutlinedProps = React.ComponentProps<typeof Emojidisappointedoutlined>
