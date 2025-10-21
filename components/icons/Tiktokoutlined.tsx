import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TikTokOutlined.svg'

/**
 * Tiktokoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Tiktokoutlined />
 * <Tiktokoutlined width="$6" height="$6" />
 * <Tiktokoutlined color="$color.primary" />
 * ```
 */
export const Tiktokoutlined = styled(Svg, {
  name: 'Tiktokoutlined',
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

export type TiktokoutlinedProps = React.ComponentProps<typeof Tiktokoutlined>
