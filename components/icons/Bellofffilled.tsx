import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BellOffFilled.svg'

/**
 * Bellofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Bellofffilled />
 * <Bellofffilled width="$6" height="$6" />
 * <Bellofffilled color="$color.primary" />
 * ```
 */
export const Bellofffilled = styled(Svg, {
  name: 'Bellofffilled',
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

export type BellofffilledProps = React.ComponentProps<typeof Bellofffilled>
