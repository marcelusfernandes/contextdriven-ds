import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottle Multiple AddFilled.svg'

/**
 * BeerbottleMultipleAddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <BeerbottleMultipleAddfilled />
 * <BeerbottleMultipleAddfilled width="$6" height="$6" />
 * <BeerbottleMultipleAddfilled color="$color.primary" />
 * ```
 */
export const BeerbottleMultipleAddfilled = styled(Svg, {
  name: 'BeerbottleMultipleAddfilled',
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

export type BeerbottleMultipleAddfilledProps = React.ComponentProps<typeof BeerbottleMultipleAddfilled>
