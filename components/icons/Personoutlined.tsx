import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonOutlined.svg'

/**
 * Personoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Personoutlined />
 * <Personoutlined width="$6" height="$6" />
 * <Personoutlined color="$color.primary" />
 * ```
 */
export const Personoutlined = styled(Svg, {
  name: 'Personoutlined',
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

export type PersonoutlinedProps = React.ComponentProps<typeof Personoutlined>
