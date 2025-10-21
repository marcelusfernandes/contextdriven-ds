import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightOffFilled.svg'

/**
 * Flashlightofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightofffilled />
 * <Flashlightofffilled width="$6" height="$6" />
 * <Flashlightofffilled color="$color.primary" />
 * ```
 */
export const Flashlightofffilled = styled(Svg, {
  name: 'Flashlightofffilled',
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

export type FlashlightofffilledProps = React.ComponentProps<typeof Flashlightofffilled>
