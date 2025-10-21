import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowUploadOutlined.svg'

/**
 * Arrowuploadoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowuploadoutlined />
 * <Arrowuploadoutlined width="$6" height="$6" />
 * <Arrowuploadoutlined color="$color.primary" />
 * ```
 */
export const Arrowuploadoutlined = styled(Svg, {
  name: 'Arrowuploadoutlined',
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

export type ArrowuploadoutlinedProps = React.ComponentProps<typeof Arrowuploadoutlined>
