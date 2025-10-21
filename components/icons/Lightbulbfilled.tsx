import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbFilled.svg'

/**
 * Lightbulbfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbfilled />
 * <Lightbulbfilled width="$6" height="$6" />
 * <Lightbulbfilled color="$color.primary" />
 * ```
 */
export const Lightbulbfilled = styled(Svg, {
  name: 'Lightbulbfilled',
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

export type LightbulbfilledProps = React.ComponentProps<typeof Lightbulbfilled>
