import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataLineFilled.svg'

/**
 * Datalinefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Datalinefilled />
 * <Datalinefilled width="$6" height="$6" />
 * <Datalinefilled color="$color.primary" />
 * ```
 */
export const Datalinefilled = styled(Svg, {
  name: 'Datalinefilled',
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

export type DatalinefilledProps = React.ComponentProps<typeof Datalinefilled>
