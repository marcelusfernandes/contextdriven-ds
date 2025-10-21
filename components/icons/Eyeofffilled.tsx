import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EyeOffFilled.svg'

/**
 * Eyeofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Eyeofffilled />
 * <Eyeofffilled width="$6" height="$6" />
 * <Eyeofffilled color="$color.primary" />
 * ```
 */
export const Eyeofffilled = styled(Svg, {
  name: 'Eyeofffilled',
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

export type EyeofffilledProps = React.ComponentProps<typeof Eyeofffilled>
