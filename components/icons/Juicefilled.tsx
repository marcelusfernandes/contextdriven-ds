import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/JuiceFilled.svg'

/**
 * Juicefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Juicefilled />
 * <Juicefilled width="$6" height="$6" />
 * <Juicefilled color="$color.primary" />
 * ```
 */
export const Juicefilled = styled(Svg, {
  name: 'Juicefilled',
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

export type JuicefilledProps = React.ComponentProps<typeof Juicefilled>
