import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/DocumentClockOutlined.svg'

/**
 * Documentclockoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Documentclockoutlined />
 * <Documentclockoutlined width="$6" height="$6" />
 * <Documentclockoutlined color="$color.primary" />
 * ```
 */
export const Documentclockoutlined = styled(Svg, {
  name: 'Documentclockoutlined',
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

export type DocumentclockoutlinedProps = React.ComponentProps<typeof Documentclockoutlined>
