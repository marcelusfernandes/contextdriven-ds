import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottleOutlined.svg'

/**
 * Beerbottleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Beerbottleoutlined />
 * <Beerbottleoutlined width="$6" height="$6" />
 * <Beerbottleoutlined color="$color.primary" />
 * ```
 */
export const Beerbottleoutlined = styled(Svg, {
  name: 'Beerbottleoutlined',
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

export type BeerbottleoutlinedProps = React.ComponentProps<typeof Beerbottleoutlined>
