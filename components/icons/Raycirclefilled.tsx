import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/RayCircleFilled.svg'

/**
 * Raycirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Raycirclefilled />
 * <Raycirclefilled width="$6" height="$6" />
 * <Raycirclefilled color="$color.primary" />
 * ```
 */
export const Raycirclefilled = styled(Svg, {
  name: 'Raycirclefilled',
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

export type RaycirclefilledProps = React.ComponentProps<typeof Raycirclefilled>
