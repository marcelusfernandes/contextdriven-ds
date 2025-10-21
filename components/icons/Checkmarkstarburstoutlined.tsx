import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckmarkStarburstOutlined.svg'

/**
 * Checkmarkstarburstoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Checkmarkstarburstoutlined />
 * <Checkmarkstarburstoutlined width="$6" height="$6" />
 * <Checkmarkstarburstoutlined color="$color.primary" />
 * ```
 */
export const Checkmarkstarburstoutlined = styled(Svg, {
  name: 'Checkmarkstarburstoutlined',
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

export type CheckmarkstarburstoutlinedProps = React.ComponentProps<typeof Checkmarkstarburstoutlined>
