import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SparklingOutlined.svg'

/**
 * Sparklingoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Sparklingoutlined />
 * <Sparklingoutlined width="$6" height="$6" />
 * <Sparklingoutlined color="$color.primary" />
 * ```
 */
export const Sparklingoutlined = styled(Svg, {
  name: 'Sparklingoutlined',
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

export type SparklingoutlinedProps = React.ComponentProps<typeof Sparklingoutlined>
