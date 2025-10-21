import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxWarningFilled.svg'

/**
 * Boxwarningfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxwarningfilled />
 * <Boxwarningfilled width="$6" height="$6" />
 * <Boxwarningfilled color="$color.primary" />
 * ```
 */
export const Boxwarningfilled = styled(Svg, {
  name: 'Boxwarningfilled',
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

export type BoxwarningfilledProps = React.ComponentProps<typeof Boxwarningfilled>
