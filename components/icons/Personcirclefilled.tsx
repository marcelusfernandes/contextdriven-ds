import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PersonCircleFilled.svg'

/**
 * Personcirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Personcirclefilled />
 * <Personcirclefilled width="$6" height="$6" />
 * <Personcirclefilled color="$color.primary" />
 * ```
 */
export const Personcirclefilled = styled(Svg, {
  name: 'Personcirclefilled',
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

export type PersoncirclefilledProps = React.ComponentProps<typeof Personcirclefilled>
