import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottle RayFilled.svg'

/**
 * BeerbottleRayfilled Icon Component
 * 
 * @example
 * ```tsx
 * <BeerbottleRayfilled />
 * <BeerbottleRayfilled width="$6" height="$6" />
 * <BeerbottleRayfilled color="$color.primary" />
 * ```
 */
export const BeerbottleRayfilled = styled(Svg, {
  name: 'BeerbottleRayfilled',
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

export type BeerbottleRayfilledProps = React.ComponentProps<typeof BeerbottleRayfilled>
