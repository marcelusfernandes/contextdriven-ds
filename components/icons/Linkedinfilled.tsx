import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LinkedInFilled.svg'

/**
 * Linkedinfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Linkedinfilled />
 * <Linkedinfilled width="$6" height="$6" />
 * <Linkedinfilled color="$color.primary" />
 * ```
 */
export const Linkedinfilled = styled(Svg, {
  name: 'Linkedinfilled',
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

export type LinkedinfilledProps = React.ComponentProps<typeof Linkedinfilled>
