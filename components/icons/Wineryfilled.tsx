import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WineryFilled.svg'

/**
 * Wineryfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Wineryfilled />
 * <Wineryfilled width="$6" height="$6" />
 * <Wineryfilled color="$color.primary" />
 * ```
 */
export const Wineryfilled = styled(Svg, {
  name: 'Wineryfilled',
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

export type WineryfilledProps = React.ComponentProps<typeof Wineryfilled>
