import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ChevronFilledDown.svg'

/**
 * Chevronfilleddown Icon Component
 * 
 * @example
 * ```tsx
 * <Chevronfilleddown />
 * <Chevronfilleddown width="$6" height="$6" />
 * <Chevronfilleddown color="$color.primary" />
 * ```
 */
export const Chevronfilleddown = styled(Svg, {
  name: 'Chevronfilleddown',
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

export type ChevronfilleddownProps = React.ComponentProps<typeof Chevronfilleddown>
