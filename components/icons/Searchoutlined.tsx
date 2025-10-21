import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SearchOutlined.svg'

/**
 * Searchoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Searchoutlined />
 * <Searchoutlined width="$6" height="$6" />
 * <Searchoutlined color="$color.primary" />
 * ```
 */
export const Searchoutlined = styled(Svg, {
  name: 'Searchoutlined',
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

export type SearchoutlinedProps = React.ComponentProps<typeof Searchoutlined>
