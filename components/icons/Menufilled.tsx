import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MenuFilled.svg'

/**
 * Menufilled Icon Component
 * 
 * @example
 * ```tsx
 * <Menufilled />
 * <Menufilled width="$6" height="$6" />
 * <Menufilled color="$color.primary" />
 * ```
 */
export const Menufilled = styled(Svg, {
  name: 'Menufilled',
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

export type MenufilledProps = React.ComponentProps<typeof Menufilled>
