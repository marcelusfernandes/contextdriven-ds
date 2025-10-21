import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PhoneOutlined.svg'

/**
 * Phoneoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Phoneoutlined />
 * <Phoneoutlined width="$6" height="$6" />
 * <Phoneoutlined color="$color.primary" />
 * ```
 */
export const Phoneoutlined = styled(Svg, {
  name: 'Phoneoutlined',
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

export type PhoneoutlinedProps = React.ComponentProps<typeof Phoneoutlined>
