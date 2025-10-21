import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HeartFilled.svg'

/**
 * Heartfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Heartfilled />
 * <Heartfilled width="$6" height="$6" />
 * <Heartfilled color="$color.primary" />
 * ```
 */
export const Heartfilled = styled(Svg, {
  name: 'Heartfilled',
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

export type HeartfilledProps = React.ComponentProps<typeof Heartfilled>
