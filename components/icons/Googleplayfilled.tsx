import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/GooglePlayFilled.svg'

/**
 * Googleplayfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Googleplayfilled />
 * <Googleplayfilled width="$6" height="$6" />
 * <Googleplayfilled color="$color.primary" />
 * ```
 */
export const Googleplayfilled = styled(Svg, {
  name: 'Googleplayfilled',
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

export type GoogleplayfilledProps = React.ComponentProps<typeof Googleplayfilled>
