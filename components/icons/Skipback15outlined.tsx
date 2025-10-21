import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SkipBack 15Outlined.svg'

/**
 * Skipback15outlined Icon Component
 * 
 * @example
 * ```tsx
 * <Skipback15outlined />
 * <Skipback15outlined width="$6" height="$6" />
 * <Skipback15outlined color="$color.primary" />
 * ```
 */
export const Skipback15outlined = styled(Svg, {
  name: 'Skipback15outlined',
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

export type Skipback15outlinedProps = React.ComponentProps<typeof Skipback15outlined>
