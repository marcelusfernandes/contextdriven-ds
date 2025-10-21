import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/SpinnerOutlined.svg'

/**
 * Spinneroutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Spinneroutlined />
 * <Spinneroutlined width="$6" height="$6" />
 * <Spinneroutlined color="$color.primary" />
 * ```
 */
export const Spinneroutlined = styled(Svg, {
  name: 'Spinneroutlined',
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

export type SpinneroutlinedProps = React.ComponentProps<typeof Spinneroutlined>
