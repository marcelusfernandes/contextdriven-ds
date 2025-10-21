import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowOutlinedUp.svg'

/**
 * Doublearrowoutlinedup Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowoutlinedup />
 * <Doublearrowoutlinedup width="$6" height="$6" />
 * <Doublearrowoutlinedup color="$color.primary" />
 * ```
 */
export const Doublearrowoutlinedup = styled(Svg, {
  name: 'Doublearrowoutlinedup',
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

export type DoublearrowoutlinedupProps = React.ComponentProps<typeof Doublearrowoutlinedup>
