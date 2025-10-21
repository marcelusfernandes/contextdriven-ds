import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LockFilled.svg'

/**
 * Lockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Lockfilled />
 * <Lockfilled width="$6" height="$6" />
 * <Lockfilled color="$color.primary" />
 * ```
 */
export const Lockfilled = styled(Svg, {
  name: 'Lockfilled',
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

export type LockfilledProps = React.ComponentProps<typeof Lockfilled>
