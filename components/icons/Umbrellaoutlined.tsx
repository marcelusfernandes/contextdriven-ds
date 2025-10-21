import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/UmbrellaOutlined.svg'

/**
 * Umbrellaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Umbrellaoutlined />
 * <Umbrellaoutlined width="$6" height="$6" />
 * <Umbrellaoutlined color="$color.primary" />
 * ```
 */
export const Umbrellaoutlined = styled(Svg, {
  name: 'Umbrellaoutlined',
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

export type UmbrellaoutlinedProps = React.ComponentProps<typeof Umbrellaoutlined>
