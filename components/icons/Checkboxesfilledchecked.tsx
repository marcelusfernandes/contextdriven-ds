import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckboxesFilledChecked.svg'

/**
 * Checkboxesfilledchecked Icon Component
 * 
 * @example
 * ```tsx
 * <Checkboxesfilledchecked />
 * <Checkboxesfilledchecked width="$6" height="$6" />
 * <Checkboxesfilledchecked color="$color.primary" />
 * ```
 */
export const Checkboxesfilledchecked = styled(Svg, {
  name: 'Checkboxesfilledchecked',
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

export type CheckboxesfilledcheckedProps = React.ComponentProps<typeof Checkboxesfilledchecked>
