import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxErrorFilled.svg'

/**
 * Boxerrorfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxerrorfilled />
 * <Boxerrorfilled width="$6" height="$6" />
 * <Boxerrorfilled color="$color.primary" />
 * ```
 */
export const Boxerrorfilled = styled(Svg, {
  name: 'Boxerrorfilled',
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

export type BoxerrorfilledProps = React.ComponentProps<typeof Boxerrorfilled>
