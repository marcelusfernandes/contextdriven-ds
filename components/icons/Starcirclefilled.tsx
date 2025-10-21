import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/StarCircleFilled.svg'

/**
 * Starcirclefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Starcirclefilled />
 * <Starcirclefilled width="$6" height="$6" />
 * <Starcirclefilled color="$color.primary" />
 * ```
 */
export const Starcirclefilled = styled(Svg, {
  name: 'Starcirclefilled',
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

export type StarcirclefilledProps = React.ComponentProps<typeof Starcirclefilled>
