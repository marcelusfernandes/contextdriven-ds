import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SaveFilled.svg'

/**
 * Savefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Savefilled />
 * <Savefilled width="$6" height="$6" />
 * <Savefilled color="$color.primary" />
 * ```
 */
export const Savefilled = styled(Svg, {
  name: 'Savefilled',
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

export type SavefilledProps = React.ComponentProps<typeof Savefilled>
