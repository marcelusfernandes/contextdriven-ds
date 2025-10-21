import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ReturnableFilled.svg'

/**
 * Returnablefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Returnablefilled />
 * <Returnablefilled width="$6" height="$6" />
 * <Returnablefilled color="$color.primary" />
 * ```
 */
export const Returnablefilled = styled(Svg, {
  name: 'Returnablefilled',
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

export type ReturnablefilledProps = React.ComponentProps<typeof Returnablefilled>
