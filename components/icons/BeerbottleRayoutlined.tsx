import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BeerBottle RayOutlined.svg'

/**
 * BeerbottleRayoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <BeerbottleRayoutlined />
 * <BeerbottleRayoutlined width="$6" height="$6" />
 * <BeerbottleRayoutlined color="$color.primary" />
 * ```
 */
export const BeerbottleRayoutlined = styled(Svg, {
  name: 'BeerbottleRayoutlined',
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

export type BeerbottleRayoutlinedProps = React.ComponentProps<typeof BeerbottleRayoutlined>
