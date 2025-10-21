import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/EyeFilled.svg'

/**
 * Eyefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Eyefilled />
 * <Eyefilled width="$6" height="$6" />
 * <Eyefilled color="$color.primary" />
 * ```
 */
export const Eyefilled = styled(Svg, {
  name: 'Eyefilled',
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

export type EyefilledProps = React.ComponentProps<typeof Eyefilled>
