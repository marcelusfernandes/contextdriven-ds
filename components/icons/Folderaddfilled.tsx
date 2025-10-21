import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FolderAddFilled.svg'

/**
 * Folderaddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Folderaddfilled />
 * <Folderaddfilled width="$6" height="$6" />
 * <Folderaddfilled color="$color.primary" />
 * ```
 */
export const Folderaddfilled = styled(Svg, {
  name: 'Folderaddfilled',
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

export type FolderaddfilledProps = React.ComponentProps<typeof Folderaddfilled>
