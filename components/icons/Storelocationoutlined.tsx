import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreLocationOutlined.svg'

/**
 * Storelocationoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Storelocationoutlined />
 * <Storelocationoutlined width="$6" height="$6" />
 * <Storelocationoutlined color="$color.primary" />
 * ```
 */
export const Storelocationoutlined = styled(Svg, {
  name: 'Storelocationoutlined',
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

export type StorelocationoutlinedProps = React.ComponentProps<typeof Storelocationoutlined>
