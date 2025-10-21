import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EditFilled.svg'

/**
 * Editfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Editfilled />
 * <Editfilled width="$6" height="$6" />
 * <Editfilled color="$color.primary" />
 * ```
 */
export const Editfilled = styled(Svg, {
  name: 'Editfilled',
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

export type EditfilledProps = React.ComponentProps<typeof Editfilled>
