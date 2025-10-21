import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MenuOutlined.svg'

/**
 * Menuoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Menuoutlined />
 * <Menuoutlined width="$6" height="$6" />
 * <Menuoutlined color="$color.primary" />
 * ```
 */
export const Menuoutlined = styled(Svg, {
  name: 'Menuoutlined',
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

export type MenuoutlinedProps = React.ComponentProps<typeof Menuoutlined>
