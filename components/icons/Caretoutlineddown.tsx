import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CaretOutlinedDown.svg'

/**
 * Caretoutlineddown Icon Component
 * 
 * @example
 * ```tsx
 * <Caretoutlineddown />
 * <Caretoutlineddown width="$6" height="$6" />
 * <Caretoutlineddown color="$color.primary" />
 * ```
 */
export const Caretoutlineddown = styled(Svg, {
  name: 'Caretoutlineddown',
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

export type CaretoutlineddownProps = React.ComponentProps<typeof Caretoutlineddown>
