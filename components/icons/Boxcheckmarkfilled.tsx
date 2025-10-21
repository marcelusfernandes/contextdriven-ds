import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxCheckmarkFilled.svg'

/**
 * Boxcheckmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxcheckmarkfilled />
 * <Boxcheckmarkfilled width="$6" height="$6" />
 * <Boxcheckmarkfilled color="$color.primary" />
 * ```
 */
export const Boxcheckmarkfilled = styled(Svg, {
  name: 'Boxcheckmarkfilled',
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

export type BoxcheckmarkfilledProps = React.ComponentProps<typeof Boxcheckmarkfilled>
