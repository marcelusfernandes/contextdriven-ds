import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FolderFilled.svg'

/**
 * Folderfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Folderfilled />
 * <Folderfilled width="$6" height="$6" />
 * <Folderfilled color="$color.primary" />
 * ```
 */
export const Folderfilled = styled(Svg, {
  name: 'Folderfilled',
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

export type FolderfilledProps = React.ComponentProps<typeof Folderfilled>
