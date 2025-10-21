import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BlockFilled.svg'

/**
 * Blockfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Blockfilled />
 * <Blockfilled width="$6" height="$6" />
 * <Blockfilled color="$color.primary" />
 * ```
 */
export const Blockfilled = styled(Svg, {
  name: 'Blockfilled',
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

export type BlockfilledProps = React.ComponentProps<typeof Blockfilled>
