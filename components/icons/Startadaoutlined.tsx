import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarTaDaOutlined.svg'

/**
 * Startadaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Startadaoutlined />
 * <Startadaoutlined width="$6" height="$6" />
 * <Startadaoutlined color="$color.primary" />
 * ```
 */
export const Startadaoutlined = styled(Svg, {
  name: 'Startadaoutlined',
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

export type StartadaoutlinedProps = React.ComponentProps<typeof Startadaoutlined>
