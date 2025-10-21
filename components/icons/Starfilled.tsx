import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarFilled.svg'

/**
 * Starfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Starfilled />
 * <Starfilled width="$6" height="$6" />
 * <Starfilled color="$color.primary" />
 * ```
 */
export const Starfilled = styled(Svg, {
  name: 'Starfilled',
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

export type StarfilledProps = React.ComponentProps<typeof Starfilled>
