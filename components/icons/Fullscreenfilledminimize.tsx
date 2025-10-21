import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FullScreenFilledMinimize.svg'

/**
 * Fullscreenfilledminimize Icon Component
 * 
 * @example
 * ```tsx
 * <Fullscreenfilledminimize />
 * <Fullscreenfilledminimize width="$6" height="$6" />
 * <Fullscreenfilledminimize color="$color.primary" />
 * ```
 */
export const Fullscreenfilledminimize = styled(Svg, {
  name: 'Fullscreenfilledminimize',
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

export type FullscreenfilledminimizeProps = React.ComponentProps<typeof Fullscreenfilledminimize>
