import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CategoryAddFilled.svg'

/**
 * Categoryaddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Categoryaddfilled />
 * <Categoryaddfilled width="$6" height="$6" />
 * <Categoryaddfilled color="$color.primary" />
 * ```
 */
export const Categoryaddfilled = styled(Svg, {
  name: 'Categoryaddfilled',
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

export type CategoryaddfilledProps = React.ComponentProps<typeof Categoryaddfilled>
