import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReturnableOutlined.svg'

/**
 * Returnableoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Returnableoutlined />
 * <Returnableoutlined width="$6" height="$6" />
 * <Returnableoutlined color="$color.primary" />
 * ```
 */
export const Returnableoutlined = styled(Svg, {
  name: 'Returnableoutlined',
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

export type ReturnableoutlinedProps = React.ComponentProps<typeof Returnableoutlined>
