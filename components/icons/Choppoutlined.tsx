import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChoppOutlined.svg'

/**
 * Choppoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Choppoutlined />
 * <Choppoutlined width="$6" height="$6" />
 * <Choppoutlined color="$color.primary" />
 * ```
 */
export const Choppoutlined = styled(Svg, {
  name: 'Choppoutlined',
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

export type ChoppoutlinedProps = React.ComponentProps<typeof Choppoutlined>
