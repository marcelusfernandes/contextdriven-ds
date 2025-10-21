import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MinusCircleFilled.svg'

/**
 * Minuscirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Minuscirclefilled />
 * <Minuscirclefilled width="$6" height="$6" />
 * <Minuscirclefilled color="$color.primary" />
 * ```
 */
export const Minuscirclefilled = styled(Svg, {
  name: 'Minuscirclefilled',
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

export type MinuscirclefilledProps = React.ComponentProps<typeof Minuscirclefilled>
