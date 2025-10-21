import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/GlobeFilled.svg'

/**
 * Globefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Globefilled />
 * <Globefilled width="$6" height="$6" />
 * <Globefilled color="$color.primary" />
 * ```
 */
export const Globefilled = styled(Svg, {
  name: 'Globefilled',
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

export type GlobefilledProps = React.ComponentProps<typeof Globefilled>
