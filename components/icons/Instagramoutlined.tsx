import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InstagramOutlined.svg'

/**
 * Instagramoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Instagramoutlined />
 * <Instagramoutlined width="$6" height="$6" />
 * <Instagramoutlined color="$color.primary" />
 * ```
 */
export const Instagramoutlined = styled(Svg, {
  name: 'Instagramoutlined',
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

export type InstagramoutlinedProps = React.ComponentProps<typeof Instagramoutlined>
