import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EarthOutlined.svg'

/**
 * Earthoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Earthoutlined />
 * <Earthoutlined width="$6" height="$6" />
 * <Earthoutlined color="$color.primary" />
 * ```
 */
export const Earthoutlined = styled(Svg, {
  name: 'Earthoutlined',
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

export type EarthoutlinedProps = React.ComponentProps<typeof Earthoutlined>
