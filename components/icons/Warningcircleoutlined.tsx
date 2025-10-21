import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WarningCircleOutlined.svg'

/**
 * Warningcircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Warningcircleoutlined />
 * <Warningcircleoutlined width="$6" height="$6" />
 * <Warningcircleoutlined color="$color.primary" />
 * ```
 */
export const Warningcircleoutlined = styled(Svg, {
  name: 'Warningcircleoutlined',
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

export type WarningcircleoutlinedProps = React.ComponentProps<typeof Warningcircleoutlined>
