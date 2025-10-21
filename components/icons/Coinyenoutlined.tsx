import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CoinYenOutlined.svg'

/**
 * Coinyenoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Coinyenoutlined />
 * <Coinyenoutlined width="$6" height="$6" />
 * <Coinyenoutlined color="$color.primary" />
 * ```
 */
export const Coinyenoutlined = styled(Svg, {
  name: 'Coinyenoutlined',
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

export type CoinyenoutlinedProps = React.ComponentProps<typeof Coinyenoutlined>
