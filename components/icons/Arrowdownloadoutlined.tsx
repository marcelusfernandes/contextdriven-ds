import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowDownloadOutlined.svg'

/**
 * Arrowdownloadoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowdownloadoutlined />
 * <Arrowdownloadoutlined width="$6" height="$6" />
 * <Arrowdownloadoutlined color="$color.primary" />
 * ```
 */
export const Arrowdownloadoutlined = styled(Svg, {
  name: 'Arrowdownloadoutlined',
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

export type ArrowdownloadoutlinedProps = React.ComponentProps<typeof Arrowdownloadoutlined>
