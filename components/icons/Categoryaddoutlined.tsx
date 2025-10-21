import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CategoryAddOutlined.svg'

/**
 * Categoryaddoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Categoryaddoutlined />
 * <Categoryaddoutlined width="$6" height="$6" />
 * <Categoryaddoutlined color="$color.primary" />
 * ```
 */
export const Categoryaddoutlined = styled(Svg, {
  name: 'Categoryaddoutlined',
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

export type CategoryaddoutlinedProps = React.ComponentProps<typeof Categoryaddoutlined>
