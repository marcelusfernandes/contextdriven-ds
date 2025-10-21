import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DonutFilled.svg'

/**
 * Donutfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Donutfilled />
 * <Donutfilled width="$6" height="$6" />
 * <Donutfilled color="$color.primary" />
 * ```
 */
export const Donutfilled = styled(Svg, {
  name: 'Donutfilled',
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

export type DonutfilledProps = React.ComponentProps<typeof Donutfilled>
