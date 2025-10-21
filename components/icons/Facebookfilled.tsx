import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FacebookFilled.svg'

/**
 * Facebookfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Facebookfilled />
 * <Facebookfilled width="$6" height="$6" />
 * <Facebookfilled color="$color.primary" />
 * ```
 */
export const Facebookfilled = styled(Svg, {
  name: 'Facebookfilled',
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

export type FacebookfilledProps = React.ComponentProps<typeof Facebookfilled>
