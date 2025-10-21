import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottle Multiple AddOutlined.svg'

/**
 * BeerbottleMultipleAddoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <BeerbottleMultipleAddoutlined />
 * <BeerbottleMultipleAddoutlined width="$6" height="$6" />
 * <BeerbottleMultipleAddoutlined color="$color.primary" />
 * ```
 */
export const BeerbottleMultipleAddoutlined = styled(Svg, {
  name: 'BeerbottleMultipleAddoutlined',
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

export type BeerbottleMultipleAddoutlinedProps = React.ComponentProps<typeof BeerbottleMultipleAddoutlined>
