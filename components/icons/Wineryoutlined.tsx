import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WineryOutlined.svg'

/**
 * Wineryoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Wineryoutlined />
 * <Wineryoutlined width="$6" height="$6" />
 * <Wineryoutlined color="$color.primary" />
 * ```
 */
export const Wineryoutlined = styled(Svg, {
  name: 'Wineryoutlined',
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

export type WineryoutlinedProps = React.ComponentProps<typeof Wineryoutlined>
