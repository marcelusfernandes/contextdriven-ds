import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayOutlined.svg'

/**
 * Rayoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Rayoutlined />
 * <Rayoutlined width="$6" height="$6" />
 * <Rayoutlined color="$color.primary" />
 * ```
 */
export const Rayoutlined = styled(Svg, {
  name: 'Rayoutlined',
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

export type RayoutlinedProps = React.ComponentProps<typeof Rayoutlined>
