import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ContactCardFilled.svg'

/**
 * Contactcardfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Contactcardfilled />
 * <Contactcardfilled width="$6" height="$6" />
 * <Contactcardfilled color="$color.primary" />
 * ```
 */
export const Contactcardfilled = styled(Svg, {
  name: 'Contactcardfilled',
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

export type ContactcardfilledProps = React.ComponentProps<typeof Contactcardfilled>
