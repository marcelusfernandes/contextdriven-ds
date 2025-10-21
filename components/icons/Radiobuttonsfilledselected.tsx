import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RadiobuttonsFilledSelected.svg'

/**
 * Radiobuttonsfilledselected Icon Component
 * 
 * @example
 * ```tsx
 * <Radiobuttonsfilledselected />
 * <Radiobuttonsfilledselected width="$6" height="$6" />
 * <Radiobuttonsfilledselected color="$color.primary" />
 * ```
 */
export const Radiobuttonsfilledselected = styled(Svg, {
  name: 'Radiobuttonsfilledselected',
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

export type RadiobuttonsfilledselectedProps = React.ComponentProps<typeof Radiobuttonsfilledselected>
