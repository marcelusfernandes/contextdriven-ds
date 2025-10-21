import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckboxesFilledUnchecked.svg'

/**
 * Checkboxesfilledunchecked Icon Component
 * 
 * @example
 * ```tsx
 * <Checkboxesfilledunchecked />
 * <Checkboxesfilledunchecked width="$6" height="$6" />
 * <Checkboxesfilledunchecked color="$color.primary" />
 * ```
 */
export const Checkboxesfilledunchecked = styled(Svg, {
  name: 'Checkboxesfilledunchecked',
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

export type CheckboxesfilleduncheckedProps = React.ComponentProps<typeof Checkboxesfilledunchecked>
