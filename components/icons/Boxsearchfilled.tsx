import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxSearchFilled.svg'

/**
 * Boxsearchfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxsearchfilled />
 * <Boxsearchfilled width="$6" height="$6" />
 * <Boxsearchfilled color="$color.primary" />
 * ```
 */
export const Boxsearchfilled = styled(Svg, {
  name: 'Boxsearchfilled',
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

export type BoxsearchfilledProps = React.ComponentProps<typeof Boxsearchfilled>
