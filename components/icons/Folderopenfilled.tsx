import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FolderOpenFilled.svg'

/**
 * Folderopenfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Folderopenfilled />
 * <Folderopenfilled width="$6" height="$6" />
 * <Folderopenfilled color="$color.primary" />
 * ```
 */
export const Folderopenfilled = styled(Svg, {
  name: 'Folderopenfilled',
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

export type FolderopenfilledProps = React.ComponentProps<typeof Folderopenfilled>
