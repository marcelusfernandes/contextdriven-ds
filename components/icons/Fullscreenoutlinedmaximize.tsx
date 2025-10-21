import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FullScreenOutlinedMaximize.svg'

/**
 * Fullscreenoutlinedmaximize Icon Component
 * 
 * @example
 * ```tsx
 * <Fullscreenoutlinedmaximize />
 * <Fullscreenoutlinedmaximize width="$6" height="$6" />
 * <Fullscreenoutlinedmaximize color="$color.primary" />
 * ```
 */
export const Fullscreenoutlinedmaximize = styled(Svg, {
  name: 'Fullscreenoutlinedmaximize',
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

export type FullscreenoutlinedmaximizeProps = React.ComponentProps<typeof Fullscreenoutlinedmaximize>
