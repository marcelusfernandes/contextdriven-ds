import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbCircleFilled.svg'

/**
 * Lightbulbcirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbcirclefilled />
 * <Lightbulbcirclefilled width="$6" height="$6" />
 * <Lightbulbcirclefilled color="$color.primary" />
 * ```
 */
export const Lightbulbcirclefilled = styled(Svg, {
  name: 'Lightbulbcirclefilled',
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

export type LightbulbcirclefilledProps = React.ComponentProps<typeof Lightbulbcirclefilled>
