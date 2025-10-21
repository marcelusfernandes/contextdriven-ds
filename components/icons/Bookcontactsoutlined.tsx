import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookContactsOutlined.svg'

/**
 * Bookcontactsoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Bookcontactsoutlined />
 * <Bookcontactsoutlined width="$6" height="$6" />
 * <Bookcontactsoutlined color="$color.primary" />
 * ```
 */
export const Bookcontactsoutlined = styled(Svg, {
  name: 'Bookcontactsoutlined',
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

export type BookcontactsoutlinedProps = React.ComponentProps<typeof Bookcontactsoutlined>
