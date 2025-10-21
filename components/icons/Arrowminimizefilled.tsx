import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowMinimizeFilled.svg'

/**
 * Arrowminimizefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowminimizefilled />
 * <Arrowminimizefilled width="$6" height="$6" />
 * <Arrowminimizefilled color="$color.primary" />
 * ```
 */
export const Arrowminimizefilled = styled(Svg, {
  name: 'Arrowminimizefilled',
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

export type ArrowminimizefilledProps = React.ComponentProps<typeof Arrowminimizefilled>
