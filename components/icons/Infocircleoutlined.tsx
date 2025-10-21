import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/InfoCircleOutlined.svg'

/**
 * Infocircleoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Infocircleoutlined />
 * <Infocircleoutlined width="$6" height="$6" />
 * <Infocircleoutlined color="$color.primary" />
 * ```
 */
export const Infocircleoutlined = styled(Svg, {
  name: 'Infocircleoutlined',
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

export type InfocircleoutlinedProps = React.ComponentProps<typeof Infocircleoutlined>
