import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FullScreenFilledMaximize.svg'

/**
 * Fullscreenfilledmaximize Icon Component
 * 
 * @example
 * ```tsx
 * <Fullscreenfilledmaximize />
 * <Fullscreenfilledmaximize width="$6" height="$6" />
 * <Fullscreenfilledmaximize color="$color.primary" />
 * ```
 */
export const Fullscreenfilledmaximize = styled(Svg, {
  name: 'Fullscreenfilledmaximize',
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

export type FullscreenfilledmaximizeProps = React.ComponentProps<typeof Fullscreenfilledmaximize>
