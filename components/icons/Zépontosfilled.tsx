import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ZéPontosFilled.svg'

/**
 * Zépontosfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Zépontosfilled />
 * <Zépontosfilled width="$6" height="$6" />
 * <Zépontosfilled color="$color.primary" />
 * ```
 */
export const Zépontosfilled = styled(Svg, {
  name: 'Zépontosfilled',
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

export type ZépontosfilledProps = React.ComponentProps<typeof Zépontosfilled>
