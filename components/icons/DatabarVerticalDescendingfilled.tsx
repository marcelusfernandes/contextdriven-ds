import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Vertical DescendingFilled.svg'

/**
 * DatabarVerticalDescendingfilled Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarVerticalDescendingfilled />
 * <DatabarVerticalDescendingfilled width="$6" height="$6" />
 * <DatabarVerticalDescendingfilled color="$color.primary" />
 * ```
 */
export const DatabarVerticalDescendingfilled = styled(Svg, {
  name: 'DatabarVerticalDescendingfilled',
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

export type DatabarVerticalDescendingfilledProps = React.ComponentProps<typeof DatabarVerticalDescendingfilled>
