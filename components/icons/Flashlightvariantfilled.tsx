import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightVariantFilled.svg'

/**
 * Flashlightvariantfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightvariantfilled />
 * <Flashlightvariantfilled width="$6" height="$6" />
 * <Flashlightvariantfilled color="$color.primary" />
 * ```
 */
export const Flashlightvariantfilled = styled(Svg, {
  name: 'Flashlightvariantfilled',
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

export type FlashlightvariantfilledProps = React.ComponentProps<typeof Flashlightvariantfilled>
