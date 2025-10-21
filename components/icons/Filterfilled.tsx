import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FilterFilled.svg'

/**
 * Filterfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Filterfilled />
 * <Filterfilled width="$6" height="$6" />
 * <Filterfilled color="$color.primary" />
 * ```
 */
export const Filterfilled = styled(Svg, {
  name: 'Filterfilled',
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

export type FilterfilledProps = React.ComponentProps<typeof Filterfilled>
