import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/WarningCircleFilled.svg'

/**
 * Warningcirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Warningcirclefilled />
 * <Warningcirclefilled width="$6" height="$6" />
 * <Warningcirclefilled color="$color.primary" />
 * ```
 */
export const Warningcirclefilled = styled(Svg, {
  name: 'Warningcirclefilled',
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

export type WarningcirclefilledProps = React.ComponentProps<typeof Warningcirclefilled>
