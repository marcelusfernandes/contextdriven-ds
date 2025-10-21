import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/IcePopFilled.svg'

/**
 * Icepopfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Icepopfilled />
 * <Icepopfilled width="$6" height="$6" />
 * <Icepopfilled color="$color.primary" />
 * ```
 */
export const Icepopfilled = styled(Svg, {
  name: 'Icepopfilled',
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

export type IcepopfilledProps = React.ComponentProps<typeof Icepopfilled>
