import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightFilled.svg'

/**
 * Flashlightfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightfilled />
 * <Flashlightfilled width="$6" height="$6" />
 * <Flashlightfilled color="$color.primary" />
 * ```
 */
export const Flashlightfilled = styled(Svg, {
  name: 'Flashlightfilled',
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

export type FlashlightfilledProps = React.ComponentProps<typeof Flashlightfilled>
