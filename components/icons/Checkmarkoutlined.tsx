import { styled } from 'tamagui'
import { default as Svg } from '../../assets/icons/CheckmarkOutlined.svg'

/**
 * Checkmarkoutlined Icon Component
 * 
 * @example
 * ```tsx
 * <Checkmarkoutlined />
 * <Checkmarkoutlined width="$6" height="$6" />
 * <Checkmarkoutlined color="$color.primary" />
 * ```
 */
export const Checkmarkoutlined = styled(Svg, {
  name: 'Checkmarkoutlined',
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

export type CheckmarkoutlinedProps = React.ComponentProps<typeof Checkmarkoutlined>
