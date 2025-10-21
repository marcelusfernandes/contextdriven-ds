import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowLocationFilled.svg'

/**
 * Arrowlocationfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowlocationfilled />
 * <Arrowlocationfilled width="$6" height="$6" />
 * <Arrowlocationfilled color="$color.primary" />
 * ```
 */
export const Arrowlocationfilled = styled(Svg, {
  name: 'Arrowlocationfilled',
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

export type ArrowlocationfilledProps = React.ComponentProps<typeof Arrowlocationfilled>
