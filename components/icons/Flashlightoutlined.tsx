import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightOutlined.svg'

/**
 * Flashlightoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightoutlined />
 * <Flashlightoutlined width="$6" height="$6" />
 * <Flashlightoutlined color="$color.primary" />
 * ```
 */
export const Flashlightoutlined = styled(Svg, {
  name: 'Flashlightoutlined',
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

export type FlashlightoutlinedProps = React.ComponentProps<typeof Flashlightoutlined>
