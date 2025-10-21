import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/ShieldCheckmarkOutlined.svg'

/**
 * Shieldcheckmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Shieldcheckmarkoutlined />
 * <Shieldcheckmarkoutlined width="$6" height="$6" />
 * <Shieldcheckmarkoutlined color="$color.primary" />
 * ```
 */
export const Shieldcheckmarkoutlined = styled(Svg, {
  name: 'Shieldcheckmarkoutlined',
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

export type ShieldcheckmarkoutlinedProps = React.ComponentProps<typeof Shieldcheckmarkoutlined>
