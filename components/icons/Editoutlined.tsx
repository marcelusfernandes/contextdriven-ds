import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EditOutlined.svg'

/**
 * Editoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Editoutlined />
 * <Editoutlined width="$6" height="$6" />
 * <Editoutlined color="$color.primary" />
 * ```
 */
export const Editoutlined = styled(Svg, {
  name: 'Editoutlined',
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

export type EditoutlinedProps = React.ComponentProps<typeof Editoutlined>
