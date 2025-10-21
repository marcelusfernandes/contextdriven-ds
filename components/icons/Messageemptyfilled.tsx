import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/MessageEmptyFilled.svg'

/**
 * Messageemptyfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Messageemptyfilled />
 * <Messageemptyfilled width="$6" height="$6" />
 * <Messageemptyfilled color="$color.primary" />
 * ```
 */
export const Messageemptyfilled = styled(Svg, {
  name: 'Messageemptyfilled',
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

export type MessageemptyfilledProps = React.ComponentProps<typeof Messageemptyfilled>
