import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/NubankFilled.svg'

/**
 * Nubankfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Nubankfilled />
 * <Nubankfilled width="$6" height="$6" />
 * <Nubankfilled color="$color.primary" />
 * ```
 */
export const Nubankfilled = styled(Svg, {
  name: 'Nubankfilled',
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

export type NubankfilledProps = React.ComponentProps<typeof Nubankfilled>
