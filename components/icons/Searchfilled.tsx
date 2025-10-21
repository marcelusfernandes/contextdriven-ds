import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SearchFilled.svg'

/**
 * Searchfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Searchfilled />
 * <Searchfilled width="$6" height="$6" />
 * <Searchfilled color="$color.primary" />
 * ```
 */
export const Searchfilled = styled(Svg, {
  name: 'Searchfilled',
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

export type SearchfilledProps = React.ComponentProps<typeof Searchfilled>
