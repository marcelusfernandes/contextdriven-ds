import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EqualOutlined.svg'

/**
 * Equaloutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Equaloutlined />
 * <Equaloutlined width="$6" height="$6" />
 * <Equaloutlined color="$color.primary" />
 * ```
 */
export const Equaloutlined = styled(Svg, {
  name: 'Equaloutlined',
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

export type EqualoutlinedProps = React.ComponentProps<typeof Equaloutlined>
