import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentCheckmarkFilled.svg'

/**
 * Documentcheckmarkfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Documentcheckmarkfilled />
 * <Documentcheckmarkfilled width="$6" height="$6" />
 * <Documentcheckmarkfilled color="$color.primary" />
 * ```
 */
export const Documentcheckmarkfilled = styled(Svg, {
  name: 'Documentcheckmarkfilled',
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

export type DocumentcheckmarkfilledProps = React.ComponentProps<typeof Documentcheckmarkfilled>
