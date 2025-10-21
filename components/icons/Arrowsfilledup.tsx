import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ArrowsFilledUp.svg'

/**
 * Arrowsfilledup Icon Component
 * 
 * @example
 * ```tsx
 * <Arrowsfilledup />
 * <Arrowsfilledup width="$6" height="$6" />
 * <Arrowsfilledup color="$color.primary" />
 * ```
 */
export const Arrowsfilledup = styled(Svg, {
  name: 'Arrowsfilledup',
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

export type ArrowsfilledupProps = React.ComponentProps<typeof Arrowsfilledup>
