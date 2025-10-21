import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/TrophyFilled.svg'

/**
 * Trophyfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Trophyfilled />
 * <Trophyfilled width="$6" height="$6" />
 * <Trophyfilled color="$color.primary" />
 * ```
 */
export const Trophyfilled = styled(Svg, {
  name: 'Trophyfilled',
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

export type TrophyfilledProps = React.ComponentProps<typeof Trophyfilled>
