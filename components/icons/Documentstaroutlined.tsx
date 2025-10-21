import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentStarOutlined.svg'

/**
 * Documentstaroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentstaroutlined />
 * <Documentstaroutlined width="$6" height="$6" />
 * <Documentstaroutlined color="$color.primary" />
 * ```
 */
export const Documentstaroutlined = styled(Svg, {
  name: 'Documentstaroutlined',
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

export type DocumentstaroutlinedProps = React.ComponentProps<typeof Documentstaroutlined>
