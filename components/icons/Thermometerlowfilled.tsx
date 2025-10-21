import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThermometerLowFilled.svg'

/**
 * Thermometerlowfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Thermometerlowfilled />
 * <Thermometerlowfilled width="$6" height="$6" />
 * <Thermometerlowfilled color="$color.primary" />
 * ```
 */
export const Thermometerlowfilled = styled(Svg, {
  name: 'Thermometerlowfilled',
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

export type ThermometerlowfilledProps = React.ComponentProps<typeof Thermometerlowfilled>
