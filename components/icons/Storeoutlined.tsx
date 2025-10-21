import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreOutlined.svg'

/**
 * Storeoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Storeoutlined />
 * <Storeoutlined width="$6" height="$6" />
 * <Storeoutlined color="$color.primary" />
 * ```
 */
export const Storeoutlined = styled(Svg, {
  name: 'Storeoutlined',
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

export type StoreoutlinedProps = React.ComponentProps<typeof Storeoutlined>
