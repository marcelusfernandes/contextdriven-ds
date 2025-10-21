import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Vertical DescendingOutlined.svg'

/**
 * DatabarVerticalDescendingoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarVerticalDescendingoutlined />
 * <DatabarVerticalDescendingoutlined width="$6" height="$6" />
 * <DatabarVerticalDescendingoutlined color="$color.primary" />
 * ```
 */
export const DatabarVerticalDescendingoutlined = styled(Svg, {
  name: 'DatabarVerticalDescendingoutlined',
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

export type DatabarVerticalDescendingoutlinedProps = React.ComponentProps<typeof DatabarVerticalDescendingoutlined>
