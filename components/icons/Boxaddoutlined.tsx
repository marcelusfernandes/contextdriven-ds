import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxAddOutlined.svg'

/**
 * Boxaddoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Boxaddoutlined />
 * <Boxaddoutlined width="$6" height="$6" />
 * <Boxaddoutlined color="$color.primary" />
 * ```
 */
export const Boxaddoutlined = styled(Svg, {
  name: 'Boxaddoutlined',
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

export type BoxaddoutlinedProps = React.ComponentProps<typeof Boxaddoutlined>
