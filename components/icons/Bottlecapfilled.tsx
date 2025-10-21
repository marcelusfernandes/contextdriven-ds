import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BottleCapFilled.svg'

/**
 * Bottlecapfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bottlecapfilled />
 * <Bottlecapfilled width="$6" height="$6" />
 * <Bottlecapfilled color="$color.primary" />
 * ```
 */
export const Bottlecapfilled = styled(Svg, {
  name: 'Bottlecapfilled',
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

export type BottlecapfilledProps = React.ComponentProps<typeof Bottlecapfilled>
