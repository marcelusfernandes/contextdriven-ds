import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/LocationOutlined.svg'

/**
 * Locationoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Locationoutlined />
 * <Locationoutlined width="$6" height="$6" />
 * <Locationoutlined color="$color.primary" />
 * ```
 */
export const Locationoutlined = styled(Svg, {
  name: 'Locationoutlined',
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

export type LocationoutlinedProps = React.ComponentProps<typeof Locationoutlined>
