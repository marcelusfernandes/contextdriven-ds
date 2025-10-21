import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/AddCircleFilled.svg'

/**
 * Addcirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Addcirclefilled />
 * <Addcirclefilled width="$6" height="$6" />
 * <Addcirclefilled color="$color.primary" />
 * ```
 */
export const Addcirclefilled = styled(Svg, {
  name: 'Addcirclefilled',
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

export type AddcirclefilledProps = React.ComponentProps<typeof Addcirclefilled>
