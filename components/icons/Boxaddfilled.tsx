import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/BoxAddFilled.svg'

/**
 * Boxaddfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Boxaddfilled />
 * <Boxaddfilled width="$6" height="$6" />
 * <Boxaddfilled color="$color.primary" />
 * ```
 */
export const Boxaddfilled = styled(Svg, {
  name: 'Boxaddfilled',
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

export type BoxaddfilledProps = React.ComponentProps<typeof Boxaddfilled>
