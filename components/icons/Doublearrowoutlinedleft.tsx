import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowOutlinedLeft.svg'

/**
 * Doublearrowoutlinedleft Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowoutlinedleft />
 * <Doublearrowoutlinedleft width="$6" height="$6" />
 * <Doublearrowoutlinedleft color="$color.primary" />
 * ```
 */
export const Doublearrowoutlinedleft = styled(Svg, {
  name: 'Doublearrowoutlinedleft',
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

export type DoublearrowoutlinedleftProps = React.ComponentProps<typeof Doublearrowoutlinedleft>
