import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CodeFilled.svg'

/**
 * Codefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Codefilled />
 * <Codefilled width="$6" height="$6" />
 * <Codefilled color="$color.primary" />
 * ```
 */
export const Codefilled = styled(Svg, {
  name: 'Codefilled',
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

export type CodefilledProps = React.ComponentProps<typeof Codefilled>
