import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FolderOutlined.svg'

/**
 * Folderoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Folderoutlined />
 * <Folderoutlined width="$6" height="$6" />
 * <Folderoutlined color="$color.primary" />
 * ```
 */
export const Folderoutlined = styled(Svg, {
  name: 'Folderoutlined',
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

export type FolderoutlinedProps = React.ComponentProps<typeof Folderoutlined>
