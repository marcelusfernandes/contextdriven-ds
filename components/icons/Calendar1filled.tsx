import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Calendar1Filled.svg'

/**
 * Calendar1filled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendar1filled />
 * <Calendar1filled width="$6" height="$6" />
 * <Calendar1filled color="$color.primary" />
 * ```
 */
export const Calendar1filled = styled(Svg, {
  name: 'Calendar1filled',
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

export type Calendar1filledProps = React.ComponentProps<typeof Calendar1filled>
