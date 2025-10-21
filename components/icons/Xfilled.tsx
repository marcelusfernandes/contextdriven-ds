import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/XFilled.svg'

/**
 * Xfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Xfilled />
 * <Xfilled width="$6" height="$6" />
 * <Xfilled color="$color.primary" />
 * ```
 */
export const Xfilled = styled(Svg, {
  name: 'Xfilled',
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

export type XfilledProps = React.ComponentProps<typeof Xfilled>
