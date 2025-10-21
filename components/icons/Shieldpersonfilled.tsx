import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldPersonFilled.svg'

/**
 * Shieldpersonfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldpersonfilled />
 * <Shieldpersonfilled width="$6" height="$6" />
 * <Shieldpersonfilled color="$color.primary" />
 * ```
 */
export const Shieldpersonfilled = styled(Svg, {
  name: 'Shieldpersonfilled',
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

export type ShieldpersonfilledProps = React.ComponentProps<typeof Shieldpersonfilled>
