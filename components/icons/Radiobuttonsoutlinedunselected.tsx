import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RadiobuttonsOutlinedUnselected.svg'

/**
 * Radiobuttonsoutlinedunselected Icon Component
 * 
 * @example
 * ```tsx
 * <Radiobuttonsoutlinedunselected />
 * <Radiobuttonsoutlinedunselected width="$6" height="$6" />
 * <Radiobuttonsoutlinedunselected color="$color.primary" />
 * ```
 */
export const Radiobuttonsoutlinedunselected = styled(Svg, {
  name: 'Radiobuttonsoutlinedunselected',
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

export type RadiobuttonsoutlinedunselectedProps = React.ComponentProps<typeof Radiobuttonsoutlinedunselected>
