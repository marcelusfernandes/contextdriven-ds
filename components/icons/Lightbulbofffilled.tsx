import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LightbulbOffFilled.svg'

/**
 * Lightbulbofffilled Icon Component
 * 
 * @example
 * ```tsx
 * <Lightbulbofffilled />
 * <Lightbulbofffilled width="$6" height="$6" />
 * <Lightbulbofffilled color="$color.primary" />
 * ```
 */
export const Lightbulbofffilled = styled(Svg, {
  name: 'Lightbulbofffilled',
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

export type LightbulbofffilledProps = React.ComponentProps<typeof Lightbulbofffilled>
