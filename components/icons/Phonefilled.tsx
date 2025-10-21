import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/PhoneFilled.svg'

/**
 * Phonefilled Icon Component
 * 
 * @example
 * ```tsx
 * <Phonefilled />
 * <Phonefilled width="$6" height="$6" />
 * <Phonefilled color="$color.primary" />
 * ```
 */
export const Phonefilled = styled(Svg, {
  name: 'Phonefilled',
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

export type PhonefilledProps = React.ComponentProps<typeof Phonefilled>
