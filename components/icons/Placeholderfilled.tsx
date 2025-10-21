import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PlaceholderFilled.svg'

/**
 * Placeholderfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Placeholderfilled />
 * <Placeholderfilled width="$6" height="$6" />
 * <Placeholderfilled color="$color.primary" />
 * ```
 */
export const Placeholderfilled = styled(Svg, {
  name: 'Placeholderfilled',
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

export type PlaceholderfilledProps = React.ComponentProps<typeof Placeholderfilled>
