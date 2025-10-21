import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreFilled.svg'

/**
 * Storefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Storefilled />
 * <Storefilled width="$6" height="$6" />
 * <Storefilled color="$color.primary" />
 * ```
 */
export const Storefilled = styled(Svg, {
  name: 'Storefilled',
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

export type StorefilledProps = React.ComponentProps<typeof Storefilled>
