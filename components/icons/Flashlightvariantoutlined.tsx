import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FlashlightVariantOutlined.svg'

/**
 * Flashlightvariantoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Flashlightvariantoutlined />
 * <Flashlightvariantoutlined width="$6" height="$6" />
 * <Flashlightvariantoutlined color="$color.primary" />
 * ```
 */
export const Flashlightvariantoutlined = styled(Svg, {
  name: 'Flashlightvariantoutlined',
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

export type FlashlightvariantoutlinedProps = React.ComponentProps<typeof Flashlightvariantoutlined>
