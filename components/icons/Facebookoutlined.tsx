import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/FacebookOutlined.svg'

/**
 * Facebookoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Facebookoutlined />
 * <Facebookoutlined width="$6" height="$6" />
 * <Facebookoutlined color="$color.primary" />
 * ```
 */
export const Facebookoutlined = styled(Svg, {
  name: 'Facebookoutlined',
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

export type FacebookoutlinedProps = React.ComponentProps<typeof Facebookoutlined>
