import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LockOpenOutlined.svg'

/**
 * Lockopenoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Lockopenoutlined />
 * <Lockopenoutlined width="$6" height="$6" />
 * <Lockopenoutlined color="$color.primary" />
 * ```
 */
export const Lockopenoutlined = styled(Svg, {
  name: 'Lockopenoutlined',
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

export type LockopenoutlinedProps = React.ComponentProps<typeof Lockopenoutlined>
