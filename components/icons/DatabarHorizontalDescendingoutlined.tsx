import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Horizontal DescendingOutlined.svg'

/**
 * DatabarHorizontalDescendingoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarHorizontalDescendingoutlined />
 * <DatabarHorizontalDescendingoutlined width="$6" height="$6" />
 * <DatabarHorizontalDescendingoutlined color="$color.primary" />
 * ```
 */
export const DatabarHorizontalDescendingoutlined = styled(Svg, {
  name: 'DatabarHorizontalDescendingoutlined',
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

export type DatabarHorizontalDescendingoutlinedProps = React.ComponentProps<typeof DatabarHorizontalDescendingoutlined>
