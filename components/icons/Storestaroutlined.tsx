import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreStarOutlined.svg'

/**
 * Storestaroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Storestaroutlined />
 * <Storestaroutlined width="$6" height="$6" />
 * <Storestaroutlined color="$color.primary" />
 * ```
 */
export const Storestaroutlined = styled(Svg, {
  name: 'Storestaroutlined',
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

export type StorestaroutlinedProps = React.ComponentProps<typeof Storestaroutlined>
