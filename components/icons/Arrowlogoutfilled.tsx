import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowLogoutFilled.svg'

/**
 * Arrowlogoutfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowlogoutfilled />
 * <Arrowlogoutfilled width="$6" height="$6" />
 * <Arrowlogoutfilled color="$color.primary" />
 * ```
 */
export const Arrowlogoutfilled = styled(Svg, {
  name: 'Arrowlogoutfilled',
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

export type ArrowlogoutfilledProps = React.ComponentProps<typeof Arrowlogoutfilled>
