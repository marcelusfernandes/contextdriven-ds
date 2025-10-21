import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentEmptyFilled.svg'

/**
 * Documentemptyfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Documentemptyfilled />
 * <Documentemptyfilled width="$6" height="$6" />
 * <Documentemptyfilled color="$color.primary" />
 * ```
 */
export const Documentemptyfilled = styled(Svg, {
  name: 'Documentemptyfilled',
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

export type DocumentemptyfilledProps = React.ComponentProps<typeof Documentemptyfilled>
