import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottleFilled.svg'

/**
 * Beerbottlefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Beerbottlefilled />
 * <Beerbottlefilled width="$6" height="$6" />
 * <Beerbottlefilled color="$color.primary" />
 * ```
 */
export const Beerbottlefilled = styled(Svg, {
  name: 'Beerbottlefilled',
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

export type BeerbottlefilledProps = React.ComponentProps<typeof Beerbottlefilled>
