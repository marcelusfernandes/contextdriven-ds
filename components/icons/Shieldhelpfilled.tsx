import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldHelpFilled.svg'

/**
 * Shieldhelpfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldhelpfilled />
 * <Shieldhelpfilled width="$6" height="$6" />
 * <Shieldhelpfilled color="$color.primary" />
 * ```
 */
export const Shieldhelpfilled = styled(Svg, {
  name: 'Shieldhelpfilled',
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

export type ShieldhelpfilledProps = React.ComponentProps<typeof Shieldhelpfilled>
