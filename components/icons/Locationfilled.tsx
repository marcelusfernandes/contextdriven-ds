import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LocationFilled.svg'

/**
 * Locationfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Locationfilled />
 * <Locationfilled width="$6" height="$6" />
 * <Locationfilled color="$color.primary" />
 * ```
 */
export const Locationfilled = styled(Svg, {
  name: 'Locationfilled',
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

export type LocationfilledProps = React.ComponentProps<typeof Locationfilled>
