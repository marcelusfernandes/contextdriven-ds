import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsFilledDown.svg'

/**
 * Arrowsfilleddown Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsfilleddown />
 * <Arrowsfilleddown width="$6" height="$6" />
 * <Arrowsfilleddown color="$color.primary" />
 * ```
 */
export const Arrowsfilleddown = styled(Svg, {
  name: 'Arrowsfilleddown',
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

export type ArrowsfilleddownProps = React.ComponentProps<typeof Arrowsfilleddown>
