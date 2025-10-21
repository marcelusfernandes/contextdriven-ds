import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PercentOutlined.svg'

/**
 * Percentoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Percentoutlined />
 * <Percentoutlined width="$6" height="$6" />
 * <Percentoutlined color="$color.primary" />
 * ```
 */
export const Percentoutlined = styled(Svg, {
  name: 'Percentoutlined',
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

export type PercentoutlinedProps = React.ComponentProps<typeof Percentoutlined>
