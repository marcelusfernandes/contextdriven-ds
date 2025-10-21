import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AppleFilled.svg'

/**
 * Applefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Applefilled />
 * <Applefilled width="$6" height="$6" />
 * <Applefilled color="$color.primary" />
 * ```
 */
export const Applefilled = styled(Svg, {
  name: 'Applefilled',
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

export type ApplefilledProps = React.ComponentProps<typeof Applefilled>
