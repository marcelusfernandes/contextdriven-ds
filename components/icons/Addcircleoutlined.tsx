import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AddCircleOutlined.svg'

/**
 * Addcircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Addcircleoutlined />
 * <Addcircleoutlined width="$6" height="$6" />
 * <Addcircleoutlined color="$color.primary" />
 * ```
 */
export const Addcircleoutlined = styled(Svg, {
  name: 'Addcircleoutlined',
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

export type AddcircleoutlinedProps = React.ComponentProps<typeof Addcircleoutlined>
