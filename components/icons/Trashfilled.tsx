import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TrashFilled.svg'

/**
 * Trashfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Trashfilled />
 * <Trashfilled width="$6" height="$6" />
 * <Trashfilled color="$color.primary" />
 * ```
 */
export const Trashfilled = styled(Svg, {
  name: 'Trashfilled',
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

export type TrashfilledProps = React.ComponentProps<typeof Trashfilled>
