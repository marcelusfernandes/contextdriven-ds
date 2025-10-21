import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClockFilled.svg'

/**
 * Clockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clockfilled />
 * <Clockfilled width="$6" height="$6" />
 * <Clockfilled color="$color.primary" />
 * ```
 */
export const Clockfilled = styled(Svg, {
  name: 'Clockfilled',
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

export type ClockfilledProps = React.ComponentProps<typeof Clockfilled>
