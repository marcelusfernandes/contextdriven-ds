import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MyLocationFilled.svg'

/**
 * Mylocationfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Mylocationfilled />
 * <Mylocationfilled width="$6" height="$6" />
 * <Mylocationfilled color="$color.primary" />
 * ```
 */
export const Mylocationfilled = styled(Svg, {
  name: 'Mylocationfilled',
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

export type MylocationfilledProps = React.ComponentProps<typeof Mylocationfilled>
