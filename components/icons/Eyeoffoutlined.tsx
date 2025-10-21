import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EyeOffOutlined.svg'

/**
 * Eyeoffoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Eyeoffoutlined />
 * <Eyeoffoutlined width="$6" height="$6" />
 * <Eyeoffoutlined color="$color.primary" />
 * ```
 */
export const Eyeoffoutlined = styled(Svg, {
  name: 'Eyeoffoutlined',
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

export type EyeoffoutlinedProps = React.ComponentProps<typeof Eyeoffoutlined>
