import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckboxesOutlinedUnchecked.svg'

/**
 * Checkboxesoutlinedunchecked Icon Component
 * 
 * @example
 * ```tsx
 * <Checkboxesoutlinedunchecked />
 * <Checkboxesoutlinedunchecked width="$6" height="$6" />
 * <Checkboxesoutlinedunchecked color="$color.primary" />
 * ```
 */
export const Checkboxesoutlinedunchecked = styled(Svg, {
  name: 'Checkboxesoutlinedunchecked',
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

export type CheckboxesoutlineduncheckedProps = React.ComponentProps<typeof Checkboxesoutlinedunchecked>
