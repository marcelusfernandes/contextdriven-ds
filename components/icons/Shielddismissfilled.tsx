import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldDismissFilled.svg'

/**
 * Shielddismissfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shielddismissfilled />
 * <Shielddismissfilled width="$6" height="$6" />
 * <Shielddismissfilled color="$color.primary" />
 * ```
 */
export const Shielddismissfilled = styled(Svg, {
  name: 'Shielddismissfilled',
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

export type ShielddismissfilledProps = React.ComponentProps<typeof Shielddismissfilled>
