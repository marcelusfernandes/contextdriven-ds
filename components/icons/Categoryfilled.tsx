import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CategoryFilled.svg'

/**
 * Categoryfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Categoryfilled />
 * <Categoryfilled width="$6" height="$6" />
 * <Categoryfilled color="$color.primary" />
 * ```
 */
export const Categoryfilled = styled(Svg, {
  name: 'Categoryfilled',
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

export type CategoryfilledProps = React.ComponentProps<typeof Categoryfilled>
