import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreEditFilled.svg'

/**
 * Storeeditfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Storeeditfilled />
 * <Storeeditfilled width="$6" height="$6" />
 * <Storeeditfilled color="$color.primary" />
 * ```
 */
export const Storeeditfilled = styled(Svg, {
  name: 'Storeeditfilled',
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

export type StoreeditfilledProps = React.ComponentProps<typeof Storeeditfilled>
