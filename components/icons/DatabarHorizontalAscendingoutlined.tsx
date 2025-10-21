import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Horizontal AscendingOutlined.svg'

/**
 * DatabarHorizontalAscendingoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarHorizontalAscendingoutlined />
 * <DatabarHorizontalAscendingoutlined width="$6" height="$6" />
 * <DatabarHorizontalAscendingoutlined color="$color.primary" />
 * ```
 */
export const DatabarHorizontalAscendingoutlined = styled(Svg, {
  name: 'DatabarHorizontalAscendingoutlined',
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

export type DatabarHorizontalAscendingoutlinedProps = React.ComponentProps<typeof DatabarHorizontalAscendingoutlined>
