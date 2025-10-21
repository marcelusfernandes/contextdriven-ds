import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DoubleArrowOutlinedDown.svg'

/**
 * Doublearrowoutlineddown Icon Component
 * 
 * @example
 * ```tsx
 * <Doublearrowoutlineddown />
 * <Doublearrowoutlineddown width="$6" height="$6" />
 * <Doublearrowoutlineddown color="$color.primary" />
 * ```
 */
export const Doublearrowoutlineddown = styled(Svg, {
  name: 'Doublearrowoutlineddown',
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

export type DoublearrowoutlineddownProps = React.ComponentProps<typeof Doublearrowoutlineddown>
