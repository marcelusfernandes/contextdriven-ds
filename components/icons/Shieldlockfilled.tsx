import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldLockFilled.svg'

/**
 * Shieldlockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldlockfilled />
 * <Shieldlockfilled width="$6" height="$6" />
 * <Shieldlockfilled color="$color.primary" />
 * ```
 */
export const Shieldlockfilled = styled(Svg, {
  name: 'Shieldlockfilled',
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

export type ShieldlockfilledProps = React.ComponentProps<typeof Shieldlockfilled>
