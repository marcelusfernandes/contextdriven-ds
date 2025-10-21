import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataBar Vertical AscendingOutlined.svg'

/**
 * DatabarVerticalAscendingoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <DatabarVerticalAscendingoutlined />
 * <DatabarVerticalAscendingoutlined width="$6" height="$6" />
 * <DatabarVerticalAscendingoutlined color="$color.primary" />
 * ```
 */
export const DatabarVerticalAscendingoutlined = styled(Svg, {
  name: 'DatabarVerticalAscendingoutlined',
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

export type DatabarVerticalAscendingoutlinedProps = React.ComponentProps<typeof DatabarVerticalAscendingoutlined>
