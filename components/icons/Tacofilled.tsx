import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TacoFilled.svg'

/**
 * Tacofilled Icon Component
 * 
 * @example
 * ```tsx
 * <Tacofilled />
 * <Tacofilled width="$6" height="$6" />
 * <Tacofilled color="$color.primary" />
 * ```
 */
export const Tacofilled = styled(Svg, {
  name: 'Tacofilled',
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

export type TacofilledProps = React.ComponentProps<typeof Tacofilled>
