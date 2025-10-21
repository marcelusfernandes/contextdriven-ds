import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TikTokFilled.svg'

/**
 * Tiktokfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Tiktokfilled />
 * <Tiktokfilled width="$6" height="$6" />
 * <Tiktokfilled color="$color.primary" />
 * ```
 */
export const Tiktokfilled = styled(Svg, {
  name: 'Tiktokfilled',
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

export type TiktokfilledProps = React.ComponentProps<typeof Tiktokfilled>
