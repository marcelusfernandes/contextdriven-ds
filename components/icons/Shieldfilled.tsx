import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldFilled.svg'

/**
 * Shieldfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldfilled />
 * <Shieldfilled width="$6" height="$6" />
 * <Shieldfilled color="$color.primary" />
 * ```
 */
export const Shieldfilled = styled(Svg, {
  name: 'Shieldfilled',
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

export type ShieldfilledProps = React.ComponentProps<typeof Shieldfilled>
