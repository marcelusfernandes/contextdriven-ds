import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CategoryOutlined.svg'

/**
 * Categoryoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Categoryoutlined />
 * <Categoryoutlined width="$6" height="$6" />
 * <Categoryoutlined color="$color.primary" />
 * ```
 */
export const Categoryoutlined = styled(Svg, {
  name: 'Categoryoutlined',
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

export type CategoryoutlinedProps = React.ComponentProps<typeof Categoryoutlined>
