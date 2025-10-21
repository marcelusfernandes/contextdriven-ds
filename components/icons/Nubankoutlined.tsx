import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/NubankOutlined.svg'

/**
 * Nubankoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Nubankoutlined />
 * <Nubankoutlined width="$6" height="$6" />
 * <Nubankoutlined color="$color.primary" />
 * ```
 */
export const Nubankoutlined = styled(Svg, {
  name: 'Nubankoutlined',
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

export type NubankoutlinedProps = React.ComponentProps<typeof Nubankoutlined>
