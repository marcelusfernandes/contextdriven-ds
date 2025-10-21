import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TacoOutlined.svg'

/**
 * Tacooutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Tacooutlined />
 * <Tacooutlined width="$6" height="$6" />
 * <Tacooutlined color="$color.primary" />
 * ```
 */
export const Tacooutlined = styled(Svg, {
  name: 'Tacooutlined',
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

export type TacooutlinedProps = React.ComponentProps<typeof Tacooutlined>
