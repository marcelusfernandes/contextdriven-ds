import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/OpenFinanceOutlined.svg'

/**
 * Openfinanceoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Openfinanceoutlined />
 * <Openfinanceoutlined width="$6" height="$6" />
 * <Openfinanceoutlined color="$color.primary" />
 * ```
 */
export const Openfinanceoutlined = styled(Svg, {
  name: 'Openfinanceoutlined',
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

export type OpenfinanceoutlinedProps = React.ComponentProps<typeof Openfinanceoutlined>
