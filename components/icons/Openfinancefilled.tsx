import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/OpenFinanceFilled.svg'

/**
 * Openfinancefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Openfinancefilled />
 * <Openfinancefilled width="$6" height="$6" />
 * <Openfinancefilled color="$color.primary" />
 * ```
 */
export const Openfinancefilled = styled(Svg, {
  name: 'Openfinancefilled',
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

export type OpenfinancefilledProps = React.ComponentProps<typeof Openfinancefilled>
