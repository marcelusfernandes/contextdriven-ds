import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowDownloadFilled.svg'

/**
 * Arrowdownloadfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowdownloadfilled />
 * <Arrowdownloadfilled width="$6" height="$6" />
 * <Arrowdownloadfilled color="$color.primary" />
 * ```
 */
export const Arrowdownloadfilled = styled(Svg, {
  name: 'Arrowdownloadfilled',
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

export type ArrowdownloadfilledProps = React.ComponentProps<typeof Arrowdownloadfilled>
