import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DesktopOutlined.svg'

/**
 * Desktopoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Desktopoutlined />
 * <Desktopoutlined width="$6" height="$6" />
 * <Desktopoutlined color="$color.primary" />
 * ```
 */
export const Desktopoutlined = styled(Svg, {
  name: 'Desktopoutlined',
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

export type DesktopoutlinedProps = React.ComponentProps<typeof Desktopoutlined>
