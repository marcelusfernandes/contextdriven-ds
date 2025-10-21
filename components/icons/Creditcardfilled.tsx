import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CreditCardFilled.svg'

/**
 * Creditcardfilled Icon Component
 * 
 * @example
 * ```tsx
 * <Creditcardfilled />
 * <Creditcardfilled width="$6" height="$6" />
 * <Creditcardfilled color="$color.primary" />
 * ```
 */
export const Creditcardfilled = styled(Svg, {
  name: 'Creditcardfilled',
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

export type CreditcardfilledProps = React.ComponentProps<typeof Creditcardfilled>
