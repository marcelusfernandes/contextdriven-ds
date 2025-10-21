import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipForward 10Filled.svg'

/**
 * Skipforward10filled Icon Component
 * 
 * @example
 * ```tsx
 * <Skipforward10filled />
 * <Skipforward10filled width="$6" height="$6" />
 * <Skipforward10filled color="$color.primary" />
 * ```
 */
export const Skipforward10filled = styled(Svg, {
  name: 'Skipforward10filled',
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

export type Skipforward10filledProps = React.ComponentProps<typeof Skipforward10filled>
