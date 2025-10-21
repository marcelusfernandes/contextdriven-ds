import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipForward 15Outlined.svg'

/**
 * Skipforward15outlined Icon Component
 * 
 * @example
 * ```tsx
 * <Skipforward15outlined />
 * <Skipforward15outlined width="$6" height="$6" />
 * <Skipforward15outlined color="$color.primary" />
 * ```
 */
export const Skipforward15outlined = styled(Svg, {
  name: 'Skipforward15outlined',
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

export type Skipforward15outlinedProps = React.ComponentProps<typeof Skipforward15outlined>
