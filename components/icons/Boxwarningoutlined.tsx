import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxWarningOutlined.svg'

/**
 * Boxwarningoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Boxwarningoutlined />
 * <Boxwarningoutlined width="$6" height="$6" />
 * <Boxwarningoutlined color="$color.primary" />
 * ```
 */
export const Boxwarningoutlined = styled(Svg, {
  name: 'Boxwarningoutlined',
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

export type BoxwarningoutlinedProps = React.ComponentProps<typeof Boxwarningoutlined>
