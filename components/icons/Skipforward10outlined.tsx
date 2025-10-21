import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipForward 10Outlined.svg'

/**
 * Skipforward10outlined Icon Component
 * 
 * @example
 * ```tsx
 * <Skipforward10outlined />
 * <Skipforward10outlined width="$6" height="$6" />
 * <Skipforward10outlined color="$color.primary" />
 * ```
 */
export const Skipforward10outlined = styled(Svg, {
  name: 'Skipforward10outlined',
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

export type Skipforward10outlinedProps = React.ComponentProps<typeof Skipforward10outlined>
