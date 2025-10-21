import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Horizontal AscendingFilled.svg'

/**
 * DatabarHorizontalAscendingfilled Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarHorizontalAscendingfilled />
 * <DatabarHorizontalAscendingfilled width="$6" height="$6" />
 * <DatabarHorizontalAscendingfilled color="$color.primary" />
 * ```
 */
export const DatabarHorizontalAscendingfilled = styled(Svg, {
  name: 'DatabarHorizontalAscendingfilled',
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

export type DatabarHorizontalAscendingfilledProps = React.ComponentProps<typeof DatabarHorizontalAscendingfilled>
