import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipBack 10Outlined.svg'

/**
 * Skipback10outlined Icon Component
 * 
 * @example
 * ```tsx
 * <Skipback10outlined />
 * <Skipback10outlined width="$6" height="$6" />
 * <Skipback10outlined color="$color.primary" />
 * ```
 */
export const Skipback10outlined = styled(Svg, {
  name: 'Skipback10outlined',
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

export type Skipback10outlinedProps = React.ComponentProps<typeof Skipback10outlined>
