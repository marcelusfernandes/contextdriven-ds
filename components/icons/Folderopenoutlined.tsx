import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FolderOpenOutlined.svg'

/**
 * Folderopenoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Folderopenoutlined />
 * <Folderopenoutlined width="$6" height="$6" />
 * <Folderopenoutlined color="$color.primary" />
 * ```
 */
export const Folderopenoutlined = styled(Svg, {
  name: 'Folderopenoutlined',
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

export type FolderopenoutlinedProps = React.ComponentProps<typeof Folderopenoutlined>
