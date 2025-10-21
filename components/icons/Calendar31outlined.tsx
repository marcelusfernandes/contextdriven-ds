import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/Calendar31Outlined.svg'

/**
 * Calendar31outlined Icon Component
 * 
 * @example
 * ```tsx
 * <Calendar31outlined />
 * <Calendar31outlined width="$6" height="$6" />
 * <Calendar31outlined color="$color.primary" />
 * ```
 */
export const Calendar31outlined = styled(Svg, {
  name: 'Calendar31outlined',
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

export type Calendar31outlinedProps = React.ComponentProps<typeof Calendar31outlined>
