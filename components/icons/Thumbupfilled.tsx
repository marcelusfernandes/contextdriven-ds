import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThumbUpFilled.svg'

/**
 * Thumbupfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Thumbupfilled />
 * <Thumbupfilled width="$6" height="$6" />
 * <Thumbupfilled color="$color.primary" />
 * ```
 */
export const Thumbupfilled = styled(Svg, {
  name: 'Thumbupfilled',
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

export type ThumbupfilledProps = React.ComponentProps<typeof Thumbupfilled>
