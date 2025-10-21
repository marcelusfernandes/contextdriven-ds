import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/HouseFilled.svg'

/**
 * Housefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Housefilled />
 * <Housefilled width="$6" height="$6" />
 * <Housefilled color="$color.primary" />
 * ```
 */
export const Housefilled = styled(Svg, {
  name: 'Housefilled',
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

export type HousefilledProps = React.ComponentProps<typeof Housefilled>
