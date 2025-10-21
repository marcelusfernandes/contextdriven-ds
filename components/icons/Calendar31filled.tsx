import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Calendar31Filled.svg'

/**
 * Calendar31filled Icon Component
 * 
 * @example
 * ```tsx
 * <Calendar31filled />
 * <Calendar31filled width="$6" height="$6" />
 * <Calendar31filled color="$color.primary" />
 * ```
 */
export const Calendar31filled = styled(Svg, {
  name: 'Calendar31filled',
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

export type Calendar31filledProps = React.ComponentProps<typeof Calendar31filled>
