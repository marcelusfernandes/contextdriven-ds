import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsFilledLeft.svg'

/**
 * Arrowsfilledleft Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsfilledleft />
 * <Arrowsfilledleft width="$6" height="$6" />
 * <Arrowsfilledleft color="$color.primary" />
 * ```
 */
export const Arrowsfilledleft = styled(Svg, {
  name: 'Arrowsfilledleft',
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

export type ArrowsfilledleftProps = React.ComponentProps<typeof Arrowsfilledleft>
