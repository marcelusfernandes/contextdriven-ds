import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbFilamentFilled.svg'

/**
 * Lightbulbfilamentfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbfilamentfilled />
 * <Lightbulbfilamentfilled width="$6" height="$6" />
 * <Lightbulbfilamentfilled color="$color.primary" />
 * ```
 */
export const Lightbulbfilamentfilled = styled(Svg, {
  name: 'Lightbulbfilamentfilled',
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

export type LightbulbfilamentfilledProps = React.ComponentProps<typeof Lightbulbfilamentfilled>
