import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayFilled.svg'

/**
 * Rayfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Rayfilled />
 * <Rayfilled width="$6" height="$6" />
 * <Rayfilled color="$color.primary" />
 * ```
 */
export const Rayfilled = styled(Svg, {
  name: 'Rayfilled',
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

export type RayfilledProps = React.ComponentProps<typeof Rayfilled>
