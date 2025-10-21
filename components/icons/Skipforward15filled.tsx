import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipForward 15Filled.svg'

/**
 * Skipforward15filled Icon Component
 * 
 * @example
 * ```tsx
 * <Skipforward15filled />
 * <Skipforward15filled width="$6" height="$6" />
 * <Skipforward15filled color="$color.primary" />
 * ```
 */
export const Skipforward15filled = styled(Svg, {
  name: 'Skipforward15filled',
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

export type Skipforward15filledProps = React.ComponentProps<typeof Skipforward15filled>
