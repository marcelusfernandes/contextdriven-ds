import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ThumbDownFilled.svg'

/**
 * Thumbdownfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Thumbdownfilled />
 * <Thumbdownfilled width="$6" height="$6" />
 * <Thumbdownfilled color="$color.primary" />
 * ```
 */
export const Thumbdownfilled = styled(Svg, {
  name: 'Thumbdownfilled',
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

export type ThumbdownfilledProps = React.ComponentProps<typeof Thumbdownfilled>
