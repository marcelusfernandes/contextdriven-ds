import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookOpenOutlined.svg'

/**
 * Bookopenoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Bookopenoutlined />
 * <Bookopenoutlined width="$6" height="$6" />
 * <Bookopenoutlined color="$color.primary" />
 * ```
 */
export const Bookopenoutlined = styled(Svg, {
  name: 'Bookopenoutlined',
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

export type BookopenoutlinedProps = React.ComponentProps<typeof Bookopenoutlined>
