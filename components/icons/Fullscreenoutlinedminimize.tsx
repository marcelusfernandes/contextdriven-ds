import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FullScreenOutlinedMinimize.svg'

/**
 * Fullscreenoutlinedminimize Icon Component
 * 
 * @example
 * ```tsx
 * <Fullscreenoutlinedminimize />
 * <Fullscreenoutlinedminimize width="$6" height="$6" />
 * <Fullscreenoutlinedminimize color="$color.primary" />
 * ```
 */
export const Fullscreenoutlinedminimize = styled(Svg, {
  name: 'Fullscreenoutlinedminimize',
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

export type FullscreenoutlinedminimizeProps = React.ComponentProps<typeof Fullscreenoutlinedminimize>
