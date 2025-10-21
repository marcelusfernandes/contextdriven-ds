import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentStarFilled.svg'

/**
 * Documentstarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Documentstarfilled />
 * <Documentstarfilled width="$6" height="$6" />
 * <Documentstarfilled color="$color.primary" />
 * ```
 */
export const Documentstarfilled = styled(Svg, {
  name: 'Documentstarfilled',
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

export type DocumentstarfilledProps = React.ComponentProps<typeof Documentstarfilled>
