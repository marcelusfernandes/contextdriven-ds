import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PhoneStarOutlined.svg'

/**
 * Phonestaroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Phonestaroutlined />
 * <Phonestaroutlined width="$6" height="$6" />
 * <Phonestaroutlined color="$color.primary" />
 * ```
 */
export const Phonestaroutlined = styled(Svg, {
  name: 'Phonestaroutlined',
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

export type PhonestaroutlinedProps = React.ComponentProps<typeof Phonestaroutlined>
