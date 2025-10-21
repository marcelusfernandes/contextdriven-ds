import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ClockFastFilled.svg'

/**
 * Clockfastfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Clockfastfilled />
 * <Clockfastfilled width="$6" height="$6" />
 * <Clockfastfilled color="$color.primary" />
 * ```
 */
export const Clockfastfilled = styled(Svg, {
  name: 'Clockfastfilled',
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

export type ClockfastfilledProps = React.ComponentProps<typeof Clockfastfilled>
