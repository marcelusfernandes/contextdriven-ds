import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldWarningFilled.svg'

/**
 * Shieldwarningfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldwarningfilled />
 * <Shieldwarningfilled width="$6" height="$6" />
 * <Shieldwarningfilled color="$color.primary" />
 * ```
 */
export const Shieldwarningfilled = styled(Svg, {
  name: 'Shieldwarningfilled',
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

export type ShieldwarningfilledProps = React.ComponentProps<typeof Shieldwarningfilled>
