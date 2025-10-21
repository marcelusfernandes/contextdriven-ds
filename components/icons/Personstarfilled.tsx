import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonStarFilled.svg'

/**
 * Personstarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Personstarfilled />
 * <Personstarfilled width="$6" height="$6" />
 * <Personstarfilled color="$color.primary" />
 * ```
 */
export const Personstarfilled = styled(Svg, {
  name: 'Personstarfilled',
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

export type PersonstarfilledProps = React.ComponentProps<typeof Personstarfilled>
