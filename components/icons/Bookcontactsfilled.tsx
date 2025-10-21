import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BookContactsFilled.svg'

/**
 * Bookcontactsfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bookcontactsfilled />
 * <Bookcontactsfilled width="$6" height="$6" />
 * <Bookcontactsfilled color="$color.primary" />
 * ```
 */
export const Bookcontactsfilled = styled(Svg, {
  name: 'Bookcontactsfilled',
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

export type BookcontactsfilledProps = React.ComponentProps<typeof Bookcontactsfilled>
