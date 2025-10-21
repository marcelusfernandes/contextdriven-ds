import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MargaritaOutlined.svg'

/**
 * Margaritaoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Margaritaoutlined />
 * <Margaritaoutlined width="$6" height="$6" />
 * <Margaritaoutlined color="$color.primary" />
 * ```
 */
export const Margaritaoutlined = styled(Svg, {
  name: 'Margaritaoutlined',
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

export type MargaritaoutlinedProps = React.ComponentProps<typeof Margaritaoutlined>
