import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HomeFilled.svg'

/**
 * Homefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Homefilled />
 * <Homefilled width="$6" height="$6" />
 * <Homefilled color="$color.primary" />
 * ```
 */
export const Homefilled = styled(Svg, {
  name: 'Homefilled',
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

export type HomefilledProps = React.ComponentProps<typeof Homefilled>
