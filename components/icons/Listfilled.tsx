import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ListFilled.svg'

/**
 * Listfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Listfilled />
 * <Listfilled width="$6" height="$6" />
 * <Listfilled color="$color.primary" />
 * ```
 */
export const Listfilled = styled(Svg, {
  name: 'Listfilled',
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

export type ListfilledProps = React.ComponentProps<typeof Listfilled>
