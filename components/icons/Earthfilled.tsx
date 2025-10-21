import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EarthFilled.svg'

/**
 * Earthfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Earthfilled />
 * <Earthfilled width="$6" height="$6" />
 * <Earthfilled color="$color.primary" />
 * ```
 */
export const Earthfilled = styled(Svg, {
  name: 'Earthfilled',
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

export type EarthfilledProps = React.ComponentProps<typeof Earthfilled>
