import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentFilled.svg'

/**
 * Documentfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Documentfilled />
 * <Documentfilled width="$6" height="$6" />
 * <Documentfilled color="$color.primary" />
 * ```
 */
export const Documentfilled = styled(Svg, {
  name: 'Documentfilled',
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

export type DocumentfilledProps = React.ComponentProps<typeof Documentfilled>
