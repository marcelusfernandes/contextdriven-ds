import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxErrorOutlined.svg'

/**
 * Boxerroroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Boxerroroutlined />
 * <Boxerroroutlined width="$6" height="$6" />
 * <Boxerroroutlined color="$color.primary" />
 * ```
 */
export const Boxerroroutlined = styled(Svg, {
  name: 'Boxerroroutlined',
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

export type BoxerroroutlinedProps = React.ComponentProps<typeof Boxerroroutlined>
