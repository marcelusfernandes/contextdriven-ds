import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZéFilled.svg'

/**
 * Zéfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Zéfilled />
 * <Zéfilled width="$6" height="$6" />
 * <Zéfilled color="$color.primary" />
 * ```
 */
export const Zéfilled = styled(Svg, {
  name: 'Zéfilled',
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

export type ZéfilledProps = React.ComponentProps<typeof Zéfilled>
