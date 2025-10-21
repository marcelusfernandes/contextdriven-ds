import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowUploadFilled.svg'

/**
 * Arrowuploadfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowuploadfilled />
 * <Arrowuploadfilled width="$6" height="$6" />
 * <Arrowuploadfilled color="$color.primary" />
 * ```
 */
export const Arrowuploadfilled = styled(Svg, {
  name: 'Arrowuploadfilled',
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

export type ArrowuploadfilledProps = React.ComponentProps<typeof Arrowuploadfilled>
