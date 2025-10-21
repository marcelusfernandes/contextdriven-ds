import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AppleOutlined.svg'

/**
 * Appleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Appleoutlined />
 * <Appleoutlined width="$6" height="$6" />
 * <Appleoutlined color="$color.primary" />
 * ```
 */
export const Appleoutlined = styled(Svg, {
  name: 'Appleoutlined',
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

export type AppleoutlinedProps = React.ComponentProps<typeof Appleoutlined>
