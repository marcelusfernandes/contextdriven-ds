import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckmarkFilled.svg'

/**
 * Checkmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Checkmarkfilled />
 * <Checkmarkfilled width="$6" height="$6" />
 * <Checkmarkfilled color="$color.primary" />
 * ```
 */
export const Checkmarkfilled = styled(Svg, {
  name: 'Checkmarkfilled',
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

export type CheckmarkfilledProps = React.ComponentProps<typeof Checkmarkfilled>
