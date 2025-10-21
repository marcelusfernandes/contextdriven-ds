import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SpinnerFilled.svg'

/**
 * Spinnerfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Spinnerfilled />
 * <Spinnerfilled width="$6" height="$6" />
 * <Spinnerfilled color="$color.primary" />
 * ```
 */
export const Spinnerfilled = styled(Svg, {
  name: 'Spinnerfilled',
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

export type SpinnerfilledProps = React.ComponentProps<typeof Spinnerfilled>
