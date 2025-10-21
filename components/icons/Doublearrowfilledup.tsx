import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowFilledUp.svg'

/**
 * Doublearrowfilledup Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowfilledup />
 * <Doublearrowfilledup width="$6" height="$6" />
 * <Doublearrowfilledup color="$color.primary" />
 * ```
 */
export const Doublearrowfilledup = styled(Svg, {
  name: 'Doublearrowfilledup',
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

export type DoublearrowfilledupProps = React.ComponentProps<typeof Doublearrowfilledup>
