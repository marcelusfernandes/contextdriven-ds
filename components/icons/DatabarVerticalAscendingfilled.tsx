import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Vertical AscendingFilled.svg'

/**
 * DatabarVerticalAscendingfilled Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarVerticalAscendingfilled />
 * <DatabarVerticalAscendingfilled width="$6" height="$6" />
 * <DatabarVerticalAscendingfilled color="$color.primary" />
 * ```
 */
export const DatabarVerticalAscendingfilled = styled(Svg, {
  name: 'DatabarVerticalAscendingfilled',
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

export type DatabarVerticalAscendingfilledProps = React.ComponentProps<typeof DatabarVerticalAscendingfilled>
