import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowFilledDown.svg'

/**
 * Doublearrowfilleddown Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowfilleddown />
 * <Doublearrowfilleddown width="$6" height="$6" />
 * <Doublearrowfilleddown color="$color.primary" />
 * ```
 */
export const Doublearrowfilleddown = styled(Svg, {
  name: 'Doublearrowfilleddown',
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

export type DoublearrowfilleddownProps = React.ComponentProps<typeof Doublearrowfilleddown>
