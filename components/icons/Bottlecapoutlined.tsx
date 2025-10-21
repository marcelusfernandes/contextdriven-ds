import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BottleCapOutlined.svg'

/**
 * Bottlecapoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Bottlecapoutlined />
 * <Bottlecapoutlined width="$6" height="$6" />
 * <Bottlecapoutlined color="$color.primary" />
 * ```
 */
export const Bottlecapoutlined = styled(Svg, {
  name: 'Bottlecapoutlined',
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

export type BottlecapoutlinedProps = React.ComponentProps<typeof Bottlecapoutlined>
