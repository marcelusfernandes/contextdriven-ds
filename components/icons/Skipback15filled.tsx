import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipBack 15Filled.svg'

/**
 * Skipback15filled Icon Component
 * 
 * @example
 * ```tsx
 * <Skipback15filled />
 * <Skipback15filled width="$6" height="$6" />
 * <Skipback15filled color="$color.primary" />
 * ```
 */
export const Skipback15filled = styled(Svg, {
  name: 'Skipback15filled',
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

export type Skipback15filledProps = React.ComponentProps<typeof Skipback15filled>
