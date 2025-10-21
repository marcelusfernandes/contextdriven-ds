import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PhoneStarFilled.svg'

/**
 * Phonestarfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Phonestarfilled />
 * <Phonestarfilled width="$6" height="$6" />
 * <Phonestarfilled color="$color.primary" />
 * ```
 */
export const Phonestarfilled = styled(Svg, {
  name: 'Phonestarfilled',
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

export type PhonestarfilledProps = React.ComponentProps<typeof Phonestarfilled>
