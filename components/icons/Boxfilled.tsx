import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxFilled.svg'

/**
 * Boxfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxfilled />
 * <Boxfilled width="$6" height="$6" />
 * <Boxfilled color="$color.primary" />
 * ```
 */
export const Boxfilled = styled(Svg, {
  name: 'Boxfilled',
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

export type BoxfilledProps = React.ComponentProps<typeof Boxfilled>
