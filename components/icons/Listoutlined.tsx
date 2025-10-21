import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ListOutlined.svg'

/**
 * Listoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Listoutlined />
 * <Listoutlined width="$6" height="$6" />
 * <Listoutlined color="$color.primary" />
 * ```
 */
export const Listoutlined = styled(Svg, {
  name: 'Listoutlined',
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

export type ListoutlinedProps = React.ComponentProps<typeof Listoutlined>
