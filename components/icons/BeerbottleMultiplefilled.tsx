import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottle MultipleFilled.svg'

/**
 * BeerbottleMultiplefilled Icon Component
 * 
 * @example
 * ```tsx
 * <BeerbottleMultiplefilled />
 * <BeerbottleMultiplefilled width="$6" height="$6" />
 * <BeerbottleMultiplefilled color="$color.primary" />
 * ```
 */
export const BeerbottleMultiplefilled = styled(Svg, {
  name: 'BeerbottleMultiplefilled',
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

export type BeerbottleMultiplefilledProps = React.ComponentProps<typeof BeerbottleMultiplefilled>
