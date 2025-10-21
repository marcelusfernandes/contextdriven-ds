import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipBack 10Filled.svg'

/**
 * Skipback10filled Icon Component
 * 
 * @example
 * ```tsx
 * <Skipback10filled />
 * <Skipback10filled width="$6" height="$6" />
 * <Skipback10filled color="$color.primary" />
 * ```
 */
export const Skipback10filled = styled(Svg, {
  name: 'Skipback10filled',
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

export type Skipback10filledProps = React.ComponentProps<typeof Skipback10filled>
