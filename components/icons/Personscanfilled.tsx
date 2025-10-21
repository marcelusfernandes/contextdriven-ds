import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonScanFilled.svg'

/**
 * Personscanfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Personscanfilled />
 * <Personscanfilled width="$6" height="$6" />
 * <Personscanfilled color="$color.primary" />
 * ```
 */
export const Personscanfilled = styled(Svg, {
  name: 'Personscanfilled',
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

export type PersonscanfilledProps = React.ComponentProps<typeof Personscanfilled>
