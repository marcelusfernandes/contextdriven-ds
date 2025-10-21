import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DismissOutlined.svg'

/**
 * Dismissoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Dismissoutlined />
 * <Dismissoutlined width="$6" height="$6" />
 * <Dismissoutlined color="$color.primary" />
 * ```
 */
export const Dismissoutlined = styled(Svg, {
  name: 'Dismissoutlined',
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

export type DismissoutlinedProps = React.ComponentProps<typeof Dismissoutlined>
