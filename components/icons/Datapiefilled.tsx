import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DataPieFilled.svg'

/**
 * Datapiefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Datapiefilled />
 * <Datapiefilled width="$6" height="$6" />
 * <Datapiefilled color="$color.primary" />
 * ```
 */
export const Datapiefilled = styled(Svg, {
  name: 'Datapiefilled',
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

export type DatapiefilledProps = React.ComponentProps<typeof Datapiefilled>
