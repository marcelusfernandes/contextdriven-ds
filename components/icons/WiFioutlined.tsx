import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Wi-FiOutlined.svg'

/**
 * WiFioutlined Icon Component
 * 
 * @example
 * ```tsx
 * <WiFioutlined />
 * <WiFioutlined width="$6" height="$6" />
 * <WiFioutlined color="$color.primary" />
 * ```
 */
export const WiFioutlined = styled(Svg, {
  name: 'WiFioutlined',
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

export type WiFioutlinedProps = React.ComponentProps<typeof WiFioutlined>
