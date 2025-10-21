import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckmarkStarburstFilled.svg'

/**
 * Checkmarkstarburstfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Checkmarkstarburstfilled />
 * <Checkmarkstarburstfilled width="$6" height="$6" />
 * <Checkmarkstarburstfilled color="$color.primary" />
 * ```
 */
export const Checkmarkstarburstfilled = styled(Svg, {
  name: 'Checkmarkstarburstfilled',
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

export type CheckmarkstarburstfilledProps = React.ComponentProps<typeof Checkmarkstarburstfilled>
