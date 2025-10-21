import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StoreEditOutlined.svg'

/**
 * Storeeditoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Storeeditoutlined />
 * <Storeeditoutlined width="$6" height="$6" />
 * <Storeeditoutlined color="$color.primary" />
 * ```
 */
export const Storeeditoutlined = styled(Svg, {
  name: 'Storeeditoutlined',
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

export type StoreeditoutlinedProps = React.ComponentProps<typeof Storeeditoutlined>
