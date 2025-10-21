import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FilterOutlined.svg'

/**
 * Filteroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Filteroutlined />
 * <Filteroutlined width="$6" height="$6" />
 * <Filteroutlined color="$color.primary" />
 * ```
 */
export const Filteroutlined = styled(Svg, {
  name: 'Filteroutlined',
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

export type FilteroutlinedProps = React.ComponentProps<typeof Filteroutlined>
