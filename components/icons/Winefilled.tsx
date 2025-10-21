import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WineFilled.svg'

/**
 * Winefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Winefilled />
 * <Winefilled width="$6" height="$6" />
 * <Winefilled color="$color.primary" />
 * ```
 */
export const Winefilled = styled(Svg, {
  name: 'Winefilled',
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

export type WinefilledProps = React.ComponentProps<typeof Winefilled>
