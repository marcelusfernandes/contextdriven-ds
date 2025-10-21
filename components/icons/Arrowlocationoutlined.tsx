import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowLocationOutlined.svg'

/**
 * Arrowlocationoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowlocationoutlined />
 * <Arrowlocationoutlined width="$6" height="$6" />
 * <Arrowlocationoutlined color="$color.primary" />
 * ```
 */
export const Arrowlocationoutlined = styled(Svg, {
  name: 'Arrowlocationoutlined',
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

export type ArrowlocationoutlinedProps = React.ComponentProps<typeof Arrowlocationoutlined>
